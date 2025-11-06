import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "../../../style/OverViewStyle";
import { GoGift } from "react-icons/go";
import { FiFlag } from "react-icons/fi";
import { CiCircleAlert } from "react-icons/ci";
import InputField from "../../common/InputField";
import { useSelector } from "react-redux";

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

const OverViewPage = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const token = useSelector((state) => state.auth.user?.token);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BaseUrl2}/fundraiser-dashboard`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setDashboardData(response.data.data);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, [token]);

  return (
    <Container>
      <article className="wrapper">
        <div className="card_holder">
          {loading ? (
            <>
              <div className="card"><Spinner /></div>
              <div className="card"><Spinner /></div>
              <div className="card"><Spinner /></div>
              <div className="card"><Spinner /></div>
            </>
          ) : (
            <>
              <div className="card">
                <div className="top">
                  <p>Total Donations</p>
                </div>
                <div className="down">
                  <p>₦{dashboardData?.totalDonations?.toLocaleString() || 0}</p>
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
                  <p>{dashboardData?.activeCampaigns || 0}</p>
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
                  <p>{dashboardData?.milestones || 0}</p>
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
                  <p>{dashboardData?.pendingVerifications || 0}</p>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="recent_text">
          <p>Recent Transactions</p>
          <InputField type="text" placeholder="Search input" className="input" />
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
                {dashboardData?.transactions?.length > 0 ? (
                  dashboardData.transactions.map((item, index) => (
                    <tr key={index}>
                      <td>{item.donorName}</td>
                      <td>{item.campaignName}</td>
                      <td>{item.date}</td>
                      <td>₦{item.amount?.toLocaleString()}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4">No transactions found</td>
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
        `}
      </style>
    </Container>
  );
};

export default OverViewPage;
