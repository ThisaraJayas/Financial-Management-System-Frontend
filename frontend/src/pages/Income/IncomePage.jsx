import React from "react";
import UserSidebar from "../../components/common/UserSidebar";
import '../../styles/HomeStyle.css'
import Income from "./pages/Income";
import IncomeNav from "./components/IncomeNav";

export default function IncomePage() {
  return (
    <>
      <div className="backgroundBody">
        <div className="grid-container">
          <UserSidebar />
          <Income>
            <IncomeNav/>
          </Income>
        </div>
      </div>
    </>
  );
}