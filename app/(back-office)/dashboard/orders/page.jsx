import OrderCard from '@/components/Order/OrderCard'
import { authOptions } from '@/lib/authOptions'
import { getData } from '@/lib/getData'
import { getServerSession } from 'next-auth'
import React from 'react'
import { get } from 'react-hook-form'

export default async function page() {
  //fetch all orders
  const orders = await getData('orders')
  //get userid
  const session = await getServerSession(authOptions)
  if(!session) return
  const userId = session?.user?.id
  console.log(userId)
  if(orders.length===0|| !orders){
    return <p>No orders yet</p>
  }
  //filter by userId
  const userOrders = orders.filter((order)=>order.userId===userId)
//   console.log(userOrders)
  return (
    <div className="px-4 m-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-6xl mx-auto">
            <div>
                <h1 className="flex items-center justify-between py-6 px-12 dark:bg-neutral-700 rounded-lg bg-pink-600 shadow-xl text-xl">My Orders</h1>
            </div>

            <ul className="mt-8 space-y-5 lg:mt-12 sm:space-y-6 lg:space-y-10">
                {
                    userOrders.map((order,i)=>{
                        return <OrderCard key={i} order={order}/>
                    })
                }
            </ul>
        </div>
    </div>
  )
}
