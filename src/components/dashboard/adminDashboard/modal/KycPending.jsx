import React, { useState } from "react";
import styled from "styled-components";
import { X, FileText, CheckCircle, XCircle } from "lucide-react";
import axios from "axios";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
const KycPending = ({ kycData, onClose }) => {
  if (!kycData) return null;

  const {
    organizationName,
    verificationStatus,
    user,
    createdAt,
    registrationCertificate,
    authorizedRepresentativeId,
    _id,
    bankDetails,
  } = kycData;

  console.log("This is Id", _id);

  const { token } = useSelector((state) => state.adminAuth);
  const [loading, setLoading] = useState(false);
  const handleVerify = async (newStatus) => {
    try {
      setLoading(true);
      const action = newStatus === "verified" ? "verify" : "reject";
      const res = await axios.patch(
        `${import.meta.env.VITE_BaseUrl_AdminKycV}/verify/${_id}`,
        { action },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      toast.success(
        `KYC ${newStatus === "verified" ? "approved" : "rejected"} successfully`
      );
      onClose();
    } catch (err) {
      console.log("yes", err.response?.data);
      toast.error(err.response?.data?.message || "Failed to verify KYC");
    } finally {
      setLoading(false);
    }
  };

  const formatDocUrl = (url) => {
    if (!url) return null;
    if (Array.isArray(url)) return formatDocUrl(url[0]);
    if (typeof url === "object") {
      const val =
        url.secure_url || url.url || url.path || url.imageUrl || url.public_id;
      return formatDocUrl(val);
    }
    if (typeof url !== "string") return null;
    if (url.startsWith("http")) return url;
    return `https://res.cloudinary.com/${
      import.meta.env.VITE_CLOUDINARY_NAME || "traceaid"
    }/image/upload/${url}`;
  };

  const documentList = [
    registrationCertificate && {
      name: "Registration Certificate",
      url: formatDocUrl(registrationCertificate),
    },
    authorizedRepresentativeId && {
      name: "Authorized Representative ID",
      url: formatDocUrl(authorizedRepresentativeId),
    },
  ].filter(Boolean);

  return (
    <ModalBackdrop onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <HeaderContent>
            <HeaderTitle>KYC Review: {organizationName}</HeaderTitle>
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
            <StatusBadge status={verificationStatus}>
              {verificationStatus}
            </StatusBadge>
          </SectionTitleBar>

          <InfoGrid>
            <InfoItem>
              <InfoLabel>Email</InfoLabel>
              <InfoValue>{user?.email || "N/A"}</InfoValue>
            </InfoItem>
            <InfoItem>
              <InfoLabel>Registered Date</InfoLabel>
              <InfoValue>{new Date(createdAt).toLocaleDateString()}</InfoValue>
            </InfoItem>
          </InfoGrid>

          <Separator />

          <SectionTitle>Documents ({documentList.length})</SectionTitle>

          {documentList.length > 0 ? (
            <DocumentsList>
              {documentList.map((doc, index) => (
                <DocumentItem key={index}>
                  <FileText size={24} color="#3b82f6" />
                  <DocDetails>
                    <DocName>{doc.name}</DocName>
                    <a
                      href={doc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontSize: "0.75rem", color: "#2563eb" }}
                    >
                      View Document
                    </a>
                  </DocDetails>
                </DocumentItem>
              ))}
            </DocumentsList>
          ) : (
            <p style={{ fontSize: "0.9rem", color: "#6b7280" }}>
              No documents uploaded.
            </p>
          )}

          <Separator />

          <Divider />

          <section>
            <h4>Bank Details</h4>
            <h6>
              <p>Account Name:</p> {kycData.bankAccountName || "N/A"}
            </h6>
            <h6>
              <p>Account Number:</p> {kycData.bankAccountNumber || "N/A"}
            </h6>
            <h6>
              <p>Bank Name:</p> {kycData.bankName || "N/A"}
            </h6>
          </section>

          <Divider />
        </ModalContent>

        <ModalFooter>
          {verificationStatus === "pending" ? (
            <>
              <RejectButton
                onClick={() => handleVerify("rejected")}
                disabled={loading}
              >
                <XCircle size={20} /> {loading ? "Processing..." : "Reject"}
              </RejectButton>
              <ApproveButton
                onClick={() => handleVerify("verified")}
                disabled={loading}
              >
                <CheckCircle size={20} />{" "}
                {loading ? "Processing..." : "Approve"}
              </ApproveButton>
            </>
          ) : (
            <span
              style={{
                fontSize: "0.875rem",
                fontWeight: 600,
                color:
                  verificationStatus === "verified"
                    ? "#16a34a"
                    : verificationStatus === "rejected"
                    ? "#dc2626"
                    : "#ca8a04",
              }}
            >
              This KYC has already been {verificationStatus}.
            </span>
          )}
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
  height: 540px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 24px;
  border-bottom: 1px solid #f3f4f6;
`;

const HeaderContent = styled.div``;

const HeaderTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
`;

const HeaderSubtitle = styled.p`
  font-size: 0.9rem;
  color: #6b7280;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: #9ca3af;
  cursor: pointer;
`;

const ModalContent = styled.div`
  flex-grow: 1;
  padding: 0 24px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const Divider = styled.hr`
  margin: 15px 0;
  border: 0;
  border-top: 1px solid #eee;
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
`;

const StatusBadge = styled.div`
  padding: 4px 10px;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: capitalize;
  background-color: ${({ status }) =>
    status === "verified"
      ? "#dcfce7"
      : status === "rejected"
      ? "#fee2e2"
      : "#fef9c3"};
  color: ${({ status }) =>
    status === "verified"
      ? "#166534"
      : status === "rejected"
      ? "#991b1b"
      : "#a16207"};
  border: 1px solid
    ${({ status }) =>
      status === "verified"
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
  margin-bottom: 4px;
`;

const InfoValue = styled.div`
  font-size: 0.9375rem;
  color: #1f2937;
  font-weight: 500;
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
`;

const DocDetails = styled.div`
  margin-left: 12px;
`;

const DocName = styled.div`
  font-size: 0.875rem;
  font-weight: 600;
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  padding: 16px 24px;
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
  background-color: #16a34a;
  color: white;
  border: 1px solid #16a34a;
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
