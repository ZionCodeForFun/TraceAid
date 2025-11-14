import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import {
  AdminVerificationTitle,
  AdminVerificationContent,
  AdminVerificationContainer,
  AdminVerificationTop,
  AdminVerificationInput,
  AdminVerificationItem,
} from "../../../style/AdminVerificationStyle";

import { TbFileCheck } from "react-icons/tb";
import { FiTarget } from "react-icons/fi";
import { LuWallet } from "react-icons/lu";

import Campaign from "./adminVerificationtables/CampaignVerification.jsx";
import Milestone from "./adminVerificationtables/MilestoneVerification.jsx";
import FundsDisbursement from "./adminVerificationtables/FundsDisbursement.jsx";
import PayoutVerificationTable from "./adminVerificationtables/PayoutVerificationTable.jsx";
import EvidenceVerificationTable from "./adminVerificationtables/EvidenceVerificationTable.jsx";
// import PayoutVerificationTable from "./adminVerificationtables/PayoutVerificationTable.jsx";

const AdminVerification = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeSection, setActiveSection] = useState("Campaign Verification");

  const sections = [
    {
      name: "Campaign Verification",
      icon: <TbFileCheck size={18} />,
    },
    {
      name: "Milestone Verification",
      icon: <FiTarget size={18} />,
    },

    {
      name: "Funds Disbursement",
      icon: <LuWallet size={18} />,
    },
    {
      name: "Payout  VerificationTable",
      icon: <LuWallet size={18} />,
    },
    {
      name: "Evidence VerificationTable",
      icon: <LuWallet size={18} />,
    },
  ];

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  const renderSection = () => {
    switch (activeSection) {
      case "Campaign Verification":
        return <Campaign searchTerm={searchTerm} />;
      case "Milestone Verification":
        return <Milestone searchTerm={searchTerm} />;
 
      case "Funds Disbursement":
        return <FundsDisbursement searchTerm={searchTerm} />;
      case "Payout  VerificationTable":
        return <PayoutVerificationTable searchTerm={searchTerm} />;
      case "Evidence VerificationTable":
        return <EvidenceVerificationTable searchTerm={searchTerm} />;
      default:
        return null;
    }
  };

  return (
    <AdminVerificationContainer>
      <AdminVerificationTitle>
        {sections.map(({ name, icon }) => (
          <button
            key={name}
            onClick={() => handleSectionClick(name)}
            className={activeSection === name ? "active" : ""}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              padding: "0.4rem 0.5rem",
              borderRadius: "30px",
              border: "none",
              cursor: "pointer",
              fontWeight: activeSection === name ? "600" : "500",
            }}
          >
            {icon}
            {name}
          </button>
        ))}
      </AdminVerificationTitle>

      <AdminVerificationContent>
        <AdminVerificationTop>
          <h2>{activeSection}</h2>
          <p>Review and approve {activeSection.toLowerCase()}</p>
        </AdminVerificationTop>
        <AdminVerificationInput>
          <div className="input-info">
            <section className="input-section">
              <div className="holder">
                <div className="logo">
                  <CiSearch size={18} />
                </div>
                <input
                  type="text"
                  placeholder="Search campaigns, users, NGOs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </section>

            <section className="status-info">
              <div className="all-stat">All Status</div>
              <div className="all-drop">
                <select></select>
              </div>
            </section>
          </div>
        </AdminVerificationInput>
        <AdminVerificationItem>{renderSection()}</AdminVerificationItem>
      </AdminVerificationContent>
    </AdminVerificationContainer>
  );
};

export default AdminVerification;
