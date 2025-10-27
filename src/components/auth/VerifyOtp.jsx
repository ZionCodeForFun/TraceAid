import React, { useState, useRef } from "react";
import { Form, Input, Button, message } from "antd";
import { Container } from "../../style/VerifyOtpStyle";
import logo2 from "../../assets/logo2.png";
import { useNavigate } from "react-router-dom";

const VerifyOtp = () => {
  const [otp, setOtp] = useState(Array(6).fill(""));
  const inputsRef = useRef([]);
  const nav = useNavigate();
  
  const handleChange = (e, index) => {
    const value = e.target.value;
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    if (value && index < 7) {
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
          style={{ marginTop: "20px" }}
          onClick={()=>nav('/organizationdashboard')}
        >
          Verify
        </Button>


        <p className="goBack" onClick={() => nav("/signup")}>
          Go back
        </p>

      </form>
    </Container>
  );
};

export default VerifyOtp;
