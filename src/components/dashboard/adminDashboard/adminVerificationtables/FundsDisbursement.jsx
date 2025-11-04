import React, { useState } from "react";
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
import FundsDisbursementModalApproved from "../modal/FundDisbursmentApproved";
import FundsDisbursementModalPending from "../modal/FundDisbursementPending";
import FundsDisbursementModalRejected from "../modal/FundDisbursementRejected";

const FundsDisbursement = () => {
  const [selectedFund, setSelectedFund] = useState(null);

  const funds = [
    {
      campaign: "Clean Water Initiative",
      subCampaign: "Phase 1: Well Construction",
      ngo: "Hope Foundation",
      amount: "₦20,000",
      submitted: "2025-10-18",
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
      subCampaign: "Phase 1: Medical Supply Procurement",
      ngo: "Child Care Foundation",
      amount: "₦22,000",
      submitted: "2025-10-14",
      MilestoneFundsStatus: "rejected",
    },
  ];

  const handleCloseModal = () => setSelectedFund(null);

  return (
    <>
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
            <Evidence>
              <LuImage /> 5/5
            </Evidence>
            <Cell>{item.submitted}</Cell>
            <MilestoneFundsStatus status={item.MilestoneFundsStatus}>
              {item.MilestoneFundsStatus}
            </MilestoneFundsStatus>
            <Actions onClick={() => setSelectedFund(item)}>
              <MdOutlineRemoveRedEye /> View
            </Actions>
          </Row>
        ))}
      </TableContainer>

      {selectedFund?.MilestoneFundsStatus === "approved" && (
        <FundsDisbursementModalApproved onClose={handleCloseModal} />
      )}
     {selectedFund?.MilestoneFundsStatus === "pending" && (
        <FundsDisbursementModalPending onClose={handleCloseModal} />
      )}

       {selectedFund?.MilestoneFundsStatus === "rejected" && (
         <FundsDisbursementModalRejected onClose={handleCloseModal} />
       )} 
    </>
  );
};

export default FundsDisbursement;
