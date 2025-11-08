// import React from "react";
// import styled from "styled-components";
// import { X, CheckCircle } from "lucide-react";

// const CampaignCompleted = ({ campaign, onClose }) => {
//   return (
//     <Overlay>
//       <Container>
//         <Header>
//           <div>
//             <Title>Campaign Completed</Title>
//             <Subtitle>
//               View summary and performance details of this campaign
//             </Subtitle>
//           </div>
//           <CloseBtn onClick={onClose}>
//             <X size={18} strokeWidth={2} />
//           </CloseBtn>
//         </Header>

//         <Body>
//           <DetailsGrid>
//             <DetailItem>
//               <DetailLabel>Campaign Name</DetailLabel>
//               <DetailValue>{campaign.name}</DetailValue>
//             </DetailItem>
//             <DetailItem>
//               <DetailLabel>NGO</DetailLabel>
//               <DetailValue>{campaign.ngo}</DetailValue>
//             </DetailItem>
//             <DetailItem>
//               <DetailLabel>Created Date</DetailLabel>
//               <DetailValue>2024-10-05</DetailValue>
//             </DetailItem>
//             <DetailItem>
//               <DetailLabel>Deadline</DetailLabel>
//               <DetailValue>{campaign.deadline}</DetailValue>
//             </DetailItem>
//           </DetailsGrid>

//           <Section>
//             <SectionTitle>Description</SectionTitle>
//             <Description>{campaign.description}</Description>
//           </Section>

//           <DonationSection>
//             <SectionTitle>Donation Overview</SectionTitle>

//             <ProgressCards>
//               <ProgressCard className="raised">
//                 <CardAmount>₦{campaign.raised.toLocaleString()}</CardAmount>
//                 <CardLabel>Amount Raised</CardLabel>
//               </ProgressCard>

//               <ProgressCard className="goal">
//                 <CardAmount>₦{campaign.goal.toLocaleString()}</CardAmount>
//                 <CardLabel>Goal Amount</CardLabel>
//               </ProgressCard>

//               <ProgressCard className="donors">
//                 <CardAmount>{campaign.donors}</CardAmount>
//                 <CardLabel>Total Donors</CardLabel>
//               </ProgressCard>
//             </ProgressCards>

//             {/* ✅ Completed Progress Bar */}
//             <ProgressBar>
//               <ProgressFill style={{ width: "100%", backgroundColor: "#4d7c0f" }} />
//             </ProgressBar>

//             <ProgressSummary>
//               <div className="stats">
//                 <Percent>100.0%</Percent>
//                 <Complete>Complete</Complete>
//               </div>
//               <div className="remaining">
//                 <RemainAmount>₦0</RemainAmount>
//                 <RemainLabel>remaining</RemainLabel>
//               </div>
//             </ProgressSummary>
//           </DonationSection>
//         </Body>

//         <Footer>
      
//         </Footer>
//       </Container>
//     </Overlay>
//   );
// };

// export default CampaignCompleted;


// const Overlay = styled.div`
//   position: fixed;
//   inset: 0;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background-color: rgba(17, 24, 39, 0.5);
//   padding: 16px;
//   z-index: 50;
// `;

// const Container = styled.div`
//   background-color: white;
//   border-radius: 8px;
//   width: 512px;
//   height: 600px;
//   box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2),
//     0 4px 6px -2px rgba(0, 0, 0, 0.1);
//   display: flex;
//   flex-direction: column;
//   overflow: hidden;
// `;

// const Header = styled.div`
//   padding: 24px;
//   border-bottom: 1px solid #e5e7eb;
//   display: flex;
//   justify-content: space-between;
//   align-items: flex-start;
// `;

// const Title = styled.h2`
//   font-size: 1.2rem;
//   font-weight: 700;
//   color: #1f2937;
// `;

// const Subtitle = styled.p`
//   font-size: 0.875rem;
//   color: #6b7280;
//   margin-top: 4px;
// `;

// const CloseBtn = styled.button`
//   padding: 6px;
//   margin: -6px;
//   border-radius: 9999px;
//   background: none;
//   border: none;
//   color: #9ca3af;
//   cursor: pointer;
//   transition: color 0.15s ease-in-out;
//   &:hover {
//     color: #4b5563;
//   }
// `;

// const Body = styled.div`
//   padding: 24px;
//   display: flex;
//   flex-direction: column;
//   gap: 24px;
//   flex-grow: 1;
//   overflow: hidden;
// `;

// const DetailsGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   gap: 16px 16px;
// `;

// const DetailItem = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// const DetailLabel = styled.p`
//   color: #6b7280;
//   font-size: 0.875rem;
//   font-weight: 500;
// `;

