import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { UserContext } from '../../../context/UserContext';
import { useState } from 'react';
import IncomeNav from '../components/IncomeNav';



export default function AllIncome() {
    const columns = [
        { field: 'id', headerName: 'ID', width: 200 },
        { field: 'date', headerName: 'Date', width: 170 },
        { field: 'category', headerName: 'Income Category', width: 170 },
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

        const fetchIncome =async()=>{
            try{
                const response = await axios.get(`http://localhost:8061/users/${userId}/incomes/allincome`)
                console.log(response);
                setRows(response.data.map((income) => ({
                    id: income.incomeId,
                    date: income.date,
                    category: income.incomeCategory,
                    amount: income.amount 
                })));

            }catch(error){
                console.log(error);
            }
        }
        fetchIncome()
    },[])
  return (
    <div className="pt-8">
      <IncomeNav />
    <div className='pt-8' style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[10, 20]}
        checkboxSelection
      />
    </div>
    </div>
  );
}
