import React from "react";
import styled from "styled-components";
import { IoClose } from "react-icons/io5";
import { PiCameraFill } from "react-icons/pi";

const EvidenceVerificationModal = ({ onClose, evidence, onAction }) => {
  return (
    <Overlay>
      <ModalContainer>
        <Header>
          <h2>Funds Disbursement Request</h2>
          <IoClose className="close-icon" onClick={onClose} />
          <p>Review evidence and choose an action for this disbursement</p>
        </Header>

        <Content>
          <Section>
            <Label>Campaign Name</Label>
            <Value>{evidence?.campaign?.campaignTitle || "—"}</Value>

            <Label>Milestone</Label>
            <Value>{evidence?.milestone?.milestoneTitle || "—"}</Value>

            <Label>Fundraiser</Label>
            <Value>{evidence?.fundraiser?._id || "—"}</Value>

            <Label>Description</Label>
            <Value>{evidence?.description || "—"}</Value>

            <Label>Uploads</Label>
            <Value>{evidence.uploads?.length || 0}</Value>
          </Section>

          <Divider />

          <PictureEvidence>
            <div className="header">
              <h3>Picture Evidence</h3>
              <div className="badge">
                <PiCameraFill /> {evidence.uploads?.length || 0}/5 Uploaded
              </div>
            </div>

            <div className="grid">
              {evidence.uploads?.length > 0 ? (
                evidence.uploads.map((file) => (
                  <div className="card" key={file._id}>
                    <div className="image-box">
                      <img src={file.imageUrl} alt="evidence" />
                    </div>
                    <div className="image_disc">
                      <span className="img-label">Image</span>
                      <p>Uploaded Evidence</p>
                    </div>
                  </div>
                ))
              ) : (
                <p>No images uploaded.</p>
              )}
            </div>
          </PictureEvidence>

          <Divider />

          <RejectionInfo>
            <h4>Status</h4>
            <div className="reason-box">
              <p>{evidence?.status?.toUpperCase() || "PENDING"}</p>
            </div>
          </RejectionInfo>
        </Content>

        <Footer>
          <ActionButtons onClose={onClose} onAction={onAction} />
        </Footer>
      </ModalContainer>
    </Overlay>
  );
};

export default EvidenceVerificationModal;

function ActionButtons({ onClose, onAction }) {
  const [isRejecting, setIsRejecting] = React.useState(false);
  const [note, setNote] = React.useState("");

  const submitReject = () => {
    if (!note.trim()) return;
    onAction("reject", note.trim());
  };

  return (
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      {isRejecting ? (
        <>
          <input
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Enter rejection reason"
            style={{
              padding: 8,
              borderRadius: 6,
              border: "1px solid #ddd",
              minWidth: 320,
            }}
          />
          <button
            onClick={submitReject}
            style={{
              padding: "8px 12px",
              background: "#e74c3c",
              color: "#fff",
              border: "none",
              borderRadius: 6,
              cursor: "pointer",
            }}
          >
            Submit Reject
          </button>
          <button
            onClick={() => {
              setIsRejecting(false);
              setNote("");
            }}
            style={{
              padding: "8px 12px",
              background: "#bdc3c7",
              color: "#fff",
              border: "none",
              borderRadius: 6,
              cursor: "pointer",
            }}
          >
            Cancel
          </button>
        </>
      ) : (
        <>
          <button
            onClick={() => setIsRejecting(true)}
            style={{
              padding: "8px 12px",
              background: "#fff",
              color: "#e74c3c",
              border: "1px solid #e74c3c",
              borderRadius: 6,
              cursor: "pointer",
            }}
          >
            Reject
          </button>

          <button
            onClick={() => onAction("approve")}
            style={{
              padding: "8px 12px",
              background: "#2ecc71",
              color: "#fff",
              border: "none",
              borderRadius: 6,
              cursor: "pointer",
            }}
          >
            Approve
          </button>

          <button
            onClick={onClose}
            style={{
              padding: "8px 12px",
              background: "#fff",
              color: "#333",
              border: "1px solid #ccc",
              borderRadius: 6,
              cursor: "pointer",
            }}
          >
            Close
          </button>
        </>
      )}
    </div>
  );
}

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ModalContainer = styled.div`
  width: 500px;
  height: 600px;
  background: #fff;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;
const Header = styled.div`
  position: relative;
  padding: 20px 24px;
  border-bottom: 1px solid #e6e6e6;
  h2 {
    font-size: 18px;
    font-weight: 600;
    color: #111;
    margin-bottom: 4px;
  }
  p {
    font-size: 14px;
    color: #666;
  }
  .close-icon {
    position: absolute;
    top: 22px;
    right: 24px;
    font-size: 20px;
    color: #444;
    cursor: pointer;
  }
`;
const Content = styled.div`
  flex: 1;
  padding: 20px 24px;
  overflow-y: auto;
`;
const Section = styled.div`
  margin-bottom: 20px;
`;
const Label = styled.div`
  font-size: 13px;
  color: #888;
  margin-bottom: 2px;
`;
const Value = styled.div`
  font-size: 14px;
  color: #222;
  font-weight: 500;
  margin-bottom: 8px;
`;
const Divider = styled.hr`
  border: none;
  border-top: 1px solid #eee;
  margin: 16px 0;
`;
const PictureEvidence = styled.div`
  margin-top: 1rem;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
    h3 {
      font-size: 15px;
      font-weight: 600;
      color: #222;
    }
    .badge {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 12px;
      background: #111;
      color: #fff;
      padding: 6px 10px;
      border-radius: 20px;
    }
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
  .card {
    text-align: left;
    display: flex;
    flex-direction: column;
    .image-box {
      width: 100%;
      height: 120px;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
      margin-bottom: 8px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .image_disc {
      display: flex;
      align-items: center;
      .img-label {
        display: flex;
        background: #fff;
        box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
        justify-content: center;
        color: #1a1a1a;
        font-size: 11px;
        height: 20px;
        border-radius: 20px;
        margin-right: 4px;
        width: 60px;
      }
      p {
        font-size: 10px;
        color: #333;
        margin: 0;
      }
    }
  }
`;
const RejectionInfo = styled.div`
  margin-top: 1.5rem;
  h4 {
    font-size: 14px;
    font-weight: 600;
    color: #d93025;
    margin-bottom: 8px;
  }
  .reason-box {
    background: #fff6f6;
    border: 1px solid #f4c7c3;
    border-radius: 8px;
    padding: 14px 16px;
    p {
      font-size: 13px;
      color: #a33b2e;
      margin: 0;
      line-height: 1.5;
    }
  }
`;
const Footer = styled.div`
  padding: 16px 24px;
  border-top: 1px solid #eee;
  display: flex;
  justify-content: flex-end;
  background: #fff;
`;
