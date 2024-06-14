import React, { useContext } from 'react'
import UserSidebar from '../../components/common/UserSidebar'
import { UserContext } from '../../context/UserContext'
import TopBoxes from './components/TopBoxes'
import PieChartHome from './components/PieChartHome'

export default function UserHome() {
  const {userData}=useContext(UserContext)

  return (
    <div className='pt-8'>
        <TopBoxes/>
        <PieChartHome/>
    </div>
  )
}
