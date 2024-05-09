import React from 'react'
import UserSidebar from '../../components/common/UserSidebar';
import AllIncome from './pages/AllIncome';

export default function AllIncomePage() {
    return (
        <>
          <div className="backgroundBody">
            <div className="grid-container">
              <UserSidebar />
              <AllIncome />
            </div>
          </div>
        </>
      );
}

