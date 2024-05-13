import React, { useContext, useEffect, useState } from 'react'
import ExpenseNav from './components/ExpenseNav'
import UserSidebar from '../../components/common/UserSidebar'
import { UserContext } from '../../context/UserContext';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';

export default function AllExpense() {
  const columns = [
    { field: 'id', headerName: 'ID', width: 200 },
    { field: 'date', headerName: 'Date', width: 170 },
    { field: 'category', headerName: 'Expense Category', width: 170 },
    {
      field: 'amount',
      headerName: 'Amount',
      type: 'number',
      width: 200,
    },
    {
        field: 'd',
        headerName: '',
        width: 200,
      },
  ];
  const {userData}= useContext(UserContext)
  const userId = userData.id
  const [rows, setRows] = useState([]);

  useEffect(()=>{
    const fetchExpense = async()=>{
      try{
        const response = await axios.get(`http://localhost:8061/users/${userId}/expenses/allexpenses`)
        console.log(response);
        setRows(response.data.map((expense) => ({
          id: expense.expenseId,
          date: expense.date,
          category: expense.expenseCategory,
          amount: expense.amount 
      })));
      }catch(error){
        console.log(error);
      }
    }
    fetchExpense()
  },[])
  return (
    <>
    <UserSidebar/>
    <div className='pt-8'>
    <ExpenseNav/>
    <div className='pt-8' style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[10, 20]}
        checkboxSelection
      />
    </div>
    </div>
    
    </>
  )
}
