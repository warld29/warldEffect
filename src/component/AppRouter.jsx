/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavLinks from "../component/NavLinks.jsx";
import Wedding from "../pages/Wedding.jsx";

const AppRouter = () => {
  return (
    <Router>
      <NavLinks />
      <Routes>
        <Route path="/wedding/:id" element={<Wedding />} />
        {/* Define other routes here */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
