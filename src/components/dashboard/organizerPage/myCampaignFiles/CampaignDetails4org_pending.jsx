import React, { useEffect, useState } from "react";
import { Container } from "../../../../style/CampaignDetail4orgStyle";
import { TbHeartFilled, TbHeartPlus } from "react-icons/tb";
import Button from "../../../common/Button";
import { BsGift } from "react-icons/bs";
import { useNavigate, useLocation } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { getCampaignMilestones } from "../../../../api/campaignDeatils";
import PendingMilestone from "./PendingMilestone";
import axios from "axios";
import { toast } from "react-toastify";
import styled, { keyframes } from "styled-components";

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

const CampaignDetails4org_pending = () => {
  const [campaignData, setCampaignData] = useState(null);
  const [showMilestone, setShowMilestone] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [topDonors, setTopDonors] = useState([]);
  const [allDonors, setAllDonors] = useState([]);
  const [loadingTopDonors, setLoadingTopDonors] = useState(true);
  const [loadingAllDonors, setLoadingAllDonors] = useState(true);

  const nav = useNavigate();
  const location = useLocation();
  const campaign = location.state?.campaign;
  const token = useSelector((state) => state.auth.user?.token);
  const VITE_Payemt_BaseUrl = import.meta.env.VITE_Payemt_BaseUrl;

  useEffect(() => {
    const fetchCampaignMilestones = async () => {
      if (!campaign?._id) {
        setError("No campaign ID found.");
        setLoading(false);
        return;
      }

      try {
        const data = await getCampaignMilestones(campaign._id, token);
        setCampaignData(data);
      } catch (err) {
        setError(
          err.response?.data?.message || "Failed to load campaign details."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchCampaignMilestones();
  }, [campaign, token]);

  useEffect(() => {
    const fetchAllDonors = async () => {
      if (!campaign?._id) return;
      try {
        setLoadingAllDonors(true);
        const res = await axios.get(
          `${VITE_Payemt_BaseUrl}/campaign/${campaign._id}/donations`,
          { headers: { Authorization: `Bearer ${token}` } }
        );

        if (res?.data?.statusCode) {
          const donorsRaw = res.data.data;
          const donorsMap = {};

          donorsRaw.forEach((d) => {
            const donorId = d.donor?._id || "N/A";
            const donorName = d.donor?.name?.trim() || "Anonymous";
            if (!donorsMap[donorId]) {
              donorsMap[donorId] = {
                donorId,
                donorName,
                totalDonated: d.amount || 0,
                donationCount: 1,
              };
            } else {
              donorsMap[donorId].totalDonated += d.amount || 0;
              donorsMap[donorId].donationCount += 1;
            }
          });

          const allDonorsList = Object.values(donorsMap);
          const top3 = allDonorsList
            .sort((a, b) => b.totalDonated - a.totalDonated)
            .slice(0, 3);

          setAllDonors(allDonorsList);
          setTopDonors(top3);
        } else {
          toast.error(res?.data?.message || "Failed to load donors");
        }
      } catch (err) {
        console.error("Donors error:", err?.response?.data);
        toast.error("Unable to fetch donors");
      } finally {
        setLoadingAllDonors(false);
        setLoadingTopDonors(false);
      }
    };
    fetchAllDonors();
  }, [campaign, token, VITE_Payemt_BaseUrl]);

  if (loading) return <Spinner />;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!campaignData) return <p>No campaign data found.</p>;

  const { campaign: campaignInfo, milestones } = campaignData;

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
            <p>{campaignInfo?.campaignCategory || "Untitled Campaign"}</p>
            <div className="img_holder">
              <img
                src={
                   campaignInfo?.campaignCoverImageOrVideo?.imageUrl 
                 
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
                <p className="title">{campaignInfo?.campaignTitle}</p>
                <p className="comment">{campaignInfo?.campaignDescription}</p>
                <p className="date">
                  Created{" "}
                  {campaignInfo?.createdAt
                    ? new Date(campaignInfo.createdAt).toLocaleDateString()
                    : "Unknown date"}
                </p>

                <div className="react_holder">
                  <TbHeartPlus className="hrt_" />
                  <p>React</p>
                  <TbHeartFilled className="hrt_filled" />{" "}
                  <p>{campaignInfo?.likes || 0}</p>
                </div>
              </div>
            ) : (
              <PendingMilestone milestones={milestones} />
            )}

         
          </div>
        </div>

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
              allDonors.map((donor) => (
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
              ))
            )}
          </div>
        </div>
      </article>
    </Container>
  );
};

export default CampaignDetails4org_pending;
