import React, { useState } from "react";
import InputField from "../../../common/InputField";
import Button from "../../../common/Button";
import { GoPaperclip } from "react-icons/go";
import { IoCloseSharp } from "react-icons/io5";
import styled from "styled-components";
import { CiCircleAlert } from "react-icons/ci";
import { toast } from "react-toastify";

const CreateCampaign = ({ onClose }) => {
  const [fileName, setFileName] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFileName(file ? file.name : "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agreed) {
      setError(true);
      toast.error("You must agree to the Terms and Conditions");
      return;
    }

    toast.success("Campaign created successfully!");
    onClose(true);
  };

  return (
    <Container>
      <aside className="right">
        <div className="title">
          <p className="bigtext">Create a Campaign</p>
          <p className="smalltext">Enter your details to continue</p>
        </div>

        <form className="input_holder" onSubmit={handleSubmit}>
          <div className="name_holder">
            <label>Campaign Title</label>
            <InputField type="text" placeholder="Enter campaign title" />
          </div>

          <div className="name_holder">
            <label>Campaign Description</label>
            <InputField type="text" placeholder="Describe your campaign" />
          </div>

          <div className="name_holder">
            <label>Total Campaign Goal Amount</label>
            <InputField
              type="text"
              placeholder="Enter your total goal amount"
            />
          </div>

          <div className="name_holder">
            <label>Category (Health, Education, Community, etc.)</label>
            <InputField type="text" placeholder="Category" />
          </div>

          <div className="name_holder">
            <label>Campaign Cover Image/Video</label>

            <input
              type="file"
              id="file-upload"
              accept="image/*,video/*"
              onChange={handleFileChange}
              style={{ display: "none" }}
            />

            <InputField
              type="text"
              placeholder={fileName ? fileName : "Upload campaign cover"}
              readOnly
            />
            <i>
              <GoPaperclip />
            </i>
            <p
              className="choose_file"
              onClick={() => document.getElementById("file-upload").click()}
            >
              Choose file
            </p>

            <div className="name_holder">
              <label>Campaign Duration</label>
              <InputField type="text" placeholder="Campaign duration" />
            </div>
          </div>

          <div className="alrt_holder">
            <p>Add Milestone</p>
            <div className="alrt">
              <CiCircleAlert className="alrt_icon" />
              <p>Define your project milestones here.</p>
            </div>
          </div>

          <div className="check">
            <input
              type="checkbox"
              id="terms"
              checked={agreed}
              onChange={(e) => {
                setAgreed(e.target.checked);
                setError(false);

              }}
            />
            <label htmlFor="terms">I agree to the Terms and Conditions</label>
            {error && (
              <p style={{ color: "#e50914", fontSize: "12px" }}>
                You must agree before continuing
              </p>
            )}
          </div>

          <div className="btn_holder">
            <Button text="Create Campaign" className="btn" type="submit" />
          </div>

          <IoCloseSharp onClick={() => onClose()} className="btn_close" />
        </form>
      </aside>
    </Container>
  );
};

export default CreateCampaign;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  width: 100%;

  .right {
    width: 650px;
    height: 1000px;
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    border-radius: 40px;
    background: #fff;

    .title {
      display: flex;
      flex-direction: column;
      align-items: center;
      .bigtext {
        color: var(--NeutralGrey4-Text);
        font-size: 40px;
        font-weight: 700;
        padding-top: 40px;
      }
      .smalltext {
        color: var(--NeutralGrey4-Text);
        font-size: 16px;
        font-weight: 400;
      }
    }

    .input_holder {
      width: 90%;
      height: max-content;
      display: flex;
      flex-direction: column;
      justify-content: end;
      position: relative;
      gap: 19px;

      .name_holder {
        display: flex;
        flex-direction: column;
        height: 71px;
        position: relative;
        gap: 5px;

        label {
          font-size: 14px;
          font-weight: 400;
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

      .btn_close {
        position: absolute;
        top: -37%;
        right: 4%;
        cursor: pointer;
        font-size: 24px;
        color: #8d8d8d;
      }
    }

    .alrt_holder {
      height: 80px;
      display: flex;
      flex-direction: column;
      margin-top: 100px;
      .alrt {
        display: flex;
        font-size: 12px;
        color: #4d4d4d;
        gap: 8px;
        align-items: center;
        margin-top: 5px;

        .alrt_icon {
          font-size: 17px;
        }

        &.error {
          color: #e50914;
        }
      }
    }

    .check {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-top: 15px;
      font-size: 14px;
      color: var(--NeutralGrey4-Text);

      input[type="checkbox"] {
        appearance: none;
        width: 18px;
        height: 18px;
        border: 2px solid var(--NeutralGrey4-Text);
        border-radius: 4px;
        cursor: pointer;
        position: relative;
        transition: all 0.2s ease;
      }

      input[type="checkbox"]:checked {
        background-color: var(--PrimaryBase);
        border-color: var(--PrimaryBase);
        transform: scale(1.1);
        box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
      }

      input[type="checkbox"]:checked::after {
        content: "✔";
        color: #fff;
        font-size: 12px;
        position: absolute;
        top: -1px;
        left: 3px;
      }

      label {
        cursor: pointer;
        user-select: none;
      }
    }

    .btn_holder {
      display: flex;
      height: 43px;
      justify-content: space-between;

      .btn {
        height: 100%;
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
`;
