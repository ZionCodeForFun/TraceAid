import React, { useEffect } from "react";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Flex } from "antd";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetStatus } from "../../global/authSlice";
import { Container } from "../../style/LoginStyle";
import logo2 from "../../assets/logo2.png";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import { setUser } from "../../global/authSlice";

const LoginForm = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const nav = useNavigate();
  // const { loading, error, message } = useSelector((state) => state.auth);
  const [loading, setLoading] = React.useState(false);

  const onFinish = async (values) => {
    // localStorage.setItem("userEmail", values.email);
    setLoading(true);
    try {
      const response = await axios.post(
        import.meta.env.VITE_BaseUrl + "/login",
        values
      );
      const data = response.data;
      toast.success("Login successful!");
      // dispatch(setUser(data));
      console.log(data);
      // nav("/");
    } catch (error) {
      setLoading(false);
      console.error("Login error:", error);
      toast.error(error.response?.data?.message || "Login failed.");
    }
  };
  // useEffect(() => {
  //   if (message) {
  //     toast.success(message);
  //     form.resetFields();
  //     dispatch(resetStatus());
  //     nav("/explore");
  //   }

  //   if (error) {
  //     toast.error(error);
  //     dispatch(resetStatus());
  //   }
  // }, [message, error]);

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
          <div className="forgotpassword">
            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
              style={{ margin: "0", height: "71px" }}
            >
              <Input
                type="password"
                placeholder="Enter your password"
                className="input"
              />
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
          </div>

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
            <div className="already">
              <p> Don’t have an account?</p>{" "}
              <Link to={"/role_modal"}>
                <span style={{ color: " #c1e86e", fontWeight: 700 }}>
                  Sign Up
                </span>
              </Link>
            </div>
          </footer>
        </div>
      </Form>
    </Container>
  );
};

export default LoginForm;
