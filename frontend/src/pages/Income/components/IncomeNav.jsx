import React from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
"use client";
import { HiOutlineClipboardList } from "react-icons/hi";
import { MdOutlineAttachMoney } from "react-icons/md";
import { Button } from "flowbite-react";
import { HiAdjustments, HiCloudDownload, HiUserCircle } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function IncomeNav() {
  const buttonStyle = { fontSize: "1.2rem" };

  return (
    <Button.Group>
      <Link to={'/home/income'}>
      <Button color="gray">

        <MdOutlineAttachMoney  className="mr-3 h-6 w-6" />
        <p  className="text-lg">Income</p>
      </Button>
      </Link>
      <Link to={'/home/income/addincome'}>
      <Button color="gray">
        
        <IoMdAddCircleOutline className="mr-3 h-6 w-6" />
        <p  className="text-lg">Add_Income</p>
      </Button>
      </Link>
      <Button color="gray">
        <HiOutlineClipboardList   className="mr-3 h-6 w-6" />
        <p  className="text-lg">All_Income</p>
      </Button>
    </Button.Group>
  );
}
