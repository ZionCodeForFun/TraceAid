import React, { useState } from "react";
import HeaderNav from "./HeaderNav";
import Footer from "./Footer.jsx";
import {
  CampaignDetailSection,
  CampaignTop,
  CampaignLeft,
  CampaignRight,
  DonationBox,
  AmountButtons,
  ProgressBar,
  DonationForm,
  DonorSection,
  DonorItem,
  MilestoneContainer,
  TabHeader,
  MilestoneList,
  MilestoneItem,
} from "./CampaignDetailsStyled.jsx";

import CampaignImage from "../assets/Rectangle 1.png";

const CampaignDetails = () => {
  const [activeTab, setActiveTab] = useState("details");
  const [donationAmount, setDonationAmount] = useState("");

  const handleAmountClick = (amount) => {
    setDonationAmount(amount);
  };

  const formatAmount = (num) => "₦" + num.toLocaleString();

  return (
    <CampaignDetailSection>
      <HeaderNav />

      <CampaignTop>
        <CampaignLeft>
          <h2>Stationery for the children of Makoko nursery school</h2>

          <div className="org">
            <img src="/logo512.png" alt="Org Logo" />
            <span>Slum2School Africa</span>
          </div>

          <img
            src={CampaignImage}
            alt="Makoko children"
            className="campaign-image"
          />

          <MilestoneContainer>
            <div className="tabs">
              <TabHeader
                active={activeTab === "details"}
                onClick={() => setActiveTab("details")}
              >
                Campaign details
              </TabHeader>
              <TabHeader
                active={activeTab === "milestones"}
                onClick={() => setActiveTab("milestones")}
              >
                Milestones to be achieved
              </TabHeader>
            </div>

            {activeTab === "milestones" && (
              <MilestoneList>
                {[1, 2, 3].map((num) => (
                  <MilestoneItem key={num}>
                    <div className="number">{num}</div>
                    <div className="content">
                      <h4>Acquire 500 school bags</h4>
                      <p className="desc">
                        This item is the first item to be purchased so
                        stationery items can be packed into the bags. These bags
                        will be distributed to students.
                      </p>
                      <p>
                        <strong>Completion date:</strong> October 17, 2024
                      </p>
                      <p>
                        <strong>Amount disbursed:</strong> ₦2,200,000
                      </p>
                    </div>
                  </MilestoneItem>
                ))}
              </MilestoneList>
            )}
          </MilestoneContainer>
        </CampaignLeft>

        <CampaignRight>
          <h3>Donate to this cause</h3>

          <DonationBox>
            <div className="donation-summary">
              <div className="goal-info">
                <p>
                  <strong>Goal:</strong> ₦5,000,000
                </p>
                <p>
                  <strong>Raised:</strong> ₦2,500,000
                </p>
              </div>

              <ProgressBar>
                <div className="progress" style={{ width: "50%" }}></div>
              </ProgressBar>

              <small>6k Donors</small>
            </div>

            <div className="donation-actions">
              <h4>Select amount to donate</h4>

              <AmountButtons>
                {[5000, 1000, 10000, 50000, 100000, 200000].map((amt) => (
                  <div
                    key={amt}
                    className={`amount-box ${
                      donationAmount === formatAmount(amt) ? "active" : ""
                    }`}
                    onClick={() => handleAmountClick(formatAmount(amt))}
                  >
                    <p>Donate</p>
                    <h3>{formatAmount(amt)}</h3>
                  </div>
                ))}
              </AmountButtons>

              <DonationForm>
                <h4>Donation amount</h4>
                <input
                  type="text"
                  value={donationAmount}
                  onChange={(e) => setDonationAmount(e.target.value)}
                  placeholder="₦0.00"
                />

                <h4>Full name*</h4>
                <input type="text" placeholder="Enter full name" />
                <label>
                  <input type="checkbox" /> Don't display my name
                </label>

                <h4>Email address</h4>
                <input type="email" placeholder="example@traceaid.com" />
                <label>
                  <input type="checkbox" /> Receive milestone achievement email
                </label>

                <button>Donate</button>
              </DonationForm>
            </div>

            <DonorSection>
              <h4>Top Donors</h4>
              {[1, 2, 3].map((n) => (
                <DonorItem key={n}>
                  <div className="icon">💚</div>
                  <div>
                    <span>Sola Lawson</span>
                    <p>Donated ₦2,000 to this campaign</p>
                  </div>
                </DonorItem>
              ))}
              <button className="view-all">View all donors</button>
            </DonorSection>
          </DonationBox>
        </CampaignRight>

        {/* <CampaignRight>
          <h3>Donate to this cause</h3>
          <DonationBox>
            <div className="goal-info">
              <p>
                <strong>Goal:</strong> ₦5,000,000
              </p>
              <p>
                <strong>Raised:</strong> ₦2,500,000
              </p>
            </div>

            <ProgressBar>
              <div className="progress" style={{ width: "50%" }}></div>
            </ProgressBar>
            <small>6k Donors</small>

            <h4>Select amount to donate</h4>
            <AmountButtons>
              {[5000, 1000, 10000, 50000, 100000, 200000].map((amt) => (
                <div
                  key={amt}
                  className={`amount-box ${
                    donationAmount === formatAmount(amt) ? "active" : ""
                  }`}
                  onClick={() => handleAmountClick(formatAmount(amt))}
                >
                  <p>Donate</p>
                  <h3>{formatAmount(amt)}</h3>
                </div>
              ))}
            </AmountButtons>

            <DonationForm>
              <h4>Donation amount</h4>
              <input
                type="text"
                value={donationAmount}
                onChange={(e) => setDonationAmount(e.target.value)}
                placeholder="₦0.00"
              />
              <h4>Full name*</h4>
              <input type="text" placeholder="Enter full name" />
              <label>
                <input type="checkbox" /> Don't display my name
              </label>
              <h4>Email address</h4>
              <input type="email" placeholder="example@traceaid.com" />
              <label>
                <input type="checkbox" /> Receive milestone achievement email
              </label>
              <button>Donate</button>
            </DonationForm>
            
            <DonorSection>
              <h4>Top Donors</h4>
              {[1, 2, 3].map((n) => (
                <DonorItem key={n}>
                  <div className="icon">💚</div>
                  <div>
                    <span>Sola Lawson</span>
                    <p>Donated ₦2,000 to this campaign</p>
                  </div>
                </DonorItem>
              ))}
              <button className="view-all">View all donors</button>
            </DonorSection>
          </DonationBox>
        </CampaignRight> */}
      </CampaignTop>

      <Footer />
    </CampaignDetailSection>
  );
};

