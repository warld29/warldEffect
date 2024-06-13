/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Booking from "./pages/Booking.jsx";
import AppRouter from "./component/AppRouter.jsx";
import ErrorBoundary from "./component/ErrorBoundary";

function App() {
  return (
    <>
      <Router>
        <ErrorBoundary>
          <Navbar />
          <Routes>
            {/* Define your routes here */}
            <Route path="/" element={<Home />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/approuter" element={<AppRouter />} />
          </Routes>
        </ErrorBoundary>
      </Router>
    </>
  );
}

export default App;
