import React, { useState } from 'react'
import logo from '../../assets/images/logohome.png'
import { MdMenuOpen } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { TbReportSearch } from "react-icons/tb";
import { Link } from 'react-router-dom';
import { RiWallet3Line } from "react-icons/ri";
import { TbPigMoney } from "react-icons/tb";
import { MdOutlineMoneyOff } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { TbReportMoney } from "react-icons/tb";

const menuItems = [
  {
    icons: <RiWallet3Line  size={30} />,
    label: 'Home',
    link: "/home"
  },
  {
    icons: <TbPigMoney  size={30} />,
    label: 'Income',
    link: "/home/income"
  },
  {
    icons: <MdOutlineMoneyOff  size={30} />,
    label: 'Expenses',
    link: "/home/expenses"
  },
  {
    icons: <GrTransaction  size={30} />,
    label: 'Transfers',
    link: "/home/transfers"
  },
  {
    icons: <TbReportMoney  size={30} />,
    label: 'Transactions',
    link: "/home/transactions"
  },
  {
    icons: <TbReportSearch size={30} />,
    label: 'Report'
  }
]

export default function UserSidebar() {

  const [open, setOpen] = useState(true)

  return (
    <nav className="shadow-md h-screen p-2 flex flex-col duration-500 bg-blue-600 text-white w-56 ">

      {/* Header */}
      <div className=' px-3 py-2 h-20 flex justify-between items-center'>
        <img src={logo} alt="Logo" className="w-36"/>
      </div>

      {/* Body */}

      <ul className='flex-1'>
        {
          menuItems.map((item, index) => {
            return (
              <Link to={item.link}>
              <li key={index} className='px-3 py-2 my-2 hover:bg-blue-800 text-white rounded-md duration-300 cursor-pointer flex gap-2 items-center relative group'>
                <div>{item.icons}</div>
                <p className={`${!open && 'w-0 translate-x-24'} duration-500 overflow-hidden`}>{item.label}</p>
                <p className={`${open && 'hidden'} absolute left-32 shadow-md rounded-md
                 w-0 p-0 text-black bg-white duration-100 overflow-hidden group-hover:w-fit group-hover:p-2 group-hover:left-16
                `}>{item.label}</p>
              </li>
              </Link>
            )
          })
        }
      </ul>
      {/* footer */}
      <div className='flex items-center gap-2 px-3 py-2'>
        <div><FaUserCircle size={30} /></div>
        <div className={`leading-5 ${!open && 'w-0 translate-x-24'} duration-500 overflow-hidden`}>
          <p>Saheb</p>
          <span className='text-xs'>saheb@gmail.com</span>

        </div>
      </div>


    </nav>
  )
}