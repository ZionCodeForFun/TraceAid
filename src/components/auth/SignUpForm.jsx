import React, { useState } from "react";
import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
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
import Joi from "joi-browser";

const SignUpForm = () => {
  const dispatch = useDispatch();
  const accountType = useSelector((state) => state.accountType.type);
  const nav = useNavigate();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(false);

  const getSchema = () => {
    if (accountType === "organization") {
      return Joi.object({
        organizationName: Joi.string()
          .min(3)
          .max(100)
 .regex(/^[A-Za-z\s]+$/)           .required(),
        email: Joi.string().email({ tlds: { allow: false } }).required(),
        phoneNumber: Joi.string().regex(/^[0-9]{11}$/).required(),
        password: Joi.string()
          .regex(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&-])[A-Za-z\d@$!%*#?&-]{8,}$/
          )
          .required(),
        confirmPassword: Joi.any().valid(Joi.ref("password")).required(),
        acceptedTerms: Joi.boolean().valid(true).required(),
      });
    } else {
      return Joi.object({
        firstName: Joi.string()
          .min(2)
          .regex(/^[A-Za-z\s]+$/)
          .required(),
        lastName: Joi.string()
          .min(2)
          .regex(/^[A-Za-z\s]+$/)
          .required(),
        email: Joi.string().email({ tlds: { allow: false } }).required(),
        phoneNumber: Joi.string().regex(/^[0-9]{11}$/).required(),
        password: Joi.string()
          .regex(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&-])[A-Za-z\d@$!%*#?&-]{8,}$/
          )
          .required(),
        confirmPassword: Joi.any().valid(Joi.ref("password")).required(),
        acceptedTerms: Joi.boolean().valid(true).required(),
      });
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    const passwordSchema = Joi.string()
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&-])[A-Za-z\d@$!%*#?&-]{8,}$/
      )
      .required();
    const { error } = passwordSchema.validate(value);
    setPasswordValid(!error);

    form.setFieldsValue({ password: value });

    const confirmValue = form.getFieldValue("confirmPassword");
    setConfirmPasswordValid(confirmValue && confirmValue === value);
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    const password = form.getFieldValue("password");
    setConfirmPasswordValid(password && value === password);
    form.setFieldsValue({ confirmPassword: value });
  };

  const onFinish = async (values) => {
    const schema = getSchema();
    const { error } = schema.validate(values, { abortEarly: false });
    if (error) {
      error.details.forEach((err) => {
        const field = err.path[0];
        let message = "";

        switch (field) {
          case "firstName":
            message =
              err.type === "string.min"
                ? "First name must be at least 2 characters"
                : "First name can only contain letters";
            break;
          case "lastName":
            message =
              err.type === "string.min"
                ? "Last name must be at least 2 characters"
                : "Last name can only contain letters";
            break;
          case "organizationName":
            message =
              err.type === "string.min"
                ? "Organization name must be at least 3 characters"
                : "Organization name can contain letters";
            break;
          case "email":
            message = "Please provide a valid email address";
            break;
          case "phoneNumber":
            message = "Phone number must be 11 digits";
            break;
          case "password":
            message =
              "Password must be at least 8 characters, with uppercase, lowercase, number, and special character";
            break;
          case "confirmPassword":
            message = "Passwords do not match";
            break;
          case "acceptedTerms":
            message = "You must agree to the terms and conditions";
            break;
          default:
            message = err.message;
        }

        toast.error(message);
      });
      return;
    }

    try {
      setLoading(true);
      const baseUrl =
        accountType === "organization"
          ? import.meta.env.VITE_BaseUrl2
          : import.meta.env.VITE_BaseUrl;

      const res = await axios.post(`${baseUrl}/register`, values);

      toast.success(res?.data?.message || "Registration successful");
      form.resetFields();
      setPasswordValid(false);
      setConfirmPasswordValid(false);
      dispatch(setUser(res?.data?.data?.user));
      dispatch(setRole(res?.data?.data?.user?.role || res?.data?.data?.role));
      nav(`/verify/${res?.data?.data?.user?.email || res?.data?.data?.email}`);
    } catch (err) {
      console.error(err);
      toast.error(err?.response?.data?.message || "Registration failed");
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
      >
        <div className="img_holder"
        onClick={() => nav("/")}
        style={{ cursor: "pointer" }}
        >
          <img src={logo2} alt="logo" />
        </div>

        <div className="content_holder">
          <div className="title">
            <p className="sign">Sign Up Account</p>
            <p className="text">Enter your details to continue</p>
          </div>

          {accountType === "organization" ? (
            <Form.Item
              label="Organization Name"
              name="organizationName"
              style={{ margin: "0", height: "71px" }}
            >
              <Input
                prefix={<FiBriefcase style={{ fontSize: "15px" }} />}
                placeholder="Enter organization name"
                className="input"
              />
            </Form.Item>
          ) : (
            <div style={{ display: "flex", gap: "20px", height: "71px" }}>
              <Form.Item
                label="First Name"
                name="firstName"
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
            style={{ margin: "0", height: "71px" }}
          >
            <Input
              prefix={<BsTelephone style={{ fontSize: "15px" }} />}
              placeholder="e.g. 08123456789"
              className="input"
            />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            hasFeedback
            validateStatus={passwordValid ? "success" : ""}
            style={{ margin: "0", height: "71px" }}
          >
            <Input.Password
              placeholder="Enter your password"
              className="input"
              onChange={handlePasswordChange}
            />
          </Form.Item>

          <Form.Item
            label="Confirm Password"
            name="confirmPassword"
            hasFeedback
            validateStatus={confirmPasswordValid ? "success" : ""}
            style={{ margin: "0", height: "71px" }}
          >
            <Input.Password
              placeholder="Re-enter your password"
              className="input"
              onChange={handleConfirmPasswordChange}
            />
          </Form.Item>

          <Form.Item name="acceptedTerms" valuePropName="checked">
            <Checkbox className="custom-checkbox">
              <div className="terms_holder">
                I agree to the{" "}
                <Link to="/termsandcon">
                  <p>terms and conditions</p>
                </Link>
              </div>
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
              {loading ? "Creating Account..." : "Create an Account"}
            </Button>
          </Form.Item>

          {accountType !== "organization" && (
            <div className="google_holder">
              <div className="line-text" plain>
                or
              </div>
              <p>Continue with</p>
              <Button block type="primary" className="google_btn">
                <FcGoogle style={{ fontSize: "20px" }} /> Google
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
