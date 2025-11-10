import React, { useState, useEffect } from "react";
import { Container } from "../../../../style/SettingsStyle";
import InputField from "../../../common/InputField";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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

  if (loading)
    return <p style={{ marginLeft: "100px" }}>Loading KYC details...</p>;

  return (
    <Container>
      <aside className="right">
        <div className="title">
          <p>KYC Verification</p>
        </div>

        {isVerified ? (
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
