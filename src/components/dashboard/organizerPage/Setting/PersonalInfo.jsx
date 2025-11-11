import React, { useState } from "react";
import { Container } from "../../../../style/SettingsStyle";
import InputField from "../../../common/InputField";
import { LuBriefcase } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import Button from "../../../common/Button";
import { useSelector, useDispatch } from "react-redux";
import { updateOrganization } from "../../../../api/updateorgProfile";
import { toast } from "react-toastify";
import { setUser } from "../../../../global/authSlice";
import { Loader2 } from "lucide-react"; // spinner icon

const PersonalInfo = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.auth.user);
  const token = userData?.token;
  const userId = userData?._id;

  const [formData, setFormData] = useState({
    organizationName: userData?.organizationName || "",
    email: userData?.email || "",
    phoneNumber: userData?.phoneNumber || "",
  });

  const [loading, setLoading] = useState(false); // 👈 NEW STATE

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    setLoading(true); // 👈 Start loading
    try {
      const response = await updateOrganization(userId, formData, token);
      const updatedData = response?.data?.data?.update;

      dispatch(setUser({ ...userData, ...updatedData }));
      toast.success("Profile updated successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to update profile information.");
    } finally {
      setLoading(false); // 👈 Stop loading
    }
  };

  return (
    <Container>
      <aside className="right">
        <div className="title">
          <p>Basic Information</p>
        </div>
        <div className="input_holder">
          <div className="name_holder">
            <label>Organization’s Name</label>
            <InputField
              type="text"
              name="organizationName"
              value={formData.organizationName}
              onChange={handleChange}
              placeholder="Slum2Africa"
            />
            <i>
              <LuBriefcase />
            </i>
          </div>

          <div className="name_holder">
            <label>Email</label>
            <InputField
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@gmail.com"
            />
            <i>
              <MdOutlineMailOutline />
            </i>
          </div>

          <div className="name_holder">
            <label>Phone Number</label>
            <InputField
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="+234 012 3456 789"
            />
            <i>
              <MdOutlineMailOutline />
            </i>
          </div>

          <div className="btn_holder">
            <Button
              text="Discard Changes"
              className="btn_left"
              onClick={() =>
                setFormData({
                  organizationName: userData?.organizationName || "",
                  email: userData?.email || "",
                  phoneNumber: userData?.phoneNumber || "",
                })
              }
              disabled={loading} 
            />

            <Button
              text={
                loading ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="animate-spin" size={18} />
                    Saving...
                  </span>
                ) : (
                  "Save Changes"
                )
              }
              className="btn_right"
              onClick={handleSave}
              disabled={loading} 
            />
          </div>
        </div>
      </aside>
    </Container>
  );
};

export default PersonalInfo;
