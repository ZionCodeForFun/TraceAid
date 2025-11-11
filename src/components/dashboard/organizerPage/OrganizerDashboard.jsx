import React from "react";
import { LuLayoutDashboard, LuWalletCards } from "react-icons/lu";
import { GoMegaphone } from "react-icons/go";
import { FiSettings } from "react-icons/fi";
import { MdLogout } from "react-icons/md";
import { Layout, Menu } from "antd";
import { Container } from "../../../style/OrganizerDashboardStyle";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../../global/authSlice";
import logo from "../../../assets/logo2.png";
import Header from "./Header";

const { Content, Sider } = Layout;

const OrganizerDashboard = () => {
  const nav = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    nav("/login");
  };

  const items = [
    {
      key: "1",
      icon: <LuLayoutDashboard style={{ fontSize: "20px" }} />,
      label: <Link to="">Overview</Link>,
      className: "menu",
    },
    {
      key: "2",
      icon: <GoMegaphone style={{ fontSize: "20px" }} />,
      label: <Link to="myCampaigns">My Campaigns</Link>,
      className: "menu",
    },
    {
      key: "3",
      icon: <LuWalletCards style={{ fontSize: "20px" }} />,
      label: <Link to="wallet">Wallet & Payout</Link>,
      className: "menu",
    },
    {
      key: "4",
      icon: <FiSettings style={{ fontSize: "20px" }} />,
      label: <Link to="settings">Account Settings</Link>,
      className: "menu",
    },
    {
      key: "5",
      icon: <MdLogout style={{ fontSize: "20px", color: "#df0f23" }} />,
      label: <span onClick={handleLogout}>Log out</span>,
      className: "menulogout",
    },
  ];

  // Ensure selectedKey matches the current path even after refresh
  const selectedKey = items.find(
    (item) =>
      item.label.props?.to && location.pathname.includes(item.label.props.to)
  )?.key || "1";

  return (
    <Container>
      <Layout className="wrapper">
        <Sider
          width={220}
          breakpoint="lg"
          onBreakpoint={(broken) => console.log(broken)}
          onCollapse={(collapsed, type) => console.log(collapsed, type)}
          className="sider_holder"
        >
          <div className="logo">
            <img src={logo} alt="logo" onClick={() => nav("/")} />
          </div>
          <Menu
            className="content_holder"
            selectedKeys={[selectedKey]} // dynamically selected
            items={items}
          />
        </Sider>

        <Layout>
          <Header  />
          <Content className="contentoutline_holder">
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Container>
  );
};

export default OrganizerDashboard;
