import React from 'react'
import ExpenseNav from './components/ExpenseNav'
import UserSidebar from '../../components/common/UserSidebar'

export default function AllExpense() {
  return (
    <>
    <UserSidebar/>
    <div className='pt-8'>
    <ExpenseNav/>
    <div>All Expenses</div>
    </div>
    
    </>
  )
}
