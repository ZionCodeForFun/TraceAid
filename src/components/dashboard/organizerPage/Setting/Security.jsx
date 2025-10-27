import React, { useState } from "react";
import { Container, Aside_holder } from "../../../../style/SettingsStyle";
import InputField from "../../../common/InputField";
import Button from "../../../common/Button";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Security = () => {
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
    twoFA: false,
  });

  const [passwords, setPasswords] = useState({
    current: "",
    new: "",
    confirm: "",
    twoFA: "",
  });

  const toggleVisibility = (field) => {
    setShowPassword((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleChange = (field, value) => {
    setPasswords((prev) => ({ ...prev, [field]: value }));
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

          <div className="name_holder">
            <label>2FA Authentication</label>
            <div className="input_with_icon">
              <InputField
                type={showPassword.twoFA ? "text" : "password"}
                placeholder="Enter  2FA authentication "
                value={passwords.twoFA}
                onChange={(e) => handleChange("twoFA", e.target.value)}
              />
              <i className="eye_icon" onClick={() => toggleVisibility("twoFA")}>
                {showPassword.twoFA ? <FiEyeOff /> : <FiEye />}
              </i>
            </div>
          </div>

          <div className="btn_holder">
            <Button text="Discard Changes" className="btn_left" />
            <Button text="Save Changes" className="btn_right" />
          </div>
        </div>
      </Aside_holder>
    </Container>
  );
};

export default Security;
