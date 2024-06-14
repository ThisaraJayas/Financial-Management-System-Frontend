
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
    const [totalIncome, setTotalIncome] = useState(0)
    const [currentLiabilities, setCurrentLiabilities]=useState(0)
    const [totalExpenses, setTotalExpenses]=useState(0)
    const [balance, setBalance]=useState(0)

    useEffect(() => {
      const capital = totalIncome - totalExpenses;
      if (capital < 0) {
          setCurrentLiabilities(capital);
          setBalance(0);
      } else {
          setBalance(capital);
          setCurrentLiabilities(0);
      }
  }, [totalIncome, totalExpenses]);
  
    useEffect(()=>{
      const fectchTotalIncome = async()=>{
        try{
          const response = await axios.get(`http://localhost:8061/users/${userId}/incomes/currentbalance`)
          console.log(response);
          setTotalIncome(response.data)
        }catch(error){
          console.log(error);
        }
      }
      fectchTotalIncome()
    },[])
    useEffect(()=>{
      const fectchTotalIncome = async()=>{
        try{
          const response = await axios.get(`http://localhost:8061/users/${userId}/expenses/currentexpenses`)
          console.log(response);
          setTotalExpenses(response.data)
        }catch(error){
          console.log(error);
        }
      }
      fectchTotalIncome()
    },[])
  return (
    <div className="container pt-8 pl-8">
          <div className="mainTitle">
            <h3>Income Dashboard</h3>
          </div>
          <div className="mainCards">
          <div className="cards flex justify-center">
              <div className="flex justify-center">
                <GiTakeMyMoney
                  className="icons text-blue-500"
                  style={{ fontSize: 55 }}
                />
              </div>
              <div className="cardHead flex justify-center">
                <h2 class="text-xl font-semibold text-gray-800 whitespace-nowrap">
                 Balance
                </h2>
              </div>
              <h1 className="text-blue-500">LKR <br></br>{balance}</h1>
            </div>
          <div className="cards flex justify-center">
              <div className="flex justify-center">
                <GiTakeMyMoney
                  className="icons text-blue-500"
                  style={{ fontSize: 55 }}
                />
              </div>
              <div className="cardHead flex justify-center">
                <h2 class="text-xl font-semibold text-gray-800 whitespace-nowrap">
                 Liabilities
                </h2>
              </div>
              <h1 className="text-blue-500">LKR <br></br>{currentLiabilities}</h1>
            </div>
            <div className="cards flex justify-center">
              
              <div className="flex justify-center">
                <MonetizationOnIcon
                  className="icons text-green-400"
                  style={{ fontSize: 55 }}
                />
              </div>
              <div className="cardHead flex justify-center">
                <h2 class="text-xl font-semibold text-gray-800 whitespace-nowrap">
                Total income
                </h2>
              </div>
              <h1 className="text-green-400">LKR <br></br>{totalIncome}</h1>
            </div>
            
            <div className="cards flex justify-center">
              <div className="flex justify-center">
                <GiTakeMyMoney
                  className="icons text-blue-500"
                  style={{ fontSize: 55 }}
                />
              </div>
              <div className="cardHead flex justify-center">
                <h2 class="text-xl font-semibold text-gray-800 whitespace-nowrap">
                 Total Expenses
                </h2>
              </div>
              <h1 className="text-blue-500">LKR<br></br> {totalExpenses}</h1>
            </div>
           
          </div>

          <div className="flex justify-between mb-5"></div>
        </div>
       
  )
}
