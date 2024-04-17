import Link from 'next/link'
import React from 'react'
import CategoryCarousel from './CategoryCarousel'
import CommunityCarousel from './CommunityCarousel'
import { getData } from '@/lib/getData'

export default async function CommunityList() {
  const trainings = await getData('trainings')
  return (
    <div className='mx-auto max-w-screen-2xl bg-white border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700'>
      <div className=' flex justify-between items-center bg-slate-100 py-4 px-8 '>
        <h2>
          Community
        </h2>
        <Link href='#' className=' hover:underline '>
          view More
        </Link> 
      </div>
      <div className='py-4 '>
        <CommunityCarousel trainings = {trainings}/>
      </div>
  </div>
  )
}
