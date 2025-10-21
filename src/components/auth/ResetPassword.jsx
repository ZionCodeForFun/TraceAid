import React from "react";
import { Form, Input, Button, message } from "antd";
import { LockOutlined } from "@ant-design/icons";
import { Container } from "../../style/ResetPasswordStyle";
import logo2 from "../../assets/logo2.png";
const ResetPassword = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("New password:", values.password);
    message.success("Password reset successful!");
    form.resetFields();
  };
  return (
    <Container>
      <Form form={form} name="reset" onFinish={onFinish} className="wrapper">
        <img src={logo2} alt="logo" />
        <div className="content_holder2">
          <div className="title">
            <h2>Reset Password</h2>
            <p>Enter your new password</p>
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
              <Input.Password placeholder="Enter your password" />
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
              <Input.Password placeholder="Re-enter your password" />
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
