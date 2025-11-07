import React, { useEffect, useState } from "react";
import { Container } from "../../../../style/CampaignDetail4orgStyle";
import { useNavigate, useLocation } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import { TbHeartFilled, TbHeartPlus } from "react-icons/tb";
import { BsGift } from "react-icons/bs";
import Button from "../../../common/Button";
import MilestoneTimeline from "./OngoingMilestone";
import { getCampaignMilestones } from "../../../../api/campaignDeatils"; 

const CampaignDetails4org_ongoing = () => {
  const [campaignData, setCampaignData] = useState(null);
  const [showMilestone, setShowMilestone] = useState(false);
  const [loading, setLoading] = useState(true);

  const nav = useNavigate();
  const location = useLocation();
  const campaign = location.state?.campaign; 

  useEffect(() => {
    const fetchData = async () => {
      if (!campaign?.id) return; 
      try {
        const data = await getCampaignMilestones(campaign.id);
        setCampaignData(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [campaign]);

  if (loading) return <p>Waiting for API call</p>;
  if (!campaignData) return <p>Failed to load campaign details.</p>;

  const { campaign: campaignInfo, milestones, evidence } = campaignData;

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
            <p>{campaignInfo?.title}</p>
            <div className="img_holder">
              <img src={campaignInfo?.image || "/default.png"} alt="Campaign visual" />
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
                <p className="comment">{campaignInfo?.description}</p>
                <p className="date">Created {campaignInfo?.createdAt}</p>
              </div>
            ) : (
              <MilestoneTimeline milestones={milestones} evidence={evidence} />
            )}

            <Button text="Share" className="share_btn" />
          </div>
        </div>

      </article>
    </Container>
  );
};

export default CampaignDetails4org_ongoing;
