import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
