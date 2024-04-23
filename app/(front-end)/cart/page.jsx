'use client'
import Breadcrumb from '@/components/frontend/Breadcrumb'
import CartItems from '@/components/frontend/CartItems'
import CartProduct from '@/components/frontend/CartProduct'
import CartSubtotal from '@/components/frontend/CartSubtotal'
import EmptyCart from '@/components/frontend/EmptyCart'
import { current } from '@reduxjs/toolkit'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa6'
import { IoTrashOutline } from 'react-icons/io5'
import { useSelector } from 'react-redux'

export default function Cart() {
  const cartItems = useSelector((store)=>store.cart)
  const subTotal = cartItems.reduce((acc,currentItem)=>{
    return acc + currentItem.discount * currentItem.qty
  },0).toFixed(2) ?? 0;
  console.log(cartItems)
  return (
    <div className='mx-auto max-w-screen-2xl mt-10'>
        <Breadcrumb/>
        {cartItems.length>0?(
          <div className="grid grid-cols-12 gap-6 md:gap-14">
            <CartItems cartItems={cartItems} />
            <CartSubtotal subTotal={subTotal} />
          </div>
        ):<EmptyCart/>}
    </div>
  )
}
