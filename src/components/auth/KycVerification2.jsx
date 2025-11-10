import React, { useState, useEffect } from "react";
import InputField from "../common/InputField";
import Button from "../common/Button";
import { IoArrowBackOutline } from "react-icons/io5";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import styled from "styled-components";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { saveKycStep2, clearKyc } from "../../global/kycSlice";

const KycVerification2 = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();

  const { step1 } = useSelector((state) => state.kyc || {});
  const { user, token } = useSelector((state) => state.auth || {});

  const [loading, setLoading] = useState(false);
  const [showReceipt, setShowReceipt] = useState(false);

 const initialFormData = {
  bankAccountName: "",
  bankAccountNumber: "",
  bankName: "",
};

const [formData, setFormData] = useState(() => {
  const saved = localStorage.getItem("kycStep2FormData");
  return saved ? { ...initialFormData, ...JSON.parse(saved) } : initialFormData;
});

useEffect(() => {
  const textFields = {
    bankAccountName: formData.bankAccountName,
    bankAccountNumber: formData.bankAccountNumber,
    bankName: formData.bankName,
  };
  localStorage.setItem("kycStep2FormData", JSON.stringify(textFields));
}, [formData.bankAccountName, formData.bankAccountNumber, formData.bankName]);

const handleChange = (e) => {
  const { name, value } = e.target;
  const newValue =
    name === "bankAccountNumber" ? value.replace(/\D/g, "") : value;

  setFormData((prev) => ({ ...prev, [name]: newValue }));
};
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !step1?.organizationName ||
      !step1?.registrationNumber ||
      !step1?.registrationCertificate ||
      !step1?.authorizedRepresentativeFullName ||
      !step1?.authorizedRepresentativeId ||
      !step1?.organizationAddress
    ) {
      toast.error(
        "KYC Step 1 is incomplete. Please go back and fill all fields."
      );
      return;
    }

    if (
      !formData.bankAccountName ||
      !formData.bankAccountNumber ||
      !formData.bankName
    ) {
      toast.error("Please fill all fields.");
      return;
    }

    dispatch(saveKycStep2(formData));

    const fd = new FormData();
    fd.append("organizationName", step1.organizationName);
    fd.append("organizationType", step1.organizationType);
    fd.append("registrationNumber", step1.registrationNumber);
    fd.append("registrationCertificate", step1.registrationCertificate);
    fd.append(
      "authorizedRepresentativeFullName",
      step1.authorizedRepresentativeFullName
    );
    fd.append("authorizedRepresentativeId", step1.authorizedRepresentativeId);
    fd.append("organizationAddress", step1.organizationAddress);

    fd.append("bankAccountName", formData.bankAccountName);
    fd.append("bankAccountNumber", formData.bankAccountNumber);
    fd.append("bankName", formData.bankName);

    try {
      setLoading(true);

      await axios.post(import.meta.env.VITE_BaseUrl3, fd, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setLoading(false);
      toast.success("KYC submitted successfully!");
      setShowReceipt(true);

      localStorage.removeItem("kycStep2FormData");
    } catch (err) {
      setLoading(false);
      const msg = err?.response?.data?.message || "Failed to submit KYC.";
      toast.error(msg);
      console.error("KYC Submit Error:", err?.response || err);
    }
  };

  const handleStartCampaign = () => {
    dispatch(clearKyc());
    nav("/createcampaign");
  };

  return (
    <Container>
      <div className="goback">
        <div className="icon_holder" onClick={() => nav("/verify_kyc1")}>
          <IoArrowBackOutline className="iconn" />
          <p>Go back</p>
        </div>
      </div>

      <aside className="right">
        <div className="title">
          <p className="bigtext">Complete your profile</p>
          <p className="smalltext">
            Enter your Bank account details to continue.
          </p>
        </div>

        <div className="progress-bar">
          <div className="line"></div>
          <div className="dot filled">
            <span>✓</span>
          </div>
          <div className="dot empty"></div>
        </div>

        <form className="input_holder" onSubmit={handleSubmit}>
          <p className="big">Fill your Bank details</p>

          <div className="name_holder">
            <label>Bank Account Name</label>
            <InputField
              type="text"
              name="bankAccountName"
              value={formData.bankAccountName}
              placeholder="Enter your bank account name"
              onChange={handleChange}
            />
          </div>

          <div className="name_holder">
            <label>Bank Account Number</label>
            <InputField
              type="text"
              name="bankAccountNumber"
              value={formData.bankAccountNumber}
              placeholder="Enter your bank account number"
              maxLength="10"
              onChange={handleChange}
            />
          </div>

          <div className="name_holder">
            <label>Bank Name</label>
            <InputField
              type="text"
              name="bankName"
              value={formData.bankName}
              placeholder="Enter your bank name"
              onChange={handleChange}
            />
          </div>

          <div className="btn_holder">
            <Button
              text="Back"
              type="button"
              className="btn1"
              onClick={() => nav("/verify_kyc1")}
            />
            <Button
              text={loading ? "Submitting..." : "Submit"}
              type="submit"
              className="btn2"
              disabled={loading}
            />
          </div>
        </form>

        {showReceipt && (
          <div className="holder">
            <div className="reciept_holder">
              <div className="content-holder">
                <i>
                  <IoMdCheckmarkCircleOutline />
                </i>
                <p className="bigtext">Fundraiser account created</p>
                <p className="smalltext">
                  Your fundraiser account has been created successfully
                </p>
              </div>
              <Button2
                onClick={handleStartCampaign}
                className="close_btn"
                text="Start a Campaign"
              />
              <p className="home" onClick={() => nav("/organization")}>
                Go Home
              </p>
            </div>
          </div>
        )}
      </aside>
    </Container>
  );
};

