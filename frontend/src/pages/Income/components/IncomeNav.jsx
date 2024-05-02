import React from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
"use client";
import { HiOutlineClipboardList } from "react-icons/hi";
import { MdOutlineAttachMoney } from "react-icons/md";
import { Button } from "flowbite-react";
import { HiAdjustments, HiCloudDownload, HiUserCircle } from "react-icons/hi";

export default function IncomeNav() {
  const buttonStyle = { fontSize: "1.2rem" };

  return (
    <Button.Group>
      <Button color="gray">
        <MdOutlineAttachMoney  className="mr-3 h-6 w-6" />
        <p  className="text-lg">Income</p>
      </Button>
      <Button color="gray">
        <IoMdAddCircleOutline className="mr-3 h-6 w-6" />
        <p  className="text-lg">Add_Income</p>
      </Button>
      <Button color="gray">
        <HiOutlineClipboardList   className="mr-3 h-6 w-6" />
        <p  className="text-lg">All_Income</p>
      </Button>
    </Button.Group>
  );
}
