import React, { useState } from "react";
import InputField from "../common/InputField";
import Button from "../common/Button";
import { GoPaperclip } from "react-icons/go";
import { LuBriefcase } from "react-icons/lu";
import { GoPerson } from "react-icons/go";
import { SlLocationPin } from "react-icons/sl";
import { IoArrowBackOutline } from "react-icons/io5";
import styled from "styled-components";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { saveKycStep1 } from "../../global/kycSlice";

const KycVerification1 = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();

  const [formData, setFormData] = useState({
    organizationName: "",
    organizationType: "",
    registrationNumber: "",
    registrationCertificate: null,
    authorizedRepresentativeFullName: "",
    authorizedRepresentativeId: null,
    organizationAddress: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e, field) => {
    const file = e.target.files[0];
    setFormData((prev) => ({ ...prev, [field]: file }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emptyFields = Object.entries(formData).filter(
      ([, value]) => value === "" || value === null
    );

    if (emptyFields.length > 0) {
      toast.error("Please fill all fields before continuing.");
      return;
    }

    dispatch(saveKycStep1(formData));
    nav("/verify_kyc2");
  };

  return (
    <Container>
      <div className="goback">
        <div className="icon_holder" onClick={() => nav("/signup")}>
          <IoArrowBackOutline className="iconn" />
          <p>Go back</p>
        </div>
      </div>

      <aside className="right">
        <div className="title">
          <p className="bigtext">Complete your profile</p>
          <p className="smalltext">
            Enter your KYC and Bank account details to continue.
          </p>
        </div>

        <div className="progress-bar">
          <div className="line"></div>
          <div className="dot empty"></div>
          <div className="dot filled"></div>
        </div>

        <form className="input_holder" onSubmit={handleSubmit}>
          <p className="big">Fill your KYC details</p>

          <div className="name_holder">
            <label>Organization’s Name</label>
            <InputField
              type="text"
              name="organizationName"
              value={formData.organizationName}
              onChange={handleChange}
              placeholder="John"
            />
            <i>
              <LuBriefcase />
            </i>
          </div>

          <div className="name_holder">
            <label>Organization Type</label>
            <select
              name="organizationType"
              value={formData.organizationType}
              onChange={handleChange}
              className="selected_input"
            >
              <option value="">Community groups/ NGO / Foundation ....</option>
              <option value="Non-profit">Non-profit</option>
              <option value="NGO">NGO</option>
              <option value="Foundation">Foundation</option>
            </select>
          </div>

          <div className="name_holder">
            <label>Registration Number</label>
            <InputField
              type="text"
              name="registrationNumber"
              value={formData.registrationNumber}
              onChange={handleChange}
              placeholder="CAC / NGO license number"
            />
          </div>

          <div className="name_holder">
            <label>Upload Registration Certificate</label>
            <input
              type="file"
              id="file-upload-1"
              accept="image/*,video/*"
              onChange={(e) => handleFileChange(e, "registrationCertificate")}
              style={{ display: "none" }}
            />
            <InputField
              type="text"
              placeholder={
                formData.registrationCertificate?.name || "File upload"
              }
              readOnly
            />
            <i>
              <GoPaperclip />
            </i>
            <p
              className="choose_file"
              onClick={() => document.getElementById("file-upload-1").click()}
            >
              Choose file
            </p>
          </div>

          <div className="name_holder">
            <label>Authorized Representative’s Full Name</label>
            <InputField
              type="text"
              name="authorizedRepresentativeFullName"
              value={formData.authorizedRepresentativeFullName}
              placeholder="John Doe"
              onChange={handleChange}
            />
            <i>
              <GoPerson />
            </i>
          </div>

          <div className="name_holder">
            <label>Upload Representative ID</label>
            <input
              type="file"
              id="file-upload-2"
              accept="image/*,video/*"
              onChange={(e) =>
                handleFileChange(e, "authorizedRepresentativeId")
              }
              style={{ display: "none" }}
            />
            <InputField
              type="text"
              placeholder={
                formData.authorizedRepresentativeId?.name || "File Upload"
              }
              readOnly
            />
            <i>
              <GoPaperclip />
            </i>
            <p
              className="choose_file"
              onClick={() => document.getElementById("file-upload-2").click()}
            >
              Choose file
            </p>
          </div>

          <div className="name_holder">
            <label>Organization Address</label>
            <InputField
              type="text"
              name="organizationAddress"
              value={formData.organizationAddress}
              placeholder="Enter your address"
              onChange={handleChange}
            />
            <i>
              <SlLocationPin />
            </i>
          </div>

          <div className="btn_holder">
            <Button text="Continue" type="submit" className="btn" />
          </div>
        </form>
      </aside>
    </Container>
  );
};

export default KycVerification1;

const Container = styled.div`
  display: flex;
  background-color: #fff;
  height: 100%;
  width: 100%;
  margin-top: 20px;
  position: relative;

  .goback {
    position: absolute;
    top: 25px;
    left: 30px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    z-index: 10;
    background: transparent;

    .icon_holder {
      display: flex;
      align-items: center;
      gap: 10px;
      cursor: pointer;
      transition: all 0.3s ease;

      .iconn {
        font-size: 22px;
      }

      p {
        font-size: 16px;
        font-weight: 400;
        color: var(--NeutralGrey4-Text);
      }

      &:hover p {
        color: var(--Primary700);
      }
    }
  }

  .right {
    height: 100%;
    width: 650px;
    margin: 0 auto;
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
      gap: 8px;
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

        &.filled {
          background-color: var(--PrimaryBase);
          border-color: var(--PrimaryBase);
        }
      }
    }

    .input_holder {
      width: 90%;
      display: flex;
      flex-direction: column;
      gap: 29px;

      .big {
        font-size: 24px;
        font-weight: 500;
        color: var(--NeutralGrey4-Text);
      }

      .name_holder {
        display: flex;
        flex-direction: column;
        gap: 7px;
        position: relative;

        label {
          font-size: 14px;
          color: var(--NeutralGrey4-Text);
          font-weight: 500;
        }

        input {
          width: 100%;
          padding: 10px 35px;
          border-radius: 12px;
          border: 1px solid var(--Neutral_Grey1);
          color: #2c2c2c;
          height: 48px;
          font-size: 16px;
          cursor: pointer;

          &::placeholder {
            color: #8d8d8d;
          }

          &:focus {
            outline: 0.5px solid #0000009b;
            color: #000;
          }
        }

        input[name="registrationNumber"] {
          padding-left: 15px;
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

        .btn {
          height: 43px;
          width: 100%;
          border-radius: 8px;
          background-color: var(--NeutralBlack);
          color: var(--PrimaryBase);
          font-size: 16px;
          font-weight: 600;
          border: none;

          &:hover {
            background-color: var(--PrimaryBase);
            color: var(--NeutralBlack);
          }
        }
      }
    }

    .selected_input,
    .selected_input2 {
      width: 100%;
      padding: 10px;
      border-radius: 12px;
      border: 1px solid var(--Neutral_Grey1);
      color: #2c2c2c;
      height: 48px;
      font-size: 16px;
      cursor: pointer;

      &::placeholder {
        color: #8d8d8d;
      }

      &:focus {
        outline: 0.5px solid #0000009b;
        color: #000;
      }
    }
  }

  /* Tablet */
  @media screen and (max-width: 900px) {
    .right {
      width: 85%;
      padding: 30px;

      .title .bigtext {
        font-size: 32px;
      }

      .title .smalltext {
        font-size: 14px;
      }
    }
  }

  @media screen and (max-width: 600px) {
    .goback {
      top: 15px;
      left: 15px;

      .icon_holder {
        gap: 6px;

        p {
          display: none;
        }

        .iconn {
          font-size: 22px;
        }
      }
    }

    .right {
      width: 95%;
      padding: 20px;
      gap: 15px;

      .title .bigtext {
        font-size: 26px;
      }

      .title .smalltext {
        font-size: 13px;
      }

      .input_holder {
        width: 100%;
        gap: 20px;

        .big {
          font-size: 20px;
        }

        label {
          font-size: 13px;
        }

        input,
        .selected_input,
        .selected_input2 {
          font-size: 14px;
          height: 42px;
        }

        .choose_file {
          font-size: 13px;
        }
      }
    }
  }
`;
