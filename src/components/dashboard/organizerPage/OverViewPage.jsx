import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "../../../style/OverViewStyle";
import { GoGift } from "react-icons/go";
import { FiFlag } from "react-icons/fi";
import { CiCircleAlert } from "react-icons/ci";
import InputField from "../../common/InputField";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

const Spinner = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "80px",
    }}
  >
    <div
      className="spinner"
      style={{
        width: "24px",
        height: "24px",
        border: "3px solid #ccc",
        borderTop: "3px solid #6a0dad",
        borderRadius: "50%",
        animation: "spin 1s linear infinite",
      }}
    ></div>
  </div>
);

const SkeletonLoader = () => (
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
);

const OverViewPage = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const token = useSelector((state) => state.auth);
  const nav = useNavigate();
  const [loadingKyc, setLoadingKyc] = useState(true);
  const [isVerified, setIsVerified] = useState(false);
  const [checkKYC, setCheckKYC] = useState(false);
  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BaseUrl2}/fundraiser-dashboard`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        const data = response.data?.data;
        setDashboardData(data);
        console.log("hi", data);
        setFilteredTransactions(data?.recentTransactions || []);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (token) fetchDashboard();
  }, [token, location.key]);
  const baseUrl = import.meta.env.VITE_BaseUrl_Kyc_Auto;
  useEffect(() => {
    const fetchKycStatus = async () => {
      try {
        const res = await axios.get(`${baseUrl}/get-kyc-by-fundraiser`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        const data = res.data?.data;
        if (data?.verificationStatus === "verified") {
          setIsVerified(true);
        } else if (data?.verificationStatus === "pending") {
          setCheckKYC(true);
        }
      } catch (err) {
        console.error("Error fetching KYC:", err);
      } finally {
        setLoadingKyc(false);
      }
    };

    if (token) fetchKycStatus();
  }, [token]);
  useEffect(() => {
    if (dashboardData?.recentTransactions) {
      const filtered = dashboardData.recentTransactions.filter((item) => {
        const query = searchQuery.toLowerCase();
        return (
          item.donorName?.toLowerCase().includes(query) ||
          item.campaignTitle?.toLowerCase().includes(query) ||
          item.date?.toLowerCase().includes(query) ||
          String(item.amount)?.toLowerCase().includes(query)
        );
      });
      setFilteredTransactions(filtered);
    }
  }, [searchQuery, dashboardData]);

  return (
    <Container>
      <article className="wrapper">
        {!loadingKyc && !isVerified && (
          <div className="banner">
            <h2>Complete your (KYC) details first</h2>
            <p>
              To create and publish a campaign on our platform, you must first
              complete the Know Your Customer (KYC) verification process. This
              protects donors, speeds up payouts, and gives you full access to
              campaign features.
            </p>
            <button onClick={() => nav("verify_kyc1")}>
              {checkKYC ? "Verify Now" : "Under Review"}
            </button>
          </div>
        )}
        <div className="card_holder">
          <div className="card">
            <div className="top">
              <p>Total Donations</p>
              <span style={{ background: "#DBEAFE", color: "#8402E3" }}>₦</span>
            </div>
            <div className="down">
              {loading ? (
                <SkeletonLoader />
              ) : (
                <p>₦{dashboardData?.totalDonations?.toLocaleString() || 0}</p>
              )}
            </div>
          </div>

          <div className="card" style={{ background: "#EBF5FF" }}>
            <div className="top">
              <p>Active Campaigns</p>
              <span style={{ background: "#DBEAFE", color: "#8402E3" }}>
                <GoGift />
              </span>
            </div>
            <div className="down">
              {loading ? (
                <SkeletonLoader />
              ) : (
                <p>{dashboardData?.activeCampaigns || 0}</p>
              )}
            </div>
          </div>

          <div className="card" style={{ background: "#E8FFF9" }}>
            <div className="top">
              <p>Milestone Achieved</p>
              <span style={{ background: "#CFF6EC", color: "#3D7D6C" }}>
                <FiFlag />
              </span>
            </div>
            <div className="down">
              {loading ? (
                <SkeletonLoader />
              ) : (
                <p>{dashboardData?.milestoneAchieved || 0}</p>
              )}
            </div>
          </div>

          <div className="card" style={{ background: "#FFF7EC" }}>
            <div className="top">
              <p>Pending Verifications</p>
              <span style={{ background: "#FFEDD4", color: "#F54900" }}>
                <CiCircleAlert />
              </span>
            </div>
            <div className="down">
              {loading ? (
                <SkeletonLoader />
              ) : (
                <p>{dashboardData?.pendingVerifications || 0}</p>
              )}
            </div>
          </div>
        </div>

        <div className="recent_text">
          <p>Recent Transactions</p>
          <InputField
            type="text"
            placeholder="Search input"
            className="input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="table-container">
          {loading ? (
            <Spinner />
          ) : (
            <table className="custom-table">
              <thead>
                <tr>
                  <th>Donors</th>
                  <th>Campaigns</th>
                  <th>Date</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {filteredTransactions?.length > 0 ? (
                  filteredTransactions.map((item, index) => (
                    <tr key={index}>
                      <td>{item.donorName || "Anonymous"}</td>
                      <td>{item.campaignTitle}</td>
                      <td>{item.date}</td>
                      <td>₦{item.amount?.toLocaleString()}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4">No matching transactions found</td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>
      </article>

      <style>
        {`
           @keyframes spin {
             0% { transform: rotate(0deg); }
             100% { transform: rotate(360deg); }
           }

           @keyframes loading {
             0% {
               background-position: 200% 0;
             }
             100% {
               background-position: -200% 0;
             }
           }
         `}
      </style>
    </Container>
  );
};

export default OverViewPage;
