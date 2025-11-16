import React, { useState, useEffect } from "react";
import { Container } from "../../../../style/MyCampaignsStyle";
import InputField from "../../../common/InputField";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiCircleAlert } from "react-icons/ci";
import { FiFlag } from "react-icons/fi";
import Button from "../../../common/Button";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import UpdateMilestone from "./UpdateMilestone";

import { LuCopy, LuUpload } from "react-icons/lu";
import { toast } from "react-toastify";
import { IoCloseSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import {
  setLoading,
  setCampaigns,
  setError,
} from "../../../../global/funCampaignSlice";
import { GetAllCampaignsAPI } from "../../../../global/GetAllCampaignsData";

const SkeletonLoader = () => (
  <div className="skeleton-container">
    {[1, 2, 3, 4, 5].map((i) => (
      <div key={i} className="skeleton-row">
        <div className="skeleton skeleton-title"></div>
        <div className="skeleton skeleton-small"></div>
        <div className="skeleton skeleton-small"></div>
        <div className="skeleton skeleton-status"></div>
        <div className="skeleton skeleton-small"></div>
        <div className="skeleton skeleton-small"></div>
        <div className="skeleton skeleton-action"></div>
      </div>
    ))}
  </div>
);

const MyCampaigns = () => {
  const [state, setState] = useState({
    show: false,
    showMilestone: false,
    selectedCampaign: null,
    showDelete: false,
    showShare: false,
    popupPosition: { top: 40, left: 20 },
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCampaigns, setFilteredCampaigns] = useState([]);

  const dispatch = useDispatch();
  const nav = useNavigate();
  const location = useLocation();
  const isMainWallet = location.pathname.endsWith("myCampaigns");

  const token = useSelector((state) => state.auth.token);
  const { all, active, pending, completed, counts, loading, error } =
    useSelector((state) => state.campaigns);

  const {
    show,
    showMilestone,
    selectedCampaign,
    popupPosition,
    showDelete,
    showShare,
  } = state;

  const fetchCampaigns = async () => {
    try {
      dispatch(setLoading(true));
      const response = await GetAllCampaignsAPI(token);
      dispatch(setCampaigns(response.data.data));
      console.log("camp here", response.data.data);
    } catch (err) {
      dispatch(
        setError(err?.response?.data?.message || "Failed to fetch campaigns")
      );
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    if (token) fetchCampaigns();
  }, [token]);

  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredCampaigns(all);
    } else {
      const filtered = all.filter((item) =>
        item.campaignTitle.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredCampaigns(filtered);
    }
  }, [searchQuery, all]);

  const handleViewDetails = () => {
    if (!selectedCampaign) return;

    const id = selectedCampaign._id;

    switch (selectedCampaign.status) {
      case "pending":
        nav(`/organization/myCampaigns/pending/${id}`, {
          state: { campaign: selectedCampaign },
        });
        break;
      case "active":
        nav(`/organization/myCampaigns/ongoing/${id}`, {
          state: { campaign: selectedCampaign },
        });
        break;
      case "completed":
        nav(`/organization/myCampaigns/completed/${id}`, {
          state: { campaign: selectedCampaign },
        });
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
                  {loading ? (
                    <div
                      style={{
                        width: "60px",
                        height: "20px",
                        borderRadius: "4px",
                        background:
                          "linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)",
                        backgroundSize: "200% 100%",
                        animation: "loading 1.2s ease-in-out infinite",
                      }}
                    ></div>
                  ) : (
                    <p>{counts?.active || 0}</p>
                  )}
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
                  {loading ? (
                    <div
                      style={{
                        width: "60px",
                        height: "20px",
                        borderRadius: "4px",
                        background:
                          "linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)",
                        backgroundSize: "200% 100%",
                        animation: "loading 1.2s ease-in-out infinite",
                      }}
                    ></div>
                  ) : (
                    <p>{counts?.pending || 0}</p>
                  )}
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
                  {loading ? (
                    <div
                      style={{
                        width: "60px",
                        height: "20px",
                        borderRadius: "4px",
                        background:
                          "linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)",
                        backgroundSize: "200% 100%",
                        animation: "loading 1.2s ease-in-out infinite",
                      }}
                    ></div>
                  ) : (
                    <p>{counts?.completed || 0}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="recent_text">
              <InputField
                type="text"
                placeholder="Search campaigns..."
                className="input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="dropdwn">
                <p>All Status</p>
                <i>
                  <RiArrowDropDownLine />
                </i>
              </div>
            </div>

            {loading && <SkeletonLoader />}

            {!loading && filteredCampaigns.length === 0 && (
              <p>No campaigns found.</p>
            )}

            {!loading && filteredCampaigns.length > 0 && (
              <div className="table-container">
                <table className="custom-table">
                  <thead>
                    <tr>
                      <th>Campaigns</th>
                      <th>Goal</th>
                      <th>No of Donors</th>
                      <th>Status</th>
                      <th>Milestones</th>
                      <th>Deadline</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredCampaigns.map((item, index) => (
                      <tr key={index}>
                        <td className="details">{item.campaignTitle}</td>
                        <td>
                          ₦{item.totalCampaignGoalAmount.toLocaleString()}
                        </td>
                        <td>{item.donorCount}</td>
                        <td>{item.status}</td>
                        <td
                          className="upload_cell"
                          onClick={() => {
                            if (item.status === "completed") {
                              setState((prev) => ({
                                ...prev,
                                selectedCampaign: item,
                                showMilestone: true,
                              }));
                            } else {
                              toast.info(
                                "Milestones can only be updated for completed campaigns"
                              );
                            }
                          }}
                        >
                          upload <LuUpload style={{ cursor: "pointer" }} />
                        </td>
                        <td>{item.durationDays} days</td>
                        <td
                          className="icon"
                          onClick={(e) => {
                            e.stopPropagation();
                            const rect =
                              e.currentTarget.getBoundingClientRect();
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
                                prev.selectedCampaign?._id === item._id
                                  ? !prev.show
                                  : true,
                            }));
                          }}
                        >
                          <HiOutlineDotsVertical />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

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
                  Are you sure you want to delete this campaign? This action
                  cannot be undone and all associated donations will be
                  archived.
                </p>
              </div>
              <div className="btn_holder">
                <Button
                  onClick={() => nav("/organization")}
                  text="Keep Campaign"
                  className="close_btn1"
                />
                <Button text="Delete Campaign" className="close_btn2" />
              </div>
            </div>
          </div>
        )}
      </article>
    </Container>
  );
};

export default MyCampaigns;