export default KycVerification2;


<<<<<<< HEAD


=======
>>>>>>> a62cfda61f1ae1114d9ba1c98a0101fa84a18017
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;

  .right {
    width: 650px;
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    border-radius: 40px;
    background: #fff;
    position: relative;

    .title {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 10px;

      .bigtext {
        color: var(--NeutralGrey4-Text);
        font-size: 40px;
        font-weight: 700;
        text-align: center;
      }

      .smalltext {
        color: var(--NeutralGrey4-Text);
        font-size: 16px;
        font-weight: 400;
        text-align: center;
      }
    }

    .progress-bar {
      position: relative;
      width: 90%;
      height: 8px;
      margin: 20px 0 30px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .line {
        width: 80%;
        height: 7px;
        background-color: var(--Neutral_Grey1);
        position: absolute;
        left: 10%;
        border-radius: 10px;
      }

      .dot {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        border: 4px solid var(--Neutral_Grey1);
        background-color: #fff;
        z-index: 2;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 700;
        font-size: 18px;
        color: white;

        &.filled {
          background-color: var(--PrimaryBase);
          border-color: var(--PrimaryBase);
          color: white;
        }

        &.empty {
          background-color: #fff;
          border-color: var(--Neutral_Grey1);
          color: transparent;
        }
      }
    }

    .input_holder {
      width: 90%;
      display: flex;
      flex-direction: column;
      gap: 19px;

      .big {
        font-size: 18px;
        font-weight: 600;
        color: var(--NeutralGrey4-Text);
      }

      .name_holder {
        display: flex;
        flex-direction: column;
        gap: 5px;
        position: relative;

        label {
          font-size: 14px;
          color: var(--NeutralGrey4-Text);
        }

        input {
          width: 100%;
          padding: 10px 20px; 
          border-radius: 12px;
          border: 1px solid var(--Neutral_Grey1);
          outline: none;
          color: #8d8d8d;
          height: 48px;
          font-size: 16px;
        }

        i {
          position: absolute;
          top: 52%;
          left: 2%;
          color: #8d8d8d;
          font-size: 20px;
        }

        .choose_file {
          position: absolute;
          top: 50%;
          right: 4%;
          color: var(--PrimaryBase);
          font-weight: 400;
          font-size: 16px;
          cursor: pointer;
        }
      }

      .btn_holder {
        display: flex;
        justify-content: center;
        margin-top: 15px;
        gap: 35px;

        .btn1,
        .btn2 {
          height: 43px;
          width: 48%;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
        }

        .btn1 {
          background-color: white;
          color: var(--NeutralBlack);
          &:hover {
            background-color: var(--PrimaryBase);
            color: var(--NeutralBlack);
          }
        }

        .btn2 {
          background-color: var(--NeutralBlack);
          color: var(--PrimaryBase);
          border: 2px solid #617437;
          &:hover {
            background-color: var(--PrimaryBase);
            color: var(--NeutralBlack);
          }
        }
      }
    }

    .holder {
      height: 100vh;
      width: 100%;
      top: 0;
      left: 0;
      z-index: 9999;
      position: fixed;
      background-color: rgba(192, 192, 192, 0.3);

      .reciept_holder {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: white;
        padding: 40px;
        position: absolute;
        top: 15%;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 8px;
        gap: 20px;
        width: 400px;
        height: auto;

        .content-holder {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 15px;
          text-align: center;

          i {
            height: 64px;
            width: 64px;
            font-size: 32px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #00a63e;
            background-color: #dcfce7;
          }

          .bigtext {
            font-size: 18px;
            font-weight: 700;
          }

          .smalltext {
            font-size: 14px;
            font-weight: 400;
          }
        }

        .close_btn {
          height: 40px;
          width: 100%;
          background-color: var(--NeutralBlack);
          color: var(--PrimaryBase);
          font-size: 16px;
          font-weight: 600;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          &:hover {
            background-color: var(--PrimaryBase);
            color: var(--NeutralBlack);
          }
        }
        .home {
          cursor: pointer;
          border-bottom: 1px solid #333333;
        }
      }
    }
  }

  .goback {
    width: 80%;
    padding-top: 30px;
    align-self: flex-start;

    .icon_holder {
      display: flex;
      align-items: center;
      gap: 10px;
      cursor: pointer;
      margin-left: 40px;

      .iconn {
        font-size: 20px;
      }

      p {
        font-size: 16px;
        font-weight: 400;
      }
    }
  }

