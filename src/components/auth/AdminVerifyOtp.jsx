import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const AdminVerifyOTP = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [timeLeft, setTimeLeft] = useState(10);
  const [isResendActive, setIsResendActive] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const inputRefs = useRef([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const adminEmail = useSelector(
    (state) => state.adminAuth?.admin?.email || state.adminAuth?.email
  );

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  useEffect(() => {
    let timer;
    if (timeLeft > 0) {
      timer = setTimeout(() => setTimeLeft((prev) => prev - 1), 600000);
    } else {
      setIsResendActive(true);
    }
    return () => clearTimeout(timer);
  }, [timeLeft]);

  const handleResend = async () => {
    if (!adminEmail) {
      toast.error("Email not found. Please register again.");
      return;
    }

    try {
      setOtp(new Array(6).fill(""));
      setTimeLeft(10);
      setIsResendActive(false);

      await axios.post(`${import.meta.env.VITE_BaseUrl_Admin}/resend-otp`, {
        email: adminEmail,
      });

      toast.info("OTP resent successfully!");
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to resend OTP.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const enteredOtp = otp.join("");
    if (enteredOtp.length < 6) {
      toast.error("Please enter the full 6-digit OTP");
      return;
    }

    if (!adminEmail) {
      toast.error("Email not found. Please register again.");
      return;
    }

    try {
      setIsSubmitting(true);
      const res = await axios.post(
        `${import.meta.env.VITE_BaseUrl_Admin}/verify-otp`,
        { email: adminEmail, otp: enteredOtp }
      );

      toast.success(res.data?.message || "OTP verified successfully!");
      navigate("/admin_login");
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "OTP verification failed!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container>
      <FormWrapper>
        <h2>Verify OTP</h2>
        <p className="subtitle">Enter the 6-digit code sent to your email.</p>

        <form onSubmit={handleSubmit}>
          <OtpContainer>
            {otp.map((digit, index) => (
              <OtpInput
                key={index}
                type="text"
                maxLength="1"
                value={digit}
                ref={(el) => (inputRefs.current[index] = el)}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
              />
            ))}
          </OtpContainer>

          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Verifying..." : "Verify"}
          </Button>
        </form>

        <ResendWrapper>
          {isResendActive ? (
            <ResendText onClick={handleResend}>Resend OTP</ResendText>
          ) : (
            <CountdownText>
              Resend OTP in <span>{timeLeft}</span>
            </CountdownText>
          )}
        </ResendWrapper>

        <BackText onClick={() => navigate("/admin/forgot-password")}>
          Back
        </BackText>
      </FormWrapper>
    </Container>
  );
};

export default AdminVerifyOTP;


const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
`;

const FormWrapper = styled.div`
  background: var(--Neutral_Offwhite);
  padding: 2.5rem;
  border-radius: 1rem;
  border: 1px solid #c0c0c0;
  width: 90%;
  max-width: 400px;
  text-align: center;

  h2 {
    margin-bottom: 1rem;
    color: #222;
  }

  .subtitle {
    font-size: 0.9rem;
    color: #666;
    margin-bottom: 1.5rem;
  }
`;

const OtpContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const OtpInput = styled.input`
  width: 2.8rem;
  height: 2.8rem;
  text-align: center;
  font-size: 1.3rem;
  border: 1px solid #c0c0c0;
  border-radius: 0.5rem;
  outline: none;
  background: white;
  transition: border 0.3s ease;

  &:focus {
    border: 1.5px solid var(--PrimaryBase);
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 0.9rem;
  background: var(--NeutralBlack);
  color: var(--PrimaryBase);
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    color: var(--NeutralBlack);
    background: var(--PrimaryBase);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const ResendWrapper = styled.div`
  margin-top: 1rem;
`;

const CountdownText = styled.p`
  font-size: 0.9rem;
  color: #666;

  span {
    color: var(--PrimaryBase);
    font-weight: 600;
  }
`;

const ResendText = styled.p`
  font-size: 0.9rem;
  color: var(--PrimaryBase);
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: var(--NeutralBlack);
    text-decoration: underline;
  }
`;

const BackText = styled.p`
  font-size: 0.9rem;
  color: var(--PrimaryBase);
  cursor: pointer;
  margin-top: 1rem;

  &:hover {
    color: var(--NeutralBlack);
    text-decoration: underline;
  }
`;
