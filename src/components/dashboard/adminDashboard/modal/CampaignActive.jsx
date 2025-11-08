// import React from "react";
// import styled from "styled-components";
// import { X, Pause } from "lucide-react";

// const CampaignActive = ({ campaign, onClose, onPause }) => { 
//   const handlePause = () => {
//     if (window.confirm(`Pause campaign "${campaign.name}"?`)) {
//       onPause(campaign.name);
//     }
//   };

//   return (
//     <Overlay>
//       <Container>
//         <Header>
//           <div>
//             <Title>Campaign Details</Title>
//             <Subtitle>View and manage campaign information</Subtitle>
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
//             <SectionTitle>Donation Progress</SectionTitle>

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

//             <ProgressBar>
//               <ProgressFill style={{ width: `${campaign.progress}%` }} />
//             </ProgressBar>

//             <ProgressSummary>
//               <div className="stats">
//                 <Percent>{campaign.progress}%</Percent>
//                 <Complete>
//                   {campaign.progress === 100 ? "Complete" : "In Progress"}
//                 </Complete>
//               </div>
//               <div className="remaining">
//                 <RemainAmount>
//                   ₦{(campaign.goal - campaign.raised).toLocaleString()}
//                 </RemainAmount>
//                 <RemainLabel>remaining</RemainLabel>
//               </div>
//             </ProgressSummary>
//           </DonationSection>
//         </Body>

//         <Footer>
//           <PauseButton onClick={handlePause}>
//             <Pause size={16} strokeWidth={2.5} className="pause-icon" />
//             Pause
//           </PauseButton>
//         </Footer>
//       </Container>
//     </Overlay>
//   );
// };

// export default CampaignActive;




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
//   background-color: #fcd34d;
//   border-radius: 4px;
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

// const PauseButton = styled.button`
//   display: flex;
//   align-items: center;
//   padding: 8px 16px;
//   font-size: 0.875rem;
//   font-weight: 600;
//   border-radius: 6px;
//   cursor: pointer;
//   border: 1px solid #d1d5db;
//   background-color: #f3f4f6;
//   color: #1f2937;
//   box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
//   transition: background-color 0.15s ease-in-out;

//   .pause-icon {
//     margin-right: 8px;
//   }

//   &:hover {
//     background-color: #e5e7eb;
//   }
// `;



import React from "react";
import styled, { keyframes } from "styled-components";
import { X, Pause } from "lucide-react";

const CampaignActive = ({ campaign, onClose, onPause }) => {
  const handlePause = () => {
    if (window.confirm(`Pause campaign "${campaign.name}"?`)) {
      onPause(campaign.name);
    }
  };

  return (
    <Overlay role="dialog" aria-modal="true" aria-labelledby="campaign-title">
      <Container>
        <Header>
          <HeaderText>
            <Title id="campaign-title">Campaign Details</Title>
            <Subtitle>View and manage campaign information</Subtitle>
          </HeaderText>

          <CloseBtn
            onClick={onClose}
            aria-label="Close campaign details"
            title="Close"
          >
            <X size={18} strokeWidth={2} />
          </CloseBtn>
        </Header>

        <Body>
          <DetailsGrid>
            <DetailItem>
              <DetailLabel>Campaign Name</DetailLabel>
              <DetailValue title={campaign.name}>{campaign.name}</DetailValue>
            </DetailItem>

            <DetailItem>
              <DetailLabel>NGO</DetailLabel>
              <DetailValue title={campaign.ngo}>{campaign.ngo}</DetailValue>
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
            <SectionTitle>Donation Progress</SectionTitle>

            <ProgressCards>
              <ProgressCard className="raised" aria-hidden>
                <CardAmount>₦{campaign.raised.toLocaleString()}</CardAmount>
                <CardLabel>Amount Raised</CardLabel>
              </ProgressCard>

              <ProgressCard className="goal" aria-hidden>
                <CardAmount>₦{campaign.goal.toLocaleString()}</CardAmount>
                <CardLabel>Goal Amount</CardLabel>
              </ProgressCard>

              <ProgressCard className="donors" aria-hidden>
                <CardAmount>{campaign.donors}</CardAmount>
                <CardLabel>Total Donors</CardLabel>
              </ProgressCard>
            </ProgressCards>

            <ProgressBar aria-hidden>
              <ProgressFill
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={campaign.progress}
                style={{ width: `${Math.max(0, Math.min(100, campaign.progress))}%` }}
              />
            </ProgressBar>

            <ProgressSummary>
              <div className="stats">
                <Percent>{campaign.progress}%</Percent>
                <Complete>
                  {campaign.progress === 100 ? "Complete" : "In Progress"}
                </Complete>
              </div>

              <div className="remaining">
                <RemainAmount>
                  ₦{Math.max(0, campaign.goal - campaign.raised).toLocaleString()}
                </RemainAmount>
                <RemainLabel>remaining</RemainLabel>
              </div>
            </ProgressSummary>
          </DonationSection>
        </Body>

        <Footer>
          <PauseButton onClick={handlePause} aria-label="Pause campaign">
            <Pause size={16} strokeWidth={2.5} className="pause-icon" />
            Pause
          </PauseButton>
        </Footer>
      </Container>
    </Overlay>
  );
};

