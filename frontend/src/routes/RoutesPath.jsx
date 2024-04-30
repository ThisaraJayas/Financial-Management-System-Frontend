import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../components/common/Header";
import Home from "../pages/Home";
import Login from "../pages/Login";

export default function RoutesPath() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </>
  );
}
