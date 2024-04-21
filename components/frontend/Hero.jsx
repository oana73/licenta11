
import Link from 'next/link'
import React from 'react'
import HeroCarousel from './HeroCarousel'
import SidebarCategories from './SidebarCategories'
import { getData } from '@/lib/getData'

export default async function Hero() {
  const sliders = await getData('sliders')
  return (
    <div>
      <div className="relative">
        <img src="/hero1 (1).jpg" width={3489} height={1664} alt="" className="" />
        <div className='mx-auto max-w-screen-2xl'>
          <div className="absolute top-1/2 transform -translate-y-1/2 w-1/2 text-left ">
            <h1 className='mb-12 font-serif text-8xl'>Let's play!</h1>
            <span className='text-4xl '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero harum maxime necessitatibus quas reiciendis rerum veritatis tenetur optio neque autem commodi, quis repellendus, corporis asperiores vel accusamus maiores fugit recusandae?</span>
          </div>
        </div>
      </div>
      <div className='flex gap-6 mb-20 mx-auto max-w-screen-2xl mt-24' >
      <SidebarCategories/>
      <div className=' w-full sm:w-2/3 rounded-sm '>
        <HeroCarousel sliders={sliders} />
      </div>
      </div>
    </div>
  )
}
