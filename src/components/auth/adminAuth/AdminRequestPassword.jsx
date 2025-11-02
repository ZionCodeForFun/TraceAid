import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { useParams } from "react-router-dom";
const ResetPassword = () => {
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { token, id } = useParams();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { newPassword, confirmPassword } = formData;

    if (!newPassword || !confirmPassword) {
      toast.error("Please fill in all fields");
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      const res = await axios.put(
        `${
          import.meta.env.VITE_BaseUrl_Admin
        }/admin-reset-password/${token}/${id}`,
        formData
      );
      console.log(res.data?.data?.message);
      toast.success(res.data?.message);
      navigate("/admin_login");
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <FormWrapper>
        <h2>Reset Password</h2>
        <p className="subtitle">
          Enter your new password below to complete the reset process.
        </p>

        <form onSubmit={handleSubmit}>
          <Input
            type="password"
            name="newPassword"
            placeholder="New Password"
            value={formData.newPassword}
            onChange={handleChange}
            required
          />
          <Input
            type="password"
            name="confirmPassword"
            placeholder="Confirm New Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          <Button type="submit" disabled={loading}>
            {loading ? "Resetting..." : "Reset Password"}
          </Button>
        </form>

        <BackText onClick={() => navigate("/admin_login")}>
          Back to Login
        </BackText>
      </FormWrapper>
    </Container>
  );
};

export default ResetPassword;

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

const Input = styled.input`
  width: 100%;
  padding: 0.9rem;
  margin-bottom: 1rem;
  border: 1px solid #c0c0c0;
  border-radius: 0.5rem;
  font-size: 1rem;
  outline: none;
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
  margin-bottom: 1rem;

  &:hover {
    color: var(--NeutralBlack);
    background: var(--PrimaryBase);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const BackText = styled.p`
  font-size: 0.9rem;
  color: var(--PrimaryBase);
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: var(--NeutralBlack);
    text-decoration: underline;
  }
`;
