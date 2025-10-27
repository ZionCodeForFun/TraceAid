import React, { useState } from "react";
import { Container } from "../../../../style/RequestWithdrawStyle";
import InputField from "../../../common/InputField";
import Button from "../../../common/Button";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoArrowBackOutline } from "react-icons/io5";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RequestWithdraw = () => {
  const [show, setShow] = useState({
    campaign: false,
    milestone: false,
    success: false,
  });

  const [selectedCampaign, setSelectedCampaign] = useState("");
  const [selectedMilestone, setSelectedMilestone] = useState("");
  const nav = useNavigate();

  const campaigns = [
    "Stationery For The Children Of Makoko Nursery School",
    "Food For All",
    "Medical Support Campaign",
  ];

  const milestones = [
    "Milestone 1 - Acquire 500 school bags",
    "Milestone 2 - Buy 1,000 notebooks and 2,000 pens",
    "Milestone 3 - Buy 6,000 textbooks",
  ];

  const toggleShow = (key) => {
    setShow((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleSelectCampaign = (item) => {
    setSelectedCampaign(item);
    setShow((prev) => ({ ...prev, campaign: false }));
  };

  const handleSelectMilestone = (item) => {
    setSelectedMilestone(item);
    setShow((prev) => ({ ...prev, milestone: false }));
  };

  const handleSubmit = () => {
    if (!selectedCampaign || !selectedMilestone) {
      toast.error(
        "Please select both campaign and milestone before submitting."
      );
      return;
    }
    setShow((prev) => ({ ...prev, success: true }));
  };

  return (
    <Container>
      <article className="wrapper">
        <div className="goback">
          <div className="icon" onClick={() => nav("/organizationdashboard/wallet")}>
            <IoArrowBackOutline className="i" />
            <p>Go back</p>
          </div>
        </div>

        <div className="content_holder">
          <header className="header">
            <p className="bigtext">Request Withdrawal</p>
            <p className="smalltext">
              Submit a withdrawal request for your campaign funds.
            </p>
          </header>

          <article className="input_holder">
            <div className="dropdown_section">
              <label>Select campaign you are withdrawing funds from</label>
              <div className="input_wrapper">
                <InputField
                  type="text"
                  placeholder="Select campaign"
                  className="input"
                  value={selectedCampaign}
                  readOnly
                />
                <i
                  className={`drop1 ${show.campaign ? "rotate" : ""}`}
                  onClick={() => toggleShow("campaign")}
                >
                  <MdKeyboardArrowDown />
                </i>
              </div>

              {show.campaign && (
                <div className="dropdown_menu1">
                  {campaigns.map((item, index) => (
                    <p key={index} onClick={() => handleSelectCampaign(item)}>
                      {item}
                    </p>
                  ))}
                </div>
              )}
            </div>

            <div className="dropdown_section">
              <label>Select milestone you are withdrawing funds from</label>
              <div className="input_wrapper">
                <InputField
                  type="text"
                  placeholder="Select milestone"
                  className="input"
                  value={selectedMilestone}
                  readOnly
                />
                <i
                  className={`drop2 ${show.milestone ? "rotate" : ""}`}
                  onClick={() => toggleShow("milestone")}
                >
                  <MdKeyboardArrowDown />
                </i>
              </div>

              {show.milestone && (
                <div className="dropdown_menu2">
                  {milestones.map((item, index) => (
                    <p key={index} onClick={() => handleSelectMilestone(item)}>
                      {item}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </article>

          <Button onClick={handleSubmit} text="Submit" className="btn" />
        </div>

        {show.success && (
          <div className="holder">
            <div className="reciept_holder">
              <div className="content-holder">
                <i>
                  <IoMdCheckmarkCircleOutline />
                </i>
                <p className="bigtext">Withdrawal Request Successful</p>
                <p className="smalltext">
                  Withdrawal request has been submitted for <br /> verification.
                </p>
              </div>
              <Button
                onClick={() => nav("/organizationdashboard/wallet")}
                text="Close"
                className="close_btn"
              />
            </div>
          </div>
        )}
      </article>
    </Container>
  );
};

export default RequestWithdraw;
