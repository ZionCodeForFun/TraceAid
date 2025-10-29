import React, { useState } from "react";
import InputField from "../../../common/InputField";
import Button from "../../../common/Button";
import { GoPaperclip } from "react-icons/go";
import { IoCloseSharp } from "react-icons/io5";
import styled from "styled-components";
import { CiCircleAlert } from "react-icons/ci";
import { toast } from "react-toastify";

const UpdateMilestone = ({ onClose, campaign }) => {
  const [fileCount, setFileCount] = useState(0);
  const [error, setError] = useState(false);

  const handleFileChange = (e) => {
    const files = e.target.files;
    setFileCount(files.length);
    setError(files.length < 5);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (fileCount < 5) {
      setError(true);
      return;
    }
    toast.success("saved successuflleful");
    onClose(true);
  };

  return (
    <Container>
      <aside className="right">
        <div className="title">
          <p>Milestone Update</p>
        </div>

        <form className="input_holder" onSubmit={handleSubmit}>
          <div className="name_holder">
            <label>Milestone Title</label>
            <InputField type="text" placeholder="Stationaries" />
          </div>

          <div className="name_holder">
            <label>Document Upload</label>

            <input
              type="file"
              id="file-upload"
              multiple
              onChange={handleFileChange}
              style={{ display: "none" }}
            />

            <InputField
              type="text"
              placeholder={`${
                fileCount > 0
                  ? `${fileCount} file${fileCount > 1 ? "s" : ""} selected`
                  : "File upload"
              }`}
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

            <div className={`alrt ${error ? "error" : ""}`}>
              <CiCircleAlert className="alrt_icon" />
              <p>
                {error
                  ? "Upload at least 5 proof evidence files!"
                  : "Minimum of 5 proof evidence upload"}
              </p>
            </div>
          </div>

          <div className="btn_holder">
            <Button text="Save Milestone" className="btn" type="submit" />
          </div>

          <IoCloseSharp onClick={() => onClose()} className="btn_close" />
        </form>
      </aside>
    </Container>
  );
};

export default UpdateMilestone;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: rgb(141, 141, 141, 0.5);

  width: 100%;
  position: fixed;
  top: 0;
  left: 0%;
  z-index: 9999;

  .right {
    width: 650px;
    height: 450px;
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    border-radius: 40px;
    border: 1px solid var(--Neutral_Grey1);
    background-color: var(--Neutral_Offwhite);

    .title p {
      color: var(--NeutralGrey4-Text);
      font-size: 40px;
      font-weight: 700;
      padding-top: 40px;
    }

    .input_holder {
      width: 90%;
      height: 80%;
      display: flex;
      flex-direction: column;
      justify-content: end;
      position: relative;
      gap: 19px;

      .name_holder {
        display: flex;
        flex-direction: column;
        height: 61px;
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

      .btn_close {
        position: absolute;
        top: -37%;
        right: 4%;
        cursor: pointer;
        font-size: 24px;
        color: #8d8d8d;
      }
    }

    .btn_holder {
      display: flex;
      height: 43px;
      justify-content: space-between;
      margin-top: 30px;

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
