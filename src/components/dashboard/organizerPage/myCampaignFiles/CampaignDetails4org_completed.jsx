import React, { useEffect, useState } from "react";
import { Container } from "../../../../style/CampaignDetail4orgStyle";
import children from "../../../../assets/Rectangle 1.png";
import { TbHeartFilled, TbHeartPlus } from "react-icons/tb";
import Button from "../../../common/Button";
import { BsGift } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import CompletedMilestone from "./CompletedMilestone";
import { IoArrowBackOutline } from "react-icons/io5";
import candlewoman from '../../.././../assets/candlewoman.jpg'

const CampaignDetails4org_completed = () => {
  const [donors, setDonors] = useState([]);
  const [topDonors, setTopDonors] = useState([]);
  const [showMilestone, setShowMilestone] = useState(false);
  const nav = useNavigate();

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

  return (
    <Container>
      <div className="goback">
        <div
          className="icon"
          onClick={() => nav("/organization/myCampaigns")}
        >
          <IoArrowBackOutline className="i" />
          <p>Go back</p>
        </div>
      </div>
      <article className="wrapper">
        <div className="left">
          <div className="top_left">
            <p>Provide Solar Lights for Students Studying After Dark</p>
            <div className="img_holder">
              <img src={candlewoman} alt="Campaign visual" />
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
                <p className="title">Education</p>
                <p className="comment">
                  This campaign is dedicated to giving underprivileged children
                  access to quality education and creating lasting pathways to a
                  brighter, more promising future. Every child, regardless of
                  where they are born or the circumstances they face, deserves
                  the chance to learn, dream, and unlock their full potential.
                  Unfortunately, for many children in underserved communities,
                  going to school is a privilege they can only imagine. Poverty,
                  lack of resources, and limited opportunities continue to hold
                  them back from a future they truly deserve.
                </p>

                <p className="date">Created 30 days ago. </p>

                <div className="react_holder">
                  <TbHeartPlus className="hrt_" />
                  <p>React</p>
                  <TbHeartFilled className="hrt_filled" /> <p>50</p>
                </div>
              </div>
            ) : (
              <CompletedMilestone />
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

export default CampaignDetails4org_completed;
