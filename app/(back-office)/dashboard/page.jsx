import React from 'react'
import Heading from "@/components/backoffice/Heading"
import LargeCards from '@/components/backoffice/LargeCards'
import SmallCards from '@/components/backoffice/SmallCards'
import Charts from '@/components/backoffice/Charts'
import CustomData from '@/components/backoffice/CustomData'
export default function page() {
  return (
    <div>
      <Heading className='py-4' title="Dashboard Overview"/>
      {/* Large Cards */}
      <LargeCards/>
      {/* Smal Cards */}
      <SmallCards/>
      {/* Charts */}
      <Charts/>
      {/* Recent Orders  */}
      {/* <CustomData/> */}
    </div>
  )
}
