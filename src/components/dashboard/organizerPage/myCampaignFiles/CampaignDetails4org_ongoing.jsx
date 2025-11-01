import React, { useEffect, useState } from "react";
import { Container } from "../../../../style/CampaignDetail4orgStyle";
import children from "../../../../assets/Rectangle 1.png";
import { TbHeartFilled, TbHeartPlus } from "react-icons/tb";
import Button from "../../../common/Button";
import { BsGift } from "react-icons/bs";
import { useNavigate, useLocation } from "react-router-dom";
import MilestoneTimeline from "./OngoingMilestone";
import { IoArrowBackOutline } from "react-icons/io5";

const CampaignDetails4org_ongoing = () => {
  const [donors, setDonors] = useState([]);
  const [topDonors, setTopDonors] = useState([]);
  const [showMilestone, setShowMilestone] = useState(false);
  const nav = useNavigate();
  const location = useLocation();
  const campaign = location.state?.campaign;

  useEffect(() => {
    const fetchDonors = async () => {
      try {
        const mockDonors = [
          { id: 1, name: "Sola Lawson", amount: 2000 },
          { id: 2, name: "Ada Okafor", amount: 5000 },
          { id: 3, name: "Tunde Bello", amount: 1500 },
          { id: 4, name: "Chika Nwosu", amount: 2500 },
          { id: 5, name: "Zion Emmanuel", amount: 10000 },
          { id: 6, name: "Grace Ade", amount: 3000 },
        ];

        const topThree = [...mockDonors]
          .sort((a, b) => b.amount - a.amount)
          .slice(0, 3);

        setDonors(mockDonors);
        setTopDonors(topThree);
      } catch (err) {
        console.error("Error fetching donors:", err);
      }
    };

    fetchDonors();
  }, []);

  const title =
    campaign?.details ||
    "Provide Solar Lights for Students Studying After Dark";
  const raised = campaign?.raised || 5000000;
  const goal = campaign?.goal || 5000000;
  const status = campaign?.status || "Ongoing";

  return (
    <Container>
      <div className="goback">
        <div
          className="icon"
          onClick={() => nav("/organizationdashboard/myCampaigns")}
        >
          <IoArrowBackOutline className="i" />
          <p>Go back</p>
        </div>
      </div>

      <article className="wrapper">
        <div className="left">
          <div className="top_left">
            <p>{title}</p>
            <div className="img_holder">
              <img src={children} alt="Campaign visual" />
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
                <p className="title">{status}</p>
                <p className="comment">
                  This campaign aims to make a meaningful difference in the
                  community by providing vital support and resources where they
                  are needed most. Every contribution goes directly toward
                  achieving the campaign’s goal of ₦
                  {goal.toLocaleString()}.
                </p>

                <p className="date">Created 30 days ago. </p>

                <div className="react_holder">
                  <TbHeartPlus className="hrt_" />
                  <p>React</p>
                  <TbHeartFilled className="hrt_filled" /> <p>50</p>
                </div>
              </div>
            ) : (
              <MilestoneTimeline />
            )}

            <Button text="Share" className="share_btn" />
          </div>
        </div>

        <div className="right">
          <p className="p_top">Top Donors</p>
          <div className="top_right">
            {topDonors.map((donor) => (
              <div key={donor.id} className="name_holder">
                <i>
                  <BsGift />
                </i>
                <div className="name">
                  <p>{donor.name}</p>
                  <p>
                    Donated ₦{donor.amount.toLocaleString()} to this campaign
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="p_all">All Donors</p>
          <div className="down_right">
            {donors.map((donor) => (
              <div key={donor.id} className="name_holder">
                <i>
                  <BsGift />
                </i>
                <div className="name">
                  <p>{donor.name}</p>
                  <p>
                    Donated ₦{donor.amount.toLocaleString()} to this campaign
                  </p>
                </div>
              </div>
            ))}
            <Button text="Share" className="share_btn" />
          </div>
        </div>
      </article>
    </Container>
  );
};

export default CampaignDetails4org_ongoing;
