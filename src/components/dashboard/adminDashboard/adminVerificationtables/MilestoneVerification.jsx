import React from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import {
  TableContainer,
  Header,
  HeaderItem,
  Row,
  Cell,
  Status,
  Actions,
} from "../../../../style/AdminVerificationStyle";

const Milestone = () => {
  const milestones = [
    {
      milestone: "Phase 1 - Education Setup",
      campaign: "Save the Children",
      ngo: "Hope Foundation",
      amount: "₦2,000,000",
      submitted: "Oct 22, 2025",
      status: "Approved",
    },

  ];

  return (
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
          <Cell>{item.milestone}</Cell>
          <Cell>{item.campaign}</Cell>
          <Cell>{item.ngo}</Cell>
          <Cell>{item.amount}</Cell>
          <Cell>{item.submitted}</Cell>
          <Status active={item.status === "Approved"}>
            {item.status}
          </Status>
          <Actions>
            <MdOutlineRemoveRedEye />
          </Actions>
        </Row>
      ))}
    </TableContainer>
  );
};

export default Milestone;