export default CampaignDetails;

// import React, { useState } from "react";
// import HeaderNav from "./HeaderNav";
// import Footer from "./Footer.jsx";

// import {
//   CampaignDetailSection,
//   CampaignTop,
//   CampaignLeft,
//   CampaignRight,
//   DonationBox,
//   AmountButtons,
//   ProgressBar,
//   DonationForm,
//   DonorSection,
//   DonorItem,
//   MilestoneContainer,
//   TabHeader,
//   MilestoneList,
//   MilestoneItem,
// } from "./CampaignDetailsStyled.jsx";

// import CampaignIamge from "../assets/Rectangle 1.png";

// const CampaignDetails = () => {
//   const [activeTab, setActiveTab] = useState("details");
//   const [donationAmount, setDonationAmount] = useState("");

//   const handleAmountClick = (amount) => {
//     setDonationAmount(amount);
//   };

//   const formatAmount = (num) => {
//     return "₦" + num.toLocaleString();
//   };

//   return (
//     <CampaignDetailSection>
//       <HeaderNav />

//       <CampaignTop>
//         <CampaignLeft>
//           <h2>Stationery for the children of Makoko nursery school</h2>

//           <div className="org">
//             <img src="/logo512.png" alt="Org Logo" />
//             <span>Slum2School Africa</span>
//           </div>

