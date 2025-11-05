import React, { useState, useEffect } from "react";
import axios from "axios";
import { CiSearch } from "react-icons/ci";
import { useSelector } from "react-redux";
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
  const { token } = useSelector((state) => state.adminAuth);

  const [activeTab, setActiveTab] = useState("donors");
  const [searchTerm, setSearchTerm] = useState("");
  const [donors, setDonors] = useState([]);
  const [fundraisers, setFundraisers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);

      const donorsRes = await axios.get(
        `${import.meta.env.VITE_BaseUrl_AdminKycV}/get-all-donors`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log("Donors Response:", donorsRes.data);
      setDonors(donorsRes.data.data.donors || []);

      const ngosRes = await axios.get(
        `${import.meta.env.VITE_BaseUrl_AdminKycV}/get-all-fundraisers`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log("Fundraisers Response:", ngosRes.data);
      setFundraisers(ngosRes.data.data.fundraisers || []);
    } catch (err) {
      console.error(
        "Error fetching users:",
        err.response?.status,
        err.response?.data
      );
    } finally {
      setLoading(false);
    }
  };
  const filteredDonors = donors.filter((user) =>
    `${user.firstName} ${user.lastName} ${user.email}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const filteredFundraisers = fundraisers.filter((ngo) =>
    `${ngo.organizationName} ${ngo.email}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <AdminUsersWrapper>
      <section className="header-info">
        <p style={{ color: "#0A0A0A", fontSize: "16px" }}>User Management</p>
        <p style={{ color: "#717182", fontSize: "14px" }}>
          Manage donor and NGO accounts
        </p>
      </section>

      {/* Tab Toggle */}
      <section className="toogle-info">
        <button
          onClick={() => setActiveTab("donors")}
          style={{
            color: activeTab === "donors" ? "#C1E86E" : "#0A0A0A",
            backgroundColor: activeTab === "donors" ? "#1A1A1A" : "#fff",
            cursor: "pointer",
            padding: "0.5rem 1rem",
            borderRadius: "14px",
            border: activeTab === "donors" ? "none" : "1px solid #bebec0",
          }}
        >
          Donors
        </button>

        <button
          onClick={() => setActiveTab("ngos")}
          style={{
            color: activeTab === "ngos" ? "#C1E86E" : "#0A0A0A",
            backgroundColor: activeTab === "ngos" ? "#1A1A1A" : "#fff",
            cursor: "pointer",
            padding: "0.5rem 1rem",
            borderRadius: "14px",
            border: activeTab === "ngos" ? "none" : "1px solid #bebec0",
          }}
        >
          NGOs
        </button>
      </section>

      {/* Search */}
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
      </div>

     
      <TableContainer>
        <Header>
          <HeaderItem>
            {activeTab === "donors" ? "Name" : "Organization Name"}
          </HeaderItem>
          <HeaderItem>Email</HeaderItem>
          <HeaderItem>
            {activeTab === "donors" ? "Date" : "Registered"}
          </HeaderItem>
          <HeaderItem>
            {activeTab === "donors" ? "Total Donations" : "Total Received"}
          </HeaderItem>
          <HeaderItem>
            {activeTab === "donors" ? "Status" : "Verification"}
          </HeaderItem>
        </Header>

        {loading ? (
          <Row>
            <Name>Loading...</Name>
          </Row>
        ) : activeTab === "donors" ? (
          filteredDonors.length > 0 ? (
            filteredDonors.map((user) => (
              <Row key={user._id}>
                <Name>
                  {user.firstName} {user.lastName}
                </Name>
                <Email>{user.email}</Email>
                <Date>
                  {user.Registered
                    ? new Date(user.createdAt).toLocaleDateString()
                    : "N/A"}
                </Date>
                <Amount>₦{user.totalDonations?.toLocaleString() || "0"}</Amount>
                <Status active={!!user.isActive}>
                  {user.isActive ? "active" : "inactive"}
                </Status>
              </Row>
            ))
          ) : (
            <Row>
              <Name>No donors found.</Name>
            </Row>
          )
        ) : filteredFundraisers.length > 0 ? (
          filteredFundraisers.map((ngo) => (
            <Row key={ngo._id}>
              <Name>{ngo.organizationName}</Name>
              <Email>{ngo.email}</Email>
              <Date>
                {ngo.Registered
                  ? new Date(ngo.createdAt).toLocaleDateString()
                  : "N/A"}
              </Date>
              <Amount>₦{ngo.totalReceived?.toLocaleString() || "0"}</Amount>
              <Status active={!!ngo.isVerified}>
                {ngo.isVerified ? "verified" : "pending"}
              </Status>
            </Row>
          ))
        ) : (
          <Row>
            <Name>No NGOs found.</Name>
          </Row>
        )}
      </TableContainer>
    </AdminUsersWrapper>
  );
};

export default AdminUsers;
