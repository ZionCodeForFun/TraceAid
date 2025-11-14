import React from "react";
import styled from "styled-components";
import { IoClose } from "react-icons/io5";
import { PiCameraFill } from "react-icons/pi";

const EvidenceVerificationModal = ({
  onClose,
  evidence = null,
  onAccept,
  onReject,
}) => {
  const pictures = [
    {
      id: 1,
      title: "Crayons and Erasers 5,000 saplings",
      image:
        "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=600&q=60",
    },
    {
      id: 2,
      title: "Pencils and Notepads 2,000 saplings",
      image:
        "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=600&q=60",
    },
    {
      id: 3,
      title: "Color Pens and Markers 3,500 saplings",
      image:
        "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=600&q=60",
    },
    {
      id: 4,
      title: "Books and Sheets 4,000 saplings",
      image:
        "https://images.unsplash.com/photo-1553729784-e91953dec042?auto=format&fit=crop&w=600&q=60",
    },
    {
      id: 5,
      title: "Books and Sheets 4,000 saplings",
      image:
        "https://images.unsplash.com/photo-1553729784-e91953dec042?auto=format&fit=crop&w=600&q=60",
    },
  ];

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
            <Value>
              {evidence?.campaign?.campaignTitle || "Clean Water Initiative"}
            </Value>

            <Label>Milestone</Label>
            <Value>
              {evidence?.milestone?.milestoneTitle ||
                "Phase 1: Well Construction"}
            </Value>

            <Label>Campaign ID</Label>
            <Value>{evidence?.campaign?.id || "CMP-001"}</Value>

            <Label>Fundraiser</Label>
            <Value>
              {evidence?.fundraiser
                ? `${evidence.fundraiser.firstName} ${evidence.fundraiser.lastName}`
                : "Hope Foundation"}
            </Value>

            <Label>Requested Amount</Label>
            <Value>{evidence?.requestedAmount || "₦20,000"}</Value>
          </Section>

          <Divider />

          <Section>
            <Label>Disbursement Description</Label>
            <Value>
              {evidence?.description ||
                "Request for disbursement of funds for completed milestone."}
            </Value>
          </Section>

          <Divider />

          <PictureEvidence>
            <div className="header">
              <h3>Picture Evidence</h3>
              <div className="badge">
                <PiCameraFill /> {evidence?.imageUrl ? 1 : 0}/5 Uploaded
              </div>
            </div>

            <div className="grid">
              {evidence?.imageUrl ? (
                <div className="card">
                  <div className="image-box">
                    <img
                      src={evidence.imageUrl}
                      alt={evidence.campaign?.campaignTitle}
                    />
                  </div>
                  <div className="image_disc">
                    <span className="img-label">Image</span>
                    <p>Submitted evidence image</p>
                  </div>
                </div>
              ) : (
                pictures.map((item) => (
                  <div className="card" key={item.id}>
                    <div className="image-box">
                      <img src={item.image} alt={item.title} />
                    </div>
                    <div className="image_disc">
                      <span className="img-label">Image</span>
                      <p>{item.title}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </PictureEvidence>

          <Divider />

          {evidence?.videoUrl && (
            <Section>
              <Label>Video Evidence</Label>
              <div>
                <video width="100%" height="240" controls>
                  <source src={evidence.videoUrl} />
                  Your browser does not support the video tag.
                </video>
              </div>
            </Section>
          )}

          <RejectionInfo>
            <h4>Status</h4>
            <div className="reason-box">
              <p>
                {evidence?.status ? evidence.status.toUpperCase() : "PENDING"}
              </p>
            </div>
          </RejectionInfo>
        </Content>

        <Footer>
          <ActionButtons
            onClose={onClose}
            onAccept={() => onAccept && onAccept(evidence)}
            onReject={(reason) => onReject && onReject(evidence, reason)}
          />
        </Footer>
      </ModalContainer>
    </Overlay>
  );
};

export default EvidenceVerificationModal;

// Small internal component for action controls (Approve / Reject with reason)
function ActionButtons({ onClose, onAccept, onReject }) {
  const [isRejecting, setIsRejecting] = React.useState(false);
  const [reason, setReason] = React.useState("");

  const submitReject = () => {
    if (!reason.trim()) return;
    onReject && onReject(reason.trim());
  };

  return (
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      {isRejecting ? (
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <input
            value={reason}
            onChange={(e) => setReason(e.target.value)}
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
              setReason("");
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
        </div>
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
            onClick={onAccept}
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

// ---------- Styled Components ----------

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
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
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

const BankBox = styled.div`
  background: #fafafa;
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 12px;

  div {
    margin-bottom: 6px;
    display: flex;
    justify-content: space-between;
    font-size: 14px;

    span {
      color: #666;
    }

    strong {
      color: #000;
    }
  }
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
      background: #fff;

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
    color: #d93025; /* red tone */
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

  .close-btn {
    padding: 10px 18px;
    border-radius: 8px;
    background: transparent;
    border: 1px solid #ccc;
    color: #333;
    font-weight: 500;
    cursor: pointer;

    &:hover {
      background: #f2f2f2;
    }
  }
`;
