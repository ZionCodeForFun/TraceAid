import React, { useState, useEffect } from "react";
import InputField from "../../../common/InputField";
import Button from "../../../common/Button";
import { GoPaperclip } from "react-icons/go";
import { IoArrowBackOutline, IoCloseSharp } from "react-icons/io5";
import styled from "styled-components";
import { CiCircleAlert } from "react-icons/ci";
import { toast } from "react-toastify";
import AddMilestone from "./AddMilestone";
import { IoIosArrowDown, IoMdCheckmarkCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const CreateCampaign = ({ onClose }) => {
  const [state, setState] = useState({
    fileName: "",
    file: null,
    agreed: false,
    error: false,
    show: false,
    showreciept: false,
    showaddmilestone: false,
    milestones: [],
    showMilestoneDetails: null,
    editingMilestoneIndex: null,
  });
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState(() => {
    const saved = localStorage.getItem("createCampaignFormData");
    return saved
      ? {
          title: "",
          description: "",
          goalAmount: "",
          category: "",
          duration: "",
          ...JSON.parse(saved),
        }
      : {
          title: "",
          description: "",
          goalAmount: "",
          category: "",
          duration: "",
        };
  });

  const nav = useNavigate();
  const token = useSelector((state) => state.auth?.token);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    const textFields = {
      title: formData.title,
      description: formData.description,
      goalAmount: formData.goalAmount,
      category: formData.category,
      duration: formData.duration,
    };
    localStorage.setItem("createCampaignFormData", JSON.stringify(textFields));
  }, [
    formData.title,
    formData.description,
    formData.goalAmount,
    formData.category,
    formData.duration,
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setState((prev) => ({
      ...prev,
      fileName: file ? file.name : "",
      file: file || null,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { title, description, goalAmount, category, duration } = formData;
    const { agreed, file, milestones } = state;

    if (
      !title ||
      !description ||
      !goalAmount ||
      !category ||
      !duration ||
      !file
    ) {
      toast.error("Please fill in all fields before continuing.");
      return;
    }

    if (!agreed) {
      setState((prev) => ({ ...prev, error: true }));
      toast.error("You must agree to the Terms and Conditions.");
      return;
    }

    if (!milestones.length) {
      toast.error("Please add at least one milestone.");
      return;
    }

    const totalMilestoneAmount = milestones.reduce(
      (acc, m) => acc + Number(m.amount || 0),
      0
    );
    if (Number(totalMilestoneAmount) !== Number(goalAmount)) {
      toast.error("Milestone total must equal the campaign goal.");
      return;
    }

    if (!user) {
      toast.error("You must be logged in to create a campaign.");
      return;
    }

    try {
      setLoading(true);
      const data = new FormData();
      data.append("campaignTitle", title);
      data.append("campaignDescription", description);
      data.append("totalCampaignGoalAmount", goalAmount);
      data.append("campaignCategory", category);
      data.append("durationDays", duration);
      data.append("campaignCoverImageOrVideo", file);
      data.append(
        "milestones",
        JSON.stringify(
          milestones.map((m) => ({
            milestoneTitle: m.title,
            milestoneDescription: m.description,
            targetAmount: m.amount,
          }))
        )
      );

      const res = await fetch(
        `${import.meta.env.VITE_BaseUrl_Campaign1}/create-campaign`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: data,
        }
      );

      const result = await res.json();

      if (!res.ok) {
        console.error(result);
        toast.error(result?.message || "Failed to create campaign.");
        setLoading(false);
        return;
      }

      toast.success("Campaign created successfully!");
      setLoading(false);
      setState((prev) => ({
        ...prev,
        showreciept: true,
      }));

      localStorage.removeItem("createCampaignFormData");
    } catch (error) {
      console.error("Error creating campaign:", error);
      toast.error("An unexpected error occurred. Please try again.");
      setLoading(false);
    }
  };

  const toggle = (key) => {
    setState((prev) => ({ ...prev, [key]: !prev[key] }));
  };
  const canAddMoreMilestones = state.milestones.length < 3;

  const {
    fileName,
    agreed,
    error,
    show,
    showreciept,
    showaddmilestone,
    milestones,
    showMilestoneDetails,
  } = state;

  return (
    <Container>
      <div className="goback">
        <div
          className="icon_holder"
          onClick={() => nav("/organization/myCampaigns")}
        >
          <IoArrowBackOutline className="iconn" />
          <p>Go back</p>
        </div>
      </div>
      <aside className="right">
        <div className="title">
          <p className="bigtext">Create a Campaign</p>
          <p className="smalltext">Enter your details to continue</p>
        </div>
        <form className="input_holder" onSubmit={handleSubmit}>
          <div className="name_holder">
            <label>Campaign Title (must be at least 5 letters long)</label>
            <InputField
              name="title"
              type="text"
              placeholder="Enter campaign title"
              value={formData.title}
              onChange={handleChange}
            />
          </div>

          <div className="name_holder">
            <label>Campaign Description</label>
            <InputField
              name="description"
              type="text"
              placeholder="Describe your campaign"
              value={formData.description}
              onChange={handleChange}
            />
          </div>

          <div className="name_holder">
            <label>Total Campaign Goal Amount</label>
            <InputField
              name="goalAmount"
              type="text"
              placeholder="Enter your total goal amount"
              value={formData.goalAmount}
              onChange={handleChange}
            />
          </div>

          <div className="name_holder">
            <label>Category</label>
            <div className="custom_select">
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value="">Select a category</option>
                <option value="Health & Wellness">Health & Wellness</option>
                <option value="Education & Schools">Education & Schools</option>
                <option value="Disaster Relief">Disaster Relief</option>
                <option value="Community Development">
                  Community Development
                </option>
                <option value="Animal Welfare">Animal Welfare</option>
                <option value="Arts & Culture">Arts & Culture</option>
                <option value="Other/General Support">
                  Other/General Support
                </option>
              </select>
              <IoIosArrowDown className="menu_i" />
            </div>
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

            <div className="name_holder" style={{ marginBottom: "15px" }}>
              <label>Campaign Duration (Number of Days only)</label>
              <InputField
                name="duration"
                type="text"
                placeholder="Campaign duration"
                value={formData.duration}
                onChange={handleChange}
              />
            </div>
          </div>
          <div
            className="milestone_notice"
            style={{
              marginBottom: "15px",
              background: "#FFF4E5",
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid #FFA726",
            }}
          >
            <p style={{ color: "#E65100", fontSize: "14px", fontWeight: 500 }}>
              Note: You must add exactly 3 milestones before submitting your
              campaign.
            </p>
          </div>
          {milestones.length === 0 && (
            <div className="alrt_holder">
              <p
                onClick={() => {
                  if (canAddMoreMilestones) {
                    setState((p) => ({ ...p, showaddmilestone: true }));
                  }
                }}
                className={`add ${!canAddMoreMilestones ? "disabled" : ""}`}
                style={{
                  cursor: canAddMoreMilestones ? "pointer" : "not-allowed",
                  opacity: canAddMoreMilestones ? 1 : 0.5,
                }}
              >
                + Add Milestone
              </p>

              <div className="alrt">
                <CiCircleAlert className="alrt_icon" />
                <p className="define">Define your project milestones here.</p>
              </div>
            </div>
          )}

          {milestones.length > 0 &&
            milestones.map((milestone, index) => (
              <div
                key={index}
                className={`milestone_dropdown ${
                  showMilestoneDetails === index ? "expanded" : ""
                }`}
              >
                <div
                  className="milestone_title"
                  onClick={() =>
                    setState((prev) => ({
                      ...prev,
                      showMilestoneDetails:
                        prev.showMilestoneDetails === index ? null : index,
                    }))
                  }
                >
                  <p>Milestone {index + 1}</p>
                  <IoIosArrowDown
                    className={`arrow ${
                      showMilestoneDetails === index ? "rotated" : ""
                    }`}
                  />
                </div>

                {showMilestoneDetails === index && (
                  <div className="milestone_content">
                    <p
                      style={{
                        fontWeight: 500,
                        fontSize: "16px",
                        color: "#4D4D4D",
                      }}
                    >
                      {milestone.title}
                    </p>
                    <p
                      style={{
                        marginTop: 8,
                        fontWeight: 500,
                        fontSize: "16px",
                        color: "#0A9C57",
                      }}
                    >
                      {milestone.amount}
                    </p>
                    <p
                      style={{
                        fontWeight: 400,
                        fontSize: "16px",
                        color: "#4D4D4D",
                      }}
                    >
                      {milestone.description}
                    </p>
                    <p
                      style={{
                        marginTop: 8,
                        fontWeight: 500,
                        fontSize: "16px",
                        color: "#0A9C57",
                      }}
                    >
                      {milestone.duration}
                    </p>
                    <Button
                      text="Edit Milestone"
                      className="edit_btn"
                      onClick={() =>
                        setState((prev) => ({
                          ...prev,
                          showaddmilestone: true,
                          editingMilestoneIndex: index,
                        }))
                      }
                    />
                  </div>
                )}
              </div>
            ))}

          {show && (
            <div className="sec_add">
              <p
                onClick={() => {
                  if (canAddMoreMilestones) {
                    setState((p) => ({ ...p, showaddmilestone: true }));
                  }
                }}
                className={`add ${!canAddMoreMilestones ? "disabled" : ""}`}
                style={{
                  cursor: canAddMoreMilestones ? "pointer" : "not-allowed",
                  opacity: canAddMoreMilestones ? 1 : 0.5,
                }}
              >
                + Add Another Milestone
              </p>
            </div>
          )}

          <div className="check">
            <input
              type="checkbox"
              id="terms"
              checked={agreed}
              onChange={(e) =>
                setState((prev) => ({
                  ...prev,
                  agreed: e.target.checked,
                  error: false,
                }))
              }
            />
            <label>
              I agree to the{" "}
              <span onClick={() => nav("/termsandcon")}>
                Terms and Conditions
              </span>
            </label>
            {error && (
              <p
                style={{
                  color: "#e50914",
                  fontSize: "12px",
                  cursor: "pointer",
                }}
              >
                You must agree before continuing
              </p>
            )}
          </div>

          <div className="btn_holder">
            <Button
              text={loading ? "Creating..." : "Create Campaign"}
              className="btn"
              type="submit"
            />
          </div>

          <IoCloseSharp onClick={() => onClose()} className="btn_close" />
        </form>

        {showaddmilestone && (
          <div className="modal_overlay">
            <AddMilestone
              existingMilestone={
                state.editingMilestoneIndex !== null
                  ? state.milestones[state.editingMilestoneIndex]
                  : null
              }
              campaignAmount={formData.goalAmount}
              milestones={state.milestones}
              onClose={(saved, data, isEdit) => {
                setState((prev) => {
                  if (!saved) {
                    return {
                      ...prev,
                      showaddmilestone: false,
                      editingMilestoneIndex: null,
                    };
                  }
                  if (!isEdit && prev.milestones.length >= 3) {
                    toast.error(
                      "A campaign can only have a maximum of 3 milestones."
                    );
                    return {
                      ...prev,
                      showaddmilestone: false,
                      editingMilestoneIndex: null,
                    };
                  }
                  let updatedMilestones;

                  if (isEdit && prev.editingMilestoneIndex !== null) {
                    updatedMilestones = [...prev.milestones];
                    updatedMilestones[prev.editingMilestoneIndex] = data;
                  } else {
                    updatedMilestones = [...prev.milestones, data];
                  }

                  return {
                    ...prev,
                    showaddmilestone: false,
                    editingMilestoneIndex: null,
                    milestones: updatedMilestones,
                    show: true,
                  };
                });
              }}
            />
          </div>
        )}

        {showreciept && (
          <div className="holder">
            <div className="reciept_holder">
              <div className="content-holder">
                <i>
                  <IoMdCheckmarkCircleOutline />
                </i>
                <p className="bigtext">Campaign Submitted Successfully!</p>
                <p className="smalltext">
                  Your campaign is now under review. Once <br /> verified, it’ll
                  go live and start receiving <br /> donations.
                </p>
              </div>
              <Button
                onClick={() => nav("/organization")}
                text="Go to dashboard"
                className="close_btn"
              />
            </div>
          </div>
        )}
      </aside>
    </Container>
  );
};

export default CreateCampaign;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;

  .goback {
    width: 80%;
    padding-top: 70px;

    .icon_holder {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-left: 70px;
      cursor: pointer;

      .iconn {
        font-size: 20px;
      }

      p {
        font-size: 16px;
        font-weight: 400;
      }
    }
  }

  .right {
    width: 650px;
    height: 900px;
    padding: 40px;
    margin-bottom: 70px;
    border-radius: 40px;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    position: relative;

    .title {
      display: flex;
      flex-direction: column;
      align-items: center;

      .bigtext {
        font-size: 40px;
        font-weight: 700;
        color: var(--NeutralGrey4-Text);
        padding-top: 40px;
      }

      .smalltext {
        font-size: 16px;
        font-weight: 400;
        color: var(--NeutralGrey4-Text);
      }
    }

    .input_holder {
      width: 90%;
      display: flex;
      flex-direction: column;
      gap: 19px;

      .name_holder {
        display: flex;
        flex-direction: column;
        gap: 5px;
        position: relative;

        label {
          font-size: 14px;
          font-weight: 400;
          color: var(--NeutralGrey4-Text);
        }

        input {
          width: 100%;
          height: 48px;
          padding: 10px 35px;
          font-size: 16px;
          border-radius: 12px;
          border: 1px solid var(--Neutral_Grey1);
          outline: none;
          color: #8d8d8d;
          background-color: #f9f9f9;
        }

        .custom_select {
          position: relative;
          width: 100%;

          select {
            width: 100%;
            height: 48px;
            padding: 10px 35px;
            border-radius: 12px;
            border: 1px solid var(--Neutral_Grey1);
            background-color: #f9f9f9;
            color: #333;
            font-size: 16px;
            appearance: none;
            cursor: pointer;
            outline: none;
            transition: 0.3s all ease;

            &:hover {
              background-color: #efefef;
            }

            &:focus {
              background-color: #fff;
              box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
            }
          }

          .menu_i {
            position: absolute;
            top: 50%;
            right: 12px;
            transform: translateY(-50%);
            font-size: 20px;
            color: #8d8d8d;
            pointer-events: none;
          }
        }

        i {
          position: absolute;
          top: 30%;
          left: 10px;
          transform: translateY(-50%);
          font-size: 20px;
          color: #8d8d8d;
        }

        .choose_file {
          position: absolute;
          top: 30%;
          right: 4%;
          transform: translateY(-50%);
          font-size: 16px;
          color: var(--PrimaryBase);
          cursor: pointer;
        }
      }

      .btn_close {
        position: absolute;
        top: -37%;
        right: 4%;
        font-size: 24px;
        color: #8d8d8d;
        cursor: pointer;
      }
    }

    .milestone_dropdown {
      width: 100%;
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      background: #fff;
      overflow: hidden;
      max-height: 55px;
      margin-top: 20px;
      cursor: pointer;
      transition: all 0.3s ease;

      &.expanded {
        max-height: 300px;
      }

      .milestone_title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px 16px;
        font-weight: 700;
        font-size: 16px;
      }

      .arrow {
        transition: transform 0.3s ease;

        &.rotated {
          transform: rotate(180deg);
        }
      }

      .milestone_content {
        padding: 12px 16px;
        border-top: 1px solid #e0e0e0;
        animation: fadeIn 0.3s ease;
        p {
          margin: 4px 0;
          font-size: 16px;
          font-weight: 400;
          color: #4d4d4d;

          &:nth-child(2),
          &:nth-child(4) {
            font-weight: 500;
            color: #0a9c57;
          }
        }
      }
    }

    .alrt_holder {
      display: flex;
      flex-direction: column;
      gap: 5px;
      margin-top: 30px;

      .add {
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        border-bottom: 1px solid #333333;
        width: fit-content;
      }

      .alrt {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 12px;
        color: #4d4d4d;

        &.error {
          color: #e50914;
        }

        .alrt_icon {
          font-size: 17px;
        }
      }
    }
    .sec_add {
      .add {
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        border-bottom: 1px solid #333333;
        width: fit-content;
        .disabled {
          pointer-events: none;
          opacity: 0.5;
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
        width: 18px;
        height: 18px;
        border: 2px solid var(--NeutralGrey4-Text);
        border-radius: 4px;
        appearance: none;
        cursor: pointer;
        position: relative;
        transition: all 0.2s ease;

        &:checked {
          background-color: var(--PrimaryBase);
          border-color: var(--PrimaryBase);
          transform: scale(1.1);
          box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);

          &::after {
            content: "✔";
            color: #fff;
            font-size: 12px;
            position: absolute;
            top: -1px;
            left: 3px;
          }
        }
      }

      label {
        cursor: pointer;
        user-select: none;
        span {
          color: #7baf55;
          font-weight: 700;
          text-decoration: underline;
          &:hover {
            color: #3d3dda;
          }
        }
      }
    }

    .btn_holder {
      display: flex;
      gap: 10px;
      width: 100%;
      height: 43px;

      .btn {
        width: 100%;
        height: 100%;
        border-radius: 8px;
        background-color: var(--NeutralBlack);
        color: var(--PrimaryBase);
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;

        &:hover {
          background-color: var(--PrimaryBase);
          color: var(--NeutralBlack);
        }
      }
    }

    .holder {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 90vh;
      background-color: rgba(192, 192, 192, 0.3);
      z-index: 9999;
      display: flex;
      justify-content: center;
      align-items: center;

      .reciept_holder {
        width: 448px;
        height: 383px;
        background: #fff;
        border-radius: 8px;
        padding: 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        position: relative;

        .content-holder {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          text-align: center;

          i {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 64px;
            height: 64px;
            font-size: 32px;
            color: #00a63e;
            background-color: #dcfce7;
            border-radius: 50%;
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
          width: 300px;
          height: 36px;
          margin-top: 20px;
          font-size: 16px;
          font-weight: 600;
          border-radius: 8px;
          background-color: var(--NeutralBlack);
          color: var(--PrimaryBase);
          cursor: pointer;
        }
      }
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-5px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .modal_overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 480px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2.5rem;
    /* padding: 20px; */
    min-height: 100vh;

    .goback {
      width: 100%;
      padding-top: 10px;

      .icon_holder {
        margin-left: 10px;
        gap: 6px;

        .iconn {
          font-size: 16px;
        }

        p {
          font-size: 13px;
        }
      }
    }

    .right {
      width: 100%;
      max-width: 360px;
      height: auto;
      padding: 22px 18px;
      margin: 0 auto;
      border-radius: 18px;
      gap: 18px;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .title {
        text-align: center;

        .bigtext {
          font-size: 26px;
          padding-top: 10px;
        }

        .smalltext {
          font-size: 13px;
        }
      }

      .input_holder {
        width: 100%;
        gap: 14px;

        .name_holder {
          width: 100%;
          gap: 3px;

          label {
            font-size: 12px;
          }

          input,
          select {
            height: 42px;
            font-size: 14px;
            padding: 8px 28px;
          }

          .custom_select {
            position: relative;
            width: 100%;
            margin-top: 2px; 

            select {
              height: 38px;
              font-size: 12.5px; 
              padding: 6px 26px; 
              border-radius: 10px; 
            }

            .menu_i {
              position: absolute;
              top: 50%;
              right: 10px;
              transform: translateY(-50%);
              font-size: 16px;
              color: #8d8d8d;
              pointer-events: none;
            }
          }

          .choose_file {
            right: 5%;
            font-size: 13px;
          }
        }
      }

      .btn_holder {
        flex-direction: column;
        width: 100%;
        gap: 10px;

        .btn {
          height: 44px;
          font-size: 25px;
          border-radius: 8px;
        }
      }

      .milestone_dropdown {
        .milestone_title {
          font-size: 14px;
          padding: 10px;
        }

        .milestone_content p {
          font-size: 13px;
        }
      }

      .alrt_holder .add,
      .sec_add .add {
        font-size: 13px;
      }

      .check {
        font-size: 12px;

        input[type="checkbox"] {
          width: 15px;
          height: 15px;
        }
      }

      .holder .reciept_holder {
        width: 92%;
        height: auto;
        padding: 25px;

        .content-holder {
          gap: 16px;

          i {
            width: 46px;
            height: 46px;
            font-size: 22px;
          }

          .bigtext {
            font-size: 15px;
          }

          .smalltext {
            font-size: 13px;
          }
        }

        .close_btn {
          width: 100%;
          height: 40px;
          font-size: 14px;
        }
      }
    }
  }
`;
