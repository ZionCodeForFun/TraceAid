import React, { use } from "react";
import { Form, Input, Button, message } from "antd";
import { Container } from "../../style/ResetPasswordStyle";
import logo2 from "../../assets/logo2.png";
import axios from "axios";
import { useParams } from "react-router-dom";
const ResetPassword = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = React.useState(false);
  const { token, id } = useParams();

  const role = "donor";

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const response = await axios.post(
       `${
          role === "organization"
            ? import.meta.env.VITE_BaseUrl2
            : import.meta.env.VITE_BaseUrl
        }/reset-password/${token}/${id}`,
        values
      );
      message.success("Password has been reset successfully!");
      nav("/login");
    } catch (error) {
      setLoading(false);
      console.error("Error resetting password:", error);
      message.error(
        error.response?.data?.message || "Failed to reset password."
      );
    }
  };
  return (
    <Container>
      <Form form={form} name="reset" onFinish={onFinish} className="wrapper">
        <img src={logo2} alt="logo" />
        <div className="content_holder">
          <div className="title">
            <p className="sign">Reset Password</p>
            <p className="text">Enter your new password</p>
          </div>
          <div className="input_holder">
            <p className="text">Enter you New Password</p>
            <Form.Item
              name="password"
              normalize={(value) => value?.trim()}
              rules={[
                { required: true, message: "Please input your new password!" },
                {
                  min: 8,
                  message: "must be at least 8 characters",
                },
              ]}
              hasFeedback
            >
              <Input.Password
                placeholder="Enter your password"
                className="input"
              />
            </Form.Item>
            <p className="text">Confirm New Password</p>

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
                placeholder="Re-enter your password"
                className="input"
              />
            </Form.Item>

            <Form.Item>
              <Button block type="primary" htmlType="submit" className="btn">
                Create New Password{" "}
              </Button>
            </Form.Item>
          </div>
        </div>
      </Form>
    </Container>
  );
};

export default ResetPassword;
