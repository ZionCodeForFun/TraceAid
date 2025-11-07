import React, { useState, useEffect } from "react";
import { Container } from "../../../../style/WalletStyle";
import Button from "../../../common/Button";
import InputField from "../../../common/InputField";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Loader2 } from "lucide-react";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

const campaigns = [
  "Stationery for the children of Makoko Nursery School",
  "Food for all",
  "Clean Water Project",
];

const Wallet = () => {
  const nav = useNavigate();
  const location = useLocation();
  const isMainWallet = location.pathname.endsWith("/wallet");

  const token = useSelector((state) => state.auth.user?.token);

  const [selectedCampaign, setSelectedCampaign] = useState("");
  const [showCategoryDrop, setShowCategoryDrop] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [walletSummary, setWalletSummary] = useState({
    activeBalance: 0,
    totalWithdrawn: 0,
  });

  useEffect(() => {
    const fetchWalletData = async () => {
      try {
        setLoading(true);
        setError("");

        const res = await axios.get(`${import.meta.env.VITE_BaseUrl2}/wallet/summary`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = res.data?.data;
        setTransactions(data?.transactions || []);
        setWalletSummary({
          activeBalance: data?.balance || 0,
          totalWithdrawn: data?.withdrawn || 0,
        });
      } catch (err) {
        setError(err.response?.data?.message || "Failed to load wallet data");
      } finally {
        setLoading(false);
      }
    };

    if (token) fetchWalletData();
  }, [token]);

  const filteredData = transactions.filter(
    (item) =>
      item.refId?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.details?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <article className="wrapper">
        <Outlet />

        {isMainWallet && (
          <>
            <div className="btn_holder">
              <Button
                onClick={() => nav("requestwithdraw")}
                text="Request Withdrawal"
                className="btn"
              />
            </div>

            <div className="card_holder">
              <div className="card" style={{ background: "#EBF5FF" }}>
                <div className="top">
                  <p>Active Balance</p>
                  <span style={{ background: "#DBEAFE", color: "#8402E3" }}>₦</span>
                </div>
                <div className="down">
                  {loading ? (
                    <div className="skeleton skeleton-text"></div>
                  ) : (
                    <p>₦{walletSummary.activeBalance.toLocaleString()}</p>
                  )}
                </div>
              </div>

              <div className="card" style={{ background: "#E8FFF9" }}>
                <div className="top">
                  <p>Total Withdrawn</p>
                  <span style={{ background: "#DBEAFE", color: "#8402E3" }}>₦</span>
                </div>
                <div className="down">
                  {loading ? (
                    <div className="skeleton skeleton-text"></div>
                  ) : (
                    <p>₦{walletSummary.totalWithdrawn.toLocaleString()}</p>
                  )}
                </div>
              </div>
            </div>

            <label style={{padding:"10px 0"}}>Select campaign to view details</label>
            <div className="select_control">
              <InputField
                type="text"
                placeholder="Select Campaign"
                className="input"
                readOnly
                value={selectedCampaign}
              />
              <RiArrowDropDownLine
                className="icon_"
                onClick={() => setShowCategoryDrop((prev) => !prev)}
              />
            </div>

            {showCategoryDrop && (
              <div className="cartigory_drop">
                {campaigns.map((c, i) => (
                  <p
                    key={i}
                    onClick={() => {
                      setSelectedCampaign(c);
                      setShowCategoryDrop(false);
                    }}
                  >
                    {c}
                  </p>
                ))}
              </div>
            )}

            <div className="recent_text">
              <InputField
                type="text"
                placeholder="Search input"
                className="input"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="dropdwn">
                <p>All Status</p>
              </div>
            </div>

            {loading ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "3rem 0",
                }}
              >
                <Loader2 className="animate-spin" size={36} color="#8402E3" />
                <p style={{ marginTop: "1rem", color: "#555" }}>
                  Loading wallet data...
                </p>
              </div>
            ) : error ? (
              <p style={{ color: "red", textAlign: "center" }}>{error}</p>
            ) : (
              <div className="table-container">
                <table className="custom-table">
                  <thead>
                    <tr>
                      <th>Reference ID</th>
                      <th>Campaign</th>
                      <th>Date</th>
                      <th>Amount</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredData.length === 0 ? (
                      <tr>
                        <td colSpan="5" style={{ textAlign: "center", color: "#777" }}>
                          No transactions available
                        </td>
                      </tr>
                    ) : (
                      filteredData.map((item, index) => (
                        <tr key={index}>
                          <td>{item.refId || "—"}</td>
                          <td className="details">{item.details || "—"}</td>
                          <td>{new Date(item.date).toLocaleDateString()}</td>
                          <td>₦{item.amount?.toLocaleString()}</td>
                          <td>{item.status || "Pending"}</td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </>
        )}
      </article>

      <style jsx>{`
        .skeleton {
          background: linear-gradient(90deg, #e0e0e0 25%, #f5f5f5 50%, #e0e0e0 75%);
          background-size: 200% 100%;
          animation: shimmer 1.6s infinite;
          border-radius: 8px;
        }

        .skeleton-text {
          width: 60px;
          height: 22px;
        }

        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
    </Container>
  );
};

export default Wallet;
