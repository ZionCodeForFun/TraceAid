// import React, { useState } from "react";
// import styled from "styled-components";
// import { X } from "lucide-react";
// import { IoCloseCircleOutline } from "react-icons/io5";
// import { IoMdCheckmarkCircleOutline } from "react-icons/io";
// import { useSelector } from "react-redux";
// import axios from "axios";
// import { toast } from "react-toastify";

// const CampaignDetailsPendingModal = ({ campaign, onClose }) => {
//   if (!campaign) return null;

//   const { token } = useSelector((state) => state.adminAuth);
//   const [loading, setLoading] = useState(false);

//   const status = campaign.Status?.toLowerCase();
//   const isPending = status === "pending";
//   const isApproved = status === "approved";
//   const isRejected = status === "rejected";

//   const handleDecision = async (decision) => {
//     try {
//       setLoading(true);
//       await axios.patch(
//         `${import.meta.env.VITE_BaseUrl_AdminVCampaign}/review/${campaign._id}`,
//         { action: decision },
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );
//       toast.success(`Campaign ${decision} successfully`);
//       onClose();
//     } catch (err) {
//       toast.error(err.response?.data?.message || "Failed to update campaign");
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Overlay>
//       <Container>
//         <Header>
//           <div>
//             <Title>Campaign Details</Title>
//             <Subtitle>Review campaign information and make a decision</Subtitle>
//           </div>
//           <CloseBtn onClick={onClose}>
//             <X size={18} strokeWidth={2} />
//           </CloseBtn>
//         </Header>

//         <Body>
//           <Grid>
//             <Detail>
//               <Label>Campaign Name</Label>
//               <Value>{campaign.CampaignName}</Value>
//             </Detail>
//             <Detail>
//               <Label>Goal Amount</Label>
//               <Value>{campaign.Goal}</Value>
//             </Detail>
//             <Detail>
//               <Label>Created Date</Label>
//               <Value>{campaign.CreatedDate}</Value>
//             </Detail>
//             <Detail>
//               <Label>Status</Label>
//               <Value>{campaign.Status}</Value>
//             </Detail>
//           </Grid>

//           <NGOSection>
//             <SectionTitle>NGO Information</SectionTitle>
//             <NGOInfo>
//               <NGOName>{campaign.NGO}</NGOName>
//               <Badge
//                 className={
//                   isPending
//                     ? "status-pending"
//                     : isApproved
//                     ? "status-approved"
//                     : "status-rejected"
//                 }
//               >
//                 {campaign.Status}
//               </Badge>
//             </NGOInfo>
//           </NGOSection>
//         </Body>

//         <Footer>
//           {isPending ? (
//             <>
//               <RejectBtn
//                 onClick={() => handleDecision("rejected")}
//                 disabled={loading}
//               >
//                 <IoCloseCircleOutline size={16} className="icon" />
//                 {loading ? "Processing..." : "Reject"}
//               </RejectBtn>

//               <ApproveBtn
//                 onClick={() => handleDecision("approved")}
//                 disabled={loading}
//               >
//                 <IoMdCheckmarkCircleOutline size={16} className="icon" />
//                 {loading ? "Processing..." : "Approve"}
//               </ApproveBtn>
//             </>
//           ) : (
//             <StatusMessage approved={isApproved}>
//               This campaign has already been {campaign.Status}.
//             </StatusMessage>
//           )}
//         </Footer>
//       </Container>
//     </Overlay>
//   );
// };

// export default CampaignDetailsPendingModal;


// const Overlay = styled.div`
//   position: fixed;
//   inset: 0;
//   z-index: 50;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background-color: rgba(17, 24, 39, 0.5);
//   padding: 16px;
// `;

// const Container = styled.div`
//   background-color: white;
//   border-radius: 12px;
//   box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
//   width: 500px;
//   height: 527px;
//   display: flex;
//   flex-direction: column;
//   overflow: hidden;
// `;

// const Header = styled.div`
//   padding: 24px;
//   border-bottom: 1px solid #f3f4f6;
//   display: flex;
//   justify-content: space-between;
//   align-items: flex-start;
// `;

// const Title = styled.h2`
//   font-size: 18px;
//   color: #0a0a0a;
//   font-weight: 700;
// `;

// const Subtitle = styled.p`
//   font-size: 16px;
//   color: #717182;
//   margin-top: 4px;
// `;

// const CloseBtn = styled.button`
//   padding: 6px;
//   border-radius: 9999px;
//   color: #9ca3af;
//   cursor: pointer;
//   background: none;
//   border: none;
//   transition: color 0.2s ease-in-out;

//   &:hover {
//     color: #4b5563;
//   }
// `;

// const Body = styled.div`
//   flex: 1;
//   padding: 24px;
//   display: flex;
//   flex-direction: column;
//   gap: 20px;
//   overflow: hidden;
// `;

// const Grid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   gap: 20px 16px;
// `;

// const Detail = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// const Label = styled.p`
//   color: #6b7280;
//   font-size: 0.875rem;
//   font-weight: 500;
// `;

// const Value = styled.p`
//   color: #1f2937;
//   font-weight: 600;
//   margin-top: 2px;
// `;

// const NGOSection = styled.div`
//   padding-top: 16px;
//   border-top: 1px solid #f3f4f6;
// `;

// const SectionTitle = styled.h3`
//   font-size: 1rem;
//   font-weight: 700;
//   margin-bottom: 6px;
// `;

// const NGOInfo = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;

// const NGOName = styled.p`
//   font-size: 0.875rem;
//   color: #374151;
//   font-weight: 600;
// `;

// const Badge = styled.span`
//   display: inline-flex;
//   align-items: center;
//   padding: 4px 12px;
//   font-size: 0.75rem;
//   font-weight: 600;
//   border-radius: 9999px;
//   text-transform: capitalize;

