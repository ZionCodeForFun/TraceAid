import React, { useState } from "react";
import InputField from "../../../common/InputField";
import Button from "../../../common/Button";
import { GoPaperclip } from "react-icons/go";
import { IoCloseSharp } from "react-icons/io5";
import styled from "styled-components";
import { CiCircleAlert } from "react-icons/ci";
import { toast } from "react-toastify";
import ReactDOM from "react-dom";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const AddMilestone = ({ onClose, campaign }) => {
  const nav = useNavigate();
  const [state, setState] = useState({
    fileCount: 0,
    error: false,
    title: "",
    amount: "",
    duration: "",
    description: "",
    showSuccess: false,
  });

  const {
    fileCount,
    error,
    title,
    amount,
    duration,
    description,
    showSuccess,
  } = state;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      setState((prev) => ({ ...prev, error: true }));
      return;
    }

    toast.success("Milestone saved successfully");
    setState((prev) => ({ ...prev, showSuccess: true }));
  };

  return ReactDOM.createPortal(
    <Container>
      <aside className="right">
        <div className="title">
          <p className="bigtext">Milestone Update</p>
          <p className="smalltext">Milestone 1</p>
        </div>

        <form className="input_holder" onSubmit={handleSubmit}>
          <div className="name_holder">
            <label>Milestone Title</label>
            <InputField
              type="text"
              placeholder="Stationaries"
              value={title}
              onChange={(e) =>
                setState((prev) => ({
                  ...prev,
                  title: e.target.value,
                  error: false,
                }))
              }
            />
          </div>

          <div className="name_holder">
            <label>Amount</label>
            <InputField
              type="text"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) =>
                setState((prev) => ({ ...prev, amount: e.target.value }))
              }
            />
          </div>

          <div className="name_holder">
            <label>Duration (Date)</label>
            <InputField
              type="text"
              placeholder="Enter your duration date"
              value={duration}
              onChange={(e) =>
                setState((prev) => ({ ...prev, duration: e.target.value }))
              }
            />
          </div>

          <div className="name_holder">
            <label>Description</label>
            <InputField
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) =>
                setState((prev) => ({ ...prev, description: e.target.value }))
              }
            />
          </div>

          <div className="btn_holder">
            <Button text="Save Milestones" className="btn" type="submit" />
          </div>

          <IoCloseSharp onClick={() => onClose(false)} className="btn_close" />
        </form>
        {showSuccess && (
          <div className="holder">
            <div className="reciept_holder">
              <div className="content-holder">
                <i>
                  <IoMdCheckmarkCircleOutline />
                </i>
                <p className="bigtext">Milestone Submitted</p>
                <p className="smalltext">
                  Milestone achievement have been submitted for verification
                </p>
              </div>
              <Button
                onClick={() => nav("/organizationdashboard/")}
                text="Close"
                className="close_btn"
              />
            </div>
          </div>
        )}
      </aside>
    </Container>,
    document.body
  );
};

export default AddMilestone;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: rgb(141, 141, 141, 0.5);
  position: fixed;
  top: 0%;
  width: 100%;
  z-index: 9999;

  .right {
    width: 650px;
    height: max-content;
    padding: 20px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    border-radius: 40px;
    border: 1px solid var(--Neutral_Grey1);
    background-color: var(--Neutral_Offwhite);

    .title {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-bottom: 20px;

      .bigtext {
        color: var(--NeutralGrey4-Text);
        font-size: 40px;
        font-weight: 700;
      }
      .smalltext {
        color: var(--NeutralGrey4-Text);
        font-size: 14px;
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
      }

      .btn_close {
        position: absolute;
        top: -27%;
        right: 2%;
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
    .holder {
      height: 90vh;
      width: 100%;
      top: 20%;
      left: 0%;
      z-index: 9999;
      position: fixed;
      background-color: rgb(192, 192, 192, 0.3);
      .reciept_holder {
        display: flex;
        width: 512px;
        height: 318px;
        flex-direction: column;
        background-color: white;
        align-items: center;
        padding: 20px;
        top: 12%;
        left: 30%;
        z-index: 9999;
        position: absolute;
        border-radius: 8px;
        .content-holder {
          width: 462px;
          height: 164px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          text-align: center;
          i {
            height: 64px;
            width: 64px;
            background-color: black;
            font-size: 32px;
            border-radius: 50px;
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
          .small {
            font-size: 14px;
            font-weight: 400;
          }
        }
        .close_btn {
          height: 36px;
          width: 133px;
          border: 1px solid var(--Neutral_Grey1);
          color: #0a0a0a;
          font-size: 14px;
          margin-top: 20px;
          background-color: white;
          font-weight: 400;
          font-family: Arial, Helvetica, sans-serif;
          border-radius: 8px;
          cursor: pointer;
        }
      }
    }
  }
`;
