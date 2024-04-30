import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../components/common/Header";
import Home from "../pages/Home";

export default function RoutesPath() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}
