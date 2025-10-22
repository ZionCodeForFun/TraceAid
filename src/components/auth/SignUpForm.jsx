import React, { useEffect, useState } from "react";
import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Radio } from "antd";
import { Container } from "../../style/SignUpFormStyle";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../../global/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import logo2 from "../../assets/logo2.png";
import { FcGoogle } from "react-icons/fc";
import { resetStatus } from "../../global/authSlice";
import { FiBriefcase } from "react-icons/fi";

const SignUpForm = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const nav = useNavigate();
  const { loading, error, message } = useSelector((state) => state.auth);
  const [form] = Form.useForm();

  const onFinish = (values) => {
    dispatch(signup(values));
  };

  useEffect(() => {
    if (message) {
      toast.success(message);
      form.resetFields();
      dispatch(resetStatus());
      nav("/Login");
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
        name="signup"
        onFinish={onFinish}
        className="wrapper"
        requiredMark={false}
        layout="vertical"

      >
        <img src={logo2} alt="logo" />
        <div className="content_holder">
          <div className="title">
            <h2>Sign Up Account</h2>
            <p>Enter your details or continue with your preferred option.</p>
          </div>

          <Form.Item
            name="accountType"
            rules={[
              { required: true, message: "Please select an account type!" },
            ]}
            style={{ marginBottom: "10px" }}
          >
            <Radio.Group
              className="radio_holder"
              onChange={(e) => setShow(e.target.value === "organization")}
            >
              <Radio className="radio" value="individual">
                Individual
              </Radio>
              <Radio className="radio" value="organization">
                Organization
              </Radio>
            </Radio.Group>
          </Form.Item>
          {show ? (
            <Form.Item
              label="Organization Name"
              name="organization"
              rules={[
                {
                  required: true,
                  message: "Please input your organization name!",
                },
              ]}
              style={{ marginBottom: "5px" }}
            >
              <Input
                prefix={<FiBriefcase style={{ color: "#979696" }} />}
                placeholder="Enter organization name"
                style={{ padding: "0 10px"}}
              />
            </Form.Item>
          ) : (
            <div style={{ display: "flex", gap: "10px" }}>
              <Form.Item
                label="First Name"
                name="firstName"
                rules={[
                  { required: true, message: "Please input your first name!" },
                ]}
                style={{ flex: 1, margin: "0" }}
              >
                <Input
                  prefix={<UserOutlined style={{ color: "#979696" }} />}
                  placeholder="First name"
                  style={{ padding: "0 10px" }}
                  className="c"
                />
              </Form.Item>

              <Form.Item
                label="Last Name"
                name="lastName"
                rules={[
                  { required: true, message: "Please input your last name!" },
                ]}
                style={{ flex: 1, margin: "0" }}
              >
                <Input
                  prefix={<UserOutlined style={{ color: "#979696" }} />}
                  placeholder="Last name"
                  style={{ padding: "0 10px" }}
                />
              </Form.Item>
            </div>
          )}
          <Form.Item
            label="Email"
            name="email"
            validateTrigger="onBlur"
            normalize={(value) => value?.trim()}
            rules={[
              { required: true, message: "Please input your email!" },
              { type: "email", message: "Please enter a valid email address!" },
            ]}
            style={{ margin: "0" }}
          >
            <Input
              prefix={<MailOutlined style={{ color: "#979696" }} />}
              placeholder="Email"
              style={{ padding: "0 10px" }}
            />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            hasFeedback
            rules={[
              { required: true, message: "Please input your password!" },
              {
                min: 8,
                message: "Password must be at least 8 characters long",
              },
            ]}
            style={{ margin: "0" }}
          >
            <Input.Password placeholder="Password" style={{ padding: "0 10px"}}/>
          </Form.Item>

          <Form.Item
            label="Confirm Password"
            name="confirmPassword"
            dependencies={["password"]}
            hasFeedback
            rules={[
              { required: true, message: "Please confirm your password!" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("Passwords do not match!"));
                },
              }),
            ]}
            style={{ margin: "0" }}
          >
            <Input.Password placeholder="Confirm Password"
              style={{ padding: "0 10px" }} />
          </Form.Item>

          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(
                        new Error("You must agree to the terms and conditions")
                      ),
              },
            ]}
            style={{ margin: "2px" }}
          >
            <Checkbox className="custom-checkbox">
              I agree to the <a href="/terms">terms and conditions</a>
            </Checkbox>
          </Form.Item>

          <Form.Item style={{ margin: "0" }}>
            <Button
              className="signup_btn"
              block
              type="primary"
              htmlType="submit"
              loading={loading}
            
            >
              Sign Up
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
          className="already"
        >
          <h5>Already have an account?</h5>
          <Link to={"/login"}>
            <span style={{ color: " #c1e86e", fontWeight: 700 }}>Log In</span>
          </Link>
        </div>
      </Form>
    </Container>
  );
};

export default SignUpForm;
