import React, { useContext, useState } from "react";
import IncomeNav from "../components/IncomeNav";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Datepicker, TextInput, Label, Select } from "flowbite-react";
import axios from "axios";
import { UserContext } from "../../../context/UserContext";

export default function AddIncome() {
  const {userData}=useContext(UserContext)
  const [date, setDates] = useState(null);
  const [amount, setAmount] = useState(0);
  const [incomeCategory, setIncomeCategory] = useState('');
  const userId = userData.id
  console.log(userId);
  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(date);
    console.log(amount);
    
    const response = await axios.post(`http://localhost:8061/users/${userId}/incomes/add`,{
      userId,
      date,
      amount,
      incomeCategory
    })
    console.log(response);
  };

  return (
    <div className="pt-8 ml-44 mr-44">
      <IncomeNav />
      <div className="pt-8 text-4xl font-bold">Add Income</div>
      <div className="pt-6">
        <form onSubmit={handleSubmit}>
          <Paper sx={{ width: "100%", maxWidth: "100%", boxShadow: 6, paddingBottom:"1%", marginBottom:"3%" }}>
            <div className="p-8">
              <div>
                <div className="max-w-md mt-2">
                  <div className="mb-1 block">
                    <Label htmlFor="date" value="Select Date" />
                  </div>
                  <input type="date" className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500" value={date} onChange={(e)=>setDates(e.target.value)} />
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
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="max-w-md mt-2">
                <div className="mb-1 block">
                  <Label htmlFor="incomeCategory" value="Select Income Category" />
                </div>
                <Select
                  id="incomeCategory"
                  value={incomeCategory}
                  onChange={(e) => setIncomeCategory(e.target.value)}
                  required
                >
                  <option value="Salary">Salary</option>
                  <option value="Rental Income">Rental Income</option>
                  <option value="Interest Income">Interest Income</option>
                  <option value="Gifts/Inheritances">Gifts/Inheritances</option>
                  <option value="Other">Other</option>
                </Select>
              </div>
            </div>
            <div className="mb-8">
            <Stack className="ml-9" spacing={2} direction="row">
              <Button type="submit" variant="outlined">
                Submit
              </Button>
            </Stack>
            </div>
            
          </Paper>
        </form>
      </div>
    </div>
  );
}
