import React, { useState, useEffect } from "react";
import { Container } from "../../../../style/SettingsStyle";
import InputField from "../../../common/InputField";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

const Skeleton = styled.div`
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "20px"};
  border-radius: 6px;
  background: linear-gradient(
    90deg,
    #f0f0f0 25%,
    #e0e0e0 50%,
    #f0f0f0 75%
  );
  background-size: 200% 100%;
  animation: ${shimmer} 1.2s ease-in-out infinite;
  margin-bottom: 12px;
`;

const KycVerify = () => {
  const { user, token } = useSelector((state) => state.auth);
  const [isVerified, setIsVerified] = useState(false);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    registrationNumber: "",
    address: "",
    certificate: null,
  });
  const nav = useNavigate();
  const baseUrl = import.meta.env.VITE_BaseUrl_Kyc_Auto;

  useEffect(() => {
    const fetchKycStatus = async () => {
      try {
        const res = await axios.get(`${baseUrl}/get-kyc-by-fundraiser`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        const data = res.data?.data;

        if (data?.verificationStatus === "verified") {
          setIsVerified(true);
          setFormData({
            registrationNumber: data.registrationNumber || "",
            address: data.organizationAddress || "",
            certificate: data.registrationCertificate?.imageUrl || null,
            organizationName: data.organizationName || "",
          });
        } else {
          setIsVerified(false);
        }
      } catch (err) {
        console.error("Error fetching KYC:", err);
        toast.error("Failed to fetch KYC details.");
      } finally {
        setLoading(false);
      }
    };

    fetchKycStatus();
  }, [token, user._id]);

  return (
    <Container>
      <aside className="right">
        <div className="title">
          <p>KYC Verification</p>
        </div>

        {loading ? (
          <div style={{ width: "100%" }}>
            <Skeleton height="30px" />
            <Skeleton height="30px" />
            <Skeleton height="30px" />
            <Skeleton height="30px" />
          </div>
        ) : isVerified ? (
          <form className="input_holder">
            <div className="name_holder">
              <label>Registration Number</label>
              <InputField
                type="text"
                value={formData.registrationNumber}
                readOnly
              />
            </div>

            <div className="name_holder">
              <label>Registration Certificate</label>
              <InputField
                type="text"
                value={formData.certificate ? "Uploaded" : "No file"}
                readOnly
              />
            </div>

            <div className="name_holder">
              <label>Organization Address</label>
              <InputField type="text" value={formData.address} readOnly />
            </div>

            <p
              style={{
                fontWeight: "bold",
                color: "green",
                marginTop: "20px",
              }}
            >
              ✅ KYC Verified
            </p>
          </form>
        ) : (
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <p style={{ fontWeight: "bold", color: "red", fontSize: "18px" }}>
              Your KYC is not verified yet.
            </p>
            <button
              onClick={() => nav("/verify_kyc1")}
              style={{
                fontWeight: "bold",
                color: "white",
                fontSize: "16px",
                padding: "15px",
                background: "green",
                borderRadius: "12px",
                marginTop: "20px",
                cursor: "pointer",
                border: "none",
              }}
            >
              Verify Now
            </button>
          </div>
        )}
      </aside>
    </Container>
  );
};

export default KycVerify;
