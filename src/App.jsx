import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignUpForm from "./components/auth/SignUpForm";
import ResetPassword from "./components/auth/ResetPassword";
import ForgotPassword from "./components/auth/ForgotPassword";
import RouterError from "./components/common/RouterError";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginForm from "./components/auth/LoginForm";


const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/*" element={<RouterError />} />
        <Route path="/landingPage" element={<LandingPage />} />
        <Route path="/" element={<SignUpForm />} />
        <Route path="/Login" element={<LoginForm />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
      </Routes>
      <ToastContainer position="top-center" autoClose={2000} />
    </HashRouter>
  );
};

export default App;
