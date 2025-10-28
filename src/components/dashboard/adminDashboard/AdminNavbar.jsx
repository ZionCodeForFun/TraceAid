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
  { name: "Dashboard", icon: <MdDashboard />, path: "/DashboardManagement" },
  { name: "Users", icon: <FaUsers />, path: "/adminDashboard/users" },
  {
    name: "Verification",
    icon: <MdVerifiedUser />,
    path: "/adminDashboard/verification",
  },
  {
    name: "Campaigns",
    icon: <MdCampaign />,
    path: "/adminDashboard/campaigns",
  },
  { name: "Reports", icon: <FaFileAlt />, path: "/adminDashboard/reports" },
  { name: "KYC", icon: <FaIdCard />, path: "/adminDashboard/kyc" },
  { name: "Settings", icon: <MdSettings />, path: "/adminDashboard/settings" },
  {
    name: "Notifications",
    icon: <MdNotifications />,
    path: "/adminDashboard/notifications",
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
                <span className="icon">{item.icon}</span>
                <span className="text">{item.name}</span>
              </NavItem>
            </StyledLink>
          );
        })}
      </NavbarContainer>
    </NavbarWrapper>
  );
};

export default AdminNavbar;
