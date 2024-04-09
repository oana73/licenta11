import React from 'react'
import SmallCard from './SmallCard'
import { ArrowUpDown, Loader, ShoppingCart, SquareCheckBigIcon } from 'lucide-react'

export default function SmallCards() {
    const orderStatus=[{
        title: "Total Orders",
        number: 100,
        iconColor: "bg-cyan-600",
        icon: ShoppingCart
    },
    {
        title: "Orders Pending",
        number: 100,
        iconColor: "bg-bc5090",
        icon: Loader 
    },
    {
        title: "Orders Processing",
        number: 300,
        iconColor: "bg-ff6361",
        icon: ArrowUpDown
    },
    {
        title: "Orders deliverd",
        number: 500,
        iconColor: "bg-ffa600",
        icon: SquareCheckBigIcon
    },
]
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8'>
        {
            orderStatus.map((data,i)=>{
                return <SmallCard data={data}/>
                
            })
        }
    </div>
  )
}
