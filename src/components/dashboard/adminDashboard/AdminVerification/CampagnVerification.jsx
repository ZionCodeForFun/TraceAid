import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import {
  AdminVerificationTitle,
  AdminVerificationContent,
  AdminVerificationContainer,
  AdminVerificationTop,
  AdminVerificationItem,
} from "../../../style/AdminVerificationStyle";


import Campaign from "./adminVerificationtables/CampaignVerification.jsx";
import Milestone from "./adminVerificationtables/MilestoneVerification.jsx";
import FundsDisbursement from "./adminVerificationtables/FundsDisbursement.jsx";

const CampagnVerification = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeSection, setActiveSection] = useState("Campaign Verification");

  const sections = [
    "Campaign Verification",
    "Milestone Verification",
    "Funds Disbursement",
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
      default:
        return null;
    }
  };

  return (
    <AdminVerificationContainer>
      <AdminVerificationTitle>
        {sections.map((section) => (
          <button
            key={section}
            onClick={() => handleSectionClick(section)}
            className={activeSection === section ? "active" : ""}
          >
            {section}
          </button>
        ))}
      </AdminVerificationTitle>

      <AdminVerificationContent>
        <AdminVerificationTop>
          <h2>{activeSection}</h2>
          <p>Review and approve {activeSection.toLowerCase()}</p>
        </AdminVerificationTop>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "0.5rem",
            backgroundColor: "#f9fafb",
            marginBottom: "1rem",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#F3F3F5",
              borderRadius: "10px",
              padding: "0.6rem 0.8rem",
              width: "90%",
            }}
          >
            <CiSearch size={18} color="#777" />
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                border: "none",
                outline: "none",
                flex: 1,
                backgroundColor: "#F3F3F5",
                paddingLeft: "0.4rem",
                fontSize: "14px",
              }}
            />
          </div>
        </div>

        <AdminVerificationItem>{renderSection()}</AdminVerificationItem>
      </AdminVerificationContent>
    </AdminVerificationContainer>
  );
};

export default CampagnVerification;