// const DetailValue = styled.p`
//   color: #1f2937;
//   font-weight: 600;
//   margin-top: 2px;
// `;

// const Section = styled.div``;

// const SectionTitle = styled.h3`
//   font-size: 1rem;
//   font-weight: 700;
//   color: #1f2937;
//   margin-bottom: 12px;
// `;

// const Description = styled.p`
//   font-size: 0.875rem;
//   color: #1f2937;
//   line-height: 1.5;
//   font-weight: 500;
// `;

// const DonationSection = styled.div`
//   padding-top: 16px;
//   display: flex;
//   flex-direction: column;
//   gap: 16px;
//   margin-top: auto;
// `;

// const ProgressCards = styled.div`
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   gap: 16px;
// `;

// const ProgressCard = styled.div`
//   padding: 16px;
//   border-radius: 8px;
//   border: 1px solid rgba(0, 0, 0, 0.05);
//   box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.05);

//   &.raised {
//     background-color: #f7f3ff;
//   }

//   &.goal {
//     background-color: #f0fff4;
//   }

//   &.donors {
//     background-color: #fffbeb;
//   }
// `;

// const CardAmount = styled.h3`
//   font-size: 1.1rem;
//   font-weight: 700;
//   margin-bottom: 4px;
// `;

// const CardLabel = styled.p`
//   font-size: 0.75rem;
//   color: #4b5563;
//   font-weight: 500;
// `;

// const ProgressBar = styled.div`
//   height: 8px;
//   background-color: #e5e7eb;
//   border-radius: 4px;
//   overflow: hidden;
// `;

// const ProgressFill = styled.div`
//   height: 100%;
//   transition: width 0.5s ease;
// `;

// const ProgressSummary = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: flex-end;
//   font-size: 0.875rem;
//   margin-top: 8px;

//   .stats,
//   .remaining {
//     display: flex;
//     align-items: baseline;
//     gap: 4px;
//   }
// `;

// const Percent = styled.span`
//   font-weight: 700;
// `;

// const Complete = styled.span`
//   font-weight: 500;
//   color: #6b7280;
// `;

// const RemainAmount = styled.span`
//   font-weight: 700;
// `;

// const RemainLabel = styled.span`
//   font-weight: 500;
//   color: #6b7280;
// `;

// const Footer = styled.div`
//   padding: 12px 24px;
//   border-top: 1px solid #f3f4f6;
//   display: flex;
//   justify-content: flex-end;
//   background-color: white;
// `;

// const CompletedButton = styled.button`
//   display: flex;
//   align-items: center;
//   padding: 8px 16px;
//   font-size: 0.875rem;
//   font-weight: 600;
//   border-radius: 6px;
//   cursor: not-allowed;
//   border: 1px solid #4d7c0f;
//   background-color: #ecfdf5;
//   color: #166534;
//   box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);

//   .check-icon {
//     margin-right: 8px;
//   }
// `;





import React from "react";
import styled from "styled-components";
import { X, CheckCircle } from "lucide-react";

const CampaignCompleted = ({ campaign, onClose }) => {
  return (
    <Overlay>
      <Container>
        <Header>
          <div>
            <Title>Campaign Completed</Title>
            <Subtitle>
              View summary and performance details of this campaign
            </Subtitle>
          </div>
          <CloseBtn onClick={onClose}>
            <X size={18} strokeWidth={2} />
          </CloseBtn>
        </Header>

        <Body>
          <DetailsGrid>
            <DetailItem>
              <DetailLabel>Campaign Name</DetailLabel>
              <DetailValue>{campaign.name}</DetailValue>
            </DetailItem>
            <DetailItem>
              <DetailLabel>NGO</DetailLabel>
              <DetailValue>{campaign.ngo}</DetailValue>
            </DetailItem>
            <DetailItem>
              <DetailLabel>Created Date</DetailLabel>
              <DetailValue>2024-10-05</DetailValue>
            </DetailItem>
            <DetailItem>
              <DetailLabel>Deadline</DetailLabel>
              <DetailValue>{campaign.deadline}</DetailValue>
            </DetailItem>
          </DetailsGrid>

          <Section>
            <SectionTitle>Description</SectionTitle>
            <Description>{campaign.description}</Description>
          </Section>

          <DonationSection>
            <SectionTitle>Donation Overview</SectionTitle>

            <ProgressCards>
              <ProgressCard className="raised">
                <CardAmount>₦{campaign.raised.toLocaleString()}</CardAmount>
                <CardLabel>Amount Raised</CardLabel>
              </ProgressCard>

              <ProgressCard className="goal">
                <CardAmount>₦{campaign.goal.toLocaleString()}</CardAmount>
                <CardLabel>Goal Amount</CardLabel>
              </ProgressCard>

              <ProgressCard className="donors">
                <CardAmount>{campaign.donors}</CardAmount>
                <CardLabel>Total Donors</CardLabel>
              </ProgressCard>
            </ProgressCards>

            <ProgressBar>
              <ProgressFill style={{ width: "100%", backgroundColor: "#4d7c0f" }} />
            </ProgressBar>

            <ProgressSummary>
              <div className="stats">
                <Percent>100.0%</Percent>
                <Complete>Complete</Complete>
              </div>
              <div className="remaining">
                <RemainAmount>₦0</RemainAmount>
                <RemainLabel>remaining</RemainLabel>
              </div>
            </ProgressSummary>
          </DonationSection>
        </Body>

        <Footer>
          <CompletedButton disabled>
            <CheckCircle size={16} className="check-icon" />
            Completed
          </CompletedButton>
        </Footer>
      </Container>
    </Overlay>
  );
};

