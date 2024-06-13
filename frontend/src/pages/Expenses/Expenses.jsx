import React from 'react'
import ExpenseNav from './components/ExpenseNav'
import UserSidebar from '../../components/common/UserSidebar'

export default function Expenses() {
  return (
    <>
    <UserSidebar/>
    <div className='pt-8'>
    <ExpenseNav/>
    <div>
    <div className="container pt-8 pl-8">
          <div className="mainTitle">
            <h3>Income Dashboard</h3>
          </div>
          <div className="mainCards">
            <div className="cards flex justify-center">
              <div className="flex justify-center">
                <MonetizationOnIcon
                  className="icons text-green-400"
                  style={{ fontSize: 55 }}
                />
              </div>
              <div className="cardHead flex justify-center">
                <h2 class="text-xl font-semibold text-gray-800 whitespace-nowrap">
                Current Balance
                </h2>
              </div>
              <h1 className="text-green-400">LKR {currentBalance}</h1>
            </div>
           
            <div className="cards flex justify-center">
              <div className="flex justify-center">
                <GiTakeMyMoney
                  className="icons text-blue-500"
                  style={{ fontSize: 55 }}
                />
              </div>
              <div className="cardHead flex justify-center">
                <h2 class="text-xl font-semibold text-gray-800 whitespace-nowrap">
                  Monthly Income
                </h2>
              </div>
              <h1 className="text-blue-500">LKR {monthlyIncome}</h1>
            </div>
            
          </div>

          <div className="flex justify-between mb-5"></div>
        </div>
    </div>
    </div>
    
    </>
  )
}
