import React from 'react'
import LargeCard from './LargeCard'

export default function LargeCards() {
    const orderStats=[{
        period: "Today Orders",
        sales: 10000,
        color: "bg-cyan-600"
    },
    {
        period: "Yesterday Orders",
        sales: 10000,
        color: "bg-bc5090"
    },
    {
        period: "This Month",
        sales: 30000,
        color: "bg-ff6361"
    },
    {
        period: "All Time Sales",
        sales: 50000,
        color: "bg-ffa600"
    },
]
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8'>
        {
            orderStats.map((item,i)=>{
                return <LargeCard className='bg-green-600' data={item} key={i}/>
                
            })
        }
    </div>
  )
}
