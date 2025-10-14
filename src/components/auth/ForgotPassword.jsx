import React from "react";
import { Form, Input, Button } from "antd";
import { MailOutlined } from "@ant-design/icons";
import { Container } from "../../style/ResetPasswordStyle";
const ForgotPassword = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Reset request:", values);
  };
  return (
    <Container>
      <Form form={form} onFinish={onFinish} style={{ maxWidth: 360 }}>
        <Form.Item
          name="email"
          rules={[
            { required: true, message: "Please input your email!" },
            { type: "email", message: "Please enter a valid email address!" },
          ]}
        >
          <Input prefix={<MailOutlined />} placeholder="Enter your email" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Send Reset Link
          </Button>
        </Form.Item>
      </Form>
    </Container>
  );
};

export default ForgotPassword;
