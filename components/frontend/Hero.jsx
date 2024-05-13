
import Link from 'next/link'
import React from 'react'
import HeroCarousel from './HeroCarousel'
import SidebarCategories from './SidebarCategories'
import { getData } from '@/lib/getData'
import { CircleChevronLeftIcon, CircleDollarSign, HelpCircle, Undo2 } from 'lucide-react'

export default async function Hero() {
  const sliders = await getData('sliders')
  return (
      <div className='grid grid-cols-12 gap-6 mb-20 mt-8 ' >
      <SidebarCategories/>
      <div className='col-span-full sm:col-span-6 rounded-lg '>
        <HeroCarousel sliders={sliders} />
      </div>
      <div className='col-span-2 p-3 hidden sm:block bg-neutral-100 rounded-lg'>
        <div className='flex items-center space-x-1 mb-4'>
          <HelpCircle className='shrink-0 w-5 h-5'/>
          <div className='flex flex-col'>
            <h2 className='text-sm'>Help center</h2>
            <p className='text-[0.7rem]'>Guide to customer</p>
          </div>
        </div>
        <div className='flex items-center space-x-1 mb-4'>
          <Undo2 className='shrink-0 w-5 h-5'/>
          <div className='flex flex-col'>
            <h2 className='text-sm'>Return Policy</h2>
            <p className='text-[0.7rem]'>Return Guide</p>
          </div>
        </div>
        <div className='flex items-center space-x-1 mb-4'>
          <CircleDollarSign className='shrink-0 w-5 h-5'/>
          <Link href='/register-supplier' className='flex flex-col'>
            <h2 className='text-sm'>Become a seller</h2>
            <p className='text-[0.7rem]'>Start selling your artwork</p>
          </Link>
        </div>
        <div class="tenor-gif-embed " data-postid="7103876480481787784" data-share-method="host" data-aspect-ratio="1" data-width="100%"><a href="https://tenor.com/view/christmas-shopping-shop-sale-amazon-gif-7103876480481787784">Christmas Shopping GIF</a>from <a href="https://tenor.com/search/christmas-gifs">Christmas GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
      </div>
      </div>
  )
}
