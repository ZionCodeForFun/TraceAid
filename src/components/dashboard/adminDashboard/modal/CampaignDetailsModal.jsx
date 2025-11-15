import React, { useState } from "react";
import styled from "styled-components";
import { X } from "lucide-react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { RiRadioButtonLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";

const CampaignDetailsPendingModal = ({ campaign, onClose, onStatusUpdate }) => {
  if (!campaign) return null;

  const { token } = useSelector((state) => state.adminAuth);
  const [loading, setLoading] = useState(false);

  const isPending =
    campaign.status !== "rejected" && campaign.status !== "approved";
  const isRejected = campaign.status === "rejected";
  const canActivate = campaign.status === "approved" && !campaign.isActive;
  const isLive = campaign.status === "approved" && campaign.isActive;

  // Approve / Reject
  const handleDecision = async (action) => {
    try {
      setLoading(true);

      await axios.patch(
        `${import.meta.env.VITE_BaseUrl_AdminVCampaign}/review/${campaign._id}`,
        { action },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      toast.success(`Campaign ${action} successfully`);

      if (onStatusUpdate) {
        const updatedStatus = action === "approve" ? "approved" : "rejected";
        onStatusUpdate(campaign._id, updatedStatus);
      }

      campaign.status = action === "approve" ? "approved" : "rejected";
      campaign.isActive = action === "approve" ? false : false; // Initially false when approved

      onClose();
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to process campaign");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleActivate = async () => {
    try {
      setLoading(true);

      await axios.patch(
        `${import.meta.env.VITE_BaseUrl_AdminVCampaign}/activate/${
          campaign._id
        }`,
        {
          action: "activate",
          remarks: "Campaign activated for fundraising visibility.",
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      toast.success("Campaign is now live!");

      if (onStatusUpdate) {
        onStatusUpdate(campaign._id, "approved");
      }

      campaign.isActive = true;
      onClose();
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to activate campaign");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Overlay>
      <Container>
        <Header>
          <div>
            <Title>Campaign Details</Title>
            <Subtitle>Review campaign information and make a decision</Subtitle>
          </div>
          <CloseBtn onClick={onClose}>
            <X size={18} strokeWidth={2} />
          </CloseBtn>
        </Header>

        <Body>
          <Grid>
            <Detail>
              <Label>Campaign Name</Label>
              <Value>{campaign.campaignTitle}</Value>
            </Detail>

            <Detail>
              <Label>Goal Amount</Label>
              <Value>
                {campaign.totalCampaignGoalAmount
                  ? `₦${campaign.totalCampaignGoalAmount}`
                  : "—"}
              </Value>
            </Detail>

            <Detail>
              <Label>Created Date</Label>
              <Value>
                {campaign.createdAt
                  ? new Date(campaign.createdAt).toLocaleDateString()
                  : "—"}
              </Value>
            </Detail>

            <Detail>
              <Label>Status</Label>
              <Value>
                {isLive
                  ? "Live & Approved"
                  : canActivate
                  ? "Approved but Not Live"
                  : isPending
                  ? "Pending"
                  : "Rejected"}
              </Value>
            </Detail>
          </Grid>

          <NGOSection>
            <SectionTitle>NGO Information</SectionTitle>
            <NGOInfo>
              <NGOName>{campaign.fundraiser || "Unknown"}</NGOName>
              <Badge
                className={
                  isPending
                    ? "status-pending"
                    : isLive
                    ? "status-approved"
                    : isRejected
                    ? "status-rejected"
                    : "status-approved"
                }
              >
                {isLive
                  ? "Live"
                  : isPending
                  ? "Pending"
                  : isRejected
                  ? "Rejected"
                  : "Approved"}
              </Badge>
            </NGOInfo>
          </NGOSection>
        </Body>

        <Footer>
          {isPending ? (
            <>
              <RejectBtn
                onClick={() => handleDecision("reject")}
                disabled={loading}
              >
                <IoCloseCircleOutline size={16} className="icon" />
                {loading ? "Processing..." : "Reject"}
              </RejectBtn>

              <ApproveBtn
                onClick={() => handleDecision("approve")}
                disabled={loading}
              >
                <IoMdCheckmarkCircleOutline size={16} className="icon" />
                {loading ? "Processing..." : "Approve"}
              </ApproveBtn>
            </>
          ) : canActivate ? (
            <>
              <ActivateBtn onClick={handleActivate} disabled={loading}>
                <RiRadioButtonLine size={16} className="icon" />
                {loading ? "Activating..." : "Make Campaign Live"}
              </ActivateBtn>

              <StatusMessage approved>
                This campaign is Approved but not Live.
              </StatusMessage>
            </>
          ) : isLive ? (
            <StatusMessage approved>
              This campaign is Live and Approved!
            </StatusMessage>
          ) : isRejected ? (
            <StatusMessage approved={false}>
              This campaign has already been Rejected.
            </StatusMessage>
          ) : null}
        </Footer>
      </Container>
    </Overlay>
  );
};

export default CampaignDetailsPendingModal;

/* Styled Components */

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(17, 24, 39, 0.5);
  padding: 16px;
`;

const Container = styled.div`
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  width: 500px;
  height: 527px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Header = styled.div`
  padding: 24px;
  border-bottom: 1px solid #f3f4f6;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const Title = styled.h2`
  font-size: 18px;
  color: #0a0a0a;
  font-weight: 700;
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #717182;
  margin-top: 4px;
`;

const CloseBtn = styled.button`
  padding: 6px;
  border-radius: 9999px;
  color: #9ca3af;
  cursor: pointer;
  background: none;
  border: none;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #4b5563;
  }
`;

const Body = styled.div`
  flex: 1;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow: hidden;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px 16px;
`;

const Detail = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.p`
  color: #6b7280;
  font-size: 0.875rem;
  font-weight: 500;
`;

const Value = styled.p`
  color: #1f2937;
  font-weight: 600;
  margin-top: 2px;
`;

const NGOSection = styled.div`
  padding-top: 16px;
  border-top: 1px solid #f3f4f6;
`;

const SectionTitle = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 6px;
`;

const NGOInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NGOName = styled.p`
  font-size: 0.875rem;
  color: #374151;
  font-weight: 600;
`;

const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 4px 12px;
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 9999px;
  text-transform: capitalize;

  &.status-pending {
    background-color: #eceef2;
    color: #67940b;
  }

  &.status-approved {
    background-color: #dcfce7;
    color: #166534;
  }

  &.status-rejected {
    background-color: #fee2e2;
    color: #991b1b;
  }
`;

const Footer = styled.div`
  padding: 16px;
  border-top: 1px solid #f3f4f6;
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  background-color: #f9fafb;
`;

const BaseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  font-size: 0.875rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  .icon {
    margin-right: 8px;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const RejectBtn = styled(BaseButton)`
  color: #374151;
  border: 1px solid #d1d5db;
  background-color: white;

  &:hover:enabled {
    background-color: #f3f4f6;
  }
`;

const ApproveBtn = styled(BaseButton)`
  color: white;
  background-color: #16a34a;
  border: 1px solid #16a34a;

  &:hover:enabled {
    background-color: #059669;
    border-color: #059669;
  }
`;

const ActivateBtn = styled(BaseButton)`
  color: white;
  background-color: #0284c7;
  border: 1px solid #0284c7;

  &:hover:enabled {
    background-color: #0369a1;
    border-color: #0369a1;
  }
`;

const StatusMessage = styled.span`
  font-weight: 600;
  color: ${({ approved }) => (approved ? "#16a34a" : "#dc2626")};
`;
