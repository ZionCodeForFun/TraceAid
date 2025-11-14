import React, { useEffect, useState } from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaImage } from "react-icons/fa";
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
import EvidenceVerificationModal from "../modal/EvidenceVerificationModal";

const EvidenceVerificationTable = () => {
  const [evidences, setEvidences] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedEvidence, setSelectedEvidence] = useState(null);
  const { token } = useSelector((state) => state.adminAuth);

  const fetchEvidences = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BaseUrl_AdminKycV}/milestone-evidence/pending`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setEvidences(res.data?.data || []);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch evidences");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvidences();
  }, [token]);

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedEvidence(null);
  };

  const handleAction = async (evidence, action, note = "") => {
    try {
      await axios.post(
        `${import.meta.env.VITE_BaseUrl_AdminKycV}/review-milestone-evidence/${evidence._id}`,
        { action, note },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setEvidences((prev) =>
        prev.map((e) =>
          e._id === evidence._id
            ? {
                ...e,
                status: action === "approve" ? "approved" : "rejected",
              }
            : e
        )
      );
      console.log("data", action )
      toast.success(`Evidence ${action === "approve" ? "approved" : "rejected"}`);
      handleCloseModal();
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message);
    }
  };

  const handleView = (evidence) => {
    setSelectedEvidence(evidence);
    setShowModal(true);
  };

  return (
    <>
      <TableContainer>
        <CampaignHeader columns={8}>
          <HeaderItem>Campaign</HeaderItem>
          <HeaderItem>Milestone</HeaderItem>
          <HeaderItem>Fundraiser</HeaderItem>
          <HeaderItem>Uploads</HeaderItem>
          <HeaderItem>Description</HeaderItem>
          <HeaderItem>Status</HeaderItem>
          <HeaderItem>Actions</HeaderItem>
        </CampaignHeader>

        {loading ? (
          <CampaignRow columns={8}>
            <Cell colSpan={8}>Loading evidences...</Cell>
          </CampaignRow>
        ) : evidences.length > 0 ? (
          evidences.map((item) => (
            <CampaignRow key={item._id} columns={8}>
              <Cell>{item.campaign?.campaignTitle || "—"}</Cell>
              <Cell>{item.milestone?.milestoneTitle || "—"}</Cell>
              <Cell>{item.fundraiser?._id || "—"}</Cell>
              <Cell style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <FaImage size={16} />
                <span>{item.uploads?.length || 0}</span>
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

      {showModal && selectedEvidence && (
        <EvidenceVerificationModal
          evidence={selectedEvidence}
          onClose={handleCloseModal}
          onAction={handleAction}
        />
      )}
    </>
  );
};

export default EvidenceVerificationTable;
