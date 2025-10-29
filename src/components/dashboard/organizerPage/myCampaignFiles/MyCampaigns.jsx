import React, { useState } from "react";
import { Container } from "../../../../style/MyCampaignsStyle";
import InputField from "../../../common/InputField";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiCircleAlert } from "react-icons/ci";
import { FiFlag } from "react-icons/fi";
import Button from "../../../common/Button";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import UpdateMilestone from "./UpdateMilestone";

const MyCampaigns = () => {
  const [show, setShow] = useState(false);
  const [showMilestone, setShowmilestone] = useState(false);
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [popupPosition, setPopupPosition] = useState({ top: 40, left: 20 });
  const nav = useNavigate();
  const location = useLocation();
  const isMainWallet = location.pathname.endsWith("myCampaigns");

  const data = [
    {
      id: 1,
      details: "Stationery for the children of Makoko Nursery School",
      raised: 5000000,
      goal: 5000000,
      NumberOfDonr: 252,
      status: "Ongoing",
      milestone: "Upload",
      date: "20/10/2025",
      icon: <HiOutlineDotsVertical />,
    },
    {
      id: 2,
      details: "Food for All",
      raised: 5000000,
      goal: 5000000,
      NumberOfDonr: 252,
      status: "Completed",
      milestone: "Upload",
      date: "20/10/2025",
      icon: <HiOutlineDotsVertical />,
    },
    {
      id: 3,
      details: "Medical Supplies for Makoko",
      raised: 5000000,
      goal: 5000000,
      NumberOfDonr: 174,
      status: "Completed",
      milestone: "Upload",
      date: "20/10/2025",
      icon: <HiOutlineDotsVertical />,
    },
    {
      id: 3,
      details: "Medical Supplies for Makoko",
      raised: 5000000,
      goal: 5000000,
      NumberOfDonr: 174,
      status: "Pending",
      milestone: "Upload",
      date: "20/10/2025",
      icon: <HiOutlineDotsVertical />,
    },
    {
      id: 3,
      details: "Medical Supplies for Makoko",
      raised: 5000000,
      goal: 5000000,
      NumberOfDonr: 174,
      status: "completed",
      milestone: "Done",
      date: "20/10/2025",
      icon: <HiOutlineDotsVertical />,
    },
  ];

  const getMilestoneStyle = (status) => {
    switch (status) {
      case "Completed":
        return { color: "#4d4d4d" };
      case "Ongoing":
        return { color: "#C4C4C4" };
      case "Pending":
        return { color: "#C4C4C4" };
      case "completed":
        return { color: "#67940B" };
      default:
        return { color: "#000" };
    }
  };

  const handleViewDetails = () => {
    if (!selectedCampaign) return;
    switch (selectedCampaign.status) {
      case "Pending":
        nav("camp_details_pending");
        break;
      case "Ongoing":
        nav("camp_details_pending");
        break;
      case "Completed":
        nav("camp_details_ongoing");
        break;
      case "completed":
        nav("camp_details_completed");
        break;
      default:
        break;
    }
    setShow(false);
  };

  return (
    <Container>
      <article className="wrapper">
        <Outlet />
        {isMainWallet && (
          <>
            <div className="btn_holder">
              <Button onClick={()=>nav('/createcampaign')} text="Create Campaign" className="btn" />
            </div>

            <div className="card_holder">
              <div className="card" style={{ background: " #EBF5FF" }}>
                <div className="top">
                  <p>Active Campaigns</p>
                  <span style={{ background: "#DBEAFE", color: "#8402E3" }}>
                    ₦
                  </span>
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
                              item.status === "Completed"
                                ? "pointer"
                                : "default",
                          }}
                          onClick={() => {
                            if (item.status === "Completed") {
                              setSelectedCampaign(item);
                              setShowmilestone(true);
                            }
                          }}
                        >
                          {item.milestone}
                        </span>
                      </td>
                      <td>{item.date}</td>

                      <td
                        className="icon"
                        onClick={(e) => {
                          e.stopPropagation();
                          const rect = e.currentTarget.getBoundingClientRect();
                          const scrollY = window.scrollY;
                          const scrollX = window.scrollX;

                          setPopupPosition({
                            top: rect.top + scrollY + 40,
                            left: rect.left + scrollX - 170,
                          });

                          setSelectedCampaign(item);
                          setShow((prev) =>
                            selectedCampaign?.id === item.id ? !prev : true
                          );
                        }}
                      >
                        {item.icon}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {show && selectedCampaign && (
              <div
                className="details_pop"
                style={{
                  position: "absolute",
                  top: popupPosition.top,
                  left: popupPosition.left,
                  zIndex: 9999,
                }}
              >
                <p onClick={handleViewDetails}>View Details</p>
                <p>Share Campaign</p>
                <p className="close_btn">Close Campaign</p>
              </div>
            )}
          </>
        )}
        {showMilestone && (
          <UpdateMilestone
            campaign={selectedCampaign}
            onClose={() => setShowmilestone(false)}
          />
        )}
      </article>
    </Container>
  );
};

export default MyCampaigns;
