import React from "react";
import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Flex } from "antd";
import { Container } from "../../style/SignUpFormStyle";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../../global/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const SignUpForm = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);
  console.log(signup);
  const onFinish = async (values) => {
    const result = await dispatch(signup(values));
    if (signup.fulfilled.match(result)) {
      toast.success(result.payload.message);
      nav("/login");
    } else if (signup.rejected.match(result)) {
      toast.error(result.payload.message);
    }
    console.log("Received values of form: ", signup);
  };

  const [form] = Form.useForm();

  return (
    <Container>
      <Form
        form={form}
        name="signup"
        initialValues={{ remember: true }}
        style={{ maxWidth: 360 }}
        onFinish={onFinish}
        className="wrapper"
      >
        <Form.Item
          name="fullname"
          rules={[{ required: true, message: "Please input your full name!" }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Full name" />
        </Form.Item>

        <Form.Item
          name="email"
          normalize={(value) => value?.trim()}
          rules={[
            { required: true, message: "Please input your email!" },
            { type: "email", message: "Please enter a valid email address!" },
          ]}
        >
          <Input prefix={<MailOutlined />} placeholder="Email" />
        </Form.Item>

        <Form.Item
          name="password"
          normalize={(value) => value?.trim()}
          rules={[
            { required: true, message: "Please input your password!" },
            { min: 6, message: "Password must be at least 6 characters long" },
          ]}
          hasFeedback
        >
          <Input.Password prefix={<LockOutlined />} placeholder="Password" />
        </Form.Item>

        <Form.Item
          name="confirmPassword"
          normalize={(value) => value?.trim()}
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
        >
          <Input.Password
            prefix={<LockOutlined />}
            placeholder="Confirm Password"
          />
        </Form.Item>

        <Form.Item>
          <Button block type="primary" htmlType="submit">
            Sign Up
          </Button>
          or <Link to={"/LoginForm"}>Login now!</Link>
        </Form.Item>
      </Form>
    </Container>
  );
};

export default SignUpForm;
