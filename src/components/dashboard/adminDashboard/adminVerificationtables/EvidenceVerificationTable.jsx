import React, { useEffect, useState } from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaImage, FaVideo } from "react-icons/fa";
import {
  TableContainer,
  CampaignHeader,
  HeaderItem,
  CampaignRow,
  Cell,
  Status,
  Actions,
} from "../../../../style/AdminVerificationStyle";
import axios from "axios";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import EvidenceVerificationModal from "../modal/Evidence VerificationModal";

const EvidenceVerificationTable = () => {
  const [evidences, setEvidences] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedEvidence, setSelectedEvidence] = useState(null);
  const { token } = useSelector((state) => state.adminAuth);

  // Dummy data to use while API returns empty — useful for integrating the modal/UI ahead of real data
  const DUMMY_EVIDENCES = [
    {
      id: "d1",
      campaign: { campaignTitle: "Clean Water Project" },
      milestone: { milestoneTitle: "Phase 1 - Wells" },
      fundraiser: { firstName: "Ada", lastName: "Lagos" },
      imageUrl: "https://via.placeholder.com/150",
      videoUrl: null,
      description:
        "Installed two wells and tested water purity for the surrounding villages.",
      status: "pending",
    },
    {
      id: "d2",
      campaign: { campaignTitle: "School Supplies" },
      milestone: { milestoneTitle: "Buy Books" },
      fundraiser: { firstName: "John", lastName: "Doe" },
      imageUrl: null,
      videoUrl:
        "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
      description:
        "Delivered books to two schools and received acknowledgement from headmasters.",
      status: "pending",
    },
  ];

  const fetchEvidences = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BaseUrl_AdminKycV}/milestone-evidence/pending`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = Array.isArray(res.data) ? res.data : res.data?.data || [];

      // If backend returns no data (empty array), fall back to dummy data so UI/modal can be integrated and tested
      const finalData = data && data.length > 0 ? data : DUMMY_EVIDENCES;

      setEvidences(finalData);
      console.log("firstcom", finalData);
      toast.success(
        data && data.length > 0
          ? "Pending milestone evidences fetched successfully"
          : "No pending evidences from API — using dummy data for UI integration"
      );
    } catch (error) {
      console.error("Error fetching evidences:", error.response?.data || error);
      toast.error(error.response?.data?.message || "Failed to fetch evidences");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvidences();
  }, [token]);

  const handleView = (evidence) => {
    setSelectedEvidence(evidence);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedEvidence(null);
  };

  const handleAccept = async (evidence) => {
    // Placeholder: here you would call your accept API endpoint.
    console.log("Accepting evidence:", evidence);
    toast.success(
      `Evidence for ${evidence.campaign?.campaignTitle || "item"} accepted`
    );

    // Update local state to reflect approval so UI shows change immediately
    setEvidences((prev) =>
      prev.map((e) => (e.id === evidence.id ? { ...e, status: "approved" } : e))
    );
    handleCloseModal();
  };

  const handleReject = async (evidence, reason) => {
    // Placeholder: here you would call your reject API endpoint with a reason.
    console.log("Rejecting evidence:", evidence, "reason:", reason);
    toast.error(
      `Evidence for ${evidence.campaign?.campaignTitle || "item"} rejected${
        reason ? `: ${reason}` : ""
      }`
    );

    // Update local state to reflect rejection and store reason
    setEvidences((prev) =>
      prev.map((e) =>
        e.id === evidence.id
          ? { ...e, status: "rejected", rejectionReason: reason }
          : e
      )
    );
    handleCloseModal();
  };

  return (
    <>
      <TableContainer>
        <CampaignHeader columns={8}>
          <HeaderItem>Campaign</HeaderItem>
          <HeaderItem>Milestone</HeaderItem>
          <HeaderItem>Fundraiser</HeaderItem>
          <HeaderItem>Images</HeaderItem>
          <HeaderItem>Videos</HeaderItem>
          <HeaderItem>Description</HeaderItem>
          <HeaderItem>Status</HeaderItem>
          <HeaderItem>Actions</HeaderItem>
        </CampaignHeader>

        {loading ? (
          <CampaignRow columns={8}>
            <Cell colSpan={8}>Loading evidences...</Cell>
          </CampaignRow>
        ) : evidences.length > 0 ? (
          evidences.map((item, index) => (
            <CampaignRow key={index} columns={8}>
              <Cell>{item.campaign?.campaignTitle || "—"}</Cell>
              <Cell>{item.milestone?.milestoneTitle || "—"}</Cell>
              <Cell>
                {item.fundraiser
                  ? `${item.fundraiser.firstName} ${item.fundraiser.lastName}`
                  : "—"}
              </Cell>
              <Cell
                style={{ display: "flex", alignItems: "center", gap: "6px" }}
              >
                <FaImage size={16} />
                <span>{item.imageUrl ? 1 : 0}</span>
              </Cell>
              <Cell
                style={{ display: "flex", alignItems: "center", gap: "6px" }}
              >
                <FaVideo size={16} />
                <span>{item.videoUrl ? 1 : 0}</span>
              </Cell>
              <Cell>
                {item.description?.length > 25
                  ? `${item.description.slice(0, 25)}...`
                  : item.description || "—"}
              </Cell>
              <Status active={item.status === "approved"}>
                {item.status || "pending"}
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
                <MdOutlineRemoveRedEye /> Review
              </Actions>
            </CampaignRow>
          ))
        ) : (
          <CampaignRow columns={8}>
            <Cell colSpan={8}>No pending evidences found.</Cell>
          </CampaignRow>
        )}
      </TableContainer>

      {/* Use project modal component for reviewing evidence */}
      {showModal && (
        <EvidenceVerificationModal
          evidence={selectedEvidence}
          onClose={handleCloseModal}
          onAccept={handleAccept}
          onReject={handleReject}
        />
      )}
    </>
  );
};

export default EvidenceVerificationTable;
