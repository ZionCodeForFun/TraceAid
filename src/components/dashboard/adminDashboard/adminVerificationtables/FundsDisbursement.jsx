import React from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
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
      campaign: "Education for all",
      subCampaign: "Phase 2: ",
      ngo: "Hope Foundation",
      amount: "₦20,000",
      submitted: "Oct 20, 2025",
      MilestoneFundsStatus: "approved",
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
          <Evidence>5/5</Evidence>
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
