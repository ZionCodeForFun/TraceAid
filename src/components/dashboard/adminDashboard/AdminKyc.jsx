import React, { useState } from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { LuImage } from "react-icons/lu";

import KycPending from "./modal/KycPending";
// import KycVerified from "./modal/KycVerified";
// import KycRejected from "./modal/KycRejected";

import {
  Container,
  Title,
  Subtitle,
  TopBar,
  Table,
  TableHeader,
  TableRow,
  NGOName,
  StatusTag,
  AdminCampaignInput,
  ActionButton,
} from "../../../style/AdminKycStyle";

const KycReview = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedKyc, setSelectedKyc] = useState(null);

  const campaigns = [
    {
      NgoName: "Slum2Africa",
      Email: "contact@hopefoundation.org",
      RegisteredDate: "2023-06-10",
      Documents: "6",
      status: "verified",
    },
    {
      NgoName: "Green Earth NGO",
      Email: "info@greenearth.org",
      RegisteredDate: "2023-08-15",
      Documents: "4",
      status: "pending",
    },
    {
      NgoName: "Child Care Foundation",
      Email: "support@childcare.org",
      RegisteredDate: "2024-01-20",
      Documents: "6",
      status: "pending",
    },
    {
      NgoName: "Pet Rescue",
      Email: "hello@petrescue.org",
      RegisteredDate: "2024-03-05",
      Documents: "4",
      status: "verified",
    },
    {
      NgoName: "Education First",
      Email: "contact@educationfirst.org",
      RegisteredDate: "2024-04-18",
      Documents: "2",
      status: "rejected",
    },
  ];

  const filteredCampaigns = campaigns.filter((c) =>
    c.NgoName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleView = (ngo) => {
    setSelectedKyc(ngo);
  };

  const handleClose = () => {
    setSelectedKyc(null);
  };

  return (
    <Container>
      <Title>KYC Review</Title>
      <Subtitle>Review and Verify NGO KYC Accounts</Subtitle>

      <TopBar>
        <AdminCampaignInput>
          <div className="campaign-info">
            <section className="campaign-section">
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
                <select>
                  <option value="">All</option>
                  <option value="pending">Pending</option>
                  <option value="verified">Verified</option>
                  <option value="rejected">Rejected</option>
                </select>
              </div>
            </section>
          </div>
        </AdminCampaignInput>
      </TopBar>

      <Table>
        <TableHeader>
          <span>NGO Name</span>
          <span>Email</span>
          <span>Registered Date</span>
          <span>Documents</span>
          <span>Status</span>
          <span>Actions</span>
        </TableHeader>

        {filteredCampaigns.map((item, i) => (
          <TableRow key={i}>
            <span>{item.NgoName}</span>
            <NGOName>{item.Email}</NGOName>
            <span>{item.RegisteredDate}</span>
            <span
              style={{
                height: "10px",
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <LuImage /> {item.Documents}
            </span>
            <StatusTag status={item.status}>{item.status}</StatusTag>
            <ActionButton onClick={() => handleView(item)}>
              <MdOutlineRemoveRedEye /> View
            </ActionButton>
          </TableRow>
        ))}
      </Table>

      {selectedKyc && selectedKyc.status === "pending" && (
        <KycPending kycData={selectedKyc} onClose={handleClose} />
      )}
      {/* {selectedKyc && selectedKyc.status === "verified" && (
        <KycVerified kycData={selectedKyc} onClose={handleClose} />
      )}
      {selectedKyc && selectedKyc.status === "rejected" && (
        <KycRejected kycData={selectedKyc} onClose={handleClose} />
      )} */}
    </Container>
  );
};

export default KycReview;
