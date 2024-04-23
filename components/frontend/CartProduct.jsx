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
    <div className='flex items-center justify-between border-b border-slate-400 pb-3 font-semibold text-slate-300 text-sm mb-4'>
    <div className="flex items-center gap-3">
      <Image src={cartItem.imageUrl} width={249} height={249} alt={cartItem.title} className='rounded-xl w-20 h-20'/>
      <div className="flex flex-col">
        <h2>{cartItem.title}</h2>
      </div>
    </div>
    <div className='rounded-xl border flex gap-3 items-center '>
      <button onClick={()=>handdleCartItemDecrement(cartItem.id)} className='border-r py-3 px-4'>
        <FaMinus/>
      </button>
      <p className='flex-grow py-2 px-4'>{cartItem.qty}</p>
      <button onClick={()=>handdleCartItemIncrement(cartItem.id)}className='border-l py-3 px-4'>
        <FaPlus/>
      </button>
   </div>
   <div className="flex items-center gap-2">
      <h4>${cartItem.discount}</h4>
      <button onClick={()=>handdleCartItemDelete(cartItem.id)}>
        <IoTrashOutline className='text-slate-600 w-5 h-5'/>
      </button>
   </div>
  </div>
  )
}
