import React, { useState, useEffect } from "react";
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

  const [campaigns, setCampaigns] = useState([]);
  const [milestonesMap, setMilestonesMap] = useState({});
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [selectedMilestone, setSelectedMilestone] = useState(null);
  const [inputs, setInputs] = useState({ campaign: "", milestoneAmount: "" });
  const [loading, setLoading] = useState(false);

  const nav = useNavigate();
  const { user, token } = useSelector((state) => state.auth);
  const fundraiserId = user?._id;

  useEffect(() => {
    if (!token) return;

    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${
            import.meta.env.VITE_BaseUrl_Campaign1
          }/get-all-campaign-and-milestone-of-fundraiser`,
          { headers: { Authorization: `Bearer ${token}` } }
        );

        const campaignsData = Array.isArray(res.data?.data?.all)
          ? res.data.data.all
          : Array.isArray(res.data?.data)
          ? res.data.data
          : [];

        setCampaigns(campaignsData);

        const tempMap = {};
        campaignsData.forEach((camp) => {
          tempMap[camp._id.toString()] = Array.isArray(camp.milestones)
            ? camp.milestones
            : [];
        });
        setMilestonesMap(tempMap);
      } catch (err) {
        toast.error("Failed to fetch campaigns or milestones");
      }
    };

    fetchData();
  }, [token]);

  const toggleShow = (key) =>
    setShow((prev) => ({ ...prev, [key]: !prev[key] }));

  const handleSelectCampaign = (campaign) => {
    setSelectedCampaign(campaign);
    setSelectedMilestone(null);
    setInputs({ campaign: campaign.campaignTitle, milestoneAmount: "" });
    setShow((prev) => ({ ...prev, campaign: false, milestone: true }));
  };

  const handleSelectMilestone = (milestone) => {
    setSelectedMilestone(milestone);
    setInputs((prev) => ({
      ...prev,
      milestoneAmount: `${milestone.milestoneTitle} - ₦${milestone.targetAmount}`,
    }));
    setShow((prev) => ({ ...prev, milestone: false }));
  };

  const handleSubmit = async () => {
    if (!selectedCampaign || !selectedMilestone) {
      toast.error("Please select both campaign and milestone.");
      return;
    }

    try {
      setLoading(true);
      const payload = {
        fundraiserId,
        campaignId: selectedCampaign._id,
        milestoneId: selectedMilestone._id,
        amount: selectedMilestone.targetAmount,
      };

      const res = await axios.post(
        `${import.meta.env.VITE_BaseUrl2}/wallet/request-payout`,
        payload,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (res.status === 200 || res.status === 201) {
        toast.success("Withdrawal request submitted successfully!");
        setShow((prev) => ({ ...prev, success: true }));
        setSelectedCampaign(null);
        setSelectedMilestone(null);
        setInputs({ campaign: "", milestoneAmount: "" });
      }
    } catch (err) {
      toast.error(err.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  const currentMilestones = selectedCampaign
    ? milestonesMap[selectedCampaign._id]
    : [];

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
                  value={inputs.campaign}
                  readOnly
                  placeholder="Select campaign"
                  className="input"
                />
                <i
                  className={`drop1 ${show.campaign ? "rotate" : ""}`}
                  onClick={() => toggleShow("campaign")}
                >
                  <MdKeyboardArrowDown />
                </i>
              </div>
              {show.campaign && campaigns.length > 0 && (
                <div className="dropdown_menu1">
                  {campaigns.map((item) => (
                    <p
                      key={item._id}
                      onClick={() => handleSelectCampaign(item)}
                    >
                      {item.campaignTitle}
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
                  value={inputs.milestoneAmount}
                  readOnly
                  placeholder="Select milestone"
                  className="input"
                />
                <i
                  className={`drop2 ${show.milestone ? "rotate" : ""}`}
                  onClick={() => toggleShow("milestone")}
                >
                  <MdKeyboardArrowDown />
                </i>
              </div>
              {show.milestone && currentMilestones.length > 0 && (
                <div className="dropdown_menu2">
                  {currentMilestones.map((item) => (
                    <p
                      key={item._id}
                      onClick={() => handleSelectMilestone(item)}
                    >
                      {item.milestoneTitle} - ₦{item.targetAmount}
                    </p>
                  ))}
                </div>
              )}
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
              </div>
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
