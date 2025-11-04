import React, { useState } from "react";
import { Container } from "../../../../style/WalletStyle";
import Button from "../../../common/Button";
import InputField from "../../../common/InputField";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useNavigate, Outlet, useLocation } from "react-router-dom";

const data = [
  {
    refId: "TRA-987653",
    details: "Stationery for the children of Makoko Nursery School",
    date: "20/10/2025",
    amount: 5000000,
    status: "Processing",
  },
  {
    refId: "TRA-987654",
    details: "Stationery for the children of Makoko Nursery School",
    date: "20/10/2025",
    amount: 5000000,
    status: "Processing",
  },
  {
    refId: "TRA-987655",
    details: "Stationery for the children of Makoko Nursery School",
    date: "20/10/2025",
    amount: 5000000,
    status: "Paid",
  },
  {
    refId: "TRA-987656",
    details: "Stationery for the children of Makoko Nursery School",
    date: "20/10/2025",
    amount: 5000000,
    status: "Paid",
  },
  {
    refId: "TRA-987657",
    details: "Stationery for the children of Makoko Nursery School",
    date: "20/10/2025",
    amount: 5000000,
    status: "Paid",
  },
];

const campaigns = [
  "Stationery for the children of Makoko Nursery School",
  "Food for all",
  "Stationery for the children of Makoko Nursery School",
];

const Wallet = () => {
  const nav = useNavigate();
  const location = useLocation();
  const isMainWallet = location.pathname.endsWith("/wallet");

  const [selectedCampaign, setSelectedCampaign] = useState("");
  const [showCategoryDrop, setShowCategoryDrop] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter data by recent search input
  const filteredData = data.filter(
    (item) =>
      item.refId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.details.toLowerCase().includes(searchTerm.toLowerCase())
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
                  <span style={{ background: "#DBEAFE", color: "#8402E3" }}>
                    ₦
                  </span>
                </div>
                <div className="down">
                  <p>₦{(328400).toLocaleString()}</p>
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
                  <p>₦{(328400).toLocaleString()}</p>
                </div>
              </div>
            </div>

            <label>Select campaign to view details</label>

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

            <div className="table-container">
              <table className="custom-table">
                <thead>
                  <tr>
                    <th>Reference ID</th>
                    <th>Campaigns</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((item, index) => (
                    <tr key={index}>
                      <td>{item.refId}</td>
                      <td className="details">{item.details}</td>
                      <td>{item.date}</td>
                      <td>₦{item.amount.toLocaleString()}</td>
                      <td>{item.status}</td>
                    </tr>
                  ))}
                  {filteredData.length === 0 && (
                    <tr>
                      <td colSpan="5" style={{ textAlign: "center" }}>
                        No records found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </>
        )}
      </article>
    </Container>
  );
};

export default Wallet;
