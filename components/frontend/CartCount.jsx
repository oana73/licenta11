'use client'
import Link from 'next/link'
import React from 'react'
import { IoBagOutline } from 'react-icons/io5'
import { useSelector } from 'react-redux'

export default function CartCount() {
    const cartItems = useSelector((store)=> store.cart)
  return (
    <Link  href="/cart" className='relative inline-flex items-center py-3 text-center '>
      <IoBagOutline className='text-neutral-600'/>
      <span className='sr-only'>Cart</span>
      <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs text-neutral-300 bg-red-500 rounded-full top-0 -end-3.5 dark:border-gray-900">
          {cartItems.length}
      </div>
    </Link>
  )
}
