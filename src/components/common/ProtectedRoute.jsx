import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


const ProtectedRoute = ({ children, allowedRole }) => {
  const auth = useSelector((state) => state.auth || {});
  const { token: reduxToken, role: reduxRole } = auth;

  let sim = null;
  try {
    const raw =
      typeof window !== "undefined" && localStorage.getItem("simulateAuth");
    if (raw) sim = JSON.parse(raw);
  } catch (e) {
  
  }

  const token = sim?.token || reduxToken;
  const role = sim?.role || reduxRole;

  const allowed = Array.isArray(allowedRole)
    ? allowedRole.includes(role)
    : role === allowedRole;

  if (!token || !role) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRole && !allowed) {
    return <Navigate to="/" replace />; 
  }

  return children;
};

export default ProtectedRoute;
