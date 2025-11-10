import React from "react";
import styled from "styled-components";

const PendingMilestone = ({ milestones = [] }) => {
  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case "completed":
        return "#0A9C57";
      case "ongoing":
        return "#FCDE00";
      case "pending":
        return "#DF0F23";
      default:
        return "#ccc";
    }
  };

  return (
    <TimelineContainer2>
      {milestones.length === 0 && <p>No milestones available yet.</p>}

      {milestones.map((item, index) => (
        <div key={item._id || index} className="timeline-item">
          <div className="status-section">
            <div
              className="status-dot"
              style={{ backgroundColor: getStatusColor(item.status) }}
            ></div>
            <div className="vertical-line"></div>
          </div>

          <div className="content-section">
            <span
              className="status-tag"
              style={{
                backgroundColor: getStatusColor(item.status),
                color: "white",
              }}
            >
              {item.status || "Pending"}
            </span>

            <div
              className="timeline-content"
              style={{
                backgroundColor:
                  item.status?.toLowerCase() === "completed"
                    ? "#EDFDF2"
                    : item.status?.toLowerCase() === "ongoing"
                    ? "#FFFBEF"
                    : "#FCE7E9",
                border:
                  item.status?.toLowerCase() === "completed"
                    ? "0.5px solid #0A9C57"
                    : item.status?.toLowerCase() === "ongoing"
                    ? "0.5px solid #FCDE00"
                    : "0.5px solid #F54900",
              }}
            >
              <p className="title">{item.milestoneTitle || "Untitled Milestone"}</p>
              <p
                className="subtitle"
                style={{
                  color:
                    item.status?.toLowerCase() === "ongoing"
                      ? "#6F5A22"
                      : item.status?.toLowerCase() === "pending"
                      ? "#DF0F23"
                      : "#0A9C57",
                }}
              >
                Milestone Description
              </p>
              <p className="desc">{item.milestoneDescription || "No description"}</p>

              <p
                className="label"
                style={{
                  color:
                    item.status?.toLowerCase() === "ongoing"
                      ? "#6F5A22"
                      : item.status?.toLowerCase() === "pending"
                      ? "#DF0F23"
                      : "#0A9C57",
                }}
              >
                Completion date
              </p>
              <p className="value">
                {item.completionDate
                  ? new Date(item.completionDate).toDateString()
                  : "Not completed yet"}
              </p>

              <p
                className="label"
                style={{
                  color:
                    item.status?.toLowerCase() === "ongoing"
                      ? "#6F5A22"
                      : item.status?.toLowerCase() === "pending"
                      ? "#DF0F23"
                      : "#0A9C57",
                }}
              >
                Amount disbursed
              </p>
              <p className="value">₦{item.releasedAmount?.toLocaleString() || "0"}</p>

              {item.status?.toLowerCase() === "completed" && item.evidence?.length > 0 && (
                <>
                  <p
                    className="evidence-title"
                    style={{
                      color:
                        item.status?.toLowerCase() === "ongoing"
                          ? "#6F5A22"
                          : item.status?.toLowerCase() === "pending"
                          ? "#DF0F23"
                          : "#0A9C57",
                    }}
                  >
                    Verified evidence
                  </p>
                  <div className="evidence-box">
                    {item.evidence.map((img, i) => (
                      <img
                        key={i}
                        src={img.imageUrl || img}
                        alt={`Evidence ${i + 1}`}
                        className="evidence-img"
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      ))}
    </TimelineContainer2>
  );
};

export default PendingMilestone;

export const TimelineContainer2 = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
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
    border: 4px solid white;
    z-index: 2;
  }

  .vertical-line {
    position: absolute;
    top: 34px;
    left: 50%;
    transform: translateX(-50%);
    width: 3px;
    z-index: 1;
    background-color: #edfdf2;
  }

  .content-section {
    display: flex;
    flex-direction: column;
  }

  .status-tag {
    font-size: 12px;
    font-weight: 600;
    padding: 10px;
    border-radius: 6px;
    align-self: flex-start;
    margin-bottom: 10px;
  }

  .timeline-content {
    padding: 15px;
    border-radius: 8px;
    width: 422px;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.08);
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
    gap: 8px;
    margin-top: 5px;
    flex-wrap: wrap;
  }

  .evidence-img {
    width: 55px;
    height: 55px;
    object-fit: cover;
    border-radius: 6px;
  }
`;
