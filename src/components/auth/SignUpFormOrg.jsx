// import React, { useEffect } from "react";
// import { LockOutlined, MailOutlined } from "@ant-design/icons";
// import { Button, Checkbox, Form, Input, Radio } from "antd";
// import { Container } from "../../style/SignUpFormStyle";
// import { Link, useNavigate } from "react-router-dom";
// import { signup } from "../../global/authSlice";
// import { useDispatch, useSelector } from "react-redux";
// import { toast } from "react-toastify";
// import logo2 from "../../assets/logo2.png";
// import { FcGoogle } from "react-icons/fc";
// import { FiBriefcase } from "react-icons/fi";
// import { resetStatus } from "../../global/authSlice";
// const SignUpFormOrg = () => {
//   const dispatch = useDispatch();
//   const nav = useNavigate();
//   const { loading, error, message } = useSelector((state) => state.auth);
//   const [form] = Form.useForm();

//   const onFinish = (values) => {
//     dispatch(signup(values));
//   };

//   useEffect(() => {
//     if (message) {
//       toast.success(message);
//       form.resetFields();
//       dispatch(resetStatus());
//       nav("/Login");
//     }

//     if (error) {
//       toast.error(error);
//       dispatch(resetStatus());
//     }
//   }, [message, error]);

//   return (
//     <Container>
//       <Form
//         form={form}
//         name="signup"
//         onFinish={onFinish}
//         className="wrapper"
//         requiredMark={false}
//         layout="vertical"
//       >
//         <img src={logo2} alt="logo" />
//         <div className="content_holder2">
//           <div className="title">
//             <h2>Sign Up Account</h2>
//             <p>Enter your details or continue with your preferred option.</p>
//           </div>

//           <div>
//             <Button block type="primary" className="google_btn">
//               <FcGoogle />
//               Google
//             </Button>
//           </div>

//           <div className="line-text" plain>
//             or
//           </div>

//           <Form.Item
//             name="accountType"
//             rules={[
//               { required: true, message: "Please select an account type!" },
//             ]}
//           >
//             <Radio.Group
//               className="radio_holder"
//               onChange={(e) => {
//                 if (e.target.value === "individual") {
//                   nav("/individual");
//                 }
//               }}
//             >
//               <Radio className="radio" value="individual">
//                 Individual
//               </Radio>
//               <Radio className="radio" value="organization">
//                 Organization
//               </Radio>
//             </Radio.Group>
//           </Form.Item>

//           <Form.Item
//             label="Organization Name"
//             name="organization"
//             rules={[
//               {
//                 required: true,
//                 message: "Please input your organization name!",
//               },
//             ]}
//           >
//             <Input
//               prefix={<FiBriefcase style={{ color: "#979696" }} />}
//               placeholder="Enter organization name"
//             />
//           </Form.Item>

//           <Form.Item
//             label="Email"
//             name="email"
//             validateTrigger="onBlur"
//             normalize={(value) => value?.trim()}
//             rules={[
//               { required: true, message: "Please input your email!" },
//               { type: "email", message: "Please enter a valid email address!" },
//             ]}
//           >
//             <Input
//               prefix={<MailOutlined style={{ color: "#979696" }} />}
//               placeholder="Email"
//             />
//           </Form.Item>

//           <Form.Item
//             label="Password"
//             name="password"
//             hasFeedback
//             rules={[
//               { required: true, message: "Please input your password!" },
//               {
//                 min: 8,
//                 message: "Password must be at least 8 characters long",
//               },
//             ]}
//           >
//             <Input.Password placeholder="Password" />
//           </Form.Item>

//           <Form.Item
//             label="Confirm Password"
//             name="confirmPassword"
//             dependencies={["password"]}
//             hasFeedback
//             rules={[
//               { required: true, message: "Please confirm your password!" },
//               ({ getFieldValue }) => ({
//                 validator(_, value) {
//                   if (!value || getFieldValue("password") === value) {
//                     return Promise.resolve();
//                   }
//                   return Promise.reject(new Error("Passwords do not match!"));
//                 },
//               }),
//             ]}
//             style={{ marginBottom: "10px" }}
//           >
//             <Input.Password placeholder="Confirm Password" />
//           </Form.Item>

//           <Form.Item
//             name="agreement"
//             valuePropName="checked"
//             rules={[
//               {
//                 validator: (_, value) =>
//                   value
//                     ? Promise.resolve()
//                     : Promise.reject(
//                         new Error("You must agree to the terms and conditions")
//                       ),
//               },
//             ]}
//           >
//             <Checkbox className="custom-checkbox">
//               I agree to the <a href="/terms">terms and conditions</a>
//             </Checkbox>
//           </Form.Item>

//           <Form.Item>
//             <Button
//               className="signup_btn"
//               block
//               type="primary"
//               htmlType="submit"
//               loading={loading}
//             >
//               Sign Up
//             </Button>
//           </Form.Item>
//         </div>

//         <div
//           style={{
//             textAlign: "center",
//             display: "flex",
//             alignItems: "center",
//             gap: "10px",
//           }}
//         >
//           <h5>Already have an account?</h5>
//           <Link to={"/login"}>
//             <span style={{ color: " #c1e86e", fontWeight: 700 }}>Log In</span>
//           </Link>
//         </div>
//       </Form>
//     </Container>
//   );
// };

// export default SignUpFormOrg;
