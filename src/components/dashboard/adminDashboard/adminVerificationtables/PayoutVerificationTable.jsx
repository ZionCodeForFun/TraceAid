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

const PayoutVerificationTable = () => {
  const [payouts, setPayouts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { token } = useSelector((state) => state.adminAuth);

  // ✅ Fetch payouts from live endpoint
  const fetchPayouts = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BaseUrl_AdminKycV}/get-all-payout`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = Array.isArray(res.data)
        ? res.data
        : res.data?.data || [];
    
      setPayouts(data);
      toast.success("Payouts retrieved successfully");
    } catch (error) {
      console.error("Error fetching payouts:", error.response?.data || error);
      toast.error(
        error.response?.data?.message || "Failed to fetch payouts"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPayouts();
  }, [token]);

  const handleView = (payout) => {
    console.log("View payout:", payout);
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
          <CampaignRow columns={7}>
            <Cell colSpan={7}>No payouts found.</Cell>
          </CampaignRow>
        )}
      </TableContainer>
    </>
  );
};

export default PayoutVerificationTable;
