import React, { useEffect, useState } from "react";
import styled from "styled-components";

const CompletedCampaignTimeline = ({ milestones = [] }) => {
  const [completedMilestones, setCompletedMilestones] = useState([]);

  useEffect(() => {
    const completed = milestones?.filter((m) => m.status === "completed") || [];
    setCompletedMilestones(completed);
    
  }, [milestones]);

  if (!completedMilestones.length)
    return <p style={{ padding: "1rem" }}>No completed milestones yet.</p>;

  return (
    <TimelineContainer>
      {completedMilestones.map((milestone, index) => (
        <TimelineItem key={milestone._id || index}>
          <Line />
          <Circle>{index + 1}</Circle>
          <Card>
            <h3>{milestone.milestoneTitle || milestone.title}</h3>
            <p className="label">Description</p>
            <p className="desc">{milestone.milestoneDescription || milestone.description}</p>

            <p className="label">Completion Date</p>
            <p className="info">
              {milestone.completionDate
                ? new Date(milestone.completionDate).toDateString()
                : "N/A"}
            </p>

            <p className="label">Amount Disbursed</p>
            <p className="info">
              ₦{milestone.amount?.toLocaleString() || "0"}
            </p>

            {milestone.evidences?.length > 0 && (
              <>
                <p className="label">Verified Evidence</p>
                <div className="evidence-box">
                  {milestone.evidences.map((evi, i) => (
                    evi.media?.imageUrl && (
                      <img
                        key={i}
                        src={evi.media.imageUrl}
                        alt={evi.description || "evidence"}
                        className="evidence-img"
                      />
                    )
                  ))}
                </div>
              </>
            )}
          </Card>
        </TimelineItem>
      ))}
    </TimelineContainer>
  );
};

export default CompletedCampaignTimeline;

const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  position: relative;
  background-color: white;
`;

const TimelineItem = styled.div`
  display: flex;
  align-items: flex-start;
  position: relative;
`;

const Line = styled.div`
  position: absolute;
  left: 20px;
  top: 0;
  width: 3px;
  height: 100%;
  background-color: #1a1a1a;
  z-index: 0;
`;

const Circle = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #1a1a1a;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  position: relative;
  z-index: 1;
  margin-right: 1.5rem;
  flex-shrink: 0;
`;

const Card = styled.div`
  background: #f8f9fa;
  border: 1px solid #c0c0c0;
  border-radius: 10px;
  padding: 1.2rem 1.5rem;
  width: 450px;

  h3 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #333333;
  }

  .label {
    font-weight: 600;
    color: #333333;
    margin-top: 0.8rem;
    font-size: 0.9rem;
  }

  .desc {
    color: #555;
    font-size: 0.9rem;
    line-height: 1.4;
  }

  .info {
    color: #222;
    font-size: 0.9rem;
  }

  .evidence-box {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 5px;
  }

  .evidence-img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 6px;
  }
`;
