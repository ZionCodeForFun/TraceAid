import React from "react";
import { Container } from "../../../style/OverViewStyle";
import { GoGift } from "react-icons/go";
import { FiFlag } from "react-icons/fi";
import { CiCircleAlert } from "react-icons/ci";
import InputField from "../../common/InputField";

const OverViewPage = () => {
  const data = [
    {
      name: "Darasimi Ijabiken",
      details: "Stationery for the children of Makoko Nursery School",
      date: "20/10/2025",
      amount: 5000,
    },
    {
      name: "Channels Oladapo",
      details: "Stationery for the children of Makoko Nursery School",
      date: "20/10/2025",
      amount: 5000,
    },
    {
      name: "Darasimi Ijabiken",
      details: "Stationery for the children of Makoko Nursery School",
      date: "20/10/2025",
      amount: 5000,
    },
    {
      name: "Emmanuel Ameh",
      details: "Stationery for the children of Makoko Nursery School",
      date: "20/10/2025",
      amount: 5000,
    },
    {
      name: "Tochukwu Emmanuel",
      details: "Stationery for the children of Makoko Nursery School",
      date: "20/10/2025",
      amount: 5000,
    },
  ];

  return (
    <Container>
      <article className="wrapper">
        <div className="card_holder">
          <div className="card">
            <div className="top">
              <p>Total Donations</p>
              <span>₦</span>
            </div>
            <div className="down">
              <p>₦328,400</p>
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
              <p>2</p>
            </div>
          </div>

          <div className="card" style={{ background: "#E8FFF9" }}>
            <div className="top">
              <p>Milestone Archived</p>
              <span style={{ background: "#CFF6EC", color: "#3D7D6C" }}>
                <FiFlag />
              </span>
            </div>
            <div className="down">
              <p>12/20</p>
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
              <p>1</p>
            </div>
          </div>
        </div>

        <div className="recent_text">
          <p>Recent Transactions</p>
          <InputField type="text" placeholder="Search input" className="input" />
        </div>

        <div className="table-container">
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
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.details}</td>
                  <td>{item.date}</td>
                  <td>₦{item.amount.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </article>
    </Container>
  );
};

export default OverViewPage;
