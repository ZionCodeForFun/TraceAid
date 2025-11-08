import React, { useState } from "react";
import { Container } from "../../../../style/RequestWithdrawStyle";
import InputField from "../../../common/InputField";
import Button from "../../../common/Button";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoArrowBackOutline } from "react-icons/io5";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import axios from "axios";

const RequestWithdraw = () => {
  const [show, setShow] = useState({
    campaign: false,
    milestone: false,
    success: false,
  });

  const [selectedCampaign, setSelectedCampaign] = useState("");
  const [selectedMilestone, setSelectedMilestone] = useState("");
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const [loading, setLoading] = useState(false);

  const nav = useNavigate();
  const token = useSelector((state) => state.auth.user?.token);
  const fundraiserId = useSelector((state) => state.auth.user?._id); 

  const campaigns = [
    { id: "672f7be53d8dca5312b0ef1d", name: "Stationery For The Children Of Makoko Nursery School" },
    { id: "672f7be53d8dca5312b0ef2a", name: "Food For All" },
    { id: "672f7be53d8dca5312b0ef3b", name: "Medical Support Campaign" },
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

  const handleSubmit = async () => {
    if (!selectedCampaign || !selectedMilestone || !amount) {
      toast.error("Please fill all fields before submitting.");
      return;
    }

    try {
      setLoading(true);

      const payload = {
        fundraiserId,
        campaignId: selectedCampaign.id,
        amount: Number(amount),
        note: note || `Withdrawal request for ${selectedMilestone}`,
      };

      const res = await axios.post(
        `${import.meta.env.VITE_BaseUrl2}/wallet/request-payout`,
        payload,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (res.status === 200 || res.status === 201) {
        toast.success("Withdrawal request submitted successfully!");
        setShow((prev) => ({ ...prev, success: true }));
        console.log(" zion res",res.data?.data)
      }
    } catch (err) {
      console.error("Error details:", err.response?.data);
      toast.error(err.response?.data?.message || "Failed to submit request.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <article className="wrapper">
        <div className="goback">
          <div className="icon" onClick={() => nav("/organization/wallet")}>
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
                  value={selectedCampaign?.name || ""}
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
                      {item.name}
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

      
            <div className="dropdown_section">
              <label>Enter withdrawal amount</label>
              <InputField
                type="number"
                placeholder="Enter amount"
                className="inpu"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>

       
            <div className="dropdown_section">
              <label>Note (optional)</label>
              <InputField
                type="text"
                placeholder="Enter a note"
                className="inpu"
                value={note}
                onChange={(e) => setNote(e.target.value)}
              />
            </div>
          </article>

          <Button
            onClick={handleSubmit}
            text={loading ? "Submitting..." : "Submit"}
            className="btn"
            disabled={loading}
          />
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
              </div >
              <Button
                onClick={() => nav("/organization/wallet")}
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
