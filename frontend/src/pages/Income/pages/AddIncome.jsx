import React, { useState } from "react";
import IncomeNav from "../components/IncomeNav";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Datepicker, TextInput, Label, Select } from "flowbite-react";

export default function AddIncome() {
  const [dates, setDates] = useState(null);
  const [amount, setAmount] = useState(0);
  const [incomeCategory, setIncomeCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(dates);
    console.log(amount);
  };

  return (
    <div className="pt-8">
      <IncomeNav />
      <div className="pt-8 text-4xl font-bold">Add Income</div>
      <div className="pt-6">
        <form onSubmit={handleSubmit}>
          <Paper sx={{ width: "100%", maxWidth: "100%", boxShadow: 6 }}>
            <div className="p-8">
              <div>
                <div className="max-w-md mt-2">
                  <div className="mb-1 block">
                    <Label htmlFor="date" value="Select Date" />
                  </div>
                  <input type="date" className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500" value={dates} onChange={(e)=>setDates(e.target.value)} />
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
            <Stack spacing={2} direction="row">
              <Button type="submit" variant="outlined">
                Submit
              </Button>
            </Stack>
          </Paper>
        </form>
      </div>
    </div>
  );
}
