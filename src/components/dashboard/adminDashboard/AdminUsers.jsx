import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import {
  AdminUsersWrapper,
  TableContainer,
  Header,
  HeaderItem,
  Row,
  Name,
  Email,
  Date,
  Amount,
  Status,
} from "../../../style/AdminUsersStyle";

const AdminUsers = () => {
  const [activeTab, setActiveTab] = useState("donors");
  const [searchTerm, setSearchTerm] = useState("");

  const users = [
    { name: "John Doe", email: "john.doe@email.com", date: "2024-01-15", amount: "₦5,400", status: "active" },
    { name: "Sarah Smith", email: "sarah.smith@email.com", date: "2024-02-20", amount: "₦12,300", status: "active" },
    { name: "Michael Chen", email: "michael.chen@email.com", date: "2024-03-10", amount: "₦3,200", status: "active" },
    { name: "Emily Brown", email: "emily.brown@email.com", date: "2024-04-05", amount: "₦8,900", status: "inactive" },
    { name: "David Wilson", email: "david.wilson@email.com", date: "2024-01-15", amount: "₦5,400", status: "active" },
  ];

  const NGOs = [
    { OrganizationName: "Hope Foundation", Email: "contact@hopefoundation.org", Registered: "2023-06-10", TotalReceived: "₦245,000", Verification: "verified" },
    { OrganizationName: "Green Earth Initiative", Email: "info@greenearth.org", Registered: "2023-06-10", TotalReceived: "₦532,400", Verification: "verified" },
    { OrganizationName: "Children's Care Trust", Email: "admin@childrencare.org", Registered: "2024-01-05", TotalReceived: "₦128,900", Verification: "pending" },
    { OrganizationName: "Education For All", Email: "contact@educationforall.com", Registered: "2024-02-18", TotalReceived: "₦89,500", Verification: "verified" },
    { OrganizationName: "Community Support Network", Email: "support@community.com", Registered: "2024-02-18", TotalReceived: "₦89,500", Verification: "pending" },
  ];

  const filteredUsers = users.filter((user) =>
    Object.values(user).some((val) =>
      val.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const filteredNGOs = NGOs.filter((ngo) =>
    Object.values(ngo).some((val) =>
      val.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <AdminUsersWrapper>
      <section className="header-info">
        <p style={{ color: "#0A0A0A", fontSize: "16px", lineHeight: "16px", fontWeight: 400 }}>
          User Management
        </p>
        <p style={{ color: "#717182", fontSize: "14px", lineHeight: "24px", fontWeight: 400 }}>
          Manage donor and NGO accounts
        </p>
      </section>

      <section className="toogle-info">
        <button
          onClick={() => setActiveTab("donors")}
          style={{
            color: activeTab === "donors" ? "#C1E86E" : "#0A0A0A",
            backgroundColor: activeTab === "donors" ? "#1A1A1A" : "#ffffff",
            cursor: "pointer",
            padding: "0.5rem 1rem",
            borderRadius: "14px",
            border: activeTab === "donors" ? "none" : "1px solid #bebec0",
            transition: "0.3s ease",
          }}
        >
          Donors
        </button>

        <button
          onClick={() => setActiveTab("ngos")}
          style={{
            color: activeTab === "ngos" ? "#C1E86E" : "#0A0A0A",
            backgroundColor: activeTab === "ngos" ? "#1A1A1A" : "#ffffff",
            cursor: "pointer",
            padding: "0.5rem 1rem",
            borderRadius: "14px",
            border: activeTab === "ngos" ? "none" : "1px solid #bebec0",
            transition: "0.3s ease",
          }}
        >
          NGOs
        </button>
      </section>

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
      <TableContainer>
        <Header>
          <HeaderItem>{activeTab === "donors" ? "Name" : "Organization Name"}</HeaderItem>
          <HeaderItem>Email</HeaderItem>
          <HeaderItem>{activeTab === "donors" ? "Date" : "Registered"}</HeaderItem>
          <HeaderItem>{activeTab === "donors" ? "Total Donations" : "Total Received"}</HeaderItem>
          <HeaderItem>{activeTab === "donors" ? "Status" : "Verification"}</HeaderItem>
        </Header>

        {activeTab === "donors"
          ? filteredUsers.length > 0
            ? filteredUsers.map((user, index) => (
                <Row key={index}>
                  <Name>{user.name}</Name>
                  <Email>{user.email}</Email>
                  <Date>{user.date}</Date>
                  <Amount>{user.amount}</Amount>
                  <Status active={user.status === "active"}>{user.status}</Status>
                </Row>
              ))
            : <Row><Name>No donors found.</Name></Row>
          : filteredNGOs.length > 0
          ? filteredNGOs.map((ngo, index) => (
              <Row key={index}>
                <Name>{ngo.OrganizationName}</Name>
                <Email>{ngo.Email}</Email>
                <Date>{ngo.Registered}</Date>
                <Amount>{ngo.TotalReceived}</Amount>
                <Status active={ngo.Verification === "verified"}>{ngo.Verification}</Status>
              </Row>
            ))
          : <Row><Name>No NGOs found.</Name></Row>
        }
      </TableContainer>
    </AdminUsersWrapper>
  );
};

export default AdminUsers;
