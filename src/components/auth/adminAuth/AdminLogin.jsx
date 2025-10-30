import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { toast } from "react-toastify";
// import { setAuthenticated, setUser } from "../../global/authSlice";

const AdminLogin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (
        formData.email === "admin@example.com" &&
        formData.password === "admin123"
      ) {
        const adminData = {
          id: 1,
          name: "Super Admin",
          email: formData.email,
          role: "admin",
          token: "admin_token_123",
        };

        dispatch(setAuthenticated(true));
        dispatch(setUser(adminData));

        toast.success("Welcome back, Admin!");
        navigate("/admin/dashboard");
      } else {
        toast.error("Invalid admin credentials");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <FormWrapper>
        <h2>Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <Input
            type="email"
            name="email"
            placeholder="Admin Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <ForgotText onClick={() => navigate("/admin_Forgot_Password")}>
            Forgot Password?
          </ForgotText>
          <Button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </Button>
        </form>
      </FormWrapper>
    </Container>
  );
};

export default AdminLogin;

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
    margin-bottom: 1.5rem;
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

const ForgotText = styled.p`
  text-align: right;
  font-size: 0.9rem;
  color: var(--PrimaryBase);
  cursor: pointer;
  margin-top: -0.5rem;
  margin-bottom: 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: var(--NeutralBlack);
    text-decoration: underline;
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
