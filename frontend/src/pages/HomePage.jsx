import React from "react";
import UserHome from "./UserHome/UserHome";
import UserSidebar from "../components/common/UserSidebar";
import '../styles/HomeStyle.css'

export default function HomePage() {
  return (
    <>

          <UserSidebar />
          <UserHome />

    </>
  );
}
