import React, { useState } from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import {
  TableContainer,
  Header,
  HeaderItem,
  Row,
  Cell,
  MilestoneFundsStatus,
  Actions,
} from "../../../../style/AdminVerificationStyle";
import MilestoneVpending from "../modal/MilestoneVpeding";
import MilestoneVrejected from "../modal/MilestoneVrejected";
import MilestoneVaproved from "../modal/MilestoneVaproved";

const Milestone = () => {
  const [selectedMilestone, setSelectedMilestone] = useState(null);
  const [modalType, setModalType] = useState(""); 

  const milestones = [
    {
      milestone: "Phase 1: Well Construction",
      subMilestone: "Phase 1 of 3",
      campaign: "Clean Water Initiative",
      subCampaign: "CMP-001",
      ngo: "Hope Foundation",
      amount: "₦20,000",
      submitted: "2024-10-15",
      MilestoneFundsStatus: "pending",
    },
    {
      milestone: "Phase 2: Equipment Purchase",
      subMilestone: "Phase 2 of 3",
      campaign: "Education for All",
      subCampaign: "CMP-002",
      ngo: "Education First",
      amount: "₦15,000",
      submitted: "2024-10-16",
      MilestoneFundsStatus: "pending",
    },
    {
      milestone: "Phase 3: Providing Books",
      subMilestone: "Phase 3 of 3",
      campaign: "Books for Bright Futures",
      subCampaign: "CMP-003",
      ngo: "Teach Reach Foundation",
      amount: "₦30,000",
      submitted: "2024-10-14",
      MilestoneFundsStatus: "approved",
    },
    {
      milestone: "Phase 1: Foundation & Structure",
      subMilestone: "Phase 1 of 3",
      campaign: "Animal Shelter Expansion",
      subCampaign: "CMP-004",
      ngo: "Pet Rescue",
      amount: "₦18,000",
      submitted: "2024-10-17",
      MilestoneFundsStatus: "pending",
    },
    {
      milestone: "Phase 1: Medical Supply Procurement",
      subMilestone: "Phase 1 of 3",
      campaign: "Medical Aid Campaign",
      subCampaign: "CMP-005",
      ngo: "Child Care Foundation",
      amount: "₦22,000",
      submitted: "2024-10-13",
      MilestoneFundsStatus: "rejected",
    },
  ];


  const handleView = (item) => {
    setSelectedMilestone(item);
    setModalType(item.MilestoneFundsStatus);
  };


  const handleCloseModal = () => {
    setSelectedMilestone(null);
    setModalType("");
  };

  return (
    <>
      <TableContainer>
        <Header columns={7}>
          <HeaderItem>Milestone</HeaderItem>
          <HeaderItem>Campaign</HeaderItem>
          <HeaderItem>NGO</HeaderItem>
          <HeaderItem>Amount</HeaderItem>
          <HeaderItem>Submitted</HeaderItem>
          <HeaderItem>Status</HeaderItem>
          <HeaderItem>Actions</HeaderItem>
        </Header>

        {milestones.map((item, index) => (
          <Row key={index} columns={7}>
            <Cell>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <span style={{ fontWeight: "600", color: "#333" }}>{item.milestone}</span>
                <span style={{ fontSize: "12px", color: "#90909b" }}>{item.subMilestone}</span>
              </div>
            </Cell>

            <Cell>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <span style={{ fontWeight: "600", color: "#333" }}>{item.campaign}</span>
                <span style={{ fontSize: "12px", color: "#90909b" }}>{item.subCampaign}</span>
              </div>
            </Cell>

            <Cell>{item.ngo}</Cell>
            <Cell>{item.amount}</Cell>
            <Cell>{item.submitted}</Cell>

            <MilestoneFundsStatus status={item.MilestoneFundsStatus}>
              {item.MilestoneFundsStatus}
            </MilestoneFundsStatus>

            <Actions
              onClick={() => handleView(item)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "4px",
                cursor: "pointer",
              }}
            >
              <MdOutlineRemoveRedEye /> View
            </Actions>
          </Row>
        ))}
      </TableContainer>

    
      {modalType === "pending" && selectedMilestone && (
        <MilestoneVpending onClose={handleCloseModal} data={selectedMilestone} />
      )}

    
      {modalType === "rejected" && selectedMilestone && (
        <MilestoneVrejected onClose={handleCloseModal} data={selectedMilestone} />
      )}
      {modalType === "approved" && selectedMilestone && (
        <MilestoneVaproved onClose={handleCloseModal} data={selectedMilestone} />
      )}
    </>
  );
};

export default Milestone;
