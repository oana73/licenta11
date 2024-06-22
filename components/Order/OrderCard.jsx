import { convertIsoToNormal } from '@/lib/convertIsoToNormal'
import { generateSlug } from '@/lib/generateSlug'
import { isoDate } from '@/lib/isoDate'
import Link from 'next/link'
import React from 'react'

export default function OrderCard({order}) {
  const orderCreationDate = convertIsoToNormal(order.createdAt)
  const subTotal = order?.orderItems.reduce((total,item)=>total+ item.price*item.quantity, 0).toFixed(2)
  return (
    <li className="overflow-hidden bg-white border border-neutral-200 rounded-md">
    <div className="lg:flex">
        <div className="w-full border-b border-neutral-200 lg:max-w-xs lg:border-b-0 lg:border-r bg-neutral-50">
            <div className="px-4 py-6 sm:p-6 lg:p-8">
                <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-1">
                    <div>
                        <p className="text-sm font-medium text-neutral-500">Order ID</p>
                        <p className="text-sm font-bold text-neutral-900 mt-0.5">#{order.orderNumber}</p>
                    </div>

                    <div>
                        <p className="text-sm font-medium text-neutral-500">Date</p>
                        <p className="text-sm font-bold text-neutral-900 mt-0.5">{orderCreationDate}</p>
                    </div>

                    <div>
                        <p className="text-sm font-medium text-neutral-500">Total Amount</p>
                        <p className="text-sm font-bold text-neutral-900 mt-0.5">${subTotal}</p>
                    </div>

                    <div>
                        <p className="text-sm font-medium text-neutral-500">Order Status</p>
                        <div className="mt-0.5 flex items-center">

                            <span className="text-sm font-bold text-neutral-900"> {order.orderStatus} </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="flex-1 px-4 py-6 sm:p-6 lg:p-8">
            <ul className="space-y-7">
                {
                    order.orderItems.length>0? order.orderItems.map((item,i)=>{
                        const slug = generateSlug(item.title)
                        return <li key={i} className="relative flex pb-10 sm:pb-0">
                        <div className="flex-shrink-0">
                            <img className="object-cover rounded-lg w-28 h-28" src={item.imageUrl} alt={item.title} />
                        </div>
    
                        <div className="flex flex-col justify-between flex-1 ml-5">
                            <div className="sm:grid sm:grid-cols-2 sm:gap-x-5">
                                <div>
                                    <p className="text-base font-bold text-neutral-900">{item.title}</p>
                                </div>
    
                                <div className="mt-4 sm:mt-0 flex items-center justify-between">
                                    <p className="mt-1.5 text-sm font-medium text-neutral-500">{item.quantity}</p>
                                    <p className="text-base font-bold text-left text-neutral-900 sm:text-right">${item.price}</p>
                                </div>
                            </div>
    
                            <div className="absolute bottom-0 left-0 sm:relative">
                                <div className="flex space-x-5">
                                    <Link href={`/products/${slug}`} title={item.title} className="p-1 -m-1 text-sm font-medium text-neutral-500 transition-all duration-200 rounded hover:text-neutral-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-900"> View Product </Link>
    
                                    <span className="text-neutral-200"> | </span>
    
                                    <Link href="#" title="" className="p-1 -m-1 text-sm font-medium text-neutral-500 transition-all duration-200 rounded hover:text-neutral-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-900"> Similar Product </Link>
                                </div>
                            </div>
                        </div>
                    </li>
     
                    }):""
                }
            </ul>

            <hr className="mt-8 border-neutral-200" />

            <div className="flex items-center mt-8 space-x-5">
                <button
                    type="button"
                    className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-bold text-neutral-900 transition-all duration-200 bg-white border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 hover:bg-neutral-100"
                >
                    View Order
                </button>

                <Link
                    href={`/dashboard/orders/${order.id}/invoice`}
                    className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-bold text-neutral-900 transition-all duration-200 bg-white border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 hover:bg-neutral-100"
                >
                    View Invoice
                </Link>
            </div>
        </div>
    </div>
</li>
  )
}
