import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import HeaderNav from "./HeaderNav";
import Footer from "./Footer.jsx";
import "react-loading-skeleton/dist/skeleton.css";
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

const CampaignDetails = () => {
  const { id } = useParams();

  const [campaign, setCampaign] = useState(null);
  const [milestones, setMilestones] = useState([]);
  const [activeTab, setActiveTab] = useState("details");
  const [donationAmount, setDonationAmount] = useState("");
  const [loading, setLoading] = useState(true);
  const [errText, setErrText] = useState("");

  const VITE_campaignBaseUrl = import.meta.env.VITE_campaignBaseUrl;

  const fetchCampaignDetails = async () => {
  try {
    setLoading(true);
    setErrText("");

    const res = await axios.get(
      `${VITE_campaignBaseUrl}/get-campaign-and-milestones/${id}`
    );

    console.log("Campaign details response:", res.data);

    const { campaign, milestones } = res.data?.data || {};
    setCampaign(campaign || null);
    setMilestones(Array.isArray(milestones) ? milestones : []);
  } catch (e) {
    console.error(e);
    setErrText("Failed to load campaign details.");
  } finally {
    setLoading(false);
  }
};


  useEffect(() => {
    if (id) fetchCampaignDetails();
  }, [id]);

  const formatAmount = (num) => "₦" + (Number(num || 0)).toLocaleString();
  const handleAmountClick = (amount) => setDonationAmount(amount);

  if (loading) return <p style={{ textAlign: "center" }}>Loading campaign...</p>;
  if (errText) return <p style={{ textAlign: "center", color: "red" }}>{errText}</p>;
  if (!campaign) return <p style={{ textAlign: "center" }}>Campaign not found.</p>;

  const goal = campaign.totalCampaignGoalAmount || 0;
  const raised = campaign.amountRaised || 0;
  const donors = campaign.donorCount || 0;
  const progress = campaign.progressPercentage || 0;

  return (
    <CampaignDetailSection>
      <HeaderNav />

      <CampaignTop>

        <CampaignLeft>
          <h2>{campaign.campaignTitle}</h2>

          <div className="org">
            <span>{campaign.fundraiser?.name || "—"}</span>
          </div>

          <img
            src={campaign.campaignCoverImageOrVideo?.imageUrl}
            alt={campaign.campaignTitle}
            className="campaign-image"
          />

          <MilestoneContainer>
            <div className="tabs">
              <TabHeader
                type="button"
                active={activeTab === "details"}
                onClick={() => setActiveTab("details")}
              >
                Campaign details
              </TabHeader>

              {milestones.length > 0 && (
                <TabHeader
                  type="button"
                  active={activeTab === "milestones"}
                  onClick={() => setActiveTab("milestones")}
                >
                  Milestones to be achieved
                </TabHeader>
              )}
            </div>

            {activeTab === "details" && (
              <div style={{ marginTop: "0.9rem", color: "#333", lineHeight: 1.6 }}>
                {campaign.campaignDescription}
              </div>
            )}

            {activeTab === "milestones" && milestones.length > 0 && (
              <MilestoneList>
                {milestones.map((m, index) => (
                  <MilestoneItem key={m._id || index}>
                    <div className="number">{index + 1}</div>
                    <div className="content">
                      <h4>{m.milestoneTitle}</h4>
                      <p className="desc">{m.milestoneDescription}</p>
                      {typeof m.targetAmount === "number" && (
                        <p>
                          <strong>Target Amount:</strong> {formatAmount(m.targetAmount)}
                        </p>
                      )}
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
                  <strong>Goal</strong>
                  {formatAmount(goal)}
                </p>
                <p>
                  <strong>Raised</strong>
                  {formatAmount(raised)}
                </p>
              </div>

              <ProgressBar>
                <div className="progress" style={{ width: `${progress}%` }} />
              </ProgressBar>

              <small>{donors.toLocaleString()} Donors</small>
            </div>

            <div className="donation-actions">
              <h4>Select amount to donate</h4>

              <AmountButtons>
                {[5000, 10000, 50000, 100000, 200000, 500000].map((amt) => {
                  const label = formatAmount(amt);
                  return (
                    <div
                      key={amt}
                      className={`amount-box ${donationAmount === label ? "active" : ""}`}
                      onClick={() => handleAmountClick(label)}
                    >
                      <p>Donate</p>
                      <h3>{label}</h3>
                    </div>
                  );
                })}
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
                    <span>Anonymous</span>
                    <p>Donated {formatAmount(2000)}</p>
                  </div>
                </DonorItem>
              ))}
              <button className="view-all">View all donors</button>
            </DonorSection>
          </DonationBox>
        </CampaignRight>
      </CampaignTop>

      <Footer />
    </CampaignDetailSection>
  );
};

export default CampaignDetails;
