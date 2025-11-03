import React, { useEffect, useState } from "react";
import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Radio } from "antd";
import { Container } from "../../style/SignUpFormStyle";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import logo2 from "../../assets/logo2.png";
import { FcGoogle } from "react-icons/fc";
import { FiBriefcase } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";
import axios from "axios";
import { setRole, setUser } from "../../global/authSlice";

const SignUpForm = () => {
  const dispatch = useDispatch();
  const accountType = useSelector((state) => state.accountType.type);
  const nav = useNavigate();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  console.log("account type", accountType);

  const onFinish = async (values) => {
    try {
      setLoading(true);
      const res = await axios.post(
        `${
          accountType === "organization"
            ? import.meta.env.VITE_BaseUrl2
            : import.meta.env.VITE_BaseUrl
        }/register`,
        values
      );
      toast.success(res?.data?.message || "Registration successful");
      form.resetFields();
      console.log(res?.data?.data?.user);
      dispatch(setUser(res?.data?.data?.user));
      dispatch(setRole(res?.data?.data?.user?.role || res?.data?.data?.role));
      nav(`/verify/${res?.data?.data?.user?.email || res?.data?.data?.email}`);
    } catch (err) {
      console.log(err);
      toast.error(err?.response?.data?.data?.message || "Registration failed");
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Form
        form={form}
        name="signup"
        onFinish={onFinish}
        className="wrapper"
        requiredMark={false}
        layout="vertical"
        labelCol={{
          style: { marginTop: "5px", padding: "0", color: "#333" },
        }}
      >
        <div className="img_holder">
          <img src={logo2} alt="logo" />
        </div>
        <div className="content_holder">
          <div className="title">
            <p className="sign">Sign Up Account</p>
            <p className="text">
              Enter your details or continue with your preferred option.
            </p>
          </div>

          {accountType === "organization" ? (
            <Form.Item
              label="Organization Name"
              name="organizationName"
              rules={[
                {
                  required: true,
                  message: "Please input your organization name!",
                },
              ]}
              style={{ margin: "0", height: "71px" }}
            >
              <Input
                prefix={<FiBriefcase style={{ fontSize: "15px" }} />}
                placeholder="Enter organization name"
                className="input"
              />
            </Form.Item>
          ) : (
            <div
              style={{
                display: "flex",
                gap: "20px",
                height: "71px",
              }}
            >
              <Form.Item
                label="First Name"
                name="firstName"
                rules={[
                  { required: true, message: "Please input your first name!" },
                ]}
                style={{ flex: 1, margin: "0" }}
              >
                <Input
                  prefix={<UserOutlined style={{ fontSize: "15px" }} />}
                  placeholder="John"
                  className="input"
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
                  prefix={<UserOutlined style={{ fontSize: "15px" }} />}
                  placeholder="Doe"
                  className="input"
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
            style={{ margin: "0", height: "71px" }}
          >
            <Input
              prefix={<MailOutlined style={{ fontSize: "15px" }} />}
              placeholder="example@gmail.com"
              className="input"
            />
          </Form.Item>
          <Form.Item
            label="Phone Number"
            name="phoneNumber"
            validateTrigger="onBlur"
            normalize={(value) => value?.trim()}
            rules={[
              { required: true, message: "Please input your Phone number!" },
              { type: " number", message: "Please input  Number!" },
            ]}
            style={{ margin: "0", height: "71px" }}
          >
            <Input
              prefix={<BsTelephone style={{ fontSize: "15px" }} />}
              placeholder="+234 701 987 6543"
              className="input"
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
            style={{ margin: "0", height: "71px" }}
          >
            <Input.Password
              placeholder="Enter your password"
              className="input"
            />
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
            style={{ margin: "0", height: "71px" }}
          >
            <Input.Password
              placeholder="Re-enter your password"
              className="input"
            />
          </Form.Item>

          <Form.Item
            name="acceptedTerms"
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
          >
            <Checkbox className="custom-checkbox">
              I agree to the <Link to="/terms">terms and conditions</Link>
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
              {loading ? "Signing Up..." : "Sign Up"}
            </Button>
          </Form.Item>

          {accountType === "organization" ? null : (
            <div className="google_holder">
              <div className="line-text" plain>
                or
              </div>
              <p>Continue with</p>
              <Button block type="primary" className="google_btn">
                <FcGoogle style={{ fontSize: "20px" }} />
                Google
              </Button>
            </div>
          )}
          <div className="already">
            <p>Already have an account?</p>
            <Link to={"/login"}>
              <span style={{ color: "#c1e86e", fontWeight: 700 }}>Log In</span>
            </Link>
          </div>
        </div>
      </Form>
    </Container>
  );
};

export default SignUpForm;
