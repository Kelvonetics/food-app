import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import { useState } from 'react';

const Index = () => {

  const [showMenu, setShowMenu] = useState(false);

  return (
    <main className='relative'>
      <div className="md:mx-4 lg:mx-auto flex justify-between">
        <Sidebar />

        <div className="content">
              <Navbar showMenu={showMenu} setShowMenu={setShowMenu} />

              <div className="mt-6 overflow-auto flex flex-1 flex-col" onClick={() => setShowMenu(false)}>
                <Outlet />
              </div>
        </div>
      </div>
    </main>
  )
}

export default Index
