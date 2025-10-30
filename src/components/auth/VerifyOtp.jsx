import React, { useState, useRef, useEffect } from "react";
import { Input, Button, message } from "antd";
import { Container } from "../../style/VerifyOtpStyle";
import logo2 from "../../assets/logo2.png";
import { useNavigate, useLocation } from "react-router-dom";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const VerifyOtp = () => {
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [timeLeft, setTimeLeft] = useState(0); // 0 until OTP is sent
  const [canResend, setCanResend] = useState(false);
  const [showSuccess,setShowsuccess] = useState(false)
  const inputsRef = useRef([]);
  const nav = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state?.otpSent) {
      setTimeLeft(120); 
      setCanResend(false);
    }
  }, [location.state]);

  // Countdown effect
  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setCanResend(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const handleResend = () => {
    // call API again
    message.success("OTP resent successfully!");
    setCanResend(false);
    setTimeLeft(120);
  };

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    if (value && index < 5) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otp.some((d) => d === "")) {
      message.error("Please enter all 6 digits");
      return;
    }

    const code = otp.join("");
    message.success(`Entered OTP: ${code}`);
    console.log("OTP Submitted:", code);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit} className="wrapper">
        <img src={logo2} alt="logo" />
        <div className="title">
          <p className="sign">Verify Account</p>
          <p className="text">Enter your verification code</p>
        </div>

        <div className="otp_inputs">
          {otp.map((digit, i) => (
            <Input
              key={i}
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e, i)}
              onKeyDown={(e) => handleKeyDown(e, i)}
              ref={(el) => (inputsRef.current[i] = el)}
              style={{
                width: "45px",
                height: "45px",
                textAlign: "center",
                fontSize: "18px",
                borderRadius: "8px",
                marginRight: "8px",
              }}
            />
          ))}
        </div>

        <Button
          type="primary"
          htmlType="submit"
          className="verify_btn"
          style={{ marginTop: "20px", width: "100%" }}
          onClick={() => {setShowsuccess(true); nav("/organizationdashboard")}}
        >
          Verify
        </Button>

        {canResend ? (
          <Button
            type="default"
            className="resend_btn"
            style={{
              marginTop: "10px",
              width: "100%",
              backgroundColor: "#f0f0f0",
              color: "#000",
              fontWeight: "500",
            }}
            onClick={handleResend}
          >
            Resend OTP
          </Button>
        ) : (
          <Button
            type="default"
            disabled
            className="timer_btn"
            style={{
              marginTop: "10px",
              width: "100%",
              backgroundColor: "#f5f5f5",
              color: "#000",
              fontWeight: "500",
            }}
          >
            {timeLeft > 0 ? formatTime() : "00:00"}
          </Button>
        )}

        <p
          className="goBack"
          onClick={() => nav("/signup")}
          style={{ marginTop: "15px", cursor: "pointer" }}
        >
          Go back
        </p>
        {showSuccess && <div className="holder">
          <div className="reciept_holder">
            <div className="content-holder">
              <i>
                <IoMdCheckmarkCircleOutline />
              </i>
              <p className="bigtext">Verification successful</p>
              <p className="smalltext">
                Your email have been verified and your account have <br /> been
                account created
              </p>
            </div>
            <Button
              onClick={() => nav("/verify_kyc1")}
              className="close_btn"
            >
              Proceed to KYC
            </Button>
          </div>
        </div>}
      </form>
    </Container>
  );
};

export default VerifyOtp;
