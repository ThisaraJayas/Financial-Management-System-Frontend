import React from 'react'
import IncomeNav from '../components/IncomeNav'
import Paper from "@mui/material/Paper";

import { Datepicker } from "flowbite-react";


export default function AddIncome() {
  return (
    <div  className='pt-8'>
        <IncomeNav/>
        <div className='pt-8 text-4xl font-bold'>Add Income</div>
        <div className='pt-6'> 
        <Paper sx={{ width: "100%", maxWidth: "100%", boxShadow: 6 }}>
          <div className='p-8'>
            <div>
            <Datepicker minDate={new Date(2023, 0, 1)} maxDate={new Date(2023, 3, 30)} />;
            </div>
          
          </div>
        </Paper>
        </div>
    </div>
  )
}
