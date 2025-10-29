import React, { useState, useRef } from "react";
import { Container } from "../../../../style/SettingsStyle";
import InputField from "../../../common/InputField";
import { GoPaperclip } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
import Button from "../../../common/Button";
import { toast } from "react-toastify";
const KycVerify = () => {
  const [formData, setFormData] = useState({
    registrationNumber: "",
    address: "",
    certificate: null,
  });

  const fileInputRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({ ...prev, certificate: file }));
  };

  const handleChooseFile = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.registrationNumber || !formData.address || !formData.certificate) {
       toast.success("Please complete all fields before saving.");
      return;
    }

    console.log("Form submitted:", formData);
    alert("KYC verification submitted successfully!");
  };

  const handleDiscard = () => {
    setFormData({
      registrationNumber: "",
      address: "",
      certificate: null,
    });
  };

  return (
    <Container>
      <aside className="right">
        <div className="title">
          <p>KYC Verification</p>
        </div>

        <form className="input_holder" onSubmit={handleSubmit}>
          <div className="name_holder">
            <label>Registration Number</label>
            <InputField
              type="text"
              placeholder="CAC/NGO license number"
              name="registrationNumber"
              value={formData.registrationNumber}
              onChange={handleInputChange}
            />
          </div>

          <div className="name_holder">
            <label>Upload Registration Certificate</label>
            <InputField
              type="text"
              placeholder={formData.certificate ? formData.certificate.name : "File upload"}
              readOnly
            />
            <i>
              <GoPaperclip />
            </i>
            <p className="choose_file" onClick={handleChooseFile}>
              Choose file
            </p>

            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileChange}
              accept=".pdf,.jpg,.jpeg,.png"
            />
          </div>

     
          <div className="name_holder">
            <label>Organization Address</label>
            <InputField
              type="text"
              placeholder="Enter your address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
            />
            <i>
              <IoLocationOutline />
            </i>
          </div>

    
          <div className="btn_holder">
            <Button
              text="Discard Changes"
              className="btn_left"
              type="button"
              onClick={handleDiscard}
            />
            <Button text="Save Changes" className="btn_right" type="submit" />
          </div>
        </form>
      </aside>
    </Container>
  );
};

export default KycVerify;
