import React from "react";
import { Container } from "../../../../style/SettingsStyle";
import InputField from "../../../common/InputField";
import { LuBriefcase } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import Button from "../../../common/Button";
const PersonalInfo = () => {
  return (
    <Container>
      <aside className="right">
        <div className="title">
          <p>Basic Information</p>
        </div>
        <div className="input_holder">
          <div className="name_holder">
            <label>Organization’s Name</label>
            <InputField type="text" placeholder="Slum2Africa" />
            <i>
              <LuBriefcase />
            </i>
          </div>
          <div className="name_holder">
            <label>Email</label>
            <InputField type="text" placeholder="example@gmail.com" />
            <i>
              <MdOutlineMailOutline />
            </i>
          </div>
          <div className="name_holder">
            <label>Phone Number</label>
            <InputField type="text" placeholder="+234 012 3456 789" />
            <i>
              <MdOutlineMailOutline />
            </i>
          </div>
          <div className="btn_holder">
            <Button text="Discard Changes" className="btn_left" />
            <Button text="Save Changes" className="btn_right" />
          </div>
        </div>
      </aside>
    </Container>
  );
};

export default PersonalInfo;
