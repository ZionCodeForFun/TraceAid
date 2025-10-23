import React, { useEffect } from "react";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Flex } from "antd";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../global/authSlice";
import { Container } from "../../style/LoginStyle";
import logo2 from "../../assets/logo2.png";
import { FcGoogle } from "react-icons/fc";
 
const LoginForm = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const nav = useNavigate();
  const { loading, error, message } = useSelector((state) => state.auth);

  const onFinish = async (values) => {
    dispatch(login(values));

    console.log("Received values of form: ", values);
  };
  useEffect(() => {
    if (message) {
      toast.success(message);
      form.resetFields();
      dispatch(resetStatus());
      nav("/login");
    }

    if (error) {
      toast.error(error);
      dispatch(resetStatus());
    }
  }, [message, error]);

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
        <img src={logo2} alt="logo" />
        <div className="content_holder2">
          <div className="title">
            <h2>Log in</h2>
            <p>Securely log in to your account.</p>
          </div>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please input your Email!" },
              { type: "email", message: "Please enter a valid email address!" },
            ]}
            style={{ marginBottom: "5px" }}
          >
            <Input
              prefix={<MailOutlined style={{ color: "#979696" }} />}
              placeholder="Email"
            />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
            style={{ marginBottom: "2px" }}
          >
            <Input type="password" placeholder="Password" />
          </Form.Item>
          <Form.Item style={{ marginBottom: "5px" }}>
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
            >
              Log in
            </Button>
          </Form.Item>
          <div className="line-text" plain>
            or
          </div>
          <div>
            <Button block type="primary" className="google_btn">
              <FcGoogle />
              Google
            </Button>
          </div>
        </div>
        <div
          style={{
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            margin: "10px",
          }}
        >
          <h5> Don’t have an account?</h5>{" "}
          <Link to={"/"}>
            <span style={{ color: " #c1e86e", fontWeight: 700 }}>Sign Up</span>
          </Link>
        </div>
      </Form>
    </Container>
  );
};

export default LoginForm;
