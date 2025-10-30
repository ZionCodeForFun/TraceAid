import React, { useState } from "react";
import InputField from "../common/InputField";
import Button from "../common/Button";
import { GoPaperclip } from "react-icons/go";
import { IoArrowBackOutline } from "react-icons/io5";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import styled from "styled-components";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const KycVerification1 = () => {
  const [fileName1, setFileName1] = useState("");
  const [fileName2, setFileName2] = useState("");
  const [showReceipt, setShowReceipt] = useState(false);

  const nav = useNavigate();

  const handleFileChange = (e, setFileName) => {
    const file = e.target.files[0];
    setFileName(file ? file.name : "");
  };



  return (
    <Container>
      <div className="goback">
        <div
          className="icon_holder"
          onClick={() => nav("/signup")}
        >
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

        <form className="input_holder" >
          <p className="big">Fill your KYC details</p>

          <div className="name_holder">
            <label>Organization’s Name</label>
            <InputField
              type="text"
              placeholder="Community groups / NGO / Foundation"
            />
          </div>

          <div className="name_holder">
            <label>Registration Number</label>
            <InputField type="text" placeholder="CAC / NGO license number" />
          </div>

          <div className="name_holder">
            <label>Upload Registration Certificate</label>
            <input
              type="file"
              id="file-upload-1"
              accept="image/*,video/*"
              onChange={(e) => handleFileChange(e, setFileName1)}
              style={{ display: "none" }}
            />
            <InputField
              type="text"
              placeholder={fileName1 || "Upload registration certificate"}
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
            <label>Total Goal Amount</label>
            <InputField
              type="text"
              placeholder="Enter your total goal amount"
            />
          </div>

          <div className="name_holder">
            <label>Authorized Representative’s Full Name</label>
            <InputField type="text" placeholder="John Doe" />
          </div>

          <div className="name_holder">
            <label>Upload Representative ID</label>
            <input
              type="file"
              id="file-upload-2"
              accept="image/*,video/*"
              onChange={(e) => handleFileChange(e, setFileName2)}
              style={{ display: "none" }}
            />
            <InputField
              type="text"
              placeholder={fileName2 || "Upload ID document"}
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
            <InputField type="text" placeholder="Enter your address" />
          </div>

          <div className="btn_holder">
            <Button
              text="Continue"
              type="submit"
              className="btn"
              onClick={() => nav("/verify_kyc2")}
            />
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
`;
