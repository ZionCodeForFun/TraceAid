import React, { useState, useEffect } from "react";
import InputField from "../common/InputField";
import Button from "../common/Button";
import { GoPaperclip } from "react-icons/go";
import { IoArrowBackOutline } from "react-icons/io5";
import styled from "styled-components";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { saveKycStep1 } from "../../global/kycSlice";

const KycVerification1 = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const [show, setShow] = useState(false);
  const initialFormData = {
    organizationName: "",
    organizationType: "",
    registrationNumber: "",
    registrationCertificate: null,
    authorizedRepresentativeFullName: "",
    authorizedRepresentativeId: null,
    organizationAddress: "",
  };

  const [formData, setFormData] = useState(() => {
    const saved = localStorage.getItem("kycFormData");
    if (saved) {
      return {
        ...initialFormData,
        ...JSON.parse(saved),
      };
    }
    return initialFormData;
  });

  useEffect(() => {
    const textFields = {
      organizationName: formData.organizationName,
      organizationType: formData.organizationType,
      registrationNumber: formData.registrationNumber,
      authorizedRepresentativeFullName:
        formData.authorizedRepresentativeFullName,
      organizationAddress: formData.organizationAddress,
    };
    localStorage.setItem("kycFormData", JSON.stringify(textFields));
  }, [
    formData.organizationName,
    formData.organizationType,
    formData.registrationNumber,
    formData.authorizedRepresentativeFullName,
    formData.organizationAddress,
  ]);

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
      ([key, value]) => value === "" || value === null
    );

    if (emptyFields.length > 0) {
      toast.error("Please fill all fields before continuing.");
      return;
    }

    dispatch(saveKycStep1(formData));
    localStorage.removeItem("kycFormData");
    nav("verify_kyc2");
  };

  return (
    <Container>
      <div className="goback">
        <div className="icon_holder" onClick={() => nav("/organization")}>
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
            <label>Organization’s Name  (must be at least 5 letters long)</label>
            <InputField
              type="text"
              name="organizationName"
              value={formData.organizationName}
              placeholder="Community groups / NGO / Foundation"
              onChange={handleChange}
            />
          </div>

          <div className="name_holder">
            <label>Organization Type</label>
            <select
              name="organizationType"
              value={formData.organizationType}
              onChange={handleChange}
              className="select_input"
            >
              <option value="">Select organization type</option>
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
              placeholder="CAC / NGO license number"
              onChange={handleChange}
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
                formData.registrationCertificate?.name ||
                "Upload registration certificate"
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
                formData.authorizedRepresentativeId?.name ||
                "Upload ID document"
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
            <label>
              Organization Address (must be at least 10 characters long)
            </label>
            <InputField
              type="text"
              name="organizationAddress"
              value={formData.organizationAddress}
              placeholder="Enter your address"
              onChange={handleChange}
            />
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
      }

      .smalltext {
        color: var(--NeutralGrey4-Text);
        font-size: 16px;
        font-weight: 400;
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
          padding: 10px 35px;
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
        .select_input {
          width: 100%;
          padding: 10px 35px;
          border-radius: 12px;
          border: 1px solid var(--Neutral_Grey1);
          outline: none;
          color: #8d8d8d;
          height: 48px;
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

          &:hover {
            background-color: var(--PrimaryBase);
            color: var(--NeutralBlack);
          }
        }
      }
    }

    .holder {
      height: 90vh;
      width: 100%;
      top: 0;
      left: 0;
      z-index: 9999;
      position: fixed;
      background-color: rgba(192, 192, 192, 0.3);

      .reciept_holder {
        display: flex;
        width: 448px;
        height: 383px;
        flex-direction: column;
        background-color: white;
        align-items: center;
        padding: 40px;
        top: 12%;
        left: 30%;
        z-index: 9999;
        position: absolute;
        border-radius: 8px;
        gap: 20px;

        .content-holder {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
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
          height: 36px;
          width: 300px;
          border: none;
          background-color: var(--NeutralBlack);
          color: var(--PrimaryBase);
          font-size: 16px;
          font-weight: 600;
          border-radius: 8px;
          cursor: pointer;

          &:hover {
            background-color: var(--PrimaryBase);
            color: var(--NeutralBlack);
          }
        }
      }
    }
  }

  .goback {
    width: 80%;
    padding-top: 70px;

    .icon_holder {
      display: flex;
      align-items: center;
      gap: 16px;
      cursor: pointer;
      margin-left: 70px;

      .iconn {
        font-size: 20px;
      }

      p {
        font-size: 16px;
        font-weight: 400;
      }
    }
  }

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
        }
      }
    }

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
          height: 44px;
          font-size: 13px;
          padding: 10px 30px;
        }

        .select_input {
          background-position: right 10px center;
          background-size: 10px;
          line-height: 1.2;
          font-weight: 400;
        }

        i {
          font-size: 16px;
          top: 50%;
        }

        .choose_file {
          font-size: 12px;
          right: 3%;
        }

        .btn_holder .btn {
          height: 44px;
          font-size: 14px;
          border-radius: 10px;
        }
      }
    }
  }
`;
