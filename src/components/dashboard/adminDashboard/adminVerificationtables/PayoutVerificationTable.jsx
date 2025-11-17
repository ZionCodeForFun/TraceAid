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
import axios from "axios";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import PaymentModal from "../modal/PaymentModal"; 

const PayoutVerificationTable = () => {
  const [payouts, setPayouts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { token } = useSelector((state) => state.adminAuth);

  const [showModal, setShowModal] = useState(false);
  const [selectedPayout, setSelectedPayout] = useState(null);

  const fetchPayouts = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BaseUrl_AdminKycV}/get-all-payout`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const data = Array.isArray(res.data)
        ? res.data
        : res.data?.data || [];

      setPayouts(data);
      console.log("first zionn", data)
      toast.success(data?.message)
    } catch (error) {
      console.error("Error fetching payouts:", error);
      toast.error("Failed to fetch payouts");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPayouts();
  }, [token]);

  const handleView = (payout) => {
    setSelectedPayout(payout);
    setShowModal(true);
  };

  return (
    <>
      <TableContainer>
        <CampaignHeader columns={7}>
          <HeaderItem>Reference ID</HeaderItem>
          <HeaderItem>Fundraiser Email</HeaderItem>
          <HeaderItem>Campaign ID</HeaderItem>
          <HeaderItem>Milestone ID</HeaderItem>
          <HeaderItem>Amount</HeaderItem>
          <HeaderItem>Status</HeaderItem>
          <HeaderItem>Actions</HeaderItem>
        </CampaignHeader>

        {loading ? (
          <CampaignRow columns={7}>
            <Cell colSpan={7}>Loading payouts...</Cell>
          </CampaignRow>
        ) : payouts.length > 0 ? (
          payouts.map((item, index) => (
            <CampaignRow key={index} columns={7}>
              <Cell>{item.referenceID || "—"}</Cell>
              <Cell>{item.fundraiser?.email || "—"}</Cell>
              <Cell>{item.campaign?._id || "—"}</Cell>
              <Cell>{item.milestone || "—"}</Cell>
              <Cell>₦{item.amount?.toLocaleString() || 0}</Cell>

              <Status active={item.status === "approved"}>
                {item.status || "pending"}
              </Status>

              <Actions onClick={() => handleView(item)}>
                <MdOutlineRemoveRedEye /> View
              </Actions>
            </CampaignRow>
          ))
        ) : (
          <CampaignRow columns={7}>
            <Cell colSpan={7}>No payouts found.</Cell>
          </CampaignRow>
        )}
      </TableContainer>

      {/* SHOW MODAL */}
      {showModal && (
        <PaymentModal
          data={selectedPayout}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export default PayoutVerificationTable;
