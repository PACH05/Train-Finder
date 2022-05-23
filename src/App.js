import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import HomePage from "./Pages/HomePage";


export default function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>  
      </Router>
    </>
  );
}

