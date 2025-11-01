import React from "react";
import {
  NavbarWrapper,
  NavbarContainer,
  StyledLink,
  NavItem,
} from "../../../style/AdminNavbarStyle";
import {
  MdDashboard,
  MdVerifiedUser,
  MdCampaign,
  MdSettings,
  MdNotifications,
} from "react-icons/md";
import { FaUsers, FaFileAlt, FaIdCard } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const menuItems = [
  { name: "Dashboard", icon: <MdDashboard />, path: "" },
  { name: "Users", icon: <FaUsers />, path: "users" },
  {
    name: "Verification",
    icon: <MdVerifiedUser />,
    path: "verification",
  },
  {
    name: "Campaigns",
    icon: <MdCampaign />,
    path: "campaigns",
  },
  { name: "Reports", icon: <FaFileAlt />, path: "/adminDashboard/reports" },
  { name: "KYC", icon: <FaIdCard />, path: "/adminDashboard/kyc" },
  { name: "Settings", icon: <MdSettings />, path: "/adminDashboard/settings" },
  {
    name: "Notifications",
    icon: <MdNotifications />,
    path: "notifications",
  },
];

const AdminNavbar = () => {
  const location = useLocation();

  return (
    <NavbarWrapper>
      <NavbarContainer>
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <StyledLink to={item.path} key={item.name}>
              <NavItem $active={isActive}>
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </NavItem>
            </StyledLink>
          );
        })}
      </NavbarContainer>
    </NavbarWrapper>
  );
};

export default AdminNavbar;
