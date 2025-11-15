import React, { useState } from "react";
import styled from "styled-components";
import { IoClose } from "react-icons/io5";

const EvidenceVerificationModal = ({ evidence, onClose, onAction }) => {
  const [isRejecting, setIsRejecting] = useState(false);
  const [note, setNote] = useState("");

  const submitReject = () => {
    if (!note.trim()) return;
    onAction(evidence, "reject", note);
  };

  return (
    <Overlay>
      <ModalContainer>
        <Header>
          <h2>Milestone evidence review</h2>
          <IoClose className="close-icon" onClick={onClose} />
          <p>Review evidence and choose an action for this disbursement</p>
        </Header>

        <Content>
          <Section>
            <Label>Campaign Name</Label>
            <Value>{evidence?.campaign?.campaignTitle || "—"}</Value>

            <Label>Milestone</Label>
            <Value>{evidence?.milestone?.milestoneTitle || "—"}</Value>

            <Label>Description</Label>
            <Value>{evidence?.description || "—"}</Value>
          </Section>

          <Divider />

          <Section>
            <Label>Uploads</Label>
            <Grid>
              {evidence.uploads?.length > 0 ? (
                evidence.uploads.map((file) => (
                  <Card key={file._id}>
                    <ImageBox>
                      <img src={file.imageUrl} alt="evidence" />
                    </ImageBox>
                  </Card>
                ))
              ) : (
                <p>No uploads found</p>
              )}
            </Grid>
          </Section>
        </Content>

        <Footer>
          {isRejecting ? (
            <>
              <input
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Rejection note"
                style={{
                  padding: 8,
                  borderRadius: 6,
                  border: "1px solid #ddd",
                  minWidth: 250,
                }}
              />
              <RejectButton onClick={submitReject}>Submit Reject</RejectButton>
              <CancelButton
                onClick={() => {
                  setIsRejecting(false);
                  setNote("");
                }}
              >
                Cancel
              </CancelButton>
            </>
          ) : (
            <>
              <RejectButton onClick={() => setIsRejecting(true)}>
                Reject
              </RejectButton>
              <ApproveButton onClick={() => onAction(evidence, "approve")}>
                Approve
              </ApproveButton>
              <CloseButton onClick={onClose}>Close</CloseButton>
            </>
          )}
        </Footer>
      </ModalContainer>
    </Overlay>
  );
};

export default EvidenceVerificationModal;


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
  max-height: 600px;
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
    margin-bottom: 4px;
    color: #111;
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
  font-weight: 500;
  color: #222;
  margin-bottom: 8px;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #eee;
  margin: 16px 0;
`;

const Grid = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

const Card = styled.div`
  width: 100px;
  height: 100px;
`;

const ImageBox = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Footer = styled.div`
  padding: 16px 24px;
  display: flex;
  gap: 8px;
  justify-content: flex-end;
`;

const ApproveButton = styled.button`
  padding: 8px 12px;
  background: #2ecc71;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
`;

const RejectButton = styled.button`
  padding: 8px 12px;
  background: #e74c3c;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
`;

const CancelButton = styled.button`
  padding: 8px 12px;
  background: #bdc3c7;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
`;

const CloseButton = styled.button`
  padding: 8px 12px;
  background: #fff;
  color: #333;
  border: 1px solid #ccc;
  border-radius: 6px;
  cursor: pointer;
`;
