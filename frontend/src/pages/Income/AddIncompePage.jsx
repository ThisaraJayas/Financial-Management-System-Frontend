import React from "react";
import UserSidebar from "../../components/common/UserSidebar";
import '../../styles/HomeStyle.css'
import AddIncome from "./pages/AddIncome";

export default function IncomePage() {
  return (
    <>
      <div className="backgroundBody">
        <div className="grid-container">
          <UserSidebar />
          <AddIncome />
        </div>
      </div>
    </>
  );
}