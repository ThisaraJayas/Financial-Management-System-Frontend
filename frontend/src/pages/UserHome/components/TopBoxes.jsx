
import React, { useContext, useEffect, useState } from "react";
import { IoMdPerson } from "react-icons/io";
import { BsPersonHearts } from "react-icons/bs";
import axios from "axios";
import "../../../styles/income.css";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import UserSidebar from "../../../components/common/UserSidebar";
import { GiReceiveMoney } from "react-icons/gi";
import { GiTakeMyMoney } from "react-icons/gi";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { UserContext } from "../../../context/UserContext";

export default function TopBoxes() {
    const {userData} = useContext(UserContext)
    const userId=userData.id
    const [currentBalance, setCurrentBalance] = useState(0)
    const [currentLiabilities, setCurrentLiabilities]=useState(0)
    const [monthlyIncome, setMonthlyIncome]=useState(0)
  
    useEffect(()=>{
      const fectchTotalIncome = async()=>{
        try{
          const response = await axios.get(`http://localhost:8061/users/${userId}/balances/currentbalances`)
          console.log(response);
          setCurrentBalance(response.data)
        }catch(error){
          console.log(error);
        }
      }
      fectchTotalIncome()
    },[])
    useEffect(()=>{
      const fectchMonthlyIncome = async()=>{
        try{
          const response = await axios.get(`http://localhost:8061/users/${userId}/incomes/monthlyincome`)
          console.log(response);
          setMonthlyIncome(response.data)
        }catch(error){
          console.log(error);
        }
      }
      fectchMonthlyIncome()
    },[])
  return (
    <div className="container pt-8 pl-8">
          <div className="mainTitle">
            <h3>Income Dashboard</h3>
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
              <h1 className="text-green-400">LKR {currentBalance}</h1>
            </div>
            {/* <div className="cards flex justify-center">
              <div className="flex justify-center">
                <GiReceiveMoney
                  className="icons text-orange-400"
                  style={{ fontSize: 55 }}
                />
              </div>
              <div className="cardHead flex justify-center">
                <h2 class="text-xl font-semibold text-gray-800 whitespace-nowrap">
                Liabilities
                </h2>
              </div>
              <h1 className="text-orange-400">LKR 200,500</h1>
            </div> */}
            <div className="cards flex justify-center">
              <div className="flex justify-center">
                <GiTakeMyMoney
                  className="icons text-blue-500"
                  style={{ fontSize: 55 }}
                />
              </div>
              <div className="cardHead flex justify-center">
                <h2 class="text-xl font-semibold text-gray-800 whitespace-nowrap">
                  Monthly Income
                </h2>
              </div>
              <h1 className="text-blue-500">LKR {monthlyIncome}</h1>
            </div>
            {/* <div className="cards flex justify-center">
              <div className="flex justify-center">
                <ShoppingCartIcon
                  className="icons text-green-400"
                  style={{ fontSize: 55 }}
                />
              </div>
              <div className="cardHead flex justify-center">
                <h2 class="text-xl font-semibold text-gray-800 whitespace-nowrap">
                  Monthly Expense
                </h2>
              </div>
              <h1 className="text-green-400">LKR 200,500</h1>
            </div> */}
          </div>

          <div className="flex justify-between mb-5"></div>
        </div>
       
  )
}
