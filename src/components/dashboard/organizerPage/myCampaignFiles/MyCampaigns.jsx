import React, { useState } from "react";
import { Container } from "../../../../style/MyCampaignsStyle";
import InputField from "../../../common/InputField";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiCircleAlert } from "react-icons/ci";
import { FiFlag } from "react-icons/fi";
import Button from "../../../common/Button";
import { Outlet, useNavigate } from "react-router-dom";

const MyCampaigns = () => {
  const [show, setShow] = useState(false);
  const nav = useNavigate();

  const data = [
    {
      details: "Stationery for the children of Makoko Nursery School",
      raised: 5000000,
      goal: 5000000,
      NumberOfDonr: 252,
      status: "Pending",
      milestone: "Uploaded",
      date: "20/10/2025",
      icon: <HiOutlineDotsVertical />,
    },
    {
      details: "Food for All",
      raised: 5000000,
      goal: 5000000,
      NumberOfDonr: 252,
      status: "Ongoing",
      milestone: "Upload",
      date: "20/10/2025",
      icon: <HiOutlineDotsVertical />,
    },
    {
      details: "Medical Supplies for Makoko",
      raised: 5000000,
      goal: 5000000,
      NumberOfDonr: 174,
      status: "Completed",
      milestone: "Approved",
      date: "20/10/2025",
      icon: <HiOutlineDotsVertical />,
    },
    {
      details: "Stationery for the children of Makoko Nursery School",
      raised: 5000000,
      goal: 5000000,
      NumberOfDonr: 28,
      status: "Completed",
      milestone: "Approved",
      date: "20/10/2025",
      icon: <HiOutlineDotsVertical />,
    },
    {
      details: "Tech Tools for Students",
      raised: 5000000,
      goal: 5000000,
      NumberOfDonr: 185,
      status: "Completed",
      milestone: "Approved",
      date: "20/10/2025",
      icon: <HiOutlineDotsVertical />,
    },
  ];

  const getMilestoneStyle = (status) => {
    switch (status) {
      case "Completed":
        return { color: "#67940B" };
      case "Ongoing":
        return { color: "#4d4d4d" };
      case "Pending":
        return { color: "#C4C4C4" };
      default:
        return { color: "#000" };
    }
  };

  return (
    <Container>
      <article className="wrapper">
        <div className="btn_holder">
          <Button text="Create Campaign" className="btn" />
        </div>

        <div className="card_holder">
          <div className="card" style={{ background: " #EBF5FF" }}>
            <div className="top">
              <p>Active Campaigns</p>
              <span style={{ background: "#DBEAFE", color: "#8402E3" }}>₦</span>
            </div>
            <div className="down">
              <p>2</p>
            </div>
          </div>

          <div className="card" style={{ background: " #FFF7EC" }}>
            <div className="top">
              <p>Pending Campaigns</p>
              <span style={{ background: "#FFEDD4", color: "#F54900" }}>
                <CiCircleAlert />
              </span>
            </div>
            <div className="down">
              <p>2</p>
            </div>
          </div>

          <div className="card" style={{ background: " #E8FFF9" }}>
            <div className="top">
              <p>Completed Campaigns</p>
              <span style={{ background: "#CFF6EC", color: "#3D7D6C" }}>
                <FiFlag />
              </span>
            </div>
            <div className="down">
              <p>2</p>
            </div>
          </div>
        </div>

        <div className="recent_text">
          <InputField
            type="text"
            placeholder="search input"
            className="input"
          />
          <div className="dropdwn">
            <p>All Status</p>
            <i>
              <RiArrowDropDownLine />
            </i>
          </div>
        </div>

        <div className="table-container">
          <table className="custom-table">
            <thead>
              <tr>
                <th>Campaigns</th>
                <th>Progress</th>
                <th>No of Donors</th>
                <th>Status</th>
                <th>MileStones</th>
                <th>Deadline</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td className="details">{item.details}</td>

                  <td>
                    ₦{item.raised.toLocaleString()}/₦
                    {item.goal.toLocaleString()}
                  </td>

                  <td>{item.NumberOfDonr}</td>
                  <td>{item.status}</td>
                  <td>
                    <span
                      style={{
                        ...getMilestoneStyle(item.status),
                        cursor:
                          item.milestone === "Upload" ? "pointer" : "default",
                      }}
                      onClick={
                        item.milestone === "Upload" ? () => nav("") : undefined
                      }
                    >
                      {item.milestone}
                    </span>
                  </td>
                  <td>{item.date}</td>
                  <td className="icon" onClick={() => setShow(!show)}>
                    {item.icon}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Outlet />
          {show && (
            <div className="details_pop">
              <p onClick={() => nav("camp_details_org")}>View Details</p>
              <p>Share Campaign</p>
              <p className="close_btn">Close Campaign</p>
            </div>
          )}
        </div>
      </article>
    </Container>
  );
};

export default MyCampaigns;
