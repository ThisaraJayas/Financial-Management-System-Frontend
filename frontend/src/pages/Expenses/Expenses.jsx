import React from 'react'
import ExpenseNav from './components/ExpenseNav'
import UserSidebar from '../../components/common/UserSidebar'

export default function Expenses() {
  return (
    <>
    <UserSidebar/>
    <div className='pt-8'>
    <ExpenseNav/>
    <div>Expenses</div>
    </div>
    
    </>
  )
}
