'use client'
import { ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'

export default function CartBanner() {
  const cartItems = useSelector((store)=>store.cart)
  const subTotal = cartItems.reduce((acc,currentItem)=>{
    return acc + currentItem.discount * currentItem.qty
  },0).toFixed(2) ?? 0;
  const shipping = 10.00
  const totalPrice = (Number(subTotal) + Number(shipping)).toFixed(2)
  return (
    <div className="bg-neutral-100 rounded-xl mb-6">
    <div className="p-4">
      <div className="sm:flex sm:items-center sm:justify-between">
        <div className="flex items-center flex-1">
          <div className="inline-flex items-center justify-center flex-shrink-0 bg-neutral-400 dark:bg-neutral-800 rounded-full w-9 h-9 text-neutral-50">
            <ShoppingBag className="w-5 h-5" />
          </div>
          <p className="ml-3 text-base font-normal text-neutral-900">
            You have {cartItems.length} items in cart. Sub total is{" "}
            <span className="font-bold">${totalPrice}</span>
          </p>
        </div>

        <div className="mt-4 sm:mt-0">
          <Link
            href="/cart"
            className="inline-flex items-center px-4 py-2 text-sm font-bold text-neutral-600 transition-all duration-200 border border-neutral-300 rounded-md bg-neutral-50 hover:bg-white hover:text-neutral-900 focus:outline-none focus:ring-2 focus:text-neutral-900 focus:ring-offset-2 focus:ring-neutral-500"
          >
            Edit cart
          </Link>
        </div>
      </div>
    </div>
  </div>
  )
}