export default CampaignActive;


const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px) scale(.995);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(17, 24, 39, 0.5); /* unchanged color */
  padding: 1rem; /* mobile-first */
  z-index: 50;
`;

/* Container: mobile-first sizing, then expands at breakpoints */
const Container = styled.div`
  background-color: white; /* unchanged */
  border-radius: 0.5rem;
  width: 100%;
  max-width: 32rem; /* ~512px on small screens */
  max-height: 92vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2),
    0 4px 6px -2px rgba(0, 0, 0, 0.1);
  animation: ${fadeUp} 220ms cubic-bezier(.2,.9,.2,1);
  outline: none;

  /* ensure internal scrolling if content taller than viewport */
  &::-webkit-scrollbar {
    width: 8px;
  }

  @media (min-width: 600px) {
    max-width: 36rem;
    border-radius: 0.625rem;
  }

  @media (min-width: 768px) {
    max-width: 42rem;
  }

  @media (min-width: 1024px) {
    max-width: 48rem;
  }

  @media (min-width: 1280px) {
    max-width: 52rem;
  }

  @media (min-width: 1440px) {
    max-width: 56rem;
  }
`;

/* Header: space between and responsive padding */
const Header = styled.header`
  padding: 1rem 1rem 0.75rem 1rem;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.75rem;

  @media (min-width: 600px) {
    padding: 1.25rem 1.25rem 1rem 1.25rem;
  }

  @media (min-width: 768px) {
    padding: 1.5rem 1.5rem 1rem 1.5rem;
  }
`;

const HeaderText = styled.div`
  min-width: 0; /* important to prevent overflow in grid/flex children */
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

/* Title & subtitle sizes kept visually the same colors/weights but responsive */
const Title = styled.h2`
  font-size: 1.2rem; /* original was 1.2rem */
  line-height: 1.1;
  font-weight: 700;
  color: #1f2937;

  @media (min-width: 600px) {
    font-size: 1.35rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 0.875rem; /* original 0.875rem */
  color: #6b7280;
  margin-top: 0.25rem;
  line-height: 1.2;

  @media (min-width: 600px) {
    font-size: 0.95rem;
  }
`;

const CloseBtn = styled.button`
  padding: 0.375rem;
  margin: -0.375rem;
  border-radius: 9999px;
  background: none;
  border: none;
  color: #9ca3af; /* unchanged */
  cursor: pointer;
  transition: color 0.15s ease-in-out;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #4b5563;
  }

  /* increase hit area on larger screens */
  @media (min-width: 600px) {
    padding: 0.5rem;
  }
`;

/* Body container holds all primary content, scrolls if necessary */
const Body = styled.main`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex-grow: 1;
  overflow: auto;
  min-height: 0; /* critical to allow children to shrink inside flex */

  @media (min-width: 600px) {
    padding: 1.25rem;
    gap: 1.25rem;
  }

  @media (min-width: 1024px) {
    padding: 1.5rem 1.75rem;
  }
`;

