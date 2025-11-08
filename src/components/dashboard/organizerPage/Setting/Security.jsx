import React, { useState } from "react";
import { Container, Aside_holder } from "../../../../style/SettingsStyle";
import InputField from "../../../common/InputField";
import Button from "../../../common/Button";
import { FiEye, FiEyeOff } from "react-icons/fi";
import axios from "axios";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const Security = () => {
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const [passwords, setPasswords] = useState({
    current: "",
    new: "",
    confirm: "",
  });

  const { user, token } = useSelector((state) => state.auth);


  const toggleVisibility = (field) => {
    setShowPassword((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleChange = (field, value) => {
    setPasswords((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    const { current, new: newPassword, confirm } = passwords;

    if (!current || !newPassword || !confirm) {
      return toast.error("All fields are required");
    }

    if (newPassword !== confirm) {
      return toast.error("New passwords do not match");
    }

    try {
      const response = await axios.put(
        `${import.meta.env.VITE_BaseUrl2}/change-password/${user._id}`,
        {
          oldPassword: current,
          newPassword: newPassword,
          confirmPassword: confirm,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("first zion", response.data?.data);
      toast.success(response.data.message || "Password changed successfully!");
      setPasswords({ current: "", new: "", confirm: "" });
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Failed to change password");
    }
  };

  return (
    <Container>
      <Aside_holder>
        <div className="title">
          <p>Security</p>
        </div>

        <div className="input_holder">
          <div className="name_holder">
            <label>Current Password</label>
            <div className="input_with_icon">
              <InputField
                type={showPassword.current ? "text" : "password"}
                placeholder="Enter your current password"
                value={passwords.current}
                onChange={(e) => handleChange("current", e.target.value)}
              />
              <i
                className="eye_icon"
                onClick={() => toggleVisibility("current")}
              >
                {showPassword.current ? <FiEyeOff /> : <FiEye />}
              </i>
            </div>
          </div>

          <div className="name_holder">
            <label>New Password</label>
            <div className="input_with_icon">
              <InputField
                type={showPassword.new ? "text" : "password"}
                placeholder="Enter your new password"
                value={passwords.new}
                onChange={(e) => handleChange("new", e.target.value)}
              />
              <i className="eye_icon" onClick={() => toggleVisibility("new")}>
                {showPassword.new ? <FiEyeOff /> : <FiEye />}
              </i>
            </div>
          </div>

          <div className="name_holder">
            <label>Confirm Password</label>
            <div className="input_with_icon">
              <InputField
                type={showPassword.confirm ? "text" : "password"}
                placeholder="Confirm your new password"
                value={passwords.confirm}
                onChange={(e) => handleChange("confirm", e.target.value)}
              />
              <i
                className="eye_icon"
                onClick={() => toggleVisibility("confirm")}
              >
                {showPassword.confirm ? <FiEyeOff /> : <FiEye />}
              </i>
            </div>
          </div>

          <div className="btn_holder">
            <Button
              text="Discard Changes"
              className="btn_left"
              onClick={handleSubmit}
            />
            <Button
              text="Save Changes"
              className="btn_right"
              onClick={handleSubmit}
            />
          </div>
        </div>
      </Aside_holder>
    </Container>
  );
};

export default Security;
