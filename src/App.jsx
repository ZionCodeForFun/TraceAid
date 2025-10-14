import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginForm from "./components/auth/LoginForm";


const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </HashRouter>
    
  );
};

export default App;
