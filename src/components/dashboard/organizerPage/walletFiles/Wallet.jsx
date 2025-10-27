import React from "react";
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

const Wallet = () => {
  const nav = useNavigate();
  const location = useLocation();
const isMainWallet = location.pathname.endsWith("/wallet");

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
                  <p>₦{328400 .toLocaleString()}</p>
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
                  <p>₦{328400 .toLocaleString()}</p>
                </div>
              </div>
            </div>

            <div className="recent_text">
              <InputField
                type="text"
                placeholder="Search input"
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
                    <th>Reference ID</th>
                    <th>Campaigns</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={index}>
                      <td>{item.refId}</td>
                      <td className="details">{item.details}</td>
                      <td>{item.date}</td>
                      <td>₦{item.amount.toLocaleString()}</td>
                      <td
                       
                      >
                        {item.status}
                      </td>
                    </tr>
                  ))}
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
