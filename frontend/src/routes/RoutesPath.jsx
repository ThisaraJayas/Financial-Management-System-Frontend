import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../components/common/Header";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import UserHome from "../pages/UserHome/UserHome";
import Income from "../pages/IncomePage";
import Expenses from "../pages/Expenses/Expenses"
import Transfers from "../pages/Transfers/Transfers"
import Transaction from "../pages/Transactions/Transaction"
import HomePage from "../pages/HomePage";

export default function RoutesPath() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/home/income" element={<Income/>}/>
        <Route path="/home/expenses" element={<Expenses/>}/>
        <Route path="/home/transfers" element={<Transfers/>}/>
        <Route path="/home/transactions" element={<Transaction/>}/>
      </Routes>
    </>
  );
}
