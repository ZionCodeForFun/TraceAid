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
  width: 90%;
  max-width: 650px;
  max-height: 85vh;
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
    font-size: 1.25rem;
    font-weight: 600;
    color: #222;
  }
`;

const CloseIcon = styled(IoClose)`
  font-size: 1.6rem;
  color: #333;
  cursor: pointer;

  &:hover {
    color: #000;
  }
`;

const EmptyText = styled.p`
  text-align: center;
  color: #555;
  margin-top: 20px;
`;

const EvidenceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 14px;
`;

const EvidenceItem = styled.div`
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  background: #fafafa;
  border: 1px solid #eee;
  padding-bottom: 10px;

  img {
    width: 100%;
    height: 160px;
    object-fit: cover;
  }
`;

const EvidenceInfo = styled.div`
  padding: 8px;
  font-size: 0.78rem;
  color: #444;
  display: flex;
  flex-direction: column;
  gap: 2px;

  strong {
    font-size: 0.82rem;
    color: #222;
  }
`;

const EvidenceModal = ({ open, onClose, evidence, loading}) => {
  if (!open) return null;

  return (
    <Overlay>
      <ModalContainer>
        <Header>
          <h3>Campaign Evidence</h3>
          <CloseIcon onClick={onClose} />
        </Header>

        {loading ? (
          <EvidenceGrid>
            {[1, 2, 3, 4].map((i) => (
              <EvidenceItem key={i}>
                <Skeleton height={160} />

                <EvidenceInfo>
                  <Skeleton width={`80%`} height={12} />
                  <Skeleton width={`60%`} height={10} />
                  <Skeleton width={`50%`} height={10} />

                  <Skeleton
                    width={`90%`}
                    height={12}
                    style={{ marginTop: "6px" }}
                  />
                </EvidenceInfo>
              </EvidenceItem>
            ))}
          </EvidenceGrid>
        ) : !evidence || evidence.length === 0 ? (
          <EmptyText>No evidence uploaded yet.</EmptyText>
        ) : (
          <EvidenceGrid>
            {evidence.map((ev, index) => (
              <EvidenceItem key={index}>
                <img src={ev.url} alt="evidence" />

                <EvidenceInfo>
                  <strong>{ev.milestoneTitle}</strong>
                  <span>Status: {ev.status}</span>
                  <span>{new Date(ev.uploadedAt).toLocaleString()}</span>

                  {ev.milestoneDescription && (
                    <p
                      style={{
                        marginTop: "6px",
                        fontSize: "0.75rem",
                        color: "#666",
                      }}
                    >
                      {ev.milestoneDescription}
                    </p>
                  )}
                </EvidenceInfo>
              </EvidenceItem>
            ))}
          </EvidenceGrid>
        )}
      </ModalContainer>
    </Overlay>
  );
};

export default EvidenceModal;