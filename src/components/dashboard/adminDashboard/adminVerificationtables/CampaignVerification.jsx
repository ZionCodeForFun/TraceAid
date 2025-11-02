import React from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import {
  TableContainer,
  CampaignHeader,
  HeaderItem,
  CampaignRow,
  Cell,
  Status,
  Actions,
} from "../../../../style/AdminVerificationStyle";

const Campaign = () => {
  const campaigns = [
    {
      CampaignName: "Education for all",
      NGO: "Slum2Africa",
      CreatedDate: "2024-10-10",
      Goal: "₦5,000,000",
      Status: "Approved",
    },
    {
      CampaignName: "Light Up a village",
      NGO: "Green Earth NGO",
      CreatedDate: "2024-10-14",
      Goal: "₦75,000",
      Status: "Approved",
    },
    {
      CampaignName: "Save the climate",
      NGO: "Slum2Africa",
      CreatedDate: "2024-10-10",
      Goal: "₦5,000,000",
      Status: "Approved",
    },
    {
      CampaignName: "Pad a girl",
      NGO: "Faith Kaiye Foundation",
      CreatedDate: "2024-10-08",
      Goal: "₦40,000",
      Status: "Approved",
    },
    {
      CampaignName: "Education for all",
      NGO: "Child Care Foundation",
      CreatedDate: "2024-10-15",
      Goal: "₦60,000",
      Status: "Approved",
    },
  ];

  return (
    <TableContainer>
      <CampaignHeader columns={6}>
        <HeaderItem>Campaign Name</HeaderItem>
        <HeaderItem>NGO</HeaderItem>
        <HeaderItem>Created Date</HeaderItem>
        <HeaderItem>Goal</HeaderItem>
        <HeaderItem>Status</HeaderItem>
        <HeaderItem>Actions</HeaderItem>
      </CampaignHeader>

      {campaigns.map((item, index) => (
        <CampaignRow key={index} columns={6}>
          <Cell>{item.CampaignName}</Cell>
          <Cell>{item.NGO}</Cell>
          <Cell>{item.CreatedDate}</Cell>
          <Cell>{item.Goal}</Cell>
          {/* <Cell>{item.Status}</Cell> */}
          <Status active={item.Status === "Approved"}>
            {item.Status}
          </Status>
          <Actions style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'7px'}}>
            <MdOutlineRemoveRedEye /> View
          </Actions>
        </CampaignRow>
      ))}
    </TableContainer>
  );
};

export default Campaign;
