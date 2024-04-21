import Footer from '@/components/frontend/Footer'
import Navbar from '@/components/frontend/Navbar'
import Image from 'next/image'
import React from 'react'

export default function Layout({children}) {
  return (
    <div>
        <Navbar/>
        <div className=' dark:bg-neutral-950 lg:px-0' >
          {children}
        </div>
        <Footer/>
    </div>
  )
}
