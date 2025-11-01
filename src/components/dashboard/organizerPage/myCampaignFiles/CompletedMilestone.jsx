import React from "react";
import styled from "styled-components";
import solar1 from "../../../../assets/s1.jpg";
import solar2 from "../../../../assets/s2.jpg";
import solar3 from "../../../../assets/s4.jpg";
import candlewoman from "../../../../assets/candlewoman.jpg";

const completedMilestones = [
  {
    id: 1,
    title: "100 solar lights distributed in Ikorodu",
    description:
      "This milestone covers the distribution of 100 solar lights to students in Ikorodu, ensuring they have reliable lighting to study after dark.",
    completionDate: "October 22, 2024",
    amount: "₦800,000",
    images: [solar2, solar2, solar2, solar2, solar2, solar2],
  },
  {
    id: 2,
    title: "150 solar lights distributed in Agege",
    description:
      "This milestone marks the distribution of 150 solar lights to students in Agege, helping them continue their studies safely and effectively at night.",
    completionDate: "October 17, 2024",
    amount: "₦2,200,000",
    images: [solar3, solar3, solar3, solar3, solar3, solar3],
  },
  {
    id: 3,
    title: "200 solar lights distributed in Ajegunle",
    description:
      "This milestone highlights the distribution of 200 solar lights to students in Ajegunle, supporting their education and reducing barriers caused by power shortages.",
    completionDate: "October 17, 2024",
    amount: "₦2,200,000",
    images: [solar1, solar1, solar1, solar1, solar1, solar1],
  },
];

const CompletedCampaignTimeline = () => {
  return (
    <TimelineContainer3>
      {completedMilestones.map((item, index) => (
        <div key={item.id} className="timeline-item">
          <div className="status-section">
            <div className="status-dot green"></div>
            {index !== completedMilestones.length - 1 && (
              <div className="vertical-line"></div>
            )}
          </div>

          <div className="content-section">
            <span className="status-tag achieved-tag">Achieved Milestone</span>

            <div className="timeline-content achieved">
              <p className="title">{item.title}</p>
              <p className="subtitle">Milestone Description</p>
              <p className="desc">{item.description}</p>

              <p className="label">Completion date</p>
              <p className="value">{item.completionDate}</p>

              <p className="label">Amount disbursed</p>
              <p className="value">{item.amount}</p>

              <p className="evidence-title">Verified evidence</p>
              <div className="evidence-box">
                {item.images.map((img, i) => (
                  <img key={i} src={img} alt="evidence" className="box" />
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </TimelineContainer3>
  );
};

export default CompletedCampaignTimeline;
export const TimelineContainer3 = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  position: relative;
  position: absolute;
  background-color: white;
  top: 120%;
  left: 22%;

  &::before {
    content: "";
    position: absolute;
    top: 50px;
    bottom: 50px;
    left: 50px;
    width: 3px;
    background-color: #edfdf2;
    z-index: 0;
  }

  .timeline-item {
    position: relative;
    display: flex;
    align-items: flex-start;
    z-index: 1;
  }

  .status-section {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 25px;
  }

  .status-dot {
    width: 43px;
    height: 43px;
    border-radius: 50%;
    border: 3px solid white;
    z-index: 2;
  }

  .status-dot.green {
    background-color: #1ea65a;
  }

  .content-section {
    display: flex;
    flex-direction: column;
  }

  .status-tag {
    font-size: 14px;
    font-weight: 600;
    padding: 5px 10px;
    border-radius: 6px;
    align-self: flex-start;
    margin-bottom: 10px;
    color: white;
  }

  .achieved-tag {
    background-color: #1ea65a;
    color: white;
    padding: 10px;
  }

  .timeline-content {
    padding: 15px;
    border-radius: 8px;
    width: 422px;
    background-color: #edfdf2;
    border: 0.5px solid #0a9c57;
  }

  .timeline-content.achieved {
    background-color: #e9f8f0;
  }

  .title {
    font-weight: 600;
    margin: 4px 0;
    font-size: 18px;
    color: #333333;
  }

  .subtitle {
    font-weight: 500;
    font-size: 16px;
    color: #0a9c57;
  }

  .desc {
    font-weight: 500;
    font-size: 16px;
    color: #4d4d4d;
    margin-bottom: 10px;
  }

  .label {
    font-weight: 500;
    font-size: 16px;
    color: #0a9c57;
  }

  .value {
    font-weight: 500;
    font-size: 16px;
    color: #4d4d4d;
    margin-bottom: 6px;
  }

  .evidence-title {
    font-weight: 500;
    font-size: 16px;
    color: #0a9c57;
    margin-top: 8px;
  }

  .evidence-box {
    display: flex;
    gap: 10px;
    margin-top: 5px;
  }

  .box {
    width: 55px;
    height: 55px;
    border-radius: 6px;
    object-fit: cover;
  }
`;
