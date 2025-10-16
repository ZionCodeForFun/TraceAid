import React from "react";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Flex } from "antd";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../global/authSlice";
const LoginForm = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  const onFinish = async (values) => {
    const result = await dispatch(login(values));
    if (login.fulfilled.match(result)) {
      toast.success(result.payload.message);
      nav("/login");
    } else if (login.rejected.match(result)) {
      toast.error(result.payload.message);
    }
    console.log("Received values of form: ", values);
  };

  const navigate = useNavigate();
  return (
    <Form
      name="login"
      initialValues={{ remember: true }}
      style={{ maxWidth: 360 }}
      onFinish={onFinish}
    >
      <Form.Item
        name="email"
        rules={[
          { required: true, message: "Please input your Email!" },
          { type: "email", message: "Please enter a valid email address!" },
        ]}
      >
        <Input prefix={<MailOutlined />} placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your Password!" }]}
      >
        <Input
          prefix={<LockOutlined />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Flex justify="space-between" align="center">
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <a onClick={() => navigate("/ForgotPassword")}>Forgot password</a>
        </Flex>
      </Form.Item>

      <Form.Item>
        <Button block type="primary" htmlType="submit">
          Log in
        </Button>
        or <Link to={"/SignUp"}>Sign up!</Link>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
