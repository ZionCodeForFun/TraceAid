import React, { useState } from "react";
import InputField from "../common/InputField";
import Button from "../common/Button";
import { GoPaperclip } from "react-icons/go";
import { IoArrowBackOutline } from "react-icons/io5";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import styled from "styled-components";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const KycVerification2 = () => {
  const [formData, setFormData] = useState({
    accountName: "",
    accountNumber: "",
    bankName: "",
  });

  const [showReceipt, setShowReceipt] = useState(false);
  const nav = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

   
    const emptyFields = Object.entries(formData).filter(
      ([key, value]) => !value.trim()
    );

    if (emptyFields.length > 0) {
      toast.error("Please fill in all fields.");
      return;
    }

    toast.success("KYC details submitted successfully!");
    setShowReceipt(true);
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
            Enter your KYC and Bank account details to continue.
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
              name="accountName"
              value={formData.accountName}
              placeholder="Enter your bank account name"
              onChange={handleChange}
            />
          </div>

          <div className="name_holder">
            <label>Bank Account Number</label>
            <InputField
              type="text"
              name="accountNumber"
              value={formData.accountNumber}
              placeholder="Enter your bank account number"
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
              text="Submit"
              type="submit"
              className="btn2"
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
              <Button
                onClick={() => nav("/createcampaign")}
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
      }

      .btn_holder {
        display: flex;
        justify-content: center;
        margin-top: 15px;
        gap: 35px;

        .btn1 {
          height: 43px;
          width: 48%;
          border-radius: 8px;
          background-color: white;
          color: var(--NeutralBlack);
          font-size: 16px;
          font-weight: 600;

          &:hover {
            background-color: var(--PrimaryBase);
            color: var(--NeutralBlack);
          }
        }
        .btn2 {
          height: 43px;
          width: 48%;
          border-radius: 8px;
          background-color: var(--NeutralBlack);
          color: var(--PrimaryBase);
          font-size: 16px;
          font-weight: 600;
          border: 2px solid #617437;

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
        .home {
          cursor: pointer;
          border-bottom: 1px solid #333333;
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
`;
