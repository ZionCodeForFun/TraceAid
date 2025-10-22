import React from "react";
import { Form, Input, Button } from "antd";
import { MailOutlined } from "@ant-design/icons";
import { Container } from "../../style/ResetPasswordStyle";
import logo2 from "../../assets/logo2.png";
import { Link } from "react-router-dom";
const ForgotPassword = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Reset request:", values);
  };
  return (
    <Container>
      <Form
        form={form}
        onFinish={onFinish}

        className="wrapper"
      >
        <img src={logo2} alt="logo" />
        <div className="content_holder">
          <div className="title">
            <h2>Forgot Password?</h2>
            <p>Enter your email to reset your password</p>
          </div>
          <div className="input_holder">
            <p className="text">Email</p>
            <Form.Item
              name="email"
              rules={[
                { required: true, message: "Please input your email!" },
                {
                  type: "email",
                  message: "Please enter a valid email address!",
                },
              ]}
              className="input_wrapper"
            >
              <Input prefix={<MailOutlined />} placeholder="Enter your email" />
            </Form.Item>

            <Form.Item   style={{ marginBottom: "5px" }}>
              <Button type="primary" htmlType="submit" block className="btn">
                Send Verification Code
              </Button>
            </Form.Item>
          </div>
        </div>
        <Link to={"/login"}><span  className="span">Go back</span></Link>
      </Form>
    </Container>
  );
};

export default ForgotPassword;
