"use client"
import Link from 'next/link'
import React from 'react'
import HeroCarousel from './HeroCarousel'

export default function Hero() {
  const categories =[
    {},{},{},{},{},{},{},{}
  ]
  return (
    <div className='flex gap-6 mb-20 mx-auto max-w-screen-2xl' >
     <div className="w-1/3 hidden sm:block bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <h2 className='bg-slate-100 py-2 px-6 border-b border-gray-200'>
        Shop by categorey
      </h2>
      <div className='py-2 px-6 h-[300px] overflow-y-auto flex flex-col gap-2'>
        {
          categories.map((category,i)=>{
            return(
              <Link key={i} href="#" className='flex items-center hover:bg-slate-50 duration-500 transition-all'>
                <span className=''>Prima categorie</span>
              </Link>
            )
          })
        }
        
      </div>
     </div>
     <div className=' w-full sm:w-2/3 rounded-sm '>
      <HeroCarousel />
     </div>
    </div>
  )
}
