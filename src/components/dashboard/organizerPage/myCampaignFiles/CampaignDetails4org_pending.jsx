import React, { useEffect, useState } from "react";
import { Container } from "../../../../style/CampaignDetail4orgStyle";
import { TbHeartFilled, TbHeartPlus } from "react-icons/tb";
import Button from "../../../common/Button";
import { BsGift } from "react-icons/bs";
import { useNavigate, useLocation } from "react-router-dom";
import PendingMilestone from "./PendingMilestone";
import { IoArrowBackOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { getCampaignMilestones } from "../../../../api/campaignDeatils";

const CampaignDetails4org_pending = () => {
  const [campaignData, setCampaignData] = useState(null);
  const [showMilestone, setShowMilestone] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const nav = useNavigate();
  const location = useLocation();
  const campaign = location.state?.campaign;
  const token = useSelector((state) => state.auth.user?.token);

  useEffect(() => {
    const fetchCampaignMilestones = async () => {
      if (!campaign?.id) {
        setError("No campaign ID found.");
        setLoading(false);
        return;
      }

      try {
        const data = await getCampaignMilestones(campaign.id, token);
        setCampaignData(data);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to load campaign details.");
      } finally {
        setLoading(false);
      }
    };

    fetchCampaignMilestones();
  }, [campaign, token]);

  if (loading) return <p>Loading campaign details...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!campaignData) return <p>No campaign data found.</p>;

  const { campaign: campaignInfo, milestones, evidence, donors, topDonors } = campaignData;

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
            <p>{campaignInfo?.title || "Untitled Campaign"}</p>
            <div className="img_holder">
              <img
                src={campaignInfo?.image || "/default-campaign.jpg"}
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
                <p className="title">{campaignInfo?.category || "Education"}</p>
                <p className="comment">{campaignInfo?.description}</p>
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
              <PendingMilestone milestones={milestones} evidence={evidence} />
            )}

            <Button text="Share" className="share_btn" />
          </div>
        </div>

        <div className="right">
          {topDonors?.length > 0 && (
            <>
              <p className="p_top">Top Donors</p>
              <div className="top_right">
                {topDonors.map((donor) => (
                  <div key={donor.id} className="name_holder">
                    <i><BsGift /></i>
                    <div className="name">
                      <p>{donor.name}</p>
                      <p>Donated ₦{donor.amount?.toLocaleString() || "0"} to this campaign</p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {donors?.length > 0 && (
            <>
              <p className="p_all">All Donors</p>
              <div className="down_right">
                {donors.map((donor) => (
                  <div key={donor.id} className="name_holder">
                    <i><BsGift /></i>
                    <div className="name">
                      <p>{donor.name}</p>
                      <p>Donated ₦{donor.amount?.toLocaleString() || "0"} to this campaign</p>
                    </div>
                  </div>
                ))}
                <Button text="Share" className="share_btn" />
              </div>
            </>
          )}
        </div>
      </article>
    </Container>
  );
};

export default CampaignDetails4org_pending;
