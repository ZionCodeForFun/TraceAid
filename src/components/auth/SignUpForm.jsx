import React, { use, useEffect } from "react";
import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Flex,
  message as antMessage,
} from "antd";
import { Container } from "../../style/SignUpFormStyle";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../../global/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const SignUpForm = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const { loading, error, message } = useSelector((state) => state.auth);

  const onFinish = (values) => {
    dispatch(signup(values));
  };
  useEffect(() => {
    if (message) {
      toast.success(message);
      form.resetFields();
      nav("/Login");
    }

    if (error) {
      toast.error(error);
    }
  }, [message, error]);
  const [form] = Form.useForm();

  return (
    <Container>
      <Form
        form={form}
        name="signup"
        style={{ maxWidth: 360 }}
        onFinish={onFinish}
        className="wrapper"
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your full name!" }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Full name" />
        </Form.Item>

        <Form.Item
          name="email"
          validateTrigger="onBlur"
          normalize={(value) => value?.trim()}
          rules={[
            { required: true, message: "Please input your email!" },
            { type: "Email", message: "Please enter a valid email address!" },
          ]}
        >
          <Input prefix={<MailOutlined />} placeholder="Email" />
        </Form.Item>

        <Form.Item
          shouldUpdate={(prev, curr) => prev.password !== curr.password}
          noStyle
        >
          {({ getFieldValue }) => {
            const value = getFieldValue("Password") || "";
            const isTouched = value.length > 0;
            const isValid = value.length >= 8;

            return (
              <Form.Item
                name="password"
                validateTrigger="onBlur"
                rules={[
                  {
                    validator: (_, value) => {
                      if (!value) {
                        return Promise.reject(
                          new Error("Please input your password!")
                        );
                      }
                      if (value.length < 8) {
                        return Promise.reject(
                          new Error(
                            "Password must be at least 8 characters long"
                          )
                        );
                      }
                      return Promise.resolve();
                    },
                  },
                ]}
                hasFeedback={isTouched && isValid}
                validateStatus={
                  isTouched ? (isValid ? "success" : "error") : undefined
                }
              >
                <Input.Password
                  prefix={<LockOutlined />}
                  placeholder="Password"
                />
              </Form.Item>
            );
          }}
        </Form.Item>

        <Form.Item
          name="confirmPassword"
          dependencies={["password"]}
          validateTrigger={["onBlur", "onChange"]}
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
          >
            <Checkbox>
              I agree to the <a href="/terms">terms and conditions</a>
            </Checkbox>
          </Form.Item>
          or <Link to={"/LoginForm"}>Login now!</Link>
        </Form.Item>
      </Form>
    </Container>
  );
};

export default SignUpForm;
