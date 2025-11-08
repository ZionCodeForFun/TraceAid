import React, { useState, useEffect, useRef } from "react";
import { Container } from "../../../../style/SettingsStyle";
import InputField from "../../../common/InputField";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import axios from "axios";

const KycVerify = () => {
  const fileInputRef = useRef(null);
  const { user, token } = useSelector((state) => state.auth);

  const [isVerified, setIsVerified] = useState(false);
  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    registrationNumber: "",
    address: "",
    certificate: null,
  });

  const baseUrl = import.meta.env.VITE_BaseUrl_Kyc_Auto;

  useEffect(() => {
    const fetchKycStatus = async () => {
      try {
        const res = await axios.post(`${baseUrl}/add-kyc/${user._id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (res.data?.data?.verificationStatus === "verified") {
          setIsVerified(true);
          setFormData({
            registrationNumber: res.data.registrationNumber,
            address: res.data.organizationAddress,
            certificate: res.data.registrationCertificate || null,
          });
        } else {
          setIsVerified(false);
        }
      } catch (err) {
        console.error("Error fetching KYC:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchKycStatus();
  }, []);

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
              KYC Verified
            </p>
          </form>
        ) : (
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <p style={{ fontWeight: "bold", color: "red", fontSize: "18px" }}>
              Your KYC is not verified yet.
            </p>
          </div>
        )}
      </aside>
    </Container>
  );
};

export default KycVerify;
