import React, { useContext, useState } from 'react'
import ExpenseNav from './components/ExpenseNav'
import UserSidebar from '../../components/common/UserSidebar'
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Datepicker, TextInput, Label, Select } from "flowbite-react";
import { UserContext } from '../../context/UserContext';
import axios from 'axios';

export default function AddExpense() {
  const {userData}=useContext(UserContext)
  const [date, setDates] = useState(null);
  const [expense, setExpense] = useState(0);
  const [expenseCategory, setExpenseCategory] = useState('');
  const userId = userData.id

  const handleSubmit = async(e) => {
    e.preventDefault()
    console.log(date);
    console.log(expenseCategory);

    const response = await axios.post(`http://localhost:8061/users/${userId}/expenses/add`,{
      userId,
      date,
      amount:expense,
      expenseCategory
    })
    console.log(response);
  }
  return (
    <>
    <UserSidebar/>
    <div className='pt-8 ml-44 mr-44'>
    <ExpenseNav/>
    <div>
    <div className="pt-8 text-4xl font-bold">Add Expense</div>
      <div className="pt-6">
        <form onSubmit={handleSubmit}>
          <Paper sx={{ width: "100%", maxWidth: "100%", boxShadow: 6, paddingBottom:"1%", marginBottom:"3%" }}>
            <div className="p-8">
              <div>
                <div className="max-w-md mt-2">
                  <div className="mb-1 block">
                    <Label htmlFor="date" value="Select Date" />
                  </div>
                  <input type="date" className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500" value={date} onChange={(e)=>setDates(e.target.value)} 
                  />
                </div>
              </div>
              <div>
                <div className="max-w-md mt-2">
                  <div className="mb-1 block">
                    <Label htmlFor="amount" value="Enter Amount" />
                  </div>
                  <TextInput
                    id="amount"
                    type="number"
                    placeholder="Amount"
                    value={expense}
                    onChange={(e) => setExpense(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="max-w-md mt-2">
                <div className="mb-1 block">
                  <Label htmlFor="incomeCategory" value="Select Expense Category" />
                </div>
                <Select
                  id="expenseCategory"
                  value={expenseCategory}
                  onChange={(e) => setExpenseCategory(e.target.value)}
                  required
                >
                  <option value=""></option>
                  <option value="Rental Expense">Rental Expense</option>
                  <option value="Insurance">Insurance</option>
                  <option value="Utilities">Utilities</option>
                  <option value="Entertainment">Entertainment</option>
                  <option value="Debt">Debt</option>
                  <option value="Travel Expenses">Travel expenses</option>
                  <option value="Other">Other</option>
                </Select>
              </div>
            </div>
            <div className="mb-8">
            <Stack className="ml-9" spacing={2} direction="row">
              <Button type="submit" variant="outlined">
                Add Expense
              </Button>
            </Stack>
            </div>
            
          </Paper>
        </form>
      </div>
    </div>
    </div>
    
    </>
  )
}