<<<<<<< HEAD
  @media screen and (max-width: 768px) {
    .right {
      width: 90%;
      padding: 20px;
      border-radius: 20px;
      .title .bigtext {
        font-size: 28px;
      }
      .title .smalltext {
        font-size: 14px;
      }
      .input_holder .btn_holder {
        flex-direction: column;
        gap: 15px;
        .btn1,
        .btn2 {
          width: 100%;
=======
  @media (max-width: 480px) {
    .goback {
      width: 100%;
      padding-top: 30px;

      .icon_holder {
        margin-left: 25px;
        gap: 10px;

        .iconn {
          font-size: 18px;
        }

        p {
          font-size: 13px;
>>>>>>> a62cfda61f1ae1114d9ba1c98a0101fa84a18017
        }
      }
    }

<<<<<<< HEAD
    .holder .reciept_holder {
      width: 90%;
      top: 20%;
      left: 5%;
      transform: none;
    }

    .goback {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      padding: 20px 20px 0 20px;

      .icon_holder {
        border: none;
        border-radius: 8px;
        padding: 10px 18px;
        font-size: 14px;
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        margin: 0;
        width: fit-content;
      }

      .iconn {
        font-size: 16px;
      }

      p {
        display: none;
      }
    }
  }

  @media screen and (min-width: 600px) and (max-width: 900px) {
    .right {
      width: 80%;
      padding: 30px;
      .title .bigtext {
        font-size: 32px;
      }
      .title .smalltext {
        font-size: 15px;
=======
    .right {
      width: 95%;
      padding: 18px;
      border-radius: 18px;
      box-shadow: none;
      gap: 14px;

      .title {
        margin-bottom: 5px;

        .bigtext {
          font-size: 22px;
        }

        .smalltext {
          font-size: 12px;
          color: #6b6b6b;
        }
      }

      .progress-bar {
        width: 95%;
        height: 6px;
        margin: 15px 0 20px 0;

        .line {
          height: 5px;
        }

        .dot {
          width: 26px;
          height: 26px;
          border: 3px solid var(--Neutral_Grey1);
          font-size: 13px;
        }
      }

      .input_holder {
        width: 100%;
        gap: 14px;

        .big {
          font-size: 15px;
        }

        label {
          font-size: 12px;
        }

        input {
          height: 42px;
          font-size: 13px;
          padding: 8px 30px;
        }

        .btn_holder {
          flex-direction: column;
          gap: 10px;

          .btn1,
          .btn2 {
            width: 100%;
            height: 44px;
            font-size: 14px;
            border-radius: 10px;
          }
        }
>>>>>>> a62cfda61f1ae1114d9ba1c98a0101fa84a18017
      }
    }
  }
`;
