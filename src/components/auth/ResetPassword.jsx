import React from "react";
import { Form, Input, Button, message } from "antd";
import { LockOutlined } from "@ant-design/icons";
import { Container } from "../../style/ResetPasswordStyle";
const ResetPassword = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("New password:", values.password);
    message.success("Password reset successful!");
    form.resetFields();
  };
  return (
    <Container>
      <Form form={form} name="reset" onFinish={onFinish}>
        <Form.Item
          name="password"
          normalize={(value) => value?.trim()}
          rules={[
            { required: true, message: "Please input your new password!" },
            { min: 6, message: "Password must be at least 6 characters long" },
          ]}
          hasFeedback
        >
          <Input.Password
            prefix={<LockOutlined />}
            placeholder="New password"
          />
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
            placeholder="Confirm new password"
          />
        </Form.Item>

        <Form.Item>
          <Button block type="primary" htmlType="submit">
            Reset Password
          </Button>
        </Form.Item>
      </Form>
    </Container>
  );
};

export default ResetPassword;
