import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";


export default function IncomeNav() {
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
      <Link to={'/home/income'}>
        <Button>Income</Button>
        </Link>
        <Link to={'/home/income/addincome'}>
        <Button>Add Income</Button>
        </Link>
        <Link to={'/home/income/allincome'}>
        <Button>All Income</Button>
        </Link>
      </ButtonGroup>
    
    </Box>
  );
}
