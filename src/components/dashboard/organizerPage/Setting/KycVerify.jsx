
import { Container } from "../../../../style/SettingsStyle";
import InputField from "../../../common/InputField";
import { LuBriefcase } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import Button from "../../../common/Button";
import { GoPaperclip } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
const KycVerify = () => {
  return (
    <Container>
      <aside className="right">
        <div className="title">
          <p>KYC Verification</p>
        </div>
        <div className="input_holder">
          <div className="name_holder">
            <label>Registration Number</label>
            <InputField type="text" placeholder="CAC/NGO license number" />
          
          </div>
          <div className="name_holder">
            <label>Upload Registration Certificate</label>
            <InputField type="text" placeholder="File upload" />
            <i>
             <GoPaperclip />
            </i>
          </div>
          <div className="name_holder">
            <label>Organization Address</label>
            <InputField type="text" placeholder="Enter your address" />
            <i>
             <IoLocationOutline />
            </i>
            <p className="choose_file">Choose file</p>
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

export default KycVerify;
