import React, { useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
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
import MyDonations from "./pages/MyDonations";
import SavedCampaign from "./pages/SavedCampaign";
import CampaignDetails4org_pending from "./components/dashboard/organizerPage/myCampaignFiles/CampaignDetails4org_pending";
import CampaignDetails4org_completed from "./components/dashboard/organizerPage/myCampaignFiles/CampaignDetails4org_completed";
const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/*" element={<RouterError />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/createcampaign" element={<CreateCampaign />} />
        <Route path="/organization_dashboard" element={<OrganizerDashboard />}>
          <Route path="" element={<OverViewPage />} />
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
            <Route path="" element={<PersonalInfo />} />
            <Route path="kycverify" element={<KycVerify />} />
            <Route path="Security" element={<Security />} />
            <Route path="PayoutDetails" element={<PayoutDetails />} />
            <Route path="Notification" element={<Notification />} />
          </Route>
        </Route>

        <Route path="/login" element={<LoginForm />} />
        <Route path="/verify/:email" element={<VerifyOtp />} />
        <Route path="/how_it_works" element={<HowItWorks />} />
        <Route path="/explore" element={<ExploreCampaign />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/campaigndetails" element={<CampaignDetails />} />
        <Route path="/role_modal" element={<RoleModal />} />
        <Route path="/campaign_details" element={<CampaignDetails />} />
        <Route path="/my_donations" element={<MyDonations />} />
        <Route path="/saved_campaigns" element={<SavedCampaign />} />

        <Route path="/signup" element={<SignUpForm />} />

        <Route path="/ResetPassword/:token/:id" element={<ResetPassword />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
      </Routes>
      <ToastContainer position="top-center" autoClose={2000} />
    </HashRouter>
  );
};

export default App;
