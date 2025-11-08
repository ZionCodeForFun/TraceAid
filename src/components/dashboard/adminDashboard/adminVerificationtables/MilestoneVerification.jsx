import React, { useEffect, useState } from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import {
  TableContainer,
  Header,
  HeaderItem,
  Row,
  Cell,
  MilestoneFundsStatus,
  Actions,
} from "../../../../style/AdminVerificationStyle";
import MilestoneVpending from "../modal/MilestoneVpeding";
import MilestoneVrejected from "../modal/MilestoneVrejected";
import MilestoneVaproved from "../modal/MilestoneVaproved";
import axios from "axios";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const Milestone = () => {
  const [selectedMilestone, setSelectedMilestone] = useState(null);
  const [modalType, setModalType] = useState("");
  const [milestones, setMilestones] = useState([]);
  const [loading, setLoading] = useState(false);
  const { token } = useSelector((state) => state.adminAuth);

  const fetchMilestones = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BaseUrl_AdminGetCampagn}/get-all-campaign-and-milestones`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
          const campaigns = Array.isArray(res.data?.data)
        ? res.data.data
        : Array.isArray(res.data)
        ? res.data
        : [];

      if (campaigns.length > 0) {
        const allMilestones = campaigns.flatMap((c) =>
          (c.milestones || []).map((m) => ({
            milestone: m.milestoneTitle ,
            campaign: c.campaignTitle,
            ngo: c.fundraiser ,
            amount: m.targetAmount ? `₦${m.targetAmount}` : "₦0",
            submitted: m.createdAt
              ? new Date(m.createdAt).toLocaleDateString()
              : "—",
            MilestoneFundsStatus: m.status?.toLowerCase() || "pending",
          }))
        );

        setMilestones(allMilestones);
        toast.success("Milestones fetched successfully");
      } else {
        toast.warn("No milestones found");
      }
    } catch (error) {
      console.error("Error fetching milestones:", error.response?.data || error);
      toast.error("Failed to fetch milestones");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMilestones();
  }, [token]);

  const handleView = (item) => {
    setSelectedMilestone(item);
    setModalType(item.MilestoneFundsStatus);
  };

  const handleCloseModal = () => {
    setSelectedMilestone(null);
    setModalType("");
  };

  return (
    <>
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

        {loading ? (
          <Row columns={7}>
            <Cell colSpan={7}>Loading milestones...</Cell>
          </Row>
        ) : milestones.length > 0 ? (
          milestones.map((item, index) => (
            <Row key={index} columns={7}>
              <Cell>
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <span style={{ fontWeight: "600", color: "#333" }}>
                    {item.milestone}
                  </span>
                  <span style={{ fontSize: "12px", color: "#90909b" }}>
                    {item.subMilestone}
                  </span>
                </div>
              </Cell>

              <Cell>
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
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
              <Cell>{item.submitted}</Cell>

              <MilestoneFundsStatus status={item.MilestoneFundsStatus}>
                {item.MilestoneFundsStatus}
              </MilestoneFundsStatus>

              <Actions
                onClick={() => handleView(item)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "4px",
                  cursor: "pointer",
                }}
              >
                <MdOutlineRemoveRedEye /> View
              </Actions>
            </Row>
          ))
        ) : (
          <Row columns={7}>
            <Cell colSpan={7}>No milestones found.</Cell>
          </Row>
        )}
      </TableContainer>

      {modalType === "pending" && selectedMilestone && (
        <MilestoneVpending onClose={handleCloseModal} data={selectedMilestone} />
      )}

      {modalType === "rejected" && selectedMilestone && (
        <MilestoneVrejected onClose={handleCloseModal} data={selectedMilestone} />
      )}

      {modalType === "approved" && selectedMilestone && (
        <MilestoneVaproved onClose={handleCloseModal} data={selectedMilestone} />
      )}
    </>
  );
};

export default Milestone;
