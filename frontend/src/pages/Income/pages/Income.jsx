import IncomeNav from "../components/IncomeNav";
import React, { useEffect, useState } from "react";
import { IoMdPerson } from "react-icons/io";
import { BsPersonHearts } from "react-icons/bs";
import axios from "axios";
import "../../../styles/income.css";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import UserSidebar from "../../../components/common/UserSidebar";


export default function Income() {
  return (
    <>
    <UserSidebar/>
      <div className="pt-8">
        <IncomeNav />
        <div className="container pt-8 pl-8">
          <div className="mainTitle">
            <h3>User Dashboard</h3>
          </div>
          <div className="mainCards">
            <div className="cards flex justify-center">
              <div className="flex justify-center">
                <MonetizationOnIcon
                  className="icons text-green-400"
                  style={{ fontSize: 55 }}
                />
              </div>
              <div className="cardHead flex justify-center">
                <h2 class="text-xl font-semibold text-gray-800 whitespace-nowrap">
                  Current Balance
                </h2>
              </div>
              <h1 className="text-green-400">$200,500</h1>
            </div>
            <div className="cards flex justify-center">
              <div className="flex justify-center">
                <MonetizationOnIcon
                  className="icons text-green-400"
                  style={{ fontSize: 55 }}
                />
              </div>
              <div className="cardHead flex justify-center">
                <h2 class="text-xl font-semibold text-gray-800 whitespace-nowrap">
                  Current Balance
                </h2>
              </div>
              <h1 className="text-green-400">$200,500</h1>
            </div>
            <div className="cards flex justify-center">
              <div className="flex justify-center">
                <MonetizationOnIcon
                  className="icons text-green-400"
                  style={{ fontSize: 55 }}
                />
              </div>
              <div className="cardHead flex justify-center">
                <h2 class="text-xl font-semibold text-gray-800 whitespace-nowrap">
                  Current Balance
                </h2>
              </div>
              <h1 className="text-green-400">$200,500</h1>
            </div>
            <div className="cards flex justify-center">
              <div className="flex justify-center">
                <MonetizationOnIcon
                  className="icons text-green-400"
                  style={{ fontSize: 55 }}
                />
              </div>
              <div className="cardHead flex justify-center">
                <h2 class="text-xl font-semibold text-gray-800 whitespace-nowrap">
                  Current Balance
                </h2>
              </div>
              <h1 className="text-green-400">$200,500</h1>
            </div>
          </div>

          <div className="flex justify-between mb-5"></div>
        </div>
       
      </div>
    </>
  );
}
