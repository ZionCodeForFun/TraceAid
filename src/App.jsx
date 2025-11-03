import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignUpForm from "./components/auth/SignUpForm";
import ResetPassword from "./components/auth/ResetPassword";
import ForgotPassword from "./components/auth/ForgotPassword";
import RouterError from "./components/common/RouterError";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginForm from "./components/auth/LoginForm";
import VerifyOtp from "./components/auth/VerifyOtp";
import HowItWorks from "./pages/HowItWorks";
import ExploreCampaign from "./pages/ExploreCampaign";
import AboutPage from "./pages/AboutPage";
import CampaignDetails from "./pages/CampaignDetails";
import OrganizerDashboard from "./components/dashboard/organizerPage/OrganizerDashboard";
import OverViewPage from "./components/dashboard/organizerPage/OverViewPage";
import MyCampaigns from "./components/dashboard/organizerPage/myCampaignFiles/MyCampaigns";
import Wallet from "./components/dashboard/organizerPage/walletFiles/Wallet";
import Settings from "./components/dashboard/organizerPage/Setting/Settings";
import PersonalInfo from "./components/dashboard/organizerPage/Setting/PersonalInfo";
import KycVerify from "./components/dashboard/organizerPage/Setting/KycVerify";
import Security from "./components/dashboard/organizerPage/Setting/Security";
import PayoutDetails from "./components/dashboard/organizerPage/Setting/PayoutDetails";
import Notification from "./components/dashboard/organizerPage/Setting/Notification";
import RequestWithraw from "./components/dashboard/organizerPage/walletFiles/RequestWithraw";
import CreateCampaign from "./components/dashboard/organizerPage/myCampaignFiles/CreateCampaign";
import CampaignDetails4org_ongoing from "./components/dashboard/organizerPage/myCampaignFiles/CampaignDetails4org_ongoing";
import RoleModal from "./components/auth/RoleModal";
import CampaignDetails4org_pending from "./components/dashboard/organizerPage/myCampaignFiles/CampaignDetails4org_pending";
import CampaignDetails4org_completed from "./components/dashboard/organizerPage/myCampaignFiles/CampaignDetails4org_completed";
import TermsAndConditions from "./components/common/Terms&Con";
import KycVerification1 from "./components/auth/KycVerification1";
import KycVerification2 from "./components/auth/KycVerification2";
import AdminLogin from "./components/auth/adminAuth/AdminLogin";
import AdminRegister from "./components/auth/adminAuth/AdminRegister";
import AdminForgotPassword from "./components/auth/adminAuth/AdminForgotPassword";
import AdminRequestPassword from "./components/auth/adminAuth/AdminRequestPassword";
import AdminVerifyOTP from "./components/auth/AdminVerifyOtp";
import MyDonations from "./pages/MyDonations";
import SavedCampaign from "./pages/SavedCampaign";

import AdminDashboard from "./components/dashboard/adminDashboard/Admin";
import DashboardManagement from "./components/dashboard/adminDashboard/DashboardManagement";
import AdminUsers from "./components/dashboard/adminDashboard/AdminUsers";

import AdminVerification from "./components/dashboard/adminDashboard/AdminVerication";

const App = () => (
  <BrowserRouter>
    <Routes>
     
      <Route path="/" element={<LandingPage />} />
      <Route path="/termsandcon" element={<TermsAndConditions />} />
      <Route path="/createcampaign" element={<CreateCampaign />} />

      <Route path="/organization" element={<OrganizerDashboard />}>
        <Route index element={<OverViewPage />} />
        <Route path="myCampaigns" element={<MyCampaigns />}>
          <Route
            path="camp_details_ongoing"
            element={<CampaignDetails4org_ongoing />}
          />
          <Route
            path="camp_details_pending"
            element={<CampaignDetails4org_pending />}
          />
          <Route
            path="camp_details_completed"
            element={<CampaignDetails4org_completed />}
          />
        </Route>

        <Route path="wallet" element={<Wallet />}>
          <Route path="requestwithdraw" element={<RequestWithraw />} />
        </Route>

        <Route path="settings" element={<Settings />}>
          <Route index element={<PersonalInfo />} />
          <Route path="kycverify" element={<KycVerify />} />
          <Route path="security" element={<Security />} />
          <Route path="payoutdetails" element={<PayoutDetails />} />
          <Route path="notification" element={<Notification />} />
        </Route>
      </Route>

      <Route path="/login" element={<LoginForm />} />
      <Route path="/verify_kyc1" element={<KycVerification1 />} />
      <Route path="/verify_kyc2" element={<KycVerification2 />} />
      <Route path="/verify/:email" element={<VerifyOtp />} />
      <Route path="/signup" element={<SignUpForm />} />

      <Route path="/how_it_works" element={<HowItWorks />} />
      <Route path="/explore" element={<ExploreCampaign />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/campaign_details" element={<CampaignDetails />} />
      <Route path="/role_modal" element={<RoleModal />} />
      <Route path="/my_donations" element={<MyDonations />} />
      <Route path="/saved_campaigns" element={<SavedCampaign />} />

      <Route path="/reset-password/:token/:id" element={<ResetPassword />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />

      {/* ADMIN ROUTES AND PAGES BELOW, DON'T ADD ROUTES THATS NOT ADMIN'S */}
      <Route path="/admin_register" element={<AdminRegister />} />
      <Route path="/admin_verify_otp" element={<AdminVerifyOTP />} />
      <Route path="/d" element={<AdminLogin />} />
      <Route path="/admin-forgot-password" element={<AdminForgotPassword />} />
      <Route
        path="/admin-request-password/:token/:id"
        element={<AdminRequestPassword />}
      />

      <Route path="/admin" element={<AdminDashboard />}>
        <Route path="" element={<DashboardManagement />} />
        <Route path="users" element={<AdminUsers />} />
        <Route path="verification" element={<AdminVerification />} />
      </Route>
      {/* ADD ADMINS ROUTES BEWTWEEN, NO OTHER ROUTES FOR CLARIITY */}

      <Route path="*" element={<RouterError />} />
    </Routes>

    <ToastContainer position="top-center" autoClose={2000} />
  </BrowserRouter>
);

export default App;
