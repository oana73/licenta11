import Footer from '@/components/frontend/Footer'
import Navbar from '@/components/frontend/Navbar'
import React from 'react'

export default function Layout({children}) {
  return (
    <div>
        <Navbar/>
        <div className='px-4 dark:bg-neutral-900 lg:px-0' >
          {children}
        </div>
        <Footer/>
    </div>
  )
}
