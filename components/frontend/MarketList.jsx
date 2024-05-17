import React from 'react'
import MarketsCarousel from './MarketsCarousel'
import { getData } from '@/lib/getData'

export default async function MarketList() {
  const markets = await getData("markets")
  return (
    <div className='py-12'>
      <div className='bg-slate-50 rounded-lg p-4'>
        <h2 className='text-center py-2 text-2xl'>Shop by market</h2>
        <MarketsCarousel markets={markets}/>
      </div>
    </div>
  )
}
