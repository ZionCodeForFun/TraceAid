import React, { useState } from "react";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Form, Input, Flex, Checkbox } from "antd";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";
import { Container } from "../../style/LoginStyle";
import logo2 from "../../assets/logo2.png";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import { setUser, setToken } from "../../global/authSlice";
import { useDispatch } from "react-redux";

const LoginForm = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const nav = useNavigate();
  const [loading, setLoading] = useState(false);
  const [isOrganization, setIsOrganization] = useState(false);

  const onFinish = async (values) => {
    try {
      setLoading(true);

      const baseUrl = isOrganization
        ? import.meta.env.VITE_BaseUrl2
        : import.meta.env.VITE_BaseUrl;

      const response = await axios.post(`${baseUrl}/login`, values);
      const data = response?.data?.data?.login;

      if (!data) {
        toast.error("Invalid response from server.");
        return;
      }

      // const token = data?.token;
      // if (token) {
      //   localStorage.setItem("token", token);
      //   dispatch(setToken({ token: token }));
      // }

      dispatch(setUser(data));

      toast.success("Login successful!");

      const role = data?.role?.toLowerCase();
      if (role === "fundraiser" || role === "organization") {
        nav("/");
      } else if (role === "donor") {
        nav("/");
      }
    } catch (err) {
      console.error("Login error:", err);
      toast.error(err?.response?.data?.message || "Login failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Form
        form={form}
        name="login"
        className="wrapper"
        onFinish={onFinish}
        layout="vertical"
        requiredMark={false}
      >
        <div className="img_holder">
          <img src={logo2} alt="logo" />
        </div>

        <div className="content_holder">
          <div className="title">
            <p className="log">Log in</p>
            <p className="text">Securely log in to your account.</p>
          </div>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please input your Email!" },
              { type: "email", message: "Please enter a valid email address!" },
            ]}
            style={{ margin: "0", height: "71px" }}
          >
            <Input
              prefix={<MailOutlined style={{ fontSize: "15px" }} />}
              placeholder="example@gmail.com"
              className="input"
            />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
            style={{ margin: "0", height: "71px" }}
          >
            <Input.Password
              prefix={<LockOutlined style={{ fontSize: "15px" }} />}
              placeholder="Enter your password"
              className="input"
            />
          </Form.Item>

          <Form.Item>
            <Checkbox
              checked={isOrganization}
              onChange={(e) => setIsOrganization(e.target.checked)}
            >
              Login as Organization
            </Checkbox>
          </Form.Item>

          <Form.Item>
            <Flex justify="space-between" align="center" color="#333333">
              <a
                onClick={() => nav("/ForgotPassword")}
                style={{ color: "#333333" }}
              >
                Forgot password
              </a>
            </Flex>
          </Form.Item>

          <Form.Item style={{ marginBottom: "5px" }}>
            <Button
              block
              type="primary"
              htmlType="submit"
              className="login_btn"
              loading={loading}
            >
              {loading ? "Logging in..." : "Log in"}
            </Button>
          </Form.Item>

          {!isOrganization && (
            <footer className="footer">
              <div className="line-text" plain>
                or
              </div>
              <p>Continue with</p>
              <div>
                <Button block type="primary" className="google_btn">
                  <FcGoogle style={{ fontSize: "20px" }} />
                  Google
                </Button>
              </div>
            </footer>
          )}

          <div className="already">
            <p>Don’t have an account?</p>{" "}
            <Link to={"/role_modal"}>
              <span style={{ color: "#c1e86e", fontWeight: 700 }}>Sign Up</span>
            </Link>
          </div>
        </div>
      </Form>
    </Container>
  );
};

export default LoginForm;
