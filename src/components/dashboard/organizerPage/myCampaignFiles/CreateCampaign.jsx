import React, { useState } from "react";
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
  });
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    goalAmount: "",
    category: "",
    duration: "",
  });

  const nav = useNavigate();
  const token = useSelector((state) => state.auth?.token);

  const user = useSelector((state) => state.auth.user);
  console.log(" user",user)
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
        toast.error(result.message || "Failed to create campaign.");
        return;
      }

      toast.success("Campaign created successfully!");
      setLoading(false);
      setState((prev) => ({
        ...prev,
        showreciept: true,
      }));
    } catch (error) {
      console.error("Error creating campaign:", error);
      toast.error("An unexpected error occurred. Please try again.");
      setLoading(false);
    }
  };

  const toggle = (key) => {
    setState((prev) => ({ ...prev, [key]: !prev[key] }));
  };

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
            <label>Campaign Title</label>
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
              <label>Campaign Duration</label>
              <InputField
                name="duration"
                type="text"
                placeholder="Campaign duration"
                value={formData.duration}
                onChange={handleChange}
              />
            </div>
          </div>

          {milestones.length === 0 && (
            <div className="alrt_holder">
              <p
                onClick={() =>
                  setState((p) => ({ ...p, showaddmilestone: true }))
                }
                className="add"
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
                  </div>
                )}
              </div>
            ))}

          {show && (
            <div className="sec_add">
              <p
                onClick={() =>
                  setState((p) => ({ ...p, showaddmilestone: true }))
                }
                className="add"
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
            <label onClick={() => nav("/termsandcon")} htmlFor="terms">
              I agree to the Terms and Conditions
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
          <AddMilestone
            onClose={(saved, data) => {
              setState((prev) => ({
                ...prev,
                showaddmilestone: false,
                ...(saved && data
                  ? {
                      milestones: [...prev.milestones, data],
                      show: true,
                    }
                  : {}),
              }));
            }}
          />
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

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  .right {
    width: 650px;
    height: 900px;
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
        .custom_select {
          position: relative;
          width: 100%;
        }
        .custom_select select {
          width: 100%;
          padding: 10px 35px;
          border-radius: 12px;
          border: 1px solid var(--Neutral_Grey1);
          outline: none;
          color: #333;
          height: 48px;
          font-size: 16px;
          background-color: #f9f9f9;
          appearance: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .custom_select select:hover {
          background-color: #efefef;
        }
        .custom_select select:focus {
          background-color: #fff;
          box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
        }
        .custom_select option {
          color: #333;
          background-color: #fff;
          padding: 10px;
        }
        .custom_select option:hover {
          background-color: var(--PrimaryBase);
          color: #fff;
        }
        .custom_select .menu_i {
          position: absolute;
          top: 50%;
          right: 12px;
          transform: translateY(-50%);
          color: #8d8d8d;
          font-size: 20px;
          pointer-events: none;
        }
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
        .menu_i {
          position: absolute;
          top: 52%;
          right: 2%;
          color: #8d8d8d;
          font-size: 20px;
          cursor: pointer;
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
    .sec_add {
      border-bottom: 1px solid #333333;
      width: 200px;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
    }
    .milestone_dropdown {
      width: 100%;
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      margin-top: 100px;
      background: #fff;
      position: relative;
      transition: all 0.3s ease;
      overflow: hidden;
      max-height: 55px;
      cursor: pointer;

      &.expanded {
        max-height: 300px;
      }

      .milestone_title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: 700;
        font-size: 16px;
        padding: 12px 16px;
      }

      .arrow {
        transition: transform 0.3s ease;
      }

      .arrow.rotated {
        transform: rotate(180deg);
      }

      .milestone_content {
        padding: 12px 16px;
        border-top: 1px solid #e0e0e0;
        animation: fadeIn 0.3s ease;
      }
    }

    .alrt_holder {
      gap: 5px;
      display: flex;
      flex-direction: column;
      margin-top: 30px;
      .add {
        border-bottom: 1px solid #333333;
        width: fit-content;
        font-size: 16px;
        font-weight: 600;
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

    .sec_add {
      border-bottom: 1px solid #333333;
      width: fit-content;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      margin-top: 15px;
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
    .alrt_holder {
      gap: 5px;
      display: flex;
      flex-direction: column;
      margin-top: 100px;
      .add {
        border-bottom: 1px solid #333333;
        width: 136px;
        font-size: 16px;
        font-weight: 600;
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
    .holder {
      height: 90vh;
      width: 100%;
      top: 0%;
      left: 0%;
      z-index: 9999;
      position: fixed;
      background-color: rgb(192, 192, 192, 0.3);
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
          width: 462px;
          height: 200px;
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
            width: 104px;
            height: 55px;
            text-align: center;
          }
        }
        .close_btn {
          height: 36px;
          width: 300px;
          border: 1px solid var(--Neutral_Grey1);
          color: #0a0a0a;
          font-size: 16px;
          margin-top: 20px;
          background-color: var(--NeutralBlack);
          color: var(--PrimaryBase);
          font-weight: 600;
          font-family: Arial, Helvetica, sans-serif;
          border-radius: 8px;
          cursor: pointer;
        }
      }
    }
  }
  .goback {
    height: 20px;
    width: 80%;
    padding-top: 70px;
    .icon_holder {
      display: flex;
      margin-left: 70px;
      gap: 16px;
      width: 100%;
      height: 100%;
      align-items: center;
      .iconn {
        font-size: 20px;
        cursor: pointer;
      }
      p {
        font-size: 16px;
        font-weight: 400;
      }
    }
  }
`;