//           <img
//             src={CampaignIamge}
//             alt="Makoko children"
//             className="campaign-image"
//           />

//           <MilestoneContainer>
//             <div className="tabs">
//               <TabHeader
//                 active={activeTab === "details"}
//                 onClick={() => setActiveTab("details")}
//               >
//                 Campaign details
//               </TabHeader>
//               <TabHeader
//                 active={activeTab === "milestones"}
//                 onClick={() => setActiveTab("milestones")}
//               >
//                 Milestones to be achieved
//               </TabHeader>
//             </div>

//             {activeTab === "milestones" && (
//               <MilestoneList>
//                 {[1, 2, 3].map((num) => (
//                   <MilestoneItem key={num}>
//                     <div className="number">{num}</div>
//                     <div className="content">
//                       <h4>Acquire 500 school bags</h4>
//                       <p className="desc">
//                         This item is the first item to be purchased so
//                         stationery items can be packed into the bags. These bags
//                         will be distributed to students.
//                       </p>
//                       <p>
//                         <strong>Completion date:</strong> October 17, 2024
//                       </p>
//                       <p>
//                         <strong>Amount disbursed:</strong> ₦2,200,000
//                       </p>
//                     </div>
//                   </MilestoneItem>
//                 ))}
//               </MilestoneList>
//             )}
//           </MilestoneContainer>
//         </CampaignLeft>

//         <CampaignRight>
//           <h3>Donate to this cause</h3>
//           <DonationBox>
//             <div className="goal-info">
//               <p>
//                 <strong>Goal:</strong> ₦5,000,000
//               </p>
//               <p>
//                 <strong>Raised:</strong> ₦2,500,000
//               </p>
//             </div>

//             <ProgressBar>
//               <div className="progress" style={{ width: "50%" }}></div>
//             </ProgressBar>
//             <small>6k Donors</small>

//             <h4>Select amount to donate</h4>
//             <AmountButtons>
//               {[5000, 1000, 10000, 50000, 100000, 200000].map((amt) => (
//                 <div
//                   key={amt}
//                   className={`amount-box ${
//                     donationAmount === formatAmount(amt) ? "active" : ""
//                   }`}
//                   onClick={() => handleAmountClick(formatAmount(amt))}
//                 >
//                   <p>Donate</p>
//                   <h3>{formatAmount(amt)}</h3>
//                 </div>
//               ))}
//             </AmountButtons>

//             <DonationForm>
//               <h4>Donation amount</h4>
//               <input
//                 type="text"
//                 value={donationAmount}
//                 onChange={(e) => setDonationAmount(e.target.value)}
//                 placeholder="₦0.00"
//               />
//               <h4>Full name*</h4>
//               <input type="text" placeholder="Enter full name" />
//               <label>
//                 <input type="checkbox" /> Don't display my name
//               </label>
//               <h4>Email address</h4>
//               <input type="email" placeholder="example@traceaid.com" />
//               <label>
//                 <input type="checkbox" /> Receive milestone achievement email
//               </label>
//               <button>Donate</button>
//             </DonationForm>

//             <DonorSection>
//               <h4>Top Donors</h4>
//               {[1, 2, 3].map((n) => (
//                 <DonorItem key={n}>
//                   <div className="icon">💚</div>
//                   <div>
//                     <span>Sola Lawson</span>
//                     <p>Donated ₦2,000 to this campaign</p>
//                   </div>
//                 </DonorItem>
//               ))}
//               <button className="view-all">View all donors</button>
//             </DonorSection>
//           </DonationBox>
//         </CampaignRight>
//       </CampaignTop>

//       <Footer />
//     </CampaignDetailSection>
//   );
// };

// export default CampaignDetails;
