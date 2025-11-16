import React from "react";
import styled from "styled-components";
import { IoClose } from "react-icons/io5";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999;
`;

const ModalContainer = styled.div`
  width: 95%;
  max-width: 750px;
  max-height: 90vh;
  background: #ffffff;
  border-radius: 12px;
  padding: 24px;
  overflow-y: auto;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.18);
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;

  h3 {
    font-size: 1.3rem;
    font-weight: 600;
    color: #222;
  }
`;

const CloseIcon = styled(IoClose)`
  font-size: 1.7rem;
  color: #333;
  cursor: pointer;

  &:hover {
    color: #000;
  }
`;

const MilestoneSection = styled.div`
  margin-bottom: 28px;
  border-bottom: 1px solid #eee;
  padding-bottom: 18px;
`;

const MilestoneTitle = styled.h4`
  font-size: 1.15rem;
  font-weight: 600;
  margin-bottom: 6px;
  color: #333;
`;

const MilestoneDescription = styled.p`
  font-size: 0.87rem;
  color: #555;
  margin-bottom: 12px;
`;

const InfoGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 12px;

  span {
    font-size: 0.82rem;
    color: #444;
  }
`;

const StatusTag = styled.span`
  display: inline-block;
  background: #f1f1f1;
  padding: 4px 10px;
  border-radius: 8px;
  font-size: 0.8rem;
  color: #444;
  margin-bottom: 14px;
`;

const EvidenceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 14px;
`;

const EvidenceItem = styled.div`
  background: #fafafa;
  border: 1px solid #eee;
  border-radius: 10px;
  overflow: hidden;
  padding-bottom: 8px;

  img {
    width: 100%;
    height: 140px;
    object-fit: cover;
  }

  p {
    margin: 6px;
    font-size: 0.7rem;
    color: #666;
  }
`;

const EmptyText = styled.p`
  color: #777;
  margin: 10px 0;
  font-size: 0.85rem;
  font-style: italic;
`;

const EvidenceModal = ({ open, onClose, evidence, loading }) => {
  if (!open) return null;

  const formatAmount = (num) =>
    "₦" + Number(num || 0).toLocaleString();

  return (
    <Overlay>
      <ModalContainer>
        <Header>
          <h3>Campaign Evidence</h3>
          <CloseIcon onClick={onClose} />
        </Header>

        {loading ? (
          <>
            <Skeleton height={200} />
            <Skeleton height={200} />
          </>
        ) : (
          <>
            {evidence.map((milestone, index) => (
              <MilestoneSection key={index}>
                
                <MilestoneTitle>{milestone.milestoneTitle}</MilestoneTitle>

                <MilestoneDescription>
                  {milestone.milestoneDescription}
                </MilestoneDescription>

                <InfoGroup>
                  <span>
                    <strong>Target Amount:</strong> {formatAmount(milestone.targetAmount)}
                  </span>
                  <span>
                    <strong>Released Amount:</strong> {formatAmount(milestone.releasedAmount)}
                  </span>
                  <span>
                    <strong>Milestone Status:</strong> {milestone.milestoneStatus}
                  </span>
                </InfoGroup>

                <StatusTag>
                  Evidence Status: {milestone.evidenceStatus || "No evidence"}
                </StatusTag>

                {milestone.uploads.length === 0 ? (
                  <EmptyText>No evidence uploaded for this milestone.</EmptyText>
                ) : (
                  <EvidenceGrid>
                    {milestone.uploads.map((img, idx) => (
                      <EvidenceItem key={idx}>
                        <img src={img.url} alt="evidence" />
                        <p>{new Date(img.uploadedAt).toLocaleString()}</p>
                      </EvidenceItem>
                    ))}
                  </EvidenceGrid>
                )}

              </MilestoneSection>
            ))}
          </>
        )}
      </ModalContainer>
    </Overlay>
  );
};

export default EvidenceModal;
