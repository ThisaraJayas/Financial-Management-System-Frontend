import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../components/common/Header";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import UserHome from "../pages/UserHome";

export default function RoutesPath() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/home" element={<UserHome/>}/>
      </Routes>
    </>
  );
}
