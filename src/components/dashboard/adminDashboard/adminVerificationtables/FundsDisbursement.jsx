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

// const FundsDisbursement = ({ searchTerm }) => {
//   const data = [
//     {
//       Campaign: "Education for All",
//       NGO: "Slum2Africa",
//       Amount: "₦5,000,000",
//       Evidence: "receipt.pdf",
//       Submitted: "2025-10-30",
//       Status: "Approved",
//       Actions: "View",
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
//           <HeaderItem>Campaign/Verification</HeaderItem>
//           <HeaderItem>NGO</HeaderItem>
//           <HeaderItem>Amount</HeaderItem>
//           <HeaderItem>Evidence</HeaderItem>
//           <HeaderItem>Submitted</HeaderItem>
//           <HeaderItem>Status</HeaderItem>
//           <HeaderItem>Actions</HeaderItem>
//         </Header>

//         {filteredData.map((row, i) => (
//           <Row key={i}>
//             <Goal>{row.Campaign}</Goal>
//             <NGO>{row.NGO}</NGO>
//             <Goal>{row.Amount}</Goal>
//             <Goal>{row.Evidence}</Goal>
//             <Goal>{row.Submitted}</Goal>
//             <Status active={row.Status === "Approved"}>{row.Status}</Status>
//             <Actions>{row.Actions}</Actions>
//           </Row>
//         ))}
//       </TableContainer>
//     </AdminVerificationItem>
//   );
// };

// export default FundsDisbursement;














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

const FundsDisbursement = () => {
  const funds = [
    {
      campaign: "Save the Children",
      ngo: "Hope Foundation",
      amount: "₦3,000,000",
      evidence: "Uploaded",
      submitted: "Oct 20, 2025",
      status: "Approved",
    },
    {
      campaign: "Clean Water Project",
      ngo: "Blue Earth",
      amount: "₦1,200,000",
      evidence: "Pending",
      submitted: "Oct 28, 2025",
      status: "Pending",
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
          <Cell>{item.campaign}</Cell>
          <Cell>{item.ngo}</Cell>
          <Cell>{item.amount}</Cell>
          <Cell>{item.evidence}</Cell>
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

export default FundsDisbursement;
