import React from 'react'
import CatCarousel from './CatCarousel'
import { getData } from '@/lib/getData'

export default async function CatList() {
  const categories = await getData("categories")
  return (
    <div className='py-12'>
      <div className=''>
        <h2>MarketList</h2>
      </div>
      <div className=''>
        <CatCarousel categories={categories}/>
      </div>
    </div>
  )
}
