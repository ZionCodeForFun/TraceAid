import React, { useEffect, useState } from "react";
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
import CampaignDetailsAprovedModal from "../modal/CampaignDetailsAprovedModal";
import CampaignDetailsPendingModal from "../modal/CampaignDetailsPendingModal";
import axios from "axios";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const Campaign = () => {
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [campaigns, setCampaigns] = useState([]);
  const token = useSelector((state) => state.adminAuth.token);
  console.log("Admin token:", token);
  const fetchCampaigns = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BaseUrl_AdminGetCampagn}/get-campaigns`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Campaigns fetched:", res.data?.data);
      setCampaigns(res.data?.data || []);
      toast.success(res.data?.message || "Campaigns fetched successfully");
    } catch (error) {
      console.error(
        "Error fetching campaigns:",
        error.response?.data || error.message
      );
      toast.error("Failed to fetch campaigns");
    }
  };

  useEffect(() => {
    fetchCampaigns();
  }, []);

  const handleView = (campaign) => {
    setSelectedCampaign(campaign);
  };

  const handleClose = () => {
    setSelectedCampaign(null);
  };

  return (
    <>
      <TableContainer>
        <CampaignHeader columns={6}>
          <HeaderItem>Campaign Name</HeaderItem>
          <HeaderItem>NGO</HeaderItem>
          <HeaderItem>Created Date</HeaderItem>
          <HeaderItem>Goal</HeaderItem>
          <HeaderItem>Status</HeaderItem>
          <HeaderItem>Actions</HeaderItem>
        </CampaignHeader>

        {campaigns.length > 0 ? (
          campaigns.map((item, index) => (
            <CampaignRow key={index} columns={6}>
              <Cell>{item.CampaignName}</Cell>
              <Cell>{item.NGO}</Cell>
              <Cell>{item.CreatedDate}</Cell>
              <Cell>{item.Goal}</Cell>
              <Status active={item.Status === "Approved"}>{item.Status}</Status>
              <Actions
                onClick={() => handleView(item)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "7px",
                  cursor: "pointer",
                }}
              >
                <MdOutlineRemoveRedEye /> View
              </Actions>
            </CampaignRow>
          ))
        ) : (
          <CampaignRow columns={6}>
            <Cell colSpan={6}>No campaigns found.</Cell>
          </CampaignRow>
        )}
      </TableContainer>

      {selectedCampaign && selectedCampaign.Status === "Approved" && (
        <CampaignDetailsAprovedModal
          campaign={selectedCampaign}
          onClose={handleClose}
        />
      )}

      {selectedCampaign && selectedCampaign.Status === "Pending" && (
        <CampaignDetailsPendingModal
          campaign={selectedCampaign}
          onClose={handleClose}
        />
      )}
    </>
  );
};

export default Campaign;
