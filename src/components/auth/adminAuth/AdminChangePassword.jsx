import React, { useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminChangePassword = () => {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { currentPassword, newPassword, confirmPassword } = formData;

    if (!currentPassword || !newPassword || !confirmPassword) {
      toast.error("Please fill in all fields");
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error("New passwords do not match");
      return;
    }

    setLoading(true);
    try {
  

      const res = await axios.put(
        `${import.meta.env.VITE_BaseUrl_Admin}/admin-change-password`,
        { currentPassword, newPassword },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success(res.data?.message);
      navigate("/admin_dashboard"); 
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <FormWrapper>
        <h2>Change Password</h2>
        <form onSubmit={handleSubmit}>
          <Input
            type="password"
            name="currentPassword"
            placeholder="Current Password"
            value={formData.currentPassword}
            onChange={handleChange}
            required
          />
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
            {loading ? "Updating..." : "Update Password"}
          </Button>
        </form>
      </FormWrapper>
    </Container>
  );
};

export default AdminChangePassword;


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

  &:hover {
    color: var(--NeutralBlack);
    background: var(--PrimaryBase);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;
