import React from "react";
import AdminHeader from "./AdminHeader";
import AdminNavbar from "./AdminNavbar";
import DashboardManagement from "./DashboardManagement";
import styled from "styled-components";

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
        <DashboardManagement />
      </MainContent>
    </DashboardWrapper>
  );
};

export default AdminDashboard;


const DashboardWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #f9fafb;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px; 
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
  width: 1240px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 32px;
  min-height: 1154px;
`;