//   &.status-pending {
//     background-color: #eceef2;
//     color: #67940b;
//   }

//   &.status-approved {
//     background-color: #dcfce7;
//     color: #166534;
//   }

//   &.status-rejected {
//     background-color: #fee2e2;
//     color: #991b1b;
//   }
// `;

// const Footer = styled.div`
//   padding: 16px;
//   border-top: 1px solid #f3f4f6;
//   display: flex;
//   justify-content: flex-end;
//   gap: 12px;
//   background-color: #f9fafb;
// `;

// const BaseButton = styled.button`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 8px 16px;
//   font-size: 0.875rem;
//   font-weight: 600;
//   border-radius: 8px;
//   cursor: pointer;
//   transition: all 0.2s ease-in-out;

//   .icon {
//     margin-right: 8px;
//   }

//   &:disabled {
//     opacity: 0.6;
//     cursor: not-allowed;
//   }
// `;

// const RejectBtn = styled(BaseButton)`
//   color: #374151;
//   border: 1px solid #d1d5db;
//   background-color: white;

//   .icon {
//     color: black;
//     transform: rotate(45deg);
//   }

//   &:hover:enabled {
//     background-color: #f3f4f6;
//   }
// `;

// const ApproveBtn = styled(BaseButton)`
//   color: white;
//   background-color: #16a34a;
//   border: 1px solid #16a34a;

//   &:hover:enabled {
//     background-color: #059669;
//     border-color: #059669;
//   }
// `;

// const StatusMessage = styled.span`
//   font-weight: 600;
//   color: ${({ approved }) => (approved ? "#16a34a" : "#dc2626")};
// `;



import React, { useState } from "react";
import styled from "styled-components";
import { X } from "lucide-react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";

const CampaignDetailsPendingModal = ({ campaign, onClose }) => {
  if (!campaign) return null;

  const { token } = useSelector((state) => state.adminAuth);
  const [loading, setLoading] = useState(false);

  const status = campaign.Status?.toLowerCase();
  const isPending = status === "pending";
  const isApproved = status === "approved";
  const isRejected = status === "rejected";

  const handleDecision = async (decision) => {
    try {
      setLoading(true);
      await axios.patch(
        `${import.meta.env.VITE_BaseUrl_AdminVCampaign}/review/${campaign._id}`,
        { action: decision },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      toast.success(`Campaign ${decision} successfully`);
      onClose();
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to update campaign");
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
              <Badge
                className={
                  isPending
                    ? "status-pending"
                    : isApproved
                    ? "status-approved"
                    : "status-rejected"
                }
              >
                {campaign.Status}
              </Badge>
            </NGOInfo>
          </NGOSection>
        </Body>

        <Footer>
          {isPending ? (
            <>
              <RejectBtn
                onClick={() => handleDecision("rejected")}
                disabled={loading}
              >
                <IoCloseCircleOutline size={16} className="icon" />
                {loading ? "Processing..." : "Reject"}
              </RejectBtn>

              <ApproveBtn
                onClick={() => handleDecision("approved")}
                disabled={loading}
              >
                <IoMdCheckmarkCircleOutline size={16} className="icon" />
                {loading ? "Processing..." : "Approve"}
              </ApproveBtn>
            </>
          ) : (
            <StatusMessage approved={isApproved}>
              This campaign has already been {campaign.Status}.
            </StatusMessage>
          )}
        </Footer>
      </Container>
    </Overlay>
  );
};

export default CampaignDetailsPendingModal;

/* ---------- STYLES ---------- */

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(17, 24, 39, 0.5);
  padding: 1rem;
`;

const Container = styled.div`
  background-color: white;
  border-radius: 0.75rem;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 26rem;
  height: auto;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  scroll-behavior: smooth;

  @media (min-width: 480px) {
    max-width: 28rem;
  }

  @media (min-width: 768px) {
    max-width: 32rem;
  }

  @media (min-width: 1024px) {
    max-width: 36rem;
  }

  @media (min-width: 1280px) {
    max-width: 40rem;
  }
`;

const Header = styled.div`
  padding: 1.5rem;
  border-bottom: 1px solid #f3f4f6;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const Title = styled.h2`
  font-size: 1.1rem;
  color: #0a0a0a;
  font-weight: 700;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 0.85rem;
  color: #717182;
  margin-top: 0.3rem;

  @media (min-width: 768px) {
    font-size: 0.9rem;
  }
`;

const CloseBtn = styled.button`
  padding: 0.4rem;
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
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  overflow-y: auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem 0.8rem;

  @media (min-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Detail = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.p`
  color: #6b7280;
  font-size: 0.85rem;
  font-weight: 500;
`;

const Value = styled.p`
  color: #1f2937;
  font-weight: 600;
  margin-top: 0.15rem;
  font-size: 0.9rem;
`;

const NGOSection = styled.div`
  padding-top: 1rem;
  border-top: 1px solid #f3f4f6;
`;

const SectionTitle = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.4rem;
`;

const NGOInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const NGOName = styled.p`
  font-size: 0.9rem;
  color: #374151;
  font-weight: 600;
`;

const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.75rem;
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
  padding: 1rem;
  border-top: 1px solid #f3f4f6;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.6rem;
  background-color: #f9fafb;

  @media (min-width: 480px) {
    flex-direction: row;
    justify-content: flex-end;
  }
`;

const BaseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 600;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  .icon {
    margin-right: 0.5rem;
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

  .icon {
    color: black;
    transform: rotate(45deg);
  }

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

const StatusMessage = styled.span`
  font-weight: 600;
  text-align: right;
  color: ${({ approved }) => (approved ? "#16a34a" : "#dc2626")};
`;
