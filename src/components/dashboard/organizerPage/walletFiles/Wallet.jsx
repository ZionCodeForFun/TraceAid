import React, { useState, useEffect } from "react";
import { Container } from "../../../../style/WalletStyle";
import Button from "../../../common/Button";
import InputField from "../../../common/InputField";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Loader2 } from "lucide-react";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

const Wallet = () => {
  const nav = useNavigate();
  const location = useLocation();
  const isMainWallet = location.pathname.endsWith("/wallet");
  const token = useSelector((state) => state.auth.user?.token);

  const [selectedCampaign, setSelectedCampaign] = useState("");
  const [showCategoryDrop, setShowCategoryDrop] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [walletSummary, setWalletSummary] = useState({
    availableBalance: 0,
    totalWithdrawn: 0,
    perCampaign: [],
    totals: {},
    recentTransactions: [],
  });

  const [campaigns, setCampaigns] = useState([]);

  const fetchWalletData = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await axios.get(
        `${import.meta.env.VITE_BaseUrl2}/wallet/summary`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const data = res.data?.data;
    
      setWalletSummary({
        availableBalance: data?.availableBalance || 0,
        totalWithdrawn: data?.totalWithdrawn || 0,
        perCampaign: data?.perCampaign || [],
        totals: data?.totals || {},
        recentTransactions: data?.recentTransactions || [],
      });

      setCampaigns(
        (data?.perCampaign || []).map((item) => {
          const campaignTitle =
            item?.campaign?.campaignTitle || "Untitled Campaign";
          const campaignId = item?.campaign?._id || "";
          return { title: campaignTitle, id: campaignId };
        })
      );
    } catch (err) {
      setError(err.response?.data?.message || "Failed to load wallet data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token && isMainWallet) {
      fetchWalletData();
    }
  }, [token, isMainWallet, location.key]);

  const filteredTransactions = walletSummary.recentTransactions.filter(
    (item) => {
      const matchesSearch =
        item.reference?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.note?.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCampaign = selectedCampaign
        ? item.campaign?.campaignTitle === selectedCampaign
        : true;

      return matchesSearch && matchesCampaign;
    }
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
                  <p>Available Balance</p>
                  <span style={{ background: "#DBEAFE", color: "#8402E3" }}>
                    ₦
                  </span>
                </div>
                <div className="down">
                  {loading ? (
                    <div    style={{
                        width: "60px",
                        height: "20px",
                        borderRadius: "4px",
                        background:
                          "linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)",
                        backgroundSize: "200% 100%",
                        animation: "loading 1.2s ease-in-out infinite",
                      }}></div>
                  ) : (
                    <p>₦{walletSummary.availableBalance.toLocaleString()}</p>
                  )}
                </div>
              </div>

              <div className="card" style={{ background: "#E8FFF9" }}>
                <div className="top">
                  <p>Total Withdrawn</p>
                  <span style={{ background: "#DBEAFE", color: "#8402E3" }}>
                    ₦
                  </span>
                </div>
                <div className="down">
                  {loading ? (
                    <div   style={{
                        width: "60px",
                        height: "20px",
                        borderRadius: "4px",
                        background:
                          "linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)",
                        backgroundSize: "200% 100%",
                        animation: "loading 1.2s ease-in-out infinite",
                      }}></div>
                  ) : (
                    <p>₦{walletSummary.totalWithdrawn.toLocaleString()}</p>
                  )}
                </div>
              </div>
            </div>

            <label style={{ padding: "10px 0" }}>
              Select campaign to view details
            </label>
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
                {campaigns.length > 0 ? (
                  campaigns.map((c, i) => (
                    <p
                      key={i}
                      onClick={() => {
                        if (!c?.title) return;
                        setSelectedCampaign(c.title);
                        setShowCategoryDrop(false);
                      }}
                      style={{
                        fontWeight:
                          selectedCampaign === c.title ? "600" : "400",
                        background:
                          selectedCampaign === c.title
                            ? "#f0f0f0"
                            : "transparent",
                      }}
                    >
                      {c?.title || "Untitled Campaign"}
                    </p>
                  ))
                ) : (
                  <p style={{ color: "#888" }}>No campaigns available</p>
                )}

                {selectedCampaign && (
                  <p
                    onClick={() => setSelectedCampaign("")}
                    style={{ color: "#ff0000", marginTop: "0.5rem" }}
                  >
                    Clear Selection
                  </p>
                )}
              </div>
            )}

              <p style={{fontSize:"24px", marginBottom:"10px"}}>Recent Transactions</p>
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
              <>
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
                      {filteredTransactions.map((item, index) => (
                        <tr key={item._id || index}>
                          <td>{item.reference || "—"}</td>
                          <td>{item.campaign?.campaignTitle || "—"}</td>
                          <td>
                            {new Date(
                              item.createdAt || item.date
                            ).toLocaleDateString()}
                          </td>
                          <td>₦{item.amount?.toLocaleString() || 0}</td>
                          <td>{item.status || "successful"}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            )}
          </>
        )}
      </article>
    </Container>
  );
};

export default Wallet;
