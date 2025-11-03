import React from "react";
import styled from "styled-components";
import { X, Check, Slash } from "lucide-react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const CampaignDetailsPendingModal = ({ campaign, onClose }) => {
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
              <Value>{campaign.CampaignName}</Value>
            </Detail>
            <Detail>
              <Label>Goal Amount</Label>
              <Value>{campaign.Goal}</Value>
            </Detail>
            <Detail>
              <Label>Created Date</Label>
              <Value>{campaign.CreatedDate}</Value>
            </Detail>
            <Detail>
              <Label>Status</Label>
              <Value>{campaign.Status}</Value>
            </Detail>
          </Grid>

          <NGOSection>
            <SectionTitle>NGO Information</SectionTitle>
            <NGOInfo>
              <NGOName>{campaign.NGO}</NGOName>
              <Badge className="status-pending">Pending</Badge>
            </NGOInfo>
          </NGOSection>
        </Body>

        <Footer>
          <RejectBtn>
            <IoCloseCircleOutline size={16} className="icon" />
            Reject
          </RejectBtn>

          <ApproveBtn>
            <IoMdCheckmarkCircleOutline size={16} className="icon" />
            Approve
          </ApproveBtn>
        </Footer>
      </Container>
    </Overlay>
  );
};

export default CampaignDetailsPendingModal;

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

const Section = styled.div``;

const SectionTitle = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 6px;
`;

const Desc = styled.p`
  font-size: 0.875rem;
  color: #374151;
  line-height: 1.5;
`;

const NGOSection = styled.div`
  padding-top: 16px;
  border-top: 1px solid #f3f4f6;
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
`;

const RejectBtn = styled(BaseButton)`
  color: #374151;
  border: 1px solid #d1d5db;
  background-color: white;

  .icon {
    color: black;
    transform: rotate(45deg);
  }

  &:hover {
    background-color: #f3f4f6;
  }
`;

const ApproveBtn = styled(BaseButton)`
  color: #c1e86e;
  background-color: #030213;
`;
