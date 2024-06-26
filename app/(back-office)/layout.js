"use client"
import React, { useState } from 'react'
import Sidebar from "../../components/backoffice/Sidebar.jsx"
import Navbar from "../../components/backoffice/Navbar.jsx"

export default function layout({children}) {
  const [showSidebar,setSidebar] = useState(false);
  return (
    <div className='flex'>
        {/* sideBar */}
        <Sidebar showSidebar={showSidebar} setSidebar={setSidebar}/>
        
        <div className='lg:ml-52 ml-0 flex-grow min-h-screen'>
            {/* Header */}  
            <Navbar showSidebar={showSidebar} setSidebar={setSidebar}/>
            {/* Main */} 
            <main className='p-8 dark:bg-[#2e2e2e] text-slate-50 min-h-screen mt-14'>{children}</main>
        </div>
    </div>
  )
}