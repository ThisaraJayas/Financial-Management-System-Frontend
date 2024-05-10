import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";


export default function ExpenseNav() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup variant="outlined" aria-label="Basic button group">
      <Link to={'/home/expenses'}>
        <Button>Expense</Button>
        </Link>
        <Link to={'/home/expenses/addexpense'}>
        <Button>Add Expense</Button>
        </Link>
        <Link to={'/home/expenses/allexpense'}>
        <Button>All Expenses</Button>
        </Link>
      </ButtonGroup>
    
    </Box>
  );
}
