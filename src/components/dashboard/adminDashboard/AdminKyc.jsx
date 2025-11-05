import React, { useState, useEffect } from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { LuImage } from "react-icons/lu";
import axios from "axios";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

import KycPending from "./modal/KycPending";

import {
  Container,
  Title,
  Subtitle,
  TopBar,
  Table,
  TableHeader,
  TableRow,
  NGOName,
  StatusTag,
  AdminCampaignInput,
  ActionButton,
} from "../../../style/AdminKycStyle";

const KycReview = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedKyc, setSelectedKyc] = useState(null);
  const [kycList, setKycList] = useState([]);
  const [statusFilter, setStatusFilter] = useState("");
  const [loading, setLoading] = useState(false);

  const token = useSelector((state) => state.adminAuth?.token);

  const baseUrl = import.meta.env.VITE_BaseUrl_AdminKycV;
  const fetchKycData = async () => {
    try {
      setLoading(true);
      const url = statusFilter
  ? `${baseUrl}/get-kyc-by-status?status=${statusFilter}`
  : `${baseUrl}/get-all-kyc`;
  

      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = response?.data?.data;
      if (Array.isArray(data)) {
        setKycList(data);
      } else {
        toast.error("Unexpected response from server");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to load KYC data");
      
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchKycData();
  }, [statusFilter]);

  const filteredKyc = kycList.filter((ngo) =>
    ngo?.organizationName?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleView = (ngo) => {
    setSelectedKyc(ngo);
  };

  const handleClose = () => {
    setSelectedKyc(null);
  };

  return (
    <Container>
      <Title>KYC Review</Title>
      <Subtitle>Review and Verify NGO KYC Accounts</Subtitle>

      <TopBar>
        <AdminCampaignInput>
          <div className="campaign-info">
            <section className="campaign-section">
              <div className="holder">
                <div className="logo">
                  <CiSearch size={18} />
                </div>
                <input
                  type="text"
                  placeholder="Search organizations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </section>

            <section className="status-info">
              <div className="all-stat">Filter by Status</div>
              <div className="all-drop">
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                >
                  <option value="">All</option>
                  <option value="pending">pending</option>
                  <option value="verified">verified</option>
                  <option value="rejected">rejected</option>
                </select>
              </div>
            </section>
          </div>
        </AdminCampaignInput>
      </TopBar>

      {loading ? (
        <p style={{ textAlign: "center", marginTop: "30px" }}>
          Loading KYC data...
        </p>
      ) : (
        <Table>
          <TableHeader>
            <span>Organization</span>
            <span>Email</span>
            <span>Registered Date</span>
            <span>Documents</span>
            <span>Status</span>
            <span>Actions</span>
          </TableHeader>

          {filteredKyc.length > 0 ? (
            filteredKyc.map((item, i) => (
              <TableRow key={i}>
                <span>{item.organizationName}</span>
                <NGOName>{item.user?.email || "N/A"}</NGOName>

                <span>{new Date(item.createdAt).toLocaleDateString()}</span>
                <span
                  style={{ display: "flex", alignItems: "center", gap: "5px" }}
                >
                  <LuImage />{" "}
                  {item.registrationCertificate ||
                  item.authorizedRepresentativeId
                    ? 2
                    : 0}
                </span>
                <StatusTag status={item.verificationStatus}>
                  {item.verificationStatus || "N/A"}
                </StatusTag>

                <ActionButton onClick={() => handleView(item)}>
                  <MdOutlineRemoveRedEye /> View
                </ActionButton>
              </TableRow>
            ))
          ) : (
            <p style={{ textAlign: "center", padding: "20px" }}>
              No KYC records found.
            </p>
          )}
        </Table>
      )}

      {selectedKyc && (
        <KycPending kycData={selectedKyc} onClose={handleClose} />
      )}
    </Container>
  );
};

export default KycReview;
