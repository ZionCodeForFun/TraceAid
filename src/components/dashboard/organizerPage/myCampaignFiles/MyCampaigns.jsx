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
import { FaFacebookF, FaLink } from "react-icons/fa";
import { TbBrandInstagramFilled } from "react-icons/tb";
import { FaXTwitter } from "react-icons/fa6";
import { LuCopy } from "react-icons/lu";
import { toast } from "react-toastify";
import { IoCloseSharp } from "react-icons/io5";

const MyCampaigns = () => {
  const [state, setState] = useState({
    show: false,
    showMilestone: false,
    selectedCampaign: null,
    showDelete: false,
    showShare: false,
    popupPosition: { top: 40, left: 20 },
  });

  const nav = useNavigate();
  const location = useLocation();
  const isMainWallet = location.pathname.endsWith("myCampaigns");

  const {
    show,
    showMilestone,
    selectedCampaign,
    popupPosition,
    showDelete,
    showShare,
  } = state;

  const data = [
    {
      id: 1,
      details: "Stationery for the children of Makoko Nursery School",
      raised: 5000,
      goal: 50000,
      NumberOfDonr: 252,
      status: "Ongoing",
      milestone: "Upload",
      date: "20/10/2025",
      icon: <HiOutlineDotsVertical />,
    },
    {
      id: 2,
      details: "Food for All",
      raised: 5000,
      goal: 50000,
      NumberOfDonr: 252,
      status: "Completed",
      milestone: "Upload",
      date: "20/10/2025",
      icon: <HiOutlineDotsVertical />,
    },
    {
      id: 3,
      details: "Medical Supplies for Makoko",
      raised: 5000,
      goal: 50000,
      NumberOfDonr: 174,
      status: "Completed",
      milestone: "Upload",
      date: "20/10/2025",
      icon: <HiOutlineDotsVertical />,
    },
    {
      id: 4,
      details: "Medical Supplies for Makoko",
      raised: 5000,
      goal: 50000,
      NumberOfDonr: 174,
      status: "Pending",
      milestone: "Upload",
      date: "20/10/2025",
      icon: <HiOutlineDotsVertical />,
    },
    {
      id: 5,
      details: "Medical Supplies for Makoko",
      raised: 5000,
      goal: 50000,
      NumberOfDonr: 174,
      status: "completed",
      milestone: "Done",
      date: "20/10/2025",
      icon: <HiOutlineDotsVertical />,
    },
  ];
  const campaignUrl = `https://traceaid.com/campaign/${selectedCampaign?.id}`;

  const handleShare = (platform) => {
    const text = encodeURIComponent(
      "I just supported this cause! You can too. Every little bit counts ❤️"
    );
    const url = encodeURIComponent(campaignUrl);

    let shareUrl = "";

    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
        break;
      case "instagram":
        toast.success(
          "Instagram doesn’t support direct web sharing — copy the link instead 😅"
        );
        return;
      default:
        return;
    }
  };
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

    setState((prev) => ({ ...prev, show: false }));
  };

  return (
    <Container>
      <article className="wrapper">
        <Outlet />
        {isMainWallet && (
          <>
            <div className="btn_holder">
              <Button
                onClick={() => nav("/createcampaign")}
                text="Create Campaign"
                className="btn"
              />
            </div>

            <div className="card_holder">
              <div className="card" style={{ background: "#EBF5FF" }}>
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

              <div className="card" style={{ background: "#FFF7EC" }}>
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

              <div className="card" style={{ background: "#E8FFF9" }}>
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
                    <th style={{width:100, paddingLeft:"12px"}}>No of Donors</th>
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
                              setState((prev) => ({
                                ...prev,
                                selectedCampaign: item,
                                showMilestone: true,
                              }));
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

                          setState((prev) => ({
                            ...prev,
                            popupPosition: {
                              top: rect.top + scrollY + 40,
                              left: rect.left + scrollX - 170,
                            },
                            selectedCampaign: item,
                            show:
                              prev.selectedCampaign?.id === item.id
                                ? !prev.show
                                : true,
                          }));
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
                <p
                  onClick={() =>
                    setState((prev) => ({ ...prev, showShare: true }))
                  }
                >
                  Share Campaign
                </p>
                <p
                  onClick={() =>
                    setState((prev) => ({ ...prev, showDelete: true }))
                  }
                  className="close_btn"
                >
                  Close Campaign
                </p>
              </div>
            )}
          </>
        )}

        {showMilestone && (
          <UpdateMilestone
            campaign={selectedCampaign}
            onClose={() =>
              setState((prev) => ({ ...prev, showMilestone: false }))
            }
          />
        )}
        {showDelete && (
          <div className="holder">
            <div className="reciept_holder">
              <div className="content-holder">
                <i>
                  <CiCircleAlert />
                </i>
                <p className="bigtext">Close Campaign?</p>
                <p className="smalltext">
                  Are you sure you want to delete this <br /> campaign? This
                  action cannot be undone and all associated <br /> donations
                  will be archived.
                </p>
              </div>
              <div className="btn_holder">
                <Button
                  onClick={() => nav("/organizationdashboard/")}
                  text="Keep Campaign"
                  className="close_btn1"
                />
                <Button text="Delet Campaign" className="close_btn2" />
              </div>
            </div>
          </div>
        )}
        {showShare && (
          <div className="holder">
            <div className="reciept_holder" style={{ height: 360 }}>
              <div className="content-holder">
                <i className="share_icon">
                  <FaLink />
                </i>
                <p className="bigtext">Share with friends</p>
                <p className="smalltext">
                  I just supported this cause! You can too. <br /> Every little
                  bit counts
                </p>
                <InputField
                  type="text"
                  placeholder="https://traceaid.com/stationery-4-kids"
                  className="input"
                />
            <IoCloseSharp onClick={()=>setState((prev)=>({...prev,showShare:false}))} className="close_bt" />
                <LuCopy className="copy" />
              </div>
              <div className="btn_holder">
                <i onClick={() => handleShare("facebook")}>
                  <FaFacebookF />
                </i>
                <i onClick={() => handleShare("instagram")}>
                  <TbBrandInstagramFilled />
                </i>
                <i onClick={() => handleShare("twitter")}>
                  <FaXTwitter />
                </i>
              </div>
            </div>
          </div>
        )}
      </article>
    </Container>
  );
};

export default MyCampaigns;
