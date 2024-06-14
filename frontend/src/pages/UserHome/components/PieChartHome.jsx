import React, { useContext, useEffect, useState } from 'react'
import { PieChart } from '@mui/x-charts/PieChart';
import { UserContext } from '../../../context/UserContext';
import axios from 'axios';

export default function PieChartHome() {
    const {userData} = useContext(UserContext)
    const userId=userData.id
    const [income, setTotalIncome] = useState(0)
    const [expense, setTotalExpenses]=useState(0)

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
        const fectchTotalExpense = async()=>{
          try{
            const response = await axios.get(`http://localhost:8061/users/${userId}/expenses/currentexpenses`)
            console.log(response);
            setTotalExpenses(response.data)
          }catch(error){
            console.log(error);
          }
        }
        fectchTotalExpense()
      },[])
  return (
    <div className="justify-center">
    <PieChart
      series={[
        {
          data: [
            { id: 1, value: income, label: 'Income' },
            { id: 2, value: expense, label: 'Expense' },
          ],
        },
      ]}
      width={1100}
      height={400}
    />
    </div>
  )
}
