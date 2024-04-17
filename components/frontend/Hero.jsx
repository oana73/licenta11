
import Link from 'next/link'
import React from 'react'
import HeroCarousel from './HeroCarousel'
import SidebarCategories from './SidebarCategories'
import { getData } from '@/lib/getData'

export default async function Hero() {
  const sliders = await getData('sliders')
  return (
    <div className='flex gap-6 mb-20 mx-auto max-w-screen-2xl' >
     <SidebarCategories/>
     <div className=' w-full sm:w-2/3 rounded-sm '>
      <HeroCarousel sliders={sliders} />
     </div>
    </div>
  )
}
