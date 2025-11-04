import React, { useState } from "react";
import styled from "styled-components";
import { X, FileText, CheckCircle, XCircle } from "lucide-react";
import axios from "axios";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const KycPending = ({ kycData, onClose }) => {
  if (!kycData) return null;

  const { NgoName, status, Email, RegisteredDate, Documents, _id } = kycData;
  const { token } = useSelector((state) => state.adminAuth);
  const [loading, setLoading] = useState(false);

  const handleVerify = async (newStatus) => {
    try {
      setLoading(true);

      const res = await axios.patch(
        `${import.meta.env.VITE_BaseUrl_AdminKycV}/${_id}/verify`,
        { status: newStatus },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      toast.success(
        `KYC ${newStatus === "approved" ? "approved" : "rejected"} successfully`
      );
      onClose();
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to verify KYC");
      console.log(err.response?.data.data)
    } finally {
      setLoading(false);
    }
  };

  const documents = [
    { name: "Registration Certificate", format: "PDF", size: 1.9 },
    { name: "Tax Exemption Letter", format: "PDF", size: 1.4 },
    { name: "Articles of Association", format: "PDF", size: 2.1 },
    { name: "Board Members List", format: "PDF", size: 0.8 },
  ];

  return (
    <ModalBackdrop onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <HeaderContent>
            <HeaderTitle>KYC Review: {NgoName}</HeaderTitle>
            <HeaderSubtitle>
              Review NGO information and verification documents
            </HeaderSubtitle>
          </HeaderContent>
          <CloseButton onClick={onClose}>
            <X size={20} />
          </CloseButton>
        </ModalHeader>

        <ModalContent>
          <SectionTitleBar>
            <SectionTitle>NGO Information</SectionTitle>
            <StatusBadge status={status}>{status}</StatusBadge>
          </SectionTitleBar>

          <InfoGrid>
            <InfoItem>
              <InfoLabel>Email</InfoLabel>
              <InfoValue>{Email}</InfoValue>
            </InfoItem>
            <InfoItem>
              <InfoLabel>Registered Date</InfoLabel>
              <InfoValue>{RegisteredDate}</InfoValue>
            </InfoItem>
          </InfoGrid>

          <DescriptionBlock>
            <InfoLabel>Description</InfoLabel>
            <InfoValue>
              This NGO focuses on charity, sustainability, and improving
              community welfare.
            </InfoValue>
          </DescriptionBlock>

          <Separator />

          <SectionTitle>Registration Documents ({Documents})</SectionTitle>

          <DocumentsList>
            {documents.map((doc, index) => (
              <DocumentItem key={index}>
                <FileText size={24} color="#3b82f6" />
                <DocDetails>
                  <DocName>{doc.name}</DocName>
                  <DocMeta>
                    {doc.format} • {doc.size} MB
                  </DocMeta>
                </DocDetails>
              </DocumentItem>
            ))}
          </DocumentsList>
        </ModalContent>

        <ModalFooter>
          <RejectButton
            onClick={() => handleVerify("rejected")}
            disabled={loading}
          >
            <XCircle size={20} /> {loading ? "Processing..." : "Reject"}
          </RejectButton>
          <ApproveButton
            onClick={() => handleVerify("approved")}
            disabled={loading}
          >
            <CheckCircle size={20} /> {loading ? "Processing..." : "Approve"}
          </ApproveButton>
        </ModalFooter>
      </ModalContainer>
    </ModalBackdrop>
  );
};

export default KycPending;

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.45);
  z-index: 1000;
`;

const ModalContainer = styled.div`
  width: 512px;
  height: 527px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -4px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  color: #1f2937;
  overflow: hidden;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 24px;
  border-bottom: 1px solid #f3f4f6;
`;

const HeaderContent = styled.div`
  flex-grow: 1;
`;

const HeaderTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0;
`;

const HeaderSubtitle = styled.p`
  font-size: 0.9375rem;
  color: #6b7280;
  margin-top: 4px;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: #9ca3af;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  transition: color 0.15s;
  &:hover {
    color: #4b5563;
  }
`;

const ModalContent = styled.div`
  flex-grow: 1;
  padding: 0 24px;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const SectionTitleBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 12px;
`;

const SectionTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
`;

const StatusBadge = styled.div`
  display: inline-flex;
  padding: 4px 10px;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: capitalize;
  background-color: ${({ status }) =>
    status === "approved"
      ? "#dcfce7"
      : status === "rejected"
      ? "#fee2e2"
      : "#fef9c3"};
  color: ${({ status }) =>
    status === "approved"
      ? "#166534"
      : status === "rejected"
      ? "#991b1b"
      : "#a16207"};
  border: 1px solid
    ${({ status }) =>
      status === "approved"
        ? "#16a34a"
        : status === "rejected"
        ? "#ef4444"
        : "#eab308"};
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 20px;
`;

const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const InfoLabel = styled.div`
  font-size: 0.75rem;
  color: #9ca3af;
  font-weight: 500;
  text-transform: uppercase;
  margin-bottom: 4px;
`;

const InfoValue = styled.div`
  font-size: 0.9375rem;
  color: #1f2937;
  font-weight: 500;
`;

const DescriptionBlock = styled.div`
  margin-bottom: 20px;
`;

const Separator = styled.div`
  height: 1px;
  background-color: #f3f4f6;
  margin: 20px 0;
`;

const DocumentsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-bottom: 20px;
`;

const DocumentItem = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  background-color: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.15s;
  &:hover {
    background-color: #f3f4f6;
  }
`;

const DocDetails = styled.div`
  margin-left: 12px;
`;

const DocName = styled.div`
  font-size: 0.875rem;
  font-weight: 600;
  color: #1f2937;
`;

const DocMeta = styled.div`
  font-size: 0.75rem;
  color: #6b7280;
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  padding: 16px 24px 24px 24px;
  border-top: 1px solid #f3f4f6;
`;

const RejectButton = styled.button`
  background-color: white;
  color: #ef4444;
  border: 1px solid #e5e7eb;
  padding: 8px 16px;
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.875rem;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  &:hover {
    background-color: #fef2f2;
    border-color: #fca5a5;
  }
`;

const ApproveButton = styled.button`
  background-color: green;
  color: white;
  border: 1px solid green;
  padding: 8px 16px;
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.875rem;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  &:hover {
    background-color: #059669;
    border-color: #059669;
  }
`;
