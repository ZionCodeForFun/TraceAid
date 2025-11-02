// import React from "react";
// import {
//   AdminVerificationItem,
//   TableContainer,
//   Header,
//   HeaderItem,
//   Row,
//   NGO,
//   Goal,
//   Status,
//   Actions,
// } from "../../../style/AdminVerificationStyle.jsx";

// const MilestoneVerification = ({ searchTerm }) => {
//   const data = [
//     {
//       Milestone: "Build 2 classrooms",
//       Campaign: "Education for All",
//       NGO: "Slum2Africa",
//       Amount: "₦1,000,000",
//       Submitted: "2025-10-28",
//       Status: "Pending",
//       Actions: "Verify",
//     },
//   ];

//   const filteredData = data.filter((row) =>
//     Object.values(row).some((val) =>
//       String(val).toLowerCase().includes(searchTerm.toLowerCase())
//     )
//   );

//   return (
//     <AdminVerificationItem>
//       <TableContainer>
//         <Header>
//           <HeaderItem>Milestone</HeaderItem>
//           <HeaderItem>Campaign</HeaderItem>
//           <HeaderItem>NGO</HeaderItem>
//           <HeaderItem>Amount</HeaderItem>
//           <HeaderItem>Submitted</HeaderItem>
//           <HeaderItem>Status</HeaderItem>
//           <HeaderItem>Actions</HeaderItem>
//         </Header>

//         {filteredData.map((row, i) => (
//           <Row key={i}>
//             <Goal>{row.Milestone}</Goal>
//             <Goal>{row.Campaign}</Goal>
//             <NGO>{row.NGO}</NGO>
//             <Goal>{row.Amount}</Goal>
//             <Goal>{row.Submitted}</Goal>
//             <Status active={row.Status === "Approved"}>{row.Status}</Status>
//             <Actions>{row.Actions}</Actions>
//           </Row>
//         ))}
//       </TableContainer>
//     </AdminVerificationItem>
//   );
// };

// export default MilestoneVerification;











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
    {
      milestone: "Phase 2 - Distribution",
      campaign: "Clean Water Project",
      ngo: "Blue Earth",
      amount: "₦1,500,000",
      submitted: "Oct 30, 2025",
      status: "Pending",
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
