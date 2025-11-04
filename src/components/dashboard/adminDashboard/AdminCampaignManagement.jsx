import React, { useState } from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import CampaignActive from "./modal/CampaignActive";
import CampaignPaused from "./modal/CampaignPaused";
import CampaignCompleted from "./modal/CampaignCompleted";

import {
  Container,
  Title,
  Subtitle,
  TopBar,
  Table,
  TableHeader,
  TableRow,
  NGOName,
  ProgressCell,
  ProgressBar,
  ProgressFill,
  StatusTag,
  AdminCampaignInput,
  ActionButton,
} from "../../../style/AdminCampaignManagementStyle";

const CampaignManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [campaigns, setCampaigns] = useState([
    {
      name: "Education for all",
      ngo: "Slum2Africa",
      progress: 85,
      donors: 156,
      deadline: "2024-12-31",
      status: "active",
      description: "Stationery for the children of Makoko Nursery School.",
      goal: 5000000,
      raised: 67500,
    },
    {
      name: "Books for Bright Futures",
      ngo: "TeachReach Foundation",
      progress: 100,
      donors: 89,
      deadline: "2025-11-30",
      status: "completed",
      description: "Providing textbooks to rural communities.",
      goal: 3500000,
      raised: 3500000,
    },
    {
      name: "Pad a Girl",
      ngo: "Faith Kaiye Foundation",
      progress: 71,
      donors: 234,
      deadline: "2024-12-15",
      status: "active",
      description: "Providing sanitary pads to school girls.",
      goal: 1500000,
      raised: 1065000,
    },
    {
      name: "Medical Aid",
      ngo: "Child Care Foundation",
      progress: 25,
      donors: 67,
      deadline: "2025-01-20",
      status: "paused",
      description: "Medical supplies for children in need.",
      goal: 2000000,
      raised: 500000,
    },
    {
      name: "Save the Climate",
      ngo: "Green Earth NGO",
      progress: 90,
      donors: 412,
      deadline: "2025-03-15",
      status: "active",
      description: "Tree planting and renewable energy advocacy.",
      goal: 3000000,
      raised: 2700000,
    },
  ]);

  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [activeModalType, setActiveModalType] = useState(null);

  const handleView = (campaign) => {
    setSelectedCampaign(campaign);
    setActiveModalType(campaign.status); 
  };

  const handleCloseModal = () => {
    setSelectedCampaign(null);
    setActiveModalType(null);
  };

 
  const handlePauseCampaign = (campaignName) => {
    setCampaigns((prev) =>
      prev.map((c) =>
        c.name === campaignName ? { ...c, status: "paused" } : c
      )
    );
    handleCloseModal();
  };

  const filteredCampaigns = campaigns.filter((c) =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <Title>Campaign Management</Title>
      <Subtitle>Monitor and manage all campaigns</Subtitle>

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
                <select></select>
              </div>
            </section>
          </div>
        </AdminCampaignInput>
      </TopBar>

      <Table>
        <TableHeader>
          <span>Campaign Name</span>
          <span>NGO</span>
          <span>Progress</span>
          <span>Donors</span>
          <span>Deadline</span>
          <span>Status</span>
          <span>Actions</span>
        </TableHeader>

        {filteredCampaigns.map((item, i) => (
          <TableRow key={i}>
            <span>{item.name}</span>
            <NGOName>{item.ngo}</NGOName>
            <ProgressCell>
              <ProgressBar>
                <ProgressFill value={item.progress} status={item.status} />
              </ProgressBar>
              <span>{item.progress}%</span>
            </ProgressCell>
            <span>{item.donors}</span>
            <span>{item.deadline}</span>
            <StatusTag status={item.status}>{item.status}</StatusTag>
            <ActionButton onClick={() => handleView(item)}>
              <MdOutlineRemoveRedEye /> View
            </ActionButton>
          </TableRow>
        ))}
      </Table>

      {activeModalType === "active" && (
        <CampaignActive
          campaign={selectedCampaign}
          onClose={handleCloseModal}
          onPause={handlePauseCampaign}
        />
      )}

      {activeModalType === "paused" && (
        <CampaignPaused campaign={selectedCampaign} onClose={handleCloseModal} />
      )}

      {activeModalType === "completed" && (
        <CampaignCompleted
          campaign={selectedCampaign}
          onClose={handleCloseModal}
        />
      )}
    </Container>
  );
};

export default CampaignManagement;
