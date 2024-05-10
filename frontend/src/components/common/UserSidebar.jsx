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
    icons: <RiWallet3Line size={30} />,
    label: 'Home',
    link: '/home'
  },
  {
    icons: <TbPigMoney size={30} />,
    label: 'Income',
    link: '/home/income'
  },
  {
    icons: <MdOutlineMoneyOff size={30} />,
    label: 'Expenses',
    link: '/home/expenses'
  },
  {
    icons: <GrTransaction size={30} />,
    label: 'Transfers',
    link: '/home/transfers'
  },
  {
    icons: <TbReportMoney size={30} />,
    label: 'Transactions',
    link: '/home/transactions'
  },
  {
    icons: <TbReportSearch size={30} />,
    label: 'Report'
  }
];

export default function UserHeader() {
  const [open, setOpen] = useState(true);

  return (
    <header className="shadow-md h-20 p-2 flex justify-between items-center duration-500 bg-blue-600 text-white">

      {/* Header Logo */}
      <div className='px-3 py-2'>
        <img src={logo} alt="Logo" className="w-36" />
      </div>

      {/* Header Menu */}
      <ul className='flex gap-2'>
        {
          menuItems.map((item, index) => {
            return (
              <Link to={item.link} key={index}>
                <li className='px-3 py-2 hover:bg-blue-800 text-white rounded-md duration-300 cursor-pointer flex items-center'>
                  {item.icons}
                  <p className={`${!open && 'hidden'} ml-2`}>{item.label}</p>
                </li>
              </Link>
            )
          })
        }
      </ul>

      {/* User Info */}
      <div className='flex items-center gap-2 mr-4'>
        <FaUserCircle size={30} />
        <div className={`${!open && 'hidden'}`}>
          <p>Saheb</p>
          
        </div>
      </div>
    </header>
  )
}