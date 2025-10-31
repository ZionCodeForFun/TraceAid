import React, { useState, useRef } from "react";
import axios from "axios";
import { Input, Button } from "antd";
import { toast } from "react-toastify";
import { Container } from "../../style/VerifyOtpStyle";
import logo2 from "../../assets/logo2.png";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../global/authSlice";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const VerifyOtp = () => {
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [showSuccessOrg, setShowSuccessOrg] = useState(false);
  const [showSuccessIndi, setShowSuccessIndi] = useState(false);

  const inputsRef = useRef([]);
  const nav = useNavigate();
  const dispatch = useDispatch();
  const { email } = useParams();
  const [loading, setLoading] = useState(false);
  const role = useSelector((state) => state.auth.role);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    if (value && index < otp.length - 1) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (otp.some((d) => d === "")) {
      toast.error("Please enter all 6 digits");
      setLoading(false);
      return;
    }

    const code = otp.join("");

    if (!email || typeof email !== "string") {
      toast.error("Email not found. Please sign up again.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        `${
          role === "fundraiser"
            ? import.meta.env.VITE_BaseUrl2
            : import.meta.env.VITE_BaseUrl
        }/${role === "fundraiser" ? "verify" : "verify-otp"}`,
        { email, otp: code }
      );

      if (response.data?.statusCode === true) {
        toast.success(response.data.message || "Email verification successful");
        dispatch(setUser(response.data.user));

        if (role === "fundraiser") {
          setShowSuccessOrg(true);
        } else {
          setShowSuccessIndi(true);
          setTimeout(() => {
            nav("/");
          }, 2000);
        }
      } else {
        toast.error(response.data.message || "Invalid or expired OTP");
      }
    } catch (error) {
      console.error("Verification error:", error.response || error);
      const serverMessage =
        error?.response?.data?.message ||
        "Something went wrong, please try again";
      toast.error(serverMessage);
    } finally {
      setLoading(false);
    }
  };

  const resendOtp = async () => {
    try {
      const response = await axios.post(
        `${
          role === "fundraiser"
            ? import.meta.env.VITE_BaseUrl2
            : import.meta.env.VITE_BaseUrl
        }/resend-otp`,
        { email }
      );
      if (response.data?.statusCode === true) {
        toast.success("OTP resent successfully");
      } else {
        toast.error("Failed to resend OTP");
      }
    } catch (error) {
      console.error("Resend OTP error:", error.response || error);
      const serverMessage =
        error?.response?.data?.message ||
        "Something went wrong, please try again";
      toast.error(serverMessage);
    }
  };

  const Time = () => {
    const time = 30;
    const [counter, setCounter] = useState(time);

    React.useEffect(() => {
      if (counter > 0) {
        const timer = setTimeout(() => setCounter(counter - 1), 1000);
        return () => clearTimeout(timer);
      }
    }, [counter]);

    if (counter > 0) {
      return (
        <p className="timer">
          Resend OTP in 00:{counter < 10 ? `0${counter}` : counter}
        </p>
      );
    } else {
      return (
        <p className="otpResend" onClick={() => resendOtp()}>
          Resend OTP
        </p>
      );
    }
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
          loading={loading}
        >
          {loading ? "Verifying..." : "Verify"}
        </Button>

        <p className="otpResendHolder">
          Didn't receive the code? <Time />
        </p>
        <p className="goBack" onClick={() => nav("/signup")}>
          Go back
        </p>

        {showSuccessOrg && (
          <div className="holder">
            <div className="reciept_holder">
              <div className="content-holder">
                <i>
                  <IoMdCheckmarkCircleOutline />
                </i>
                <p className="bigtext">Verification successful</p>
                <p className="smalltext">
                  Your email has been verified and your organization account
                  created successfully.
                </p>
              </div>
              <Button
                onClick={() => nav("/verify_kyc1")}
                className="close_btn"
              >
                Proceed to KYC
              </Button>
            </div>
          </div>
        )}

    
        {showSuccessIndi && (
          <div className="holder">
            <div className="reciept_holder">
              <div className="content-holder">
                <i>
                  <IoMdCheckmarkCircleOutline />
                </i>
                <p className="bigtext">Verification successful</p>
                <p className="smalltext">
                  Your email has been verified and your account has been created.
                </p>
              </div>
            </div>
          </div>
        )}
      </form>
    </Container>
  );
};

export default VerifyOtp;
