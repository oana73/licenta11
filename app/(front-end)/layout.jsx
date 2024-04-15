import Navbar from '@/components/frontend/Navbar'
import React from 'react'

export default function Layout({children}) {
  return (
    <div>
        <Navbar/>
        <div className=' py-6 px-6 lg:px-0' >
          {children}
        </div>
    </div>
  )
}
