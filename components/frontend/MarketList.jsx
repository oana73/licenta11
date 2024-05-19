import React from 'react'
import MarketsCarousel from './MarketsCarousel'
import { getData } from '@/lib/getData'

export default async function MarketList() {
  const markets = await getData("markets")
  return (
    <div className='py-8'>
      <div className='p-4'>
        <h2 className='text-center text-5xl font-serif text-neutral-700 dark:text-neutral-300 mb-8 '>Shop by market</h2>
        <MarketsCarousel markets={markets}/>
      </div>
    </div>
  )
}