/* DetailsGrid: mobile single column -> two columns at small screens */
const DetailsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
  }
`;

const DetailItem = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0; /* prevent overflow in long text */
`;

const DetailLabel = styled.p`
  color: #6b7280;
  font-size: 0.875rem;
  font-weight: 500;
  margin: 0;
`;

const DetailValue = styled.p`
  color: #1f2937;
  font-weight: 600;
  margin-top: 0.25rem;
  margin-bottom: 0;
  word-break: break-word; /* ensure long strings wrap */
  font-size: 0.95rem;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

/* Section + title + description */
const Section = styled.section``;

const SectionTitle = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 0.5rem;

  @media (min-width: 768px) {
    font-size: 1.05rem;
  }
`;

const Description = styled.p`
  font-size: 0.875rem;
  color: #1f2937;
  line-height: 1.5;
  font-weight: 500;
  margin: 0;
  word-break: break-word;

  @media (min-width: 768px) {
    font-size: 0.95rem;
  }

  /* prevent long unbroken content from overflowing */
  &,
  & * {
    min-width: 0;
  }
`;

/* Donation section layout */
const DonationSection = styled.section`
  padding-top: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: auto;
`;

/* ProgressCards: stacks on mobile, three-up from SM and above */
const ProgressCards = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;

  @media (min-width: 600px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1rem;
  }
`;

const ProgressCard = styled.div`
  padding: 0.9rem;
  border-radius: 0.5rem;
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.05);
  min-height: 3.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &.raised {
    background-color: #f7f3ff; /* preserved */
  }

  &.goal {
    background-color: #f0fff4; /* preserved */
  }

  &.donors {
    background-color: #fffbeb; /* preserved */
  }
`;

const CardAmount = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0;
  margin-bottom: 0.25rem;
  line-height: 1;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

const CardLabel = styled.p`
  font-size: 0.75rem;
  color: #4b5563;
  font-weight: 500;
  margin: 0;
  @media (min-width: 768px) {
    font-size: 0.8rem;
  }
`;

/* Progress bar - thin and responsive */
const ProgressBar = styled.div`
  height: 0.5rem;
  background-color: #e5e7eb;
  border-radius: 0.375rem;
  overflow: hidden;
  margin-top: 0.5rem;
`;

const ProgressFill = styled.div`
  height: 100%;
  background-color: #fcd34d; /* preserved */
  border-radius: 0.375rem;
  transition: width 0.45s ease;
`;

/* Summary (percent + remaining) */
const ProgressSummary = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  font-size: 0.875rem;
  margin-top: 0.5rem;
  gap: 0.5rem;

  .stats,
  .remaining {
    display: flex;
    align-items: baseline;
    gap: 0.375rem;
    min-width: 0;
  }

  @media (min-width: 768px) {
    font-size: 0.95rem;
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

/* Footer with right-aligned action */
const Footer = styled.footer`
  padding: 0.75rem 1rem;
  border-top: 1px solid #f3f4f6;
  display: flex;
  justify-content: flex-end;
  background-color: white;

  @media (min-width: 600px) {
    padding: 0.9rem 1.25rem;
  }

  @media (min-width: 1024px) {
    padding: 1rem 1.5rem;
  }
`;

const PauseButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.55rem 1rem;
  font-size: 0.875rem;
  font-weight: 600;
  border-radius: 0.375rem;
  cursor: pointer;
  border: 1px solid #d1d5db;
  background-color: #f3f4f6; /* preserved */
  color: #1f2937;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  transition: background-color 0.15s ease-in-out;
  white-space: nowrap; /* prevent text wrapping inside button */

  .pause-icon {
    margin-right: 0;
    display: inline-flex;
  }

  &:hover {
    background-color: #e5e7eb;
  }

  @media (min-width: 1024px) {
    padding: 0.6rem 1.25rem;
    font-size: 0.95rem;
  }
`;
