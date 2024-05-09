import React, { useContext } from 'react'
import UserSidebar from '../../components/common/UserSidebar'
import { UserContext } from '../../context/UserContext'

export default function UserHome() {
  const {userData}=useContext(UserContext)

  return (
    <div className='pt-8'>
        <h1>{userData.id}</h1>
    </div>
  )
}
