import React, { useState } from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";

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
import { CiSearch } from "react-icons/ci";

const CampaignManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const campaigns = [
    {
      name: "Education for all",
      ngo: "Slum2Africa",
      progress: 85,
      donors: 156,
      deadline: "2024-12-31",
      status: "active",
    },
    {
      name: "Books for Bright Futures",
      ngo: "TeachReach Foundation",
      progress: 100,
      donors: 89,
      deadline: "2025-11-30",
      status: "completed",
    },
    {
      name: "Pad a Girl",
      ngo: "Faith Kaiye Foundation",
      progress: 71,
      donors: 234,
      deadline: "2024-12-15",
      status: "active",
    },
    {
      name: "Medical Aid",
      ngo: "Child Care Foundation",
      progress: 25,
      donors: 67,
      deadline: "2025-01-20",
      status: "paused",
    },
    {
      name: "Save the Climate",
      ngo: "Green Earth NGO",
      progress: 90,
      donors: 412,
      deadline: "2025-03-15",
      status: "active",
    },
  ];

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

        {campaigns.map((item, i) => (
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
            <ActionButton>
              <MdOutlineRemoveRedEye /> View
            </ActionButton>
          </TableRow>
        ))}
      </Table>
    </Container>
  );
};

export default CampaignManagement;

