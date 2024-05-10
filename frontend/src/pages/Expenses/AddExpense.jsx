import React from 'react'
import ExpenseNav from './components/ExpenseNav'
import UserSidebar from '../../components/common/UserSidebar'

export default function AddExpense() {
  return (
    <>
    <UserSidebar/>
    <div className='pt-8'>
    <ExpenseNav/>
    <div>Add Expenses</div>
    </div>
    
    </>
  )
}
