import React from "react";
import styled from "styled-components";
import { X } from "lucide-react";

const CampaignDetailsModal = ({ campaign, onClose }) => {
  if (!campaign) return null;

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
          <DetailsGrid>
            <DetailItem>
              <DetailLabel>Campaign Name</DetailLabel>
              <DetailValue>{campaign.CampaignName}</DetailValue>
            </DetailItem>
            <DetailItem>
              <DetailLabel>Goal Amount</DetailLabel>
              <DetailValue>{campaign.Goal}</DetailValue>
            </DetailItem>
            <DetailItem>
              <DetailLabel>Deadline</DetailLabel>
              <DetailValue>{campaign.Deadline}</DetailValue>
            </DetailItem>
            <DetailItem>
              <DetailLabel>Created Date</DetailLabel>
              <DetailValue>{campaign.CreatedDate}</DetailValue>
            </DetailItem>
          </DetailsGrid>

          <Section>
            <SectionTitle>Description</SectionTitle>
            <Description>{campaign.Description}</Description>
          </Section>

          <NGOSection>
            <SectionTitle>NGO Information</SectionTitle>
            <NGORow>
              <NGOName>{campaign.NGO}</NGOName>
            </NGORow>
          </NGOSection>
        </Body>

        <Footer>
          <StatusBadge className={campaign.Status.toLowerCase()}>
            {campaign.Status}
          </StatusBadge>

          <CloseButton onClick={onClose}>Close</CloseButton>
        </Footer>
      </Container>
    </Overlay>
  );
};

export default CampaignDetailsModal;

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
  border-radius: 8px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  width: 400px;
  height: 450px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Header = styled.div`
  padding: 18px 20px;
  border-bottom: 1px solid #f3f4f6;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const Title = styled.h2`
  font-size: 1.1rem;
  font-weight: 700;
  color: #0a0a0a;
`;

const Subtitle = styled.p`
  font-size: 0.8rem;
  color: #6b7280;
  margin-top: 3px;
`;

const CloseBtn = styled.button`
  padding: 5px;
  margin: -5px;
  border-radius: 9999px;
  color: #9ca3af;
  cursor: pointer;
  background: none;
  border: none;
  transition: color 0.15s ease-in-out;

  &:hover {
    color: #4b5563;
  }
`;

const Body = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  overflow: hidden;
`;

const DetailsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px 12px;
`;

const DetailItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const DetailLabel = styled.p`
  color: #6b7280;
  font-size: 0.8rem;
  font-weight: 500;
`;

const DetailValue = styled.p`
  color: #1f2937;
  font-weight: 600;
  margin-top: 2px;
  font-size: 0.88rem;
`;

const Section = styled.div``;

const SectionTitle = styled.h3`
  font-size: 0.95rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 6px;
`;

const Description = styled.p`
  font-size: 0.8rem;
  color: #1f2937;
  font-weight: 500;
  line-height: 1.45;
`;

const NGOSection = styled.div`
  padding-top: 10px;
  border-top: 1px solid #f3f4f6;
`;

const NGORow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NGOName = styled.p`
  font-size: 0.85rem;
  color: #1f2937;
  font-weight: 600;
`;

const StatusBadge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 6px 7px;
  font-size: 0.7rem;
  font-weight: 600;
  border-radius: 12px;
  text-transform: capitalize;
  margin-top: -4px;

  &.approved {
    background-color: #67940b;
    color: #ffffff;
  }
`;

const Footer = styled.div`
  padding: 0px 20px;
  border-top: 1px solid #f3f4f6;
  display: flex;
  gap: 5px;
  flex-direction: column;
  align-items: end;
  background-color: white;
`;

const CloseButton = styled.button`
  padding: 8px 20px;
  font-size: 0.8rem;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;
  border: 1px solid #d1d5db;
  background-color: white;
  color: #1f2937;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  transition: background-color 0.15s ease-in-out;

  &:hover {
    background-color: #f3f4f6;
  }
`;
