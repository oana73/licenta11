import React from 'react'
import SalesCharts from './SalesCharts'
import BestSellingCharts from './BestSellingCharts'

export default function Charts() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
        <SalesCharts/>
        <BestSellingCharts/>
    </div>
  )
}
