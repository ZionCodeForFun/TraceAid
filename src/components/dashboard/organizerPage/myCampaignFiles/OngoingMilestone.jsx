import React from "react";
import styled from "styled-components";

const MilestoneTimeline = () => {
  const milestones = [
    {
      id: 1,
      title: "Acquire 500 school bags",
      description:
        "This item is the first item to be purchased so stationery items can be packed into the bags. These bags will be school bags that’ll be distributed to students.",
      completionDate: "October 17, 2024",
      amount: 2200000,
    },
    {
      id: 2,
      title: "Acquire 500 school bags",
      description:
        "This item is the first item to be purchased so stationery items can be packed into the bags. These bags will be school bags that’ll be distributed to students.",
      completionDate: "October 17, 2024",
      amount: 1800000,
    },
    {
      id: 3,
      title: "Acquire 500 school bags",
      description:
        "This item is the first item to be purchased so stationery items can be packed into the bags. These bags will be school bags that’ll be distributed to students.",
      completionDate: "October 17, 2024",
      amount: 2200000,
    },
  ];

  return (
    <TimelineContainer>
      {milestones.map((milestone, index) => (
        <TimelineItem key={milestone.id}>
          <Line />
          <Circle>{index + 1}</Circle>
          <Card>
            <h3>{milestone.title}</h3>
            <p className="label">Milestone Description</p>
            <p className="desc">{milestone.description}</p>
            <p className="label">Completion date</p>
            <p className="info">{milestone.completionDate}</p>
            <p className="label">Amount disbursed</p>
            <p className="info">₦{milestone.amount.toLocaleString()}</p>
          </Card>
        </TimelineItem>
      ))}
    </TimelineContainer>
  );
};

export default MilestoneTimeline;
const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  position: relative;
  position: absolute;
  background-color: white;
  top: 120%;
  left: 24%;
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
  width: 411px;
  height: 259px;

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
`;
