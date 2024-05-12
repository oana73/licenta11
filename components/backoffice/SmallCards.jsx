import React from 'react'
import SmallCard from './SmallCard'
import { ArrowUpDown, Loader, ShoppingCart, SquareCheckBigIcon } from 'lucide-react'

export default function SmallCards({orders}) {
    const status = {
        pending: "PENDING",
        processing: "PROCESSING",
        shipped:"SHIPPED",
        delivery:"DELIVERED",
        canceled:"CANCELED"
      }
    function getOrdersCountByStatus(status){
        const filterdOrders = orders.filter((order)=> order.orderStatus === status )
        const count = filterdOrders.length
        return count
    }
    const ordersCount = orders.length
    const pendingOrdersCount = getOrdersCountByStatus(status.pending)
    const processingOrdersCount = getOrdersCountByStatus(status.processing)
    const deliverdOrdersCount = getOrdersCountByStatus(status.delivery)
    const canceledOrdersCount = getOrdersCountByStatus(status.canceled)
    
    const orderStatus=[{
        title: "Total Orders",
        number: ordersCount,
        iconColor: "bg-cyan-600",
        icon: ShoppingCart
    },
    {
        title: "Orders Pending",
        number: pendingOrdersCount,
        iconColor: "bg-[#bc5090]",
        icon: Loader 
    },
    {
        title: "Orders Processing",
        number: processingOrdersCount,
        iconColor: "bg-[#ff6361]",
        icon: ArrowUpDown
    },
    {
        title: "Orders deliverd",
        number: deliverdOrdersCount,
        iconColor: "bg-[#ffa600]",
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
