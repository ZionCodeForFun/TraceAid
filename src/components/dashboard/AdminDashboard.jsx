import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const AdminDashboard = () => {
  const { user, role } = useSelector((s) => s.auth || {});

  if (role !== "admin") {
    const handleSimulate = () => {
      if (typeof window !== "undefined") {
        localStorage.setItem(
          "simulateAuth",
          JSON.stringify({
            token: "sim-token",
            role: "admin",
            user: { name: "Sim Admin" },
          })
        );
        // reload to make ProtectedRoute pick it up
        window.location.reload();
      }
    };

    return (
      <Container>
        <div className="content">
          <h2>Access denied</h2>
          <p>You do not have permission to view the admin dashboard.</p>
          <p style={{ marginTop: 12 }}>
            For local development you can simulate an admin session.
          </p>
          <div style={{ marginTop: 12 }}>
            <button onClick={handleSimulate}>Simulate admin</button>
          </div>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <div className="header">
        <h1>Admin Dashboard</h1>
        <p>Welcome, {user?.name || "Administrator"}</p>
        <div style={{ marginTop: 12 }}>
          <button
            onClick={() => {
              // clear simulation if present
              if (typeof window !== "undefined") {
                localStorage.removeItem("simulateAuth");
                window.location.reload();
              }
            }}
          >
            Clear simulation
          </button>
        </div>
      </div>

      <div className="grid">
        <div className="card">Approve Campaigns (placeholder)</div>
        <div className="card">Manage Users (placeholder)</div>
        <div className="card">Site Settings (placeholder)</div>
      </div>
    </Container>
  );
};

export default AdminDashboard;

const Container = styled.div`
  padding: 48px;
  .header {
    margin-bottom: 24px;
    h1 {
      font-size: 28px;
      margin: 0 0 6px 0;
    }
    p {
      margin: 0;
      color: #555;
    }
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    .card {
      background: #fff;
      border: 1px solid #eee;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
    }
  }
`;
