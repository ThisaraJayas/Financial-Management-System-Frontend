import React from "react";
import UserSidebar from "../components/common/UserSidebar";
import '../styles/HomeStyle.css'
import Income from "./Income/Income";

export default function IncomePage() {
  return (
    <>
      <div className="backgroundBody">
        <div className="grid-container">
          <UserSidebar />
          <Income />
        </div>
      </div>
    </>
  );
}