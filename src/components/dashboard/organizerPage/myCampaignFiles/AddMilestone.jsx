import React, { useState } from "react";
import InputField from "../../../common/InputField";
import Button from "../../../common/Button";
import styled from "styled-components";
import { toast } from "react-toastify";
import ReactDOM from "react-dom";

const AddMilestone = ({ onClose }) => {
  const [milestone, setMilestone] = useState({
    title: "",
    amount: "",
    duration: "",
    description: "",
  });
  const [error, setError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setMilestone((prev) => ({ ...prev, [name]: value }));
    setError(false);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, amount, duration, description } = milestone;

    if (!title.trim()) {
      setError(true);
      return;
    }

    toast.success("Milestone saved successfully");
    setShowSuccess(true);

    setTimeout(() => {
      onClose(true, {
        title,
        description,
        amount,
        duration,
      });
    }, 1000);
  };

  return ReactDOM.createPortal(
    <Container>
      <aside className="right">
        <div className="title">
          <p className="bigtext">Add Milestone</p>
          <p className="smalltext">Define a milestone for your campaign</p>
        </div>

        {!showSuccess ? (
          <form className="input_holder" onSubmit={handleSubmit}>
            <div className="name_holder">
              <label>Milestone Title</label>
              <InputField
                type="text"
                name="title"
                placeholder="Enter milestone title"
                value={milestone.title}
                onChange={handleChange}
              />
            </div>

            <div className="name_holder">
              <label>Amount</label>
              <InputField
                type="text"
                name="amount"
                placeholder="Enter target amount"
                value={milestone.amount}
                onChange={handleChange}
              />
            </div>

            <div className="name_holder">
              <label>Duration (days)</label>
              <InputField
                type="text"
                name="duration"
                placeholder="Enter milestone duration"
                value={milestone.duration}
                onChange={handleChange}
              />
            </div>

            <div className="name_holder">
              <label>Description</label>
              <InputField
                type="text"
                name="description"
                placeholder="Enter milestone description"
                value={milestone.description}
                onChange={handleChange}
              />
            </div>

            {error && (
              <p style={{ color: "#e50914", fontSize: 12 }}>
                Milestone title is required
              </p>
            )}

            <div className="btn_holder">
              <Button text="Save Milestone" className="btn" type="submit" />
            </div>
          </form>
        ) : (
          <div className="holder">
            <div className="reciept_holder">
              <div className="content-holder">
                <p className="bigtext">Milestone Submitted</p>
                <p className="smalltext">
                  Milestone achievement has been submitted for verification
                </p>
              </div>
              <Button
                onClick={() => onClose(false)}
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
  background-color: rgba(141, 141, 141, 0.5);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9999;

  .right {
    width: 650px;
    height: 90vh;
    padding: 20px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    border-radius: 40px;
    border: 1px solid var(--Neutral_Grey1);
    background-color: var(--Neutral_Offwhite);
    position: relative;

    .title {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-bottom: 20px;

      .bigtext {
        color: var(--NeutralGrey4-Text);
        font-size: 36px;
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
      display: flex;
      flex-direction: column;
      gap: 15px;

      .name_holder {
        display: flex;
        flex-direction: column;
        gap: 5px;

        label {
          font-size: 14px;
          color: var(--NeutralGrey4-Text);
        }

        input {
          width: 100%;
          padding: 10px 15px;
          border-radius: 8px;
          border: 1px solid var(--Neutral_Grey1);
          outline: none;
          height: 45px;
          font-size: 14px;
          color: #333;
        }
      }

      .btn_close {
        position: absolute;
        top: 10px;
        right: 10px;
        cursor: pointer;
        font-size: 24px;
        color: #8d8d8d;
      }

      .btn_holder {
        margin-top: 15px;

        .btn {
          width: 100%;
          height: 43px;
          border-radius: 8px;
          background-color: var(--NeutralBlack);
          color: var(--PrimaryBase);
          font-weight: 600;

          &:hover {
            background-color: var(--PrimaryBase);
            color: var(--NeutralBlack);
          }
        }
      }
    }

    .holder {
      height: 100%;
      width: 100%;
      position: fixed;
      top: 0;
      left: 0;
      background-color: rgba(192, 192, 192, 0.3);
      display: flex;
      justify-content: center;
      align-items: center;

      .reciept_holder {
        width: 450px;
        padding: 30px;
        background-color: #fff;
        border-radius: 12px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;

        .content-holder {
          text-align: center;

          i {
            font-size: 48px;
            color: #00a63e;
            margin-bottom: 10px;
          }

          .bigtext {
            font-size: 18px;
            font-weight: 700;
          }

          .smalltext {
            font-size: 14px;
          }
        }

        .close_btn {
          width: 100%;
          padding: 10px;
          border-radius: 8px;
          background-color: var(--NeutralBlack);
          color: var(--PrimaryBase);
          font-weight: 600;
        }
      }
    }
  }
`;
