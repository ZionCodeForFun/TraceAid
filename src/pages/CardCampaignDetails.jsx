import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import HeaderNav from "./HeaderNav";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { IoArrowBack } from "react-icons/io5";
import ShareModal from "./ShareModal";
import EvidenceModal from "./EvidenceModal";

import {
  CardWrapper,
  CardTop,
  CardLeft,
  CardRight,
  TabContainer,
  TabButton,
  MilestoneBlock,
  MilestoneCard,
  DonorContainer,
  DonorCard,
} from "./CardCampaignDetailsStyled";

const CardCampaignDetails = () => {
  const nav = useNavigate();
  const { id } = useParams();
  const token = useSelector((state) => state?.auth?.token);

  const [campaign, setCampaign] = useState(null);
  const [milestones, setMilestones] = useState([]);
  const [activeTab, setActiveTab] = useState("details");

  const [topDonors, setTopDonors] = useState([]);
  const [allDonors, setAllDonors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingDonors, setLoadingDonors] = useState(true);

  const [isShareOpen, setIsShareOpen] = useState(false);

  const [isEvidenceOpen, setIsEvidenceOpen] = useState(false);
  const [evidenceLoading, setEvidenceLoading] = useState(false);
  const [evidenceList, setEvidenceList] = useState([]);

  const VITE_campaignBaseUrl = import.meta.env.VITE_campaignBaseUrl;
  const VITE_Payemt_BaseUrl = import.meta.env.VITE_Payemt_BaseUrl;

  const formatAmount = (num) => "₦" + Number(num || 0).toLocaleString();

  const getInitials = (name) => {
    if (!name) return "AN";
    const parts = name.trim().split(" ").filter(Boolean);
    return parts
      .map((p) => p[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
  };

  const timeAgo = (date) => {
    if (!date) return "";
    const now = new Date();
    const past = new Date(date);
    const diff = Math.floor((now - past) / (1000 * 60 * 60 * 24));
    if (diff === 0) return "Today";
    if (diff === 1) return "1d ago";
    return `${diff}d ago`;
  };

  const handleRecordShare = async (channel) => {
    try {
      await axios.patch(
        `https://traceaid.onrender.com/engagement/api/v1/recordShare/${campaign._id}`,
        {
          channel,
          userCaption: "Shared this campaign on " + channel,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
    } catch (error) {
      console.log("Share error:", error?.response?.data || error);
    }
  };

  const fetchCampaignDetails = async () => {
    try {
      const res = await axios.get(
        `${VITE_campaignBaseUrl}/get-campaign-and-milestones/${id}`
      );
      const { campaign, milestones } = res.data?.data || {};
      setCampaign(campaign);
      setMilestones(Array.isArray(milestones) ? milestones : []);
    } catch {
      toast.error("Failed to load campaign details");
    } finally {
      setLoading(false);
    }
  };

  const fetchDonors = async () => {
    try {
      setLoadingDonors(true);
      const res = await axios.get(
        `${VITE_Payemt_BaseUrl}/campaign/${id}/donations/all`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const donations = Array.isArray(res?.data?.data) ? res.data.data : [];

      const sorted = [...donations].sort((a, b) => b.amount - a.amount);
      setTopDonors(sorted.slice(0, 3));
      setAllDonors(donations.slice(0, 6));
    } catch {
      toast.error("Failed to fetch donors");
    } finally {
      setLoadingDonors(false);
    }
  };

  const fetchEvidence = async () => {
    try {
      const res = await axios.get(
        `https://traceaid.onrender.com/admin/api/v1/campaigns-with-milestones-and-evidence/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const record = res.data?.data;

      if (!record || !Array.isArray(record.milestones)) {
        setEvidenceList([]);
        setIsEvidenceOpen(true);
        return;
      }

      const flattened = [];

      record.milestones.forEach((milestone) => {
        if (Array.isArray(milestone.evidences)) {
          milestone.evidences.forEach((ev) => {
            flattened.push({
              url: ev.imageUrl,
              milestoneTitle: milestone.milestoneTitle,
              status: ev.status,
              uploadedAt: ev.uploadedAt,
              milestoneDescription: m.milestoneDescription,
            });
          });
        }
      });

      setEvidenceList(flattened);
      setIsEvidenceOpen(true);
    } catch (error) {
      console.log("Evidence fetch error:", error.response?.data || error);
      toast.error("Failed to load campaign evidence");
    }
  };

  const handleOpenEvidence = async () => {
    setEvidenceLoading(true);
    setIsEvidenceOpen(true);

    await new Promise((r) => setTimeout(r, 50));

    await fetchEvidence();

    setEvidenceLoading(false);
  };

  useEffect(() => {
    if (id) {
      fetchCampaignDetails();
      fetchDonors();
    }
  }, [id]);

  if (loading) {
    return (
      <CardWrapper>
        <HeaderNav />
        <Skeleton height={400} />
        <Footer />
      </CardWrapper>
    );
  }

  if (!campaign)
    return <p style={{ textAlign: "center" }}>Campaign not found.</p>;

  return (
    <CardWrapper>
      <HeaderNav />

      <CardTop>
        <CardLeft>
          <div className="back-button" onClick={() => nav(-1)}>
            <IoArrowBack size={22} />
            <span>Go Back</span>
          </div>

          <h2>{campaign.campaignTitle}</h2>
          <img
            src={campaign.campaignCoverImageOrVideo?.imageUrl}
            alt={campaign.campaignTitle}
            className="cover-img"
          />

          <TabContainer>
            <div className="tab-buttons">
              <TabButton
                active={activeTab === "details"}
                onClick={() => setActiveTab("details")}
              >
                Campaign details
              </TabButton>

              {milestones.length > 0 && (
                <TabButton
                  active={activeTab === "milestones"}
                  onClick={() => setActiveTab("milestones")}
                >
                  Milestones
                </TabButton>
              )}
            </div>

            {activeTab === "details" && (
              <div className="tab-body">
                <h4>{campaign.campaignCategory}</h4>
                <p>{campaign.campaignDescription}</p>
                <small>
                  Created{" "}
                  {Math.floor(
                    (Date.now() - new Date(campaign.createdAt)) /
                      (1000 * 60 * 60 * 24)
                  )}{" "}
                  days ago.
                </small>
              </div>
            )}

            {activeTab === "milestones" && (
              <MilestoneBlock>
                {milestones.map((m, index) => (
                  <MilestoneCard key={m._id || index}>
                    <div className="num">{index + 1}</div>
                    <div className="info">
                      <h4>{m.milestoneTitle}</h4>
                      <p>{m.milestoneDescription}</p>
                      {m.targetAmount && (
                        <p>
                          <strong>Target:</strong>{" "}
                          {formatAmount(m.targetAmount)}
                        </p>
                      )}
                    </div>
                  </MilestoneCard>
                ))}
              </MilestoneBlock>
            )}
          </TabContainer>

          <button className="share-btn" onClick={() => setIsShareOpen(true)}>
            Share Campaign
          </button>
          <button className="share-btn" onClick={handleOpenEvidence}>
            {evidenceLoading ? "Loading..." : "View Evidence"}
          </button>
        </CardLeft>

        <ShareModal
          open={isShareOpen}
          onClose={() => setIsShareOpen(false)}
          campaign={campaign}
          onRecordShare={handleRecordShare}
        />

        <EvidenceModal
          open={isEvidenceOpen}
          onClose={() => setIsEvidenceOpen(false)}
          evidence={evidenceList}
          loading={evidenceLoading}
        />

        <CardRight>
          <DonorContainer>
            <h4>Top Donors</h4>
            {loadingDonors ? (
              <Skeleton count={3} />
            ) : topDonors.length > 0 ? (
              topDonors.map((d, i) => {
                const donor = d.donor || {};
                const fullName =
                  `${donor.firstName || ""} ${donor.lastName || ""}`.trim() ||
                  "Anonymous";

                return (
                  <DonorCard key={i}>
                    <div className="avatar">{getInitials(fullName)}</div>
                    <div className="details">
                      <span>{fullName}</span>
                      <p>Donated {formatAmount(d.amount)}</p>
                    </div>
                  </DonorCard>
                );
              })
            ) : (
              <p>No top donors yet.</p>
            )}
          </DonorContainer>

          <DonorContainer>
            <h4>All Donors</h4>

            {loadingDonors ? (
              <Skeleton count={5} />
            ) : allDonors.length > 0 ? (
              allDonors.map((d, i) => {
                const donor = d.donor || {};
                const fullName =
                  `${donor.firstName || ""} ${donor.lastName || ""}`.trim() ||
                  "Anonymous";

                return (
                  <DonorCard key={i}>
                    <div className="avatar">{getInitials(fullName)}</div>
                    <div className="details">
                      <span>{fullName}</span>
                      <p>
                        Donated {formatAmount(d.amount)} ·{" "}
                        {timeAgo(d.createdAt)}
                      </p>
                    </div>
                  </DonorCard>
                );
              })
            ) : (
              <p>No donors yet.</p>
            )}

            {allDonors.length >= 6 && (
              <button
                className="view-btn"
                onClick={() => nav(`/campaign/${id}/donors`)}
              >
                View more
              </button>
            )}
          </DonorContainer>
        </CardRight>
      </CardTop>

      <Footer />
    </CardWrapper>
  );
};

export default CardCampaignDetails;
