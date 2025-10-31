import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import {
  AdminVerificationTitle,
  AdminVerificationContent,
  AdminVerificationContainer,
  AdminVerificationTop,
  AdminVerificationItem,
  TableContainer,
  Header,
  HeaderItem,
  Row,
  CampaignName,
  NGO,
  CreatedDate,
  Goal,
  Status,
  Actions,
} from "../../../style/AdminVerificationStyle.jsx";

const AdminVerification = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeSection, setActiveSection] = useState("Campaign Verification");

  const users = [
    {
      CampaignName: "Education for all",
      NGO: "Slum2Africa",
      CreatedDate: "2024-10-10",
      Goal: "₦5,000,000",
      status: "Approved",
      Actions: "View",
    },
    {
      CampaignName: "Light up a village",
      NGO: "Solar Nigeria",
      CreatedDate: "2024-10-12",
      Goal: "₦30,000",
      status: "Pending",
      Actions: "View",
    },
    {
      CampaignName: "Save the climate",
      NGO: "Green Earth NGO",
      CreatedDate: "2024-10-14",
      Goal: "₦75,000",
      status: "Approved",
      Actions: "View",
    },
    {
      CampaignName: "Pad a girl",
      NGO: "Faith Kaiye foundation",
      CreatedDate: "2024-10-08",
      Goal: "₦40,000",
      status: "Approved",
      Actions: "View",
    },
    {
      CampaignName: "Medical Aid Campaign",
      NGO: "Child Care Foundation",
      CreatedDate: "2024-10-15",
      Goal: "₦60,000",
      status: "Approved",
      Actions: "View",
    },
  ];

  const filteredUsers = users.filter((user) =>
    Object.values(user).some((val) =>
      String(val).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  const sections = [
    "Campaign Verification",
    "Milestone Verification",
    "Funds Disbursement",
  ];

  return (
    <AdminVerificationContainer>

      <AdminVerificationTitle>
        {sections.map((section) => (
          <button
            key={section}
            onClick={() => handleSectionClick(section)}
            style={{
              padding: "6px 12px",
              marginRight: "8px",
              border: "none",
              borderRadius: "20px",
              background: activeSection === section ? "#7AA62D" : "transparent",
              color: activeSection === section ? "#FFFFFF" : "#333",
              fontWeight: activeSection === section ? "600" : "400",
              cursor: "pointer",
            }}
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

        <AdminVerificationItem>
          <TableContainer>
            <Header>
              <HeaderItem>Campaign Name</HeaderItem>
              <HeaderItem>NGO</HeaderItem>
              <HeaderItem>Created Date</HeaderItem>
              <HeaderItem>Goal</HeaderItem>
              <HeaderItem>Status</HeaderItem>
              <HeaderItem>Actions</HeaderItem>
            </Header>

            {filteredUsers.length > 0 ? (
              filteredUsers.map((user, index) => (
                <Row key={index}>
                  <CampaignName>{user.CampaignName}</CampaignName>
                  <NGO>{user.NGO}</NGO>
                  <CreatedDate>{user.CreatedDate}</CreatedDate>
                  <Goal>{user.Goal}</Goal>
                  <Status active={user.status === "Approved"}>
                    {user.status}
                  </Status>
                  <Actions>{user.Actions}</Actions>
                </Row>
              ))
            ) : (
              <Row>
                <Name>No campaigns found.</Name>
              </Row>
            )}
          </TableContainer>
        </AdminVerificationItem>
      </AdminVerificationContent>
    </AdminVerificationContainer>
  );
};

export default AdminVerification;
