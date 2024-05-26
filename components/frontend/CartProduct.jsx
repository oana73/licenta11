'use client'
import { decrementQty, incrementQty, removeFromCart } from '@/redux/slices/cartSlice'
import Image from 'next/image'
import React from 'react'
import toast from 'react-hot-toast'
import { FaMinus, FaPlus } from 'react-icons/fa6'
import { IoTrashOutline } from 'react-icons/io5'
import { useDispatch } from 'react-redux'

export default function CartProduct({cartItem}) {
  const dispatch = useDispatch()
  function handdleCartItemDelete(cartId){
    // dispatch the delete
    dispatch(removeFromCart(cartId))
    toast.success("Item deleted Successfully")
  }
  function handdleCartItemIncrement(cartId){
    // dispatch the delete
    dispatch(incrementQty(cartId))
  }
  function handdleCartItemDecrement(cartId){
    // dispatch the delete
    dispatch(decrementQty(cartId))
  }
  return (
    <div className='flex items-center justify-between border-b border-neutral-300  dark:border-neutral-700 pb-3 px-5 font-semibold text-neutral-700 dark:text-neutral-300 text-sm mb-4'>
    <div className="flex items-center gap-3 ">
      <Image src={cartItem.imageUrl} width={249} height={249} alt={cartItem.title} className='rounded-md w-20 h-20'/>
      <h2>{cartItem.title}</h2>
    </div>
    <div className='rounded-lg border flex gap-3 items-center '>
      <button onClick={()=>handdleCartItemDecrement(cartItem.id)} className='border-r py-1 px-2'>
        <FaMinus className='w-3 h-3'/>
      </button>
      <p className='py-1 px-3 text-xs'>{cartItem.qty}</p>
      <button onClick={()=>handdleCartItemIncrement(cartItem.id)}className='border-l py-1 px-2'>
        <FaPlus className='w-3 h-3'/>
      </button>
   </div>
   <div className="flex items-center gap-2">
      <h4>${cartItem.discount}</h4>
      <button onClick={()=>handdleCartItemDelete(cartItem.id)}>
        <IoTrashOutline className='text-neutral-700 dark:text-neutral-300 w-5 h-5'/>
      </button>
   </div>
  </div>
  )
}
