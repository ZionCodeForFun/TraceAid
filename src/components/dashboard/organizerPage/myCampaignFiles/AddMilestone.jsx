import React, { useState, useEffect } from "react";
import InputField from "../../../common/InputField";
import Button from "../../../common/Button";
import styled from "styled-components";
import { toast } from "react-toastify";
import ReactDOM from "react-dom";
import { IoArrowBackOutline, IoCloseSharp } from "react-icons/io5";

const AddMilestone = ({
  onClose,
  existingMilestone = null,
  milestones,
  campaignAmount,
}) => {
  const [milestone, setMilestone] = useState({
    title: "",
    amount: "",
    duration: "",
    description: "",
  });
  const [error, setError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const isEdit = !!existingMilestone;

  useEffect(() => {
    if (existingMilestone) {
      setMilestone(existingMilestone);
    } else if (milestones.length < 3) {
      const total = parseFloat(campaignAmount);
      if (!isNaN(total)) {
        if (milestones.length === 0) {
          setMilestone((p) => ({ ...p, amount: (total * 0.3).toFixed(2) }));
        } else if (milestones.length === 1) {
          setMilestone((p) => ({ ...p, amount: (total * 0.5).toFixed(2) }));
        } else if (milestones.length === 2) {
          const firstAmount = parseFloat(milestones[0].amount);
          const secondAmount = parseFloat(milestones[1].amount);
          setMilestone((p) => ({
            ...p,
            amount: (total - firstAmount - secondAmount).toFixed(2),
          }));
        }
      }
    }
  }, [existingMilestone, campaignAmount, milestones]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMilestone((prev) => ({ ...prev, [name]: value }));
    setError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { title, amount, duration, description } = milestone;

    if (
      !title.trim() ||
      !amount.trim() ||
      !duration.trim() ||
      !description.trim()
    ) {
      setError(true);
      toast.error("All fields are required");
      return;
    }

    const numericAmount = parseFloat(amount);
    const totalCampaignAmount = parseFloat(campaignAmount);

    if (
      milestones.length === 0 &&
      numericAmount !== totalCampaignAmount * 0.3
    ) {
      toast.error("First milestone must equal 30% of the campaign amount.");
      return;
    }

    if (
      milestones.length === 1 &&
      numericAmount !== totalCampaignAmount * 0.5
    ) {
      toast.error("Second milestone must equal 50% of the campaign amount.");
      return;
    }

    if (milestones.length === 2) {
      const firstAmount = parseFloat(milestones[0].amount);
      const secondAmount = parseFloat(milestones[1].amount);
      const remainingAllowed = totalCampaignAmount - firstAmount - secondAmount;
      if (numericAmount !== remainingAllowed) {
        toast.error(
          `Third milestone must equal the remaining ${remainingAllowed.toLocaleString()} of the campaign amount.`
        );
        return;
      }
    }

    const payload = {
      ...milestone,
      id: isEdit ? milestone.id : `ms_${Date.now()}`,
    };

    toast.success(
      isEdit ? "Milestone updated successfully" : "Milestone saved successfully"
    );
    setShowSuccess(true);

    setTimeout(() => onClose(true, payload, isEdit), 1000);
  };

  return ReactDOM.createPortal(
    <Container>
      <aside className="right">
        <div className="title">
          <p className="bigtext">
            {isEdit ? "Edit Milestone" : "Add Milestone"}
          </p>
          <p className="smalltext">
            {isEdit
              ? "Update the details of your milestone"
              : "Define a milestone for your campaign"}
          </p>
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
                name="amount"
                value={milestone.amount}
                onChange={handleChange}
                readOnly={
                  !isEdit &&
                  (milestones.length === 0 || milestones.length === 1)
                }
              />
              {!isEdit && milestones.length === 0 && (
                <p style={{ fontSize: 12, color: "#555" }}>
                  30% of campaign amount
                </p>
              )}
              {!isEdit && milestones.length === 1 && (
                <p style={{ fontSize: 12, color: "#555" }}>
                  50% of campaign amount
                </p>
              )}
              {!isEdit && milestones.length === 2 && (
                <p style={{ fontSize: 12, color: "#555" }}>
                  Remaining 20% of campaign amount
                </p>
              )}
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
                All fields are required
              </p>
            )}

            <div className="btn_holder">
              <Button
                text={isEdit ? "Update Milestone" : "Save Milestone"}
                className="btn"
                type="submit"
              />
            </div>
          </form>
        ) : (
          <div className="holder">
            <div className="reciept_holder">
              <div className="content-holder">
                <p className="bigtext">
                  {isEdit ? "Milestone Updated" : "Milestone Submitted"}
                </p>
                <p className="smalltext">
                  {isEdit
                    ? "Milestone has been updated successfully"
                    : "Milestone achievement has been submitted for verification"}
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
        <IoCloseSharp onClick={() => onClose(false)} className="exit" />
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

  .right {
    position: fixed;
    top: 20%;

    width: 550px;
    height: 70%;
    padding: 20px 20px;
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
          height: 35px;
          font-size: 14px;
          color: #333;
        }
      }

      .btn_holder {
        margin-top: 15px;

        .btn {
          width: 100%;
          height: 35px;
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

    .exit {
      position: absolute;
      top: 20px;
      right: 40px;
      cursor: pointer;
      font-size: 24px;
      color: #333333;
    }
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 16px;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.02);

    .right {
      position: fixed;
      top: 5%;
      left: 50%;
      transform: translateX(-50%);
      width: 90%;
      max-width: 400px;
      height: auto;
      padding: 22px 18px;
      border-radius: 20px;
      border: 1px solid #e5e7eb;
      background-color: var(--Neutral_Offwhite);
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
      gap: 16px;
      overflow-y: auto;
      z-index: 9998;

      .title {
        padding-bottom: 10px;

        .bigtext {
          font-size: 20px;
          font-weight: 700;
          text-align: center;
          color: #111827;
        }

        .smalltext {
          font-size: 14px;
          text-align: center;
          color: #4b5563;
        }
      }

      .input_holder {
        width: 100%;
        gap: 10px;

        .name_holder {
          gap: 4px;

          label {
            font-size: 13px;
            color: #374151;
          }

          input {
            width: 100%;
            height: 42px;
            padding: 10px 12px;
            border-radius: 8px;
            border: 1px solid #d1d5db;
            background-color: #fff;
            font-size: 14px;
            color: #111827;

            &::placeholder {
              color: #9ca3af;
            }
          }
        }

        .btn_holder {
          margin-top: 12px;

          .btn {
            width: 100%;
            height: 44px;
            border-radius: 8px;
            font-size: 15px;
            font-weight: 600;
            background-color: var(--NeutralBlack);
            color: var(--PrimaryBase);
            transition: all 0.3s ease;

            &:hover {
              background-color: var(--PrimaryBase);
              color: var(--NeutralBlack);
            }
          }
        }
      }

      .exit {
        top: 14px;
        right: 16px;
        font-size: 22px;
        color: #374151;
        position: absolute;
        z-index: 9999;
      }

      .holder {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.55);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;

        .reciept_holder {
          width: 90%;
          max-width: 360px;
          padding: 24px;
          border-radius: 12px;
          background-color: #fff;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;

          .content-holder {
            text-align: center;

            .bigtext {
              font-size: 16px;
              font-weight: 700;
              color: #111827;
            }

            .smalltext {
              font-size: 13px;
              color: #6b7280;
            }
          }

          .close_btn {
            width: 100%;
            height: 40px;
            border-radius: 8px;
            background-color: var(--NeutralBlack);
            color: var(--PrimaryBase);
            font-weight: 600;
            font-size: 14px;
          }
        }
      }
    }
  }
`;