export default CampaignCompleted;

/* ==================== STYLES ==================== */

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(17, 24, 39, 0.5);
  padding: 1rem;
  z-index: 50;
  overflow-y: auto;
`;

const Container = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  width: 100%;
  max-width: 32rem; /* 512px */
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2),
    0 4px 6px -2px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: fadeIn 0.25s ease-in-out;
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.97);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  /* Responsiveness */
  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

const Header = styled.div`
  padding: 1.5rem;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.75rem;
  }
`;

const Title = styled.h2`
  font-size: clamp(1rem, 2vw, 1.25rem);
  font-weight: 700;
  color: #1f2937;
`;

const Subtitle = styled.p`
  font-size: clamp(0.8rem, 1.5vw, 0.875rem);
  color: #6b7280;
  margin-top: 0.25rem;
`;

const CloseBtn = styled.button`
  padding: 0.4rem;
  border-radius: 50%;
  background: none;
  border: none;
  color: #9ca3af;
  cursor: pointer;
  transition: color 0.15s ease-in-out;
  &:hover {
    color: #4b5563;
  }
`;

const Body = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  flex-grow: 1;
`;

const DetailsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const DetailItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const DetailLabel = styled.p`
  color: #6b7280;
  font-size: 0.875rem;
  font-weight: 500;
`;

const DetailValue = styled.p`
  color: #1f2937;
  font-weight: 600;
  margin-top: 0.125rem;
`;

const Section = styled.div``;

const SectionTitle = styled.h3`
  font-size: clamp(0.95rem, 2vw, 1rem);
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 0.75rem;
`;

const Description = styled.p`
  font-size: clamp(0.8rem, 1.5vw, 0.875rem);
  color: #1f2937;
  line-height: 1.6;
  font-weight: 500;
`;

const DonationSection = styled.div`
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: auto;
`;

const ProgressCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProgressCard = styled.div`
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);

  &.raised {
    background-color: #f7f3ff;
  }

  &.goal {
    background-color: #f0fff4;
  }

  &.donors {
    background-color: #fffbeb;
  }
`;

const CardAmount = styled.h3`
  font-size: clamp(1rem, 2vw, 1.1rem);
  font-weight: 700;
  margin-bottom: 0.25rem;
`;

const CardLabel = styled.p`
  font-size: clamp(0.7rem, 1.5vw, 0.75rem);
  color: #4b5563;
  font-weight: 500;
`;

const ProgressBar = styled.div`
  height: 0.5rem;
  background-color: #e5e7eb;
  border-radius: 0.25rem;
  overflow: hidden;
`;

const ProgressFill = styled.div`
  height: 100%;
  transition: width 0.5s ease;
`;

const ProgressSummary = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  font-size: 0.875rem;
  margin-top: 0.5rem;

  .stats,
  .remaining {
    display: flex;
    align-items: baseline;
    gap: 0.25rem;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

const Percent = styled.span`
  font-weight: 700;
`;

const Complete = styled.span`
  font-weight: 500;
  color: #6b7280;
`;

const RemainAmount = styled.span`
  font-weight: 700;
`;

const RemainLabel = styled.span`
  font-weight: 500;
  color: #6b7280;
`;

const Footer = styled.div`
  padding: 0.75rem 1.5rem;
  border-top: 1px solid #f3f4f6;
  display: flex;
  justify-content: flex-end;
  background-color: white;
`;

const CompletedButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  font-size: clamp(0.8rem, 1.5vw, 0.875rem);
  font-weight: 600;
  border-radius: 0.375rem;
  cursor: not-allowed;
  border: 1px solid #4d7c0f;
  background-color: #ecfdf5;
  color: #166534;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);

  .check-icon {
    margin-right: 0.5rem;
  }
`;
