import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { FiEdit2 } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../global/authSlice";
import { LuUserRound } from "react-icons/lu";
import { PiPhoneLight } from "react-icons/pi";
import HeaderNav from "./HeaderNav";
import Footer from "./Footer";

import {
  Wrapper,
  SectionTitle,
  FormRow,
  InputGroup,
  Label,
  Input,
  ButtonGroup,
  OutlineBtn,
  PrimaryBtn,
  ProfileImage,
  UploadLabel,
} from "./ProfileSettingStyled";

const ProfileSettings = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const userData = auth.user;
  const userId = userData?._id;
  const token = auth.token;

  const [loading, setLoading] = useState(false);
  const [previewImg, setPreviewImg] = useState(
    userData?.profilePicture?.imageUrl
      ? `${userData.profilePicture.imageUrl}?t=${Date.now()}`
      : null
  );

  const [formData, setFormData] = useState({
    profilePicture: null,
    firstName: userData?.firstName || "",
    lastName: userData?.lastName || "",
    phoneNumber: userData?.phoneNumber || "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, profilePicture: file });
      setPreviewImg(URL.createObjectURL(file));
    }
  };

  const handleDiscard = () => {
    setFormData({
      profilePicture: null,
      firstName: userData?.firstName || "",
      lastName: userData?.lastName || "",
      phoneNumber: userData?.phoneNumber || "",
    });
    setPreviewImg(
      userData?.profilePicture?.imageUrl
        ? `${userData.profilePicture.imageUrl}?t=${Date.now()}`
        : null
    );
  };

  const handleSave = async () => {
    if (!userId) return toast.error("User not found!");
    if (!token) return toast.error("You are not authenticated!");

    setLoading(true);

    const fd = new FormData();
    fd.append("firstName", formData.firstName);
    fd.append("lastName", formData.lastName);
    fd.append("phoneNumber", formData.phoneNumber);

    if (formData.profilePicture) {
      fd.append("profilePicture", formData.profilePicture);
    }

    try {
      const res = await axios.put(
        `${import.meta.env.VITE_BaseUrl}/update/${userId}`,
        fd,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const updatedUser = res.data.data.update;

      dispatch(
        setUser({
          ...userData,
          ...updatedUser,
        })
      );

      if (updatedUser?.profilePicture?.imageUrl) {
        setPreviewImg(updatedUser.profilePicture.imageUrl + `?t=${Date.now()}`);
      }

      toast.success("Profile updated successfully!");
    } catch (err) {
      console.log("API ERROR:", err.response?.data);
      toast.error(err.response?.data?.message || "Update failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <HeaderNav />

      <Wrapper>
        <UploadLabel>
          <ProfileImage
            src={
              previewImg ||
              "https://ui-avatars.com/api/?name=User&background=ccc&color=000"
            }
            alt="profile"
          />

          <input
            type="file"
            accept="image/*"
            id="profile-upload"
            onChange={handleImageChange}
          />

          <label htmlFor="profile-upload" className="edit-icon">
            <FiEdit2 />
          </label>
        </UploadLabel>

        <SectionTitle>Basic Information</SectionTitle>

        <FormRow>
          <InputGroup>
            <Label>First Name</Label>
            <div className="input-icon-wrapper">
              <LuUserRound className="input-icon" />
              <Input
                type="text"
                name="firstName"
                placeholder="Enter your first name"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
          </InputGroup>

          <InputGroup>
            <Label>Last Name</Label>
            <div className="input-icon-wrapper">
              <LuUserRound className="input-icon" />
              <Input
                type="text"
                name="lastName"
                placeholder="Enter your last name"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </InputGroup>
        </FormRow>

        <InputGroup>
          <Label>Phone Number</Label>
          <div className="input-icon-wrapper">
            <PiPhoneLight className="input-icon" />
            <Input
              type="text"
              name="phoneNumber"
              placeholder="+234 701 987 6543"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
        </InputGroup>

        <ButtonGroup>
          <OutlineBtn onClick={handleDiscard}>Discard Changes</OutlineBtn>
          <PrimaryBtn disabled={loading} onClick={handleSave}>
            {loading ? "Saving..." : "Save Changes"}
          </PrimaryBtn>
        </ButtonGroup>
      </Wrapper>

      <Footer />
    </>
  );
};

export default ProfileSettings;
