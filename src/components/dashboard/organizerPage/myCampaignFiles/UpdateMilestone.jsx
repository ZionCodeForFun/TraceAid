import React, { useEffect, useState } from "react";
import InputField from "../../../common/InputField";
import Button from "../../../common/Button";
import { GoPaperclip } from "react-icons/go";
import { IoCloseSharp } from "react-icons/io5";
import { CiCircleAlert } from "react-icons/ci";
import { toast } from "react-toastify";
import axios from "axios";
import { useSelector } from "react-redux";
import styled from "styled-components";

const UpdateMilestone = ({ onClose, campaign }) => {

  const { token } = useSelector((state) => state.auth);
  // console.log("yes token", token)
  const [description, setDescription] = useState("");
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [milestones, setMilestones] = useState([]);
  const [selectedMilestone, setSelectedMilestone] = useState("");

  useEffect(() => {
    const fetchMilestones = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_campaignBaseUrl}/get-all-campaigns`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        // console.log("zion testing", res.data.data);

        if (res.data.statusCode && res.data.data?.all) {
          const allCampaigns = res.data.data.all;

          const currentCampaign = allCampaigns.find(
            (c) => c._id === campaign._id
          );

          if (currentCampaign?.milestones?.length) {
            setMilestones(currentCampaign.milestones);
          } else {
            toast.error("No milestones found for this campaign.");
          }
        } else {
          toast.error("Failed to load milestones.");
        }
      } catch (error) {
        console.error("Milestone fetch error:", error);
        toast.error("Could not fetch milestones for this campaign.");
      }
    };

    if (campaign?._id) fetchMilestones();
  }, [campaign, token]);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    if (files.length + selectedFiles.length > 10) {
      toast.error("You can upload a maximum of 10 files.");
      return;
    }
    setFiles((prev) => [...prev, ...selectedFiles]);
  };

  const handleRemoveFile = (index) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

const handleUpload = async () => {

  if (!selectedMilestone) {
    toast.error("Please select a milestone.");
    return;
  }

  if (!description.trim()) {
    toast.error("Please enter a description for the milestone evidence.");
    return;
  }

  if (files.length < 5) {
    toast.error("You must upload at least 5 files.");
    return;
  }

  if (files.length > 10) {
    toast.error("You can upload a maximum of 10 files.");
    return;
  }

  try {
    setLoading(true);

  
    const formData = new FormData();
    formData.append("fundraiserId", campaign.fundraiser._id); 
    formData.append("description", description);
    files.forEach((file) => formData.append("files", file));

    const res = await axios.post(
      `${import.meta.env.VITE_BaseUrl_UploadMiles}/milestones/evidence/${selectedMilestone}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    toast.success("Milestone evidence uploaded successfully!");
    setFiles([]);
    setDescription("");
    setSelectedMilestone("");
    onClose(true);
  } catch (err) {
    console.error("Upload error:", err.response?.data || err);
    const message =
      err.response?.data?.message ||
      "Failed to upload milestone evidence. Check authentication or file sizes.";
    toast.error(message);
  } finally {
    setLoading(false);
  }
};


  return (
    <Container>
      <div className="right">
        <div className="title">
          <p>Milestone Update</p>
        </div>

        <div className="input_holder">
          <div className="name_holder">
            <label>Select Milestone</label>
            <select
              value={selectedMilestone}
              onChange={(e) => setSelectedMilestone(e.target.value)}
            >
              <option value="">-- Choose a milestone --</option>
              {milestones.map((m) => (
                <option key={m._id} value={m._id}>
                  {m.milestoneTitle}
                </option>
              ))}
            </select>
          </div>

          <div className="name_holder">
            <label>Description</label>
            <InputField
              type="text"
              placeholder="Enter milestone description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="name_holder">
            <label>Upload Documents</label>
            <input
              type="file"
              multiple
              style={{ display: "none" }}
              id="file-upload"
              onChange={handleFileChange}
            />
            <input
              type="text"
              readOnly
              placeholder={
                files.length > 0
                  ? `${files.length} file(s) selected`
                  : "Select files"
              }
              onClick={() => document.getElementById("file-upload").click()}
            />
            <i>
              <GoPaperclip />
            </i>
            <p
              className="choose_file"
              onClick={() => document.getElementById("file-upload").click()}
            >
              Choose File
            </p>

            <div className="alrt">
              <CiCircleAlert className="alrt_icon" />
              <p>Upload at least 5 documents (Max 10)</p>
            </div>
          </div>

          {files.length > 0 && (
            <ul>
              {files.map((file, index) => (
                <li key={index}>
                  {file.name}{" "}
                  <span
                    style={{ cursor: "pointer", color: "red" }}
                    onClick={() => handleRemoveFile(index)}
                  >
                    Remove
                  </span>
                </li>
              ))}
            </ul>
          )}

          <div className="btn_holder">
            <Button
              text={loading ? "Uploading..." : "Upload Files"}
              onClick={handleUpload}
              className="btn"
            />
          </div>
        </div>
        <i className="btn_close" onClick={() => onClose()}>
          <IoCloseSharp />
        </i>
      </div>
    </Container>
  );
};

export default UpdateMilestone;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: rgba(141, 141, 141, 0.5);
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;

  .right {
    position: relative;
    width: 600px;
    max-width: 90%;
    max-height: 90%;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    border-radius: 30px;
    border: 1px solid var(--Neutral_Grey1);
    background-color: var(--Neutral_Offwhite);
    overflow-y: auto;

    .title p {
      color: var(--NeutralGrey4-Text);
      font-size: 32px;
      font-weight: 700;
      padding-top: 20px;
      text-align: center;
    }

    .input_holder {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 15px;
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

        input,
        select {
          width: 100%;
          padding: 10px 35px;
          border-radius: 12px;
          border: 1px solid var(--Neutral_Grey1);
          outline: none;
          color: #8d8d8d;
          height: 45px;
          font-size: 16px;
          background-color: #fff;
        }

        i {
          position: absolute;
          top: 50%;
          left: 2%;
          transform: translateY(-50%);
          color: #8d8d8d;
          font-size: 20px;
        }

        .choose_file {
          position: absolute;
          top: 50%;
          right: 4%;
          transform: translateY(-50%);
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
    }

    ul {
      max-height: 150px;
      overflow-y: auto;
      padding-left: 20px;
    }

    .btn_holder {
      display: flex;
      width: 100%;
      justify-content: center;
      margin-top: 20px;

      .btn {
        height: 45px;
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

    .btn_close {
      position: absolute;
      top: 5%;
      right: 10%;
      cursor: pointer;
      font-size: 24px;
      color: #8d8d8d;
    }
  }
  .right {
    overflow-y: auto;

    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  .right::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    .right {
      width: 90%;
      padding: 20px;
      border-radius: 20px;

      .title p {
        font-size: 24px;
      }

      .input_holder .name_holder input,
      .input_holder .name_holder select {
        height: 40px;
        font-size: 14px;
      }

      .btn_holder .btn {
        height: 40px;
        font-size: 14px;
      }
    }
  }
`;
