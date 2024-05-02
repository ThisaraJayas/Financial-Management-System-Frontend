import React from 'react'
import { Button, ButtonGroup } from "flowbite-react";
import { HiAdjustments, HiCloudDownload, HiUserCircle } from "react-icons/hi";

export default function Income() {
  return (
    <div className='pt-8'>
      <ButtonGroup>
      <Button color="gray">
        <HiUserCircle className="mr-3 h-4 w-4" />
        Profile
      </Button>
      <Button color="gray">
        <HiAdjustments className="mr-3 h-4 w-4" />
        Settings
      </Button>
      <Button color="gray">
        <HiCloudDownload className="mr-3 h-4 w-4" />
        Messages
      </Button>
    </ButtonGroup>
    </div>
  )
}
