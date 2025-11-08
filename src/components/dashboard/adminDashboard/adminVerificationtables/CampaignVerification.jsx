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
import CampaignCompleted from "../modal/CampaignCompleted";
import axios from "axios";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const Campaign = () => {
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(false);
  const { token } = useSelector((state) => state.adminAuth);

  const fetchCampaigns = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${
          import.meta.env.VITE_BaseUrl_AdminGetCampagn
        }/get-all-campaign-and-milestones`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res.data?.data);
      const campaigns = Array.isArray(res.data)
        ? res.data
        : res.data?.data || [];

      if (campaigns.length > 0) {
        const normalized = campaigns.map((c) => {
          const allMilestonesCompleted =
            Array.isArray(c.milestones) &&
            c.milestones.every((m) => m.isCompleted);

          return {
            id: c._id,
            campaignCategory: c.campaignCategory,
            campaignTitle: c.campaignTitle,
            fundraiser: c.fundraiser,
            createdAt: c.createdAt,
            totalCampaignGoalAmount:
              c.targetAmount || c.totalCampaignGoalAmount || "—",
            status: c.isActive ? "Approved" : "Pending",
            isCompleted: c.isActive && allMilestonesCompleted,
            milestones: c.milestones || [],
            raw: c,
          };
        });

        setCampaigns(normalized);
        toast.success("Campaigns fetched successfully");
      } else {
        toast.warn("No campaigns found");
      }
    } catch (error) {
      console.error("Error fetching campaigns:", error.response?.data || error);
      toast.error("Failed to fetch campaigns");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchCampaigns();
  }, [token]);

  const handleView = (campaign) => {
    setSelectedCampaign(campaign.raw || campaign);
  };

  const handleClose = () => {
    setSelectedCampaign(null);
  };

  return (
    <>
      <TableContainer>
        <CampaignHeader columns={6}>
          <HeaderItem>Campaign Name</HeaderItem>
          <HeaderItem>Fundraiser</HeaderItem>
          <HeaderItem>Created Date</HeaderItem>
          <HeaderItem>Goal</HeaderItem>
          <HeaderItem>Status</HeaderItem>
          <HeaderItem>Actions</HeaderItem>
        </CampaignHeader>

        {loading ? (
          <CampaignRow columns={6}>
            <Cell colSpan={6}>Loading campaigns...</Cell>
          </CampaignRow>
        ) : campaigns.length > 0 ? (
          campaigns.map((item, index) => (
            <CampaignRow key={index} columns={6}>
              <Cell>{item.campaignCategory || "Unnamed Campaign"}</Cell>
              <Cell>{item.fundraiser || "Unknown"}</Cell>
              <Cell>
                {item.createdAt
                  ? new Date(item.createdAt).toLocaleDateString()
                  : "—"}
              </Cell>
              <Cell>
                {item.totalCampaignGoalAmount
                  ? `₦${item.totalCampaignGoalAmount}`
                  : "—"}
              </Cell>
              <Status active={item.status === "Approved"}>
                {item.status || "Pending"}
              </Status>
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

      {selectedCampaign && selectedCampaign.isCompleted && (
        <CampaignCompleted campaign={selectedCampaign} onClose={handleClose} />
      )}

      {selectedCampaign &&
        !selectedCampaign.isCompleted &&
        selectedCampaign.isActive && (
          <CampaignDetailsAprovedModal
            campaign={selectedCampaign}
            onClose={handleClose}
          />
        )}

      {selectedCampaign &&
        !selectedCampaign.isCompleted &&
        !selectedCampaign.isActive && (
          <CampaignDetailsPendingModal
            campaign={selectedCampaign}
            onClose={handleClose}
          />
        )}
    </>
  );
};

export default Campaign;
