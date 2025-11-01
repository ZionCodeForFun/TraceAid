import React from "react";
import AdminHeader from "./AdminHeader";
import AdminNavbar from "./AdminNavbar";

import styled from "styled-components";
import { Outlet } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <DashboardWrapper>
      <AdminHeaderWrapper>
        <AdminHeader />
      </AdminHeaderWrapper>

      <NavbarWrapper>
        <AdminNavbar />
      </NavbarWrapper>

      <MainContent>
        <Outlet />
      </MainContent>
    </DashboardWrapper>
  );
};

export default AdminDashboard;

const DashboardWrapper = styled.div`
  width: 100%;
  height: 100vh;
  min-height: max-content;
  background-color: #f9fafb;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const AdminHeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const NavbarWrapper = styled.div`
  width: 1250px;
  height: 46px;
  border-radius: 14px;
  background: #f6f6f8;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1.5px solid #e5e7eb;
`;

const MainContent = styled.div`
  width: 1250px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 32px;
  height: auto;
  min-height: max-content;
`;
