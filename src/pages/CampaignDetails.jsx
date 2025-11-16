import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import HeaderNav from "./HeaderNav";
import Footer from "./Footer.jsx";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ShareModal from "./ShareModal";
import EvidenceModal from "./EvidenceModal.jsx";
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
  const nav = useNavigate();
  const { id } = useParams();

  const token = useSelector((state) => state?.auth?.token);

  const [campaign, setCampaign] = useState(null);
  const [milestones, setMilestones] = useState([]);
  const [activeTab, setActiveTab] = useState("details");

  const [donationAmount, setDonationAmount] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(true);
  const [donating, setDonating] = useState(false);
  const [errText, setErrText] = useState("");

  const VITE_campaignBaseUrl = import.meta.env.VITE_campaignBaseUrl;
  const VITE_Payemt_BaseUrl = import.meta.env.VITE_Payemt_BaseUrl;

  const [topDonors, setTopDonors] = useState([]);
  const [loadingDonors, setLoadingDonors] = useState(true);
  const [isShareOpen, setIsShareOpen] = useState(false);

  const [isEvidenceOpen, setIsEvidenceOpen] = useState(false);
  const [evidenceLoading, setEvidenceLoading] = useState(false);
  const [evidenceFiles, setEvidenceFiles] = useState([]);

  const getInitials = (name) => {
    if (!name) return "A";
    const parts = name.split(" ");
    if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
    return parts[0][0].toUpperCase();
  };

  const fetchEvidence = async () => {
    try {
      const res = await axios.get(
        `https://traceaid.onrender.com/admin/api/v1/campaigns-with-milestones-and-evidence/${id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (res?.data?.statusCode) {
        const payload = res.data?.data;

        const milestones = payload?.milestones || [];

        const ev = milestones.flatMap((m) =>
          (m.evidences || []).map((e) => ({
            url: e.imageUrl,
            status: e.status,
            uploadedAt: e.uploadedAt,
            milestoneTitle: m.milestoneTitle,
            milestoneDescription: m.milestoneDescription,
          }))
        );

        setEvidenceFiles(ev);

        return ev;
      }
    } catch (err) {
      console.log("Evidence fetch error:", err?.response?.data || err);
    }
  };

  const handleOpenEvidence = async () => {
  setEvidenceLoading(true);
  setIsEvidenceOpen(true);   

  await fetchEvidence();    

  setEvidenceLoading(false); 
};

  const fetchCampaignDetails = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `${VITE_campaignBaseUrl}/get-campaign-and-milestones/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (res?.data?.statusCode) {
        const campaignData = res.data.data?.campaign;
        const milestoneList = res.data.data?.milestones || [];

        setCampaign(campaignData);
        setMilestones(milestoneList);
      } else {
        setErrText(res?.data?.message || "Failed to load campaign");
      }
    } catch (error) {
      console.log("Campaign fetch error:", error?.response?.data || error);
      setErrText("Unable to fetch campaign details.");
    } finally {
      setLoading(false);
    }
  };

  const handleRecordShare = async (channel) => {
    try {
      const res = await axios.patch(
        `https://traceaid.onrender.com/engagement/api/v1/recordShare/${campaign._id}`,
        {
          channel,
          userCaption: "Shared this campaign on " + channel,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      console.log("Share Recorded:", res.data);
    } catch (error) {
      console.log("Share error:", error?.response?.data || error);
    }
  };

  const fetchTopDonors = async () => {
    try {
      setLoadingDonors(true);

      const res = await axios.get(
        `${VITE_Payemt_BaseUrl}/campaign/donors/top/${id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      const topThree = Array.isArray(res.data?.data) ? res.data.data : [];

      setTopDonors(topThree);
    } catch (err) {
      console.error("Top donors error:", err?.response?.data || err);
      toast.error("Unable to fetch top donors");
    } finally {
      setLoadingDonors(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchCampaignDetails();
      fetchTopDonors();
    }
  }, [id]);

  const formatAmount = (num) => "₦" + Number(num || 0).toLocaleString();

  const handleAmountClick = (amount) => {
    setDonationAmount(formatAmount(amount));
  };

  const parseAmountToNumber = (val) => {
    if (!val) return 0;
    const numeric = String(val).replace(/[₦,\s]/g, "");
    const n = Number(numeric);
    return Number.isFinite(n) ? n : 0;
  };

  const handleDonate = async (e) => {
    e.preventDefault();

    const amountNumber = parseAmountToNumber(donationAmount);
    if (!amountNumber || amountNumber <= 0) {
      toast.error("Please enter a valid donation amount.");
      return;
    }

    if (!token) {
      toast.error("Please log in to donate.");
      return;
    }

    try {
      setDonating(true);

      const payload = {
        campaignId: id,
        amount: amountNumber,
        isAnonymous,
        message: message?.trim() || "Supporting this cause!",
      };

      const res = await axios.post(`${VITE_Payemt_BaseUrl}/donate`, payload, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const ok = res?.data?.statusCode === true;
      const checkoutUrl = res?.data?.data?.checkoutUrl;

      if (ok && checkoutUrl) {
        toast.success(
          res?.data?.message || "Donation initialized successfully."
        );
        window.location.href = checkoutUrl;
      } else {
        throw new Error(res?.data?.message || "Failed to initialize donation.");
      }
    } catch (err) {
      console.error("Donate error:", err);
      const msg =
        err?.response?.data?.message ||
        err?.message ||
        "Something went wrong. Please try again.";
      toast.error(msg);
    } finally {
      setDonating(false);
    }
  };

  if (loading) {
    return (
      <CampaignDetailSection>
        <HeaderNav />
        <CampaignTop>
          <CampaignLeft>
            <h2>
              <Skeleton width={300} height={25} />
            </h2>
            <Skeleton width={200} height={18} />
            <Skeleton height={300} style={{ marginTop: "1rem" }} />
            <Skeleton count={4} height={14} style={{ marginTop: "2rem" }} />
          </CampaignLeft>

          <CampaignRight>
            <h3>
              <Skeleton width={200} height={25} />
            </h3>
            <Skeleton height={200} />
            <Skeleton
              count={4}
              height={40}
              style={{ marginTop: "2rem", borderRadius: "8px" }}
            />
            <Skeleton width={120} height={35} style={{ marginTop: "2rem" }} />
          </CampaignRight>
        </CampaignTop>
        <Footer />
      </CampaignDetailSection>
    );
  }

  if (errText)
    return <p style={{ textAlign: "center", color: "red" }}>{errText}</p>;
  if (!campaign)
    return <p style={{ textAlign: "center" }}>Campaign not found.</p>;

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
            <span>{campaign.campaignCategory || "—"}</span>
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
              <div
                style={{ marginTop: "0.9rem", color: "#333", lineHeight: 1.6 }}
              >
                {campaign.campaignDescription}
              </div>
            )}

            {activeTab === "milestones" && (
              <MilestoneList>
                {milestones.map((m, index) => (
                  <MilestoneItem key={m._id || index}>
                    <div className="number">{index + 1}</div>
                    <div className="content">
                      <h4>{m.milestoneTitle}</h4>
                      <p className="desc">{m.milestoneDescription}</p>
                      {typeof m.targetAmount === "number" && (
                        <p>
                          <strong>Target Amount:</strong>{" "}
                          {formatAmount(m.targetAmount)}
                        </p>
                      )}
                    </div>
                  </MilestoneItem>
                ))}
              </MilestoneList>
            )}
          </MilestoneContainer>

          <button className="share-btn" onClick={() => setIsShareOpen(true)}>
            Share Campaign
          </button>

          <button className="evidence-btn" onClick={handleOpenEvidence}>
            {evidenceLoading ? "Loading..." : "View Evidence"}
          </button>
        </CampaignLeft>

        <ShareModal
          open={isShareOpen}
          onClose={() => setIsShareOpen(false)}
          campaign={campaign}
          onRecordShare={handleRecordShare}
        />

        <EvidenceModal
          open={isEvidenceOpen}
          onClose={() => setIsEvidenceOpen(false)}
          evidence={evidenceFiles}
          loading={evidenceLoading}
        />

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
                {[5000, 1000, 10000, 50000, 100000, 200000].map((amt) => {
                  const label = formatAmount(amt);
                  return (
                    <div
                      key={amt}
                      className={`amount-box ${
                        donationAmount === label ? "active" : ""
                      }`}
                      onClick={() => handleAmountClick(amt)}
                    >
                      <p>Donate</p>
                      <h3>{label}</h3>
                    </div>
                  );
                })}
              </AmountButtons>

              <form onSubmit={handleDonate}>
                <DonationForm>
                  <h4>Donation amount</h4>
                  <input
                    type="text"
                    value={donationAmount}
                    onChange={(e) => setDonationAmount(e.target.value)}
                    placeholder="₦0.00"
                  />

                  <h4>Full name*</h4>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Enter full name"
                  />

                  <label>
                    <input
                      type="checkbox"
                      checked={isAnonymous}
                      onChange={(e) => setIsAnonymous(e.target.checked)}
                    />{" "}
                    Don't display my name
                  </label>

                  <h4>Email address</h4>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="example@traceaid.com"
                  />

                  <h4>Message</h4>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Say something to encourage the campaign…"
                    style={{ resize: "vertical", width: "100%" }}
                  />

                  <button type="submit" disabled={donating}>
                    {donating ? "Initializing…" : "Donate"}
                  </button>
                </DonationForm>
              </form>
            </div>

            <DonorSection>
              <h4>Top Donors</h4>

              {loadingDonors ? (
                <>
                  {[1, 2, 3].map((n) => (
                    <DonorItem key={n}>
                      <div className="avatar-circle skeleton" />
                      <div className="text">
                        <span className="skeleton skeleton-text" />
                        <p className="skeleton skeleton-text" />
                      </div>
                    </DonorItem>
                  ))}
                </>
              ) : topDonors.length > 0 ? (
                topDonors.map((item, i) => {
                  const displayName = item.isAnonymous
                    ? "Anonymous"
                    : item.firstName?.trim() || item.lastName?.trim()
                    ? `${item.firstName} ${item.lastName}`.trim()
                    : item.donorName;

                  const initials = getInitials(displayName);

                  return (
                    <DonorItem key={i}>
                      <div className="avatar-circle">{initials}</div>
                      <div>
                        <span>{displayName}</span>

                        <p>Donated {formatAmount(item.totalDonated)}</p>
                      </div>
                    </DonorItem>
                  );
                })
              ) : (
                <p>No donors yet.</p>
              )}

              <button
                className="view-all"
                onClick={() => nav(`/campaign/${id}/donors`)}
              >
                View all donors
              </button>
            </DonorSection>
          </DonationBox>
        </CampaignRight>
      </CampaignTop>

      <Footer />
    </CampaignDetailSection>
  );
};

export default CampaignDetails;
