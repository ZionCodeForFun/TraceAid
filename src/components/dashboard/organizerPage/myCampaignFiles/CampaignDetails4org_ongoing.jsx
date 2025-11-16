import React, { useEffect, useState } from "react";
import { Container } from "../../../../style/CampaignDetail4orgStyle";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import Button from "../../../common/Button";
import MilestoneTimeline from "./OngoingMilestone";
import { getCampaignMilestones } from "../../../../api/campaignDeatils";
import { BsGift } from "react-icons/bs";
import axios from "axios";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import styled, { keyframes } from "styled-components";
import ShareModal from "../../../../pages/ShareModal";
// Spinner animation
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Spinner = styled.div`
  border: 8px solid #f3f3f3;
  border-top: 8px solid #3498db;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: ${spin} 1s linear infinite;
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const CampaignDetails4org_ongoing = () => {
  const [campaignData, setCampaignData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showMilestone, setShowMilestone] = useState(false);
  const [topDonors, setTopDonors] = useState([]);
  const [loadingTopDonors, setLoadingTopDonors] = useState(true);
  const [allDonors, setAllDonors] = useState([]);
  const [loadingAllDonors, setLoadingAllDonors] = useState(true);
  const [isShareOpen, setIsShareOpen] = useState(false);

  const { id } = useParams();
  const nav = useNavigate();
  const location = useLocation();
  const campaignFromState = location.state?.campaign;

  const token = useSelector((state) => state.auth.token);
  const VITE_Payemt_BaseUrl = import.meta.env.VITE_Payemt_BaseUrl;

  useEffect(() => {
    const fetchCampaignData = async () => {
      if (!id && !campaignFromState?._id) return;
      try {
        const campaignId = id || campaignFromState._id;
        const data = await getCampaignMilestones(campaignId);
        setCampaignData(data);
      } catch (err) {
        console.error(err);
        toast.error("Failed to fetch campaign details");
      } finally {
        setLoading(false);
      }
    };
    fetchCampaignData();
  }, [id, campaignFromState]);

  useEffect(() => {
    const fetchTopDonors = async () => {
      if (!id && !campaignFromState?._id) return;
      try {
        setLoadingTopDonors(true);
        const campaignId = id || campaignFromState._id;
        const res = await axios.get(
          `${VITE_Payemt_BaseUrl}/campaign/donors/top/${campaignId}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        if (res?.data?.statusCode) {
          const donorsData = res.data.data.map((d) => ({
            ...d,
            donorName: d.donorName?.trim() || "Anonymous",
          }));
          setTopDonors(donorsData.slice(0, 3));
        } else {
          toast.error(res?.data?.message || "Failed to load top donors");
        }
      } catch (err) {
        console.error("Top donors error:", err?.response?.data);
        toast.error("Unable to fetch top donors");
      } finally {
        setLoadingTopDonors(false);
      }
    };
    fetchTopDonors();
  }, [id, campaignFromState, token, VITE_Payemt_BaseUrl]);

  useEffect(() => {
    const fetchAllDonors = async () => {
      if (!id && !campaignFromState?._id) return;
      try {
        setLoadingAllDonors(true);
        const campaignId = id || campaignFromState._id;
        const res = await axios.get(
          `${VITE_Payemt_BaseUrl}/campaign/${campaignId}/donations`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        if (res?.data?.statusCode) {
          const donorsData = res.data.data.map((d) => ({
            donorId: d.donor?._id || "N/A",
            donorName: d.donor?.name?.trim() || "Anonymous",
            totalDonated: d.amount || 0,
            donationCount: 1,
          }));
          setAllDonors(donorsData);
        } else {
          toast.error(res?.data?.message || "Failed to load all donors");
        }
      } catch (err) {
        console.error("All donors error:", err?.response?.data);
        toast.error("Unable to fetch all donors");
      } finally {
        setLoadingAllDonors(false);
      }
    };
    fetchAllDonors();
  }, [id, campaignFromState, token, VITE_Payemt_BaseUrl]);

  const handleRecordShare = async (channel) => {
    try {
      const res = await axios.patch(
        `https://traceaid.onrender.com/engagement/api/v1/recordShare/${campaignInfo._id}`,
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

  if (loading) return <Spinner />;
  if (!campaignData) return <p>Failed to load campaign details.</p>;

  const { campaign: campaignInfo, milestones } = campaignData;

  const getInitials = (name) => {
    if (!name || !name.trim()) return "AN";
    const parts = name.trim().split(" ");
    if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
    return (parts[0].charAt(0) + parts[1].charAt(0)).toUpperCase();
  };

  return (
    <Container>
      <div className="goback">
        <div className="icon" onClick={() => nav("/organization/myCampaigns")}>
          <IoArrowBackOutline className="i" />
          <p>Go back</p>
        </div>
      </div>

      <article className="wrapper">
        <div className="left">
          <div className="top_left">
            <p>{campaignInfo?.campaignTitle}</p>
            <div className="img_holder">
              <img
                src={
                  campaignInfo?.campaignCoverImageOrVideo?.imageUrl ||
                  "/default.png"
                }
                alt="Campaign visual"
              />
            </div>
          </div>

          <div className="down_left">
            <div className="btn_nav">
              <p
                onClick={() => setShowMilestone(false)}
                className={`btn_left ${!showMilestone ? "active" : ""}`}
              >
                Campaign details
              </p>
              <p
                onClick={() => setShowMilestone(true)}
                className={`btn_right ${showMilestone ? "active" : ""}`}
              >
                Milestones
              </p>
            </div>

            {!showMilestone ? (
              <div className="coment_holder">
                <p className="title">{campaignInfo?.status}</p>
                <p className="comment">{campaignInfo?.campaignDescription}</p>
                <p className="date">
                  Duration: {campaignInfo?.durationDays} days
                </p>
                <p className="date">
                  Goal: ₦
                  {campaignInfo?.totalCampaignGoalAmount?.toLocaleString()}
                </p>
              </div>
            ) : (
              <MilestoneTimeline milestones={milestones} />
            )}

            <Button
              text="Share"
              className="share_btn"
              onClick={() => setIsShareOpen(true)}
            />
          </div>
        </div>
        <ShareModal
          open={isShareOpen}
          onClose={() => setIsShareOpen(false)}
          campaign={campaignInfo}
          onRecordShare={handleRecordShare}
        />

        <div className="right">
          <p className="p_top">Top Donors</p>
          <div className="top_right">
            {loadingTopDonors ? (
              <Spinner />
            ) : topDonors.length === 0 ? (
              <p>No donors yet.</p>
            ) : (
              topDonors.map((donor) => (
                <div key={donor.donorId} className="name_holder">
                  <i>
                    <BsGift />
                  </i>
                  <div className="name">
                    <p>{donor.donorName}</p>
                    <p>
                      Donated ₦{donor.totalDonated?.toLocaleString()} |{" "}
                      {donor.donationCount}{" "}
                      {donor.donationCount > 1 ? "Donations" : "Donation"}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>

          <p className="p_all">All Donors</p>
          <div className="down_right">
            {loadingAllDonors ? (
              <Spinner />
            ) : allDonors.length === 0 ? (
              <p>No donors yet.</p>
            ) : (
              allDonors.map((donor) => {
                const initials = getInitials(donor.donorName);
                return (
                  <div key={donor.donorId} className="name_holder">
                    <i>
                      <BsGift />
                    </i>
                    <div className="name">
                      <p>{donor.donorName}</p>
                      <p>
                        Donated ₦{donor.totalDonated?.toLocaleString() || "0"} |{" "}
                        {donor.donationCount}{" "}
                        {donor.donationCount > 1 ? "Donations" : "Donation"}
                      </p>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </article>
    </Container>
  );
};

export default CampaignDetails4org_ongoing;
