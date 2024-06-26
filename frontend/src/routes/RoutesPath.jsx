import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../components/common/Header";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import UserHome from "../pages/UserHome/UserHome";
import Income from "../pages/Income/IncomePage";
import AddIncomePage from '../pages/Income/AddIncompePage'
import Expenses from "../pages/Expenses/Expenses"
import Transfers from "../pages/Transfers/Transfers"
import Transaction from "../pages/Transactions/Transaction"
import HomePage from "../pages/HomePage";
import UseContextProvider from '../context/UserContext'
import AllIncome from "../pages/Income/pages/AllIncome";
import AllIncomePage from "../pages/Income/AllIncomePage";
import AddExpense from "../pages/Expenses/AddExpense";
import AllExpense from "../pages/Expenses/AllExpense";

export default function RoutesPath() {
  return (
    <>
    <UseContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/home/income" element={<Income/>}/>
        <Route path="/home/income/addincome" element={<AddIncomePage/>}/>
        <Route path="/home/income/allincome" element={<AllIncomePage/>}/>
        <Route path="/home/expenses" element={<Expenses/>}/>
        <Route path="/home/expenses/addexpense" element={<AddExpense/>}/>
        <Route path="/home/expenses/allexpense" element={<AllExpense/>}/>
        <Route path="/home/transfers" element={<Transfers/>}/>
        <Route path="/home/transactions" element={<Transaction/>}/>

      </Routes>
      </UseContextProvider>
    </>
  );
}
