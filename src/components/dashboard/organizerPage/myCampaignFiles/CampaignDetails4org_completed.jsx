import React, { useEffect, useState } from "react";
import { Container } from "../../../../style/CampaignDetail4orgStyle";
import { TbHeartFilled, TbHeartPlus } from "react-icons/tb";
import Button from "../../../common/Button";
import { BsGift } from "react-icons/bs";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import CompletedMilestone from "./CompletedMilestone";
import { IoArrowBackOutline } from "react-icons/io5";
import candlewoman from "../../../../assets/candlewoman.jpg";
import axios from "axios";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getCampaignMilestones } from "../../../../api/campaignDeatils";

const CampaignDetails4org_completed = () => {
  const [campaignData, setCampaignData] = useState(null);
  const [loadingCampaign, setLoadingCampaign] = useState(true);

  const [topDonors, setTopDonors] = useState([]);
  const [allDonors, setAllDonors] = useState([]);

  const [loadingTopDonors, setLoadingTopDonors] = useState(true);
  const [loadingAllDonors, setLoadingAllDonors] = useState(true);
  const [showMilestone, setShowMilestone] = useState(false);

  const { id } = useParams();
  const nav = useNavigate();
  const location = useLocation();
  const campaignFromState = location.state?.campaign;

  const token = useSelector((state) => state.auth.token);
  const VITE_Payemt_BaseUrl = import.meta.env.VITE_Payemt_BaseUrl;

  useEffect(() => {
    const fetchCampaign = async () => {
      if (!id && !campaignFromState?._id) return;
      try {
        const campaignId = id || campaignFromState._id;
        const data = await getCampaignMilestones(campaignId);
        setCampaignData(data);
      } catch (err) {
        console.error("Campaign fetch error:", err);
        toast.error("Failed to fetch campaign details");
      } finally {
        setLoadingCampaign(false);
      }
    };
    fetchCampaign();
  }, [id, campaignFromState]);

  useEffect(() => {
    const fetchAllDonors = async () => {
      if (!id && !campaignFromState?._id) return;
      try {
        setLoadingAllDonors(true);
        const campaignId = id || campaignFromState._id;
        const res = await axios.get(
          `${VITE_Payemt_BaseUrl}/campaign/${campaignId}/donations`,
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
  }, [id, campaignFromState, token, VITE_Payemt_BaseUrl]);

useEffect(() => {
  if (campaignData?.milestones) {
    console.log("Fetched milestones:", campaignData.milestones);
  }
}, [campaignData]);
  if (loadingCampaign) return <p>Loading campaign details...</p>;
  if (!campaignData) return <p>Failed to load campaign details.</p>;

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
            <p>{campaignInfo?.campaignTitle || "Campaign Title"}</p>
            <div className="img_holder">
              <img
                src={
                  campaignInfo?.campaignCoverImageOrVideo?.imageUrl ||
                  candlewoman
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
              <CompletedMilestone milestones={milestones} />
            )}

            <Button text="Share" className="share_btn" />
          </div>
        </div>

        <div className="right">
          <p className="p_top">Top Donors</p>
          <div className="top_right">
            {loadingTopDonors ? (
              <p>Loading top donors...</p>
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
              <p>Loading all donors...</p>
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

export default CampaignDetails4org_completed;
