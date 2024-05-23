import React from 'react'
import MarketsCarousel from './MarketsCarousel'
import { getData } from '@/lib/getData'

export default async function MarketList() {
  const markets = await getData("markets")
  return (
    <div className='py-8'>
        <MarketsCarousel markets={markets}/>
    </div>
  )
}
