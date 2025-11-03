import React from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { LuImage } from "react-icons/lu";
import {
  TableContainer,
  Header,
  HeaderItem,
  Row,
  Cell,
  Evidence,
  MilestoneFundsStatus,
  Actions,
} from "../../../../style/AdminVerificationStyle";

const FundsDisbursement = () => {
  const funds = [
    {
      campaign: "Clean water Initiative",
      subCampaign: "Phase 1: Well Construction",
      ngo: "Hope Foundation",
      amount: "₦20,000",
      submitted: "2025-10-18",
      MilestoneFundsStatus: "pending",
    },
    {
      campaign: "Education for All",
      subCampaign: "Phase 2: Equipment Purchase",
      ngo: "Education First",
      amount: "₦15,000",
      submitted: "2025-10-17",
      MilestoneFundsStatus: "pending",
    },
    {
      campaign: "Animal Shelter Expansion",
      subCampaign: "Phase 1: Foundation & Structure",
      ngo: "Pet Rescue",
      amount: "₦18,000",
      submitted: "2025-10-19",
      MilestoneFundsStatus: "pending",
    },
    {
      campaign: "Books For Bright Future",
      subCampaign: "Phase 3: Providing Books",
      ngo: "Teach Reach Foundation",
      amount: "₦30,000",
      submitted: "2025-10-16",
      MilestoneFundsStatus: "approved",
    },
    {
      campaign: "Medical Aid Campaign",
      subCampaign: "Phase 1:Medical Supply Procurement",
      ngo: "Child Care Foundation",
      amount: "₦22,000",
      submitted: "2025-10-14",
      MilestoneFundsStatus: "rejected",
    },
  ];

  return (
    <TableContainer>
      <Header columns={7}>
        <HeaderItem>Campaign/Verification</HeaderItem>
        <HeaderItem>NGO</HeaderItem>
        <HeaderItem>Amount</HeaderItem>
        <HeaderItem>Evidence</HeaderItem>
        <HeaderItem>Submitted</HeaderItem>
        <HeaderItem>Status</HeaderItem>
        <HeaderItem>Actions</HeaderItem>
      </Header>

      {funds.map((item, index) => (
        <Row key={index} columns={7}>
          <Cell>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "4px" }}
            >
              <span style={{ fontWeight: "600", color: "#333" }}>
                {item.campaign}
              </span>
              <span style={{ fontSize: "12px", color: "#90909b" }}>
                {item.subCampaign}
              </span>
            </div>
          </Cell>

          <Cell>{item.ngo}</Cell>
          <Cell>{item.amount}</Cell>
          <Evidence><LuImage/>5/5</Evidence>
          <Cell>{item.submitted}</Cell>
          <MilestoneFundsStatus status={item.MilestoneFundsStatus}>
            {item.MilestoneFundsStatus}
          </MilestoneFundsStatus>
          <Actions>
            <MdOutlineRemoveRedEye /> View
          </Actions>
        </Row>
      ))}
    </TableContainer>
  );
};

export default FundsDisbursement;
