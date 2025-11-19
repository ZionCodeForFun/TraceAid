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

    const { title, amount, description } = milestone;

    if (!title.trim() || !amount.trim() || !description.trim()) {
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
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  position: relative;

  .right {
    width: 550px;
    height: 70%;
    padding: 20px;
    background: var(--Neutral_Offwhite);
    border-radius: 40px;
    border: 1px solid var(--Neutral_Grey1);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    position: fixed;
    top: 18%;
    left: 50%;
    transform: translateX(-50%);
    overflow: hidden;

    .title {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-bottom: 20px;

      .bigtext {
        font-size: 36px;
        font-weight: 700;
        color: var(--NeutralGrey4-Text);
      }

      .smalltext {
        font-size: 14px;
        color: var(--NeutralGrey4-Text);
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
          height: 38px;
          padding: 10px 12px;
          font-size: 14px;
          border-radius: 8px;
          border: 1px solid var(--Neutral_Grey1);
          background: #fff;
        }
      }

      .btn_holder {
        margin-top: 12px;

        .btn {
          width: 100%;
          height: 38px;
          border-radius: 8px;
          background: var(--NeutralBlack);
          color: var(--PrimaryBase);
          font-weight: 600;
          transition: 0.3s;

          &:hover {
            background: var(--PrimaryBase);
            color: var(--NeutralBlack);
          }
        }
      }
    }

    .exit {
      position: absolute;
      top: 20px;
      right: 28px;
      font-size: 26px;
      color: #333;
      cursor: pointer;
    }

    .holder {
      position: fixed;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.45);
      top: 0;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;

      .reciept_holder {
        width: 450px;
        padding: 30px;
        background: white;
        border-radius: 12px;
        display: flex;
        flex-direction: column;
        gap: 18px;
        align-items: center;

        .content-holder {
          text-align: center;

          .bigtext {
            font-size: 18px;
            font-weight: 700;
          }

          .smalltext {
            font-size: 14px;
            opacity: 0.8;
          }
        }

        .close_btn {
          width: 100%;
          height: 40px;
          background: var(--NeutralBlack);
          color: var(--PrimaryBase);
          border-radius: 8px;
          font-size: 15px;
          font-weight: 600;
        }
      }
    }
  }

  @media (max-width: 480px) {
    height: 100vh;
    justify-content: center;
    align-items: center;

    .right {
      width: 85%;
      max-width: 330px;
      padding: 16px 14px;
      border-radius: 18px;
      margin-top: 2rem;

      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      margin-left: 36px;

      background: var(--Neutral_Offwhite);
      border: 1px solid var(--Neutral_Grey1);
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);

      overflow-y: auto;
      max-height: 70vh;
      gap: 16px;
      z-index: 9999;

      .title {
        padding-bottom: 6px;

        .bigtext {
          font-size: 22px !important;
          text-align: center;
        }
        .smalltext {
          font-size: 13px !important;
          text-align: center;
        }
      }

      .input_holder {
        width: 100%;
        gap: 12px;

        .name_holder label {
          font-size: 12px !important;
        }

        .name_holder input {
          height: 42px !important;
          font-size: 14px !important;
        }

        .btn_holder .btn {
          height: 44px !important;
          font-size: 15px !important;
        }
      }

      .exit {
        top: 12px;
        right: 12px;
        font-size: 22px;
      }

      .holder {
        background-color: rgba(0, 0, 0, 0.55);

        .reciept_holder {
          width: 92%;
          max-width: 360px;
          padding: 22px;
          border-radius: 14px;

          .content-holder .bigtext {
            font-size: 16px;
          }
          .content-holder .smalltext {
            font-size: 13px;
          }

          .close_btn {
            height: 40px;
            font-size: 14px;
          }
        }
      }
    }
  }
`;
