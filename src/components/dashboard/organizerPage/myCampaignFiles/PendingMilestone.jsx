import React from "react";
import styled from "styled-components";
import cloth1 from "../../../../assets/c1.jpg";
import cloth2 from "../../../../assets/c2.jpg";
import cloth3 from "../../../../assets/c3.jpg";
import cloth4 from "../../../../assets/c4.jpg";
import cloth5 from "../../../../assets/c5.jpg";
import cloth6 from "../../../../assets/c6.jpg";
const milestones = [
  {
    id: 1,
    title: "100 solar lights distributed in Ikorodu",
    description:
      "This milestone covers the distribution of 100 solar lights to students in Ikorodu, ensuring they have reliable lighting to study after dark.",
    completionDate: "October 22, 2024",
    amount: "N800,000",
    status: "Completed",
    images: [cloth1, cloth2, cloth3, cloth4, cloth5, cloth6],
  },
  {
    id: 2,
    title: "150 solar lights distributed in Agege",
    description:
      "This milestone marks the distribution of 150 solar lights to students in Agege, helping them continue their studies safely and effectively at night.",
    completionDate: "October 17, 2024",
    amount: "N2,200,000",
    status: "Ongoing",
  },
  {
    id: 3,
    title: "200 solar lights distributed in Ajegunle",
    description:
      "This milestone highlights the distribution of 200 solar lights to students in Ajegunle, supporting their education and reducing barriers caused by power shortages.",
    completionDate: "October 17, 2024",
    amount: "N2,200,000",
    status: "Pending",
  },
];

const PendingMilestone = () => {
  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "#0A9C57";
      case "Ongoing":
        return "#FCDE00";
      case "Pending":
        return "#DF0F23";
      default:
        return "#ccc";
    }
  };

  return (
    <TimelineContainer2>
      {milestones.map((item, index) => (
        <div key={item.id} className="timeline-item">
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
              {item.status}
            </span>

            <div
              className="timeline-content"
              style={{
                backgroundColor:
                  item.status === "Completed"
                    ? "#EDFDF2"
                    : item.status === "Ongoing"
                    ? "#FFFBEF"
                    : "#FCE7E9",

                border:
                  item.status === "Completed"
                    ? "0.5px solid #0A9C57"
                    : item.status === "Ongoing"
                    ? "0.5px solid #FCDE00"
                    : "0.5px solid #F54900",
              }}
            >
              <p
                className="title"
                
              >
                {item.title}
              </p>
              <p
                className="subtitle"
                style={{
                  color:
                    item.status === "Ongoing"
                      ? "#6F5A22"
                      : item.status === "Pending"
                      ? "#DF0F23"
                      : "#0a9c57",
                }}
              >
                Milestone Description
              </p>
              <p className="desc">{item.description}</p>

              <p
                className="label"
                style={{
                  color:
                    item.status === "Ongoing"
                      ? "#6F5A22"
                      : item.status === "Pending"
                      ? "#DF0F23"
                      : "#0a9c57",
                }}
              >
                Completion date
              </p>
              <p className="value">{item.completionDate}</p>

              <p
                className="label"
                style={{
                  color:
                    item.status === "Ongoing"
                      ? "#6F5A22"
                      : item.status === "Pending"
                      ? "#DF0F23"
                      : "#0a9c57",
                }}
              >
                Amount disbursed
              </p>
              <p className="value">{item.amount}</p>

              {item.status === "Completed" && item.images && (
                <>
                  <p
                    className="evidence-title"
                    style={{
                      color:
                        item.status === "Ongoing"
                          ? "#6F5A22"
                          : item.status === "Pending"
                          ? "#DF0F23"
                          : "#0a9c57",
                    }}
                  >
                    Verified evidence
                  </p>
                  <div className="evidence-box">
                    {item.images.map((src, i) => (
                      <img
                        key={i}
                        src={src}
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
    font-size: 13px;
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
    font-size: 13px;
    color: #333;
    margin-bottom: 6px;
    font-weight: 500;
    font-size: 16px;
    color: #4d4d4d;
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
