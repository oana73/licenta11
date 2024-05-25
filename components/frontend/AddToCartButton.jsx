'use client'
import { addToCart } from '@/redux/slices/cartSlice'
import { ShoppingBag } from 'lucide-react'
import React from 'react'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'

export default function AddToCartButton({product}) {
    const dispatch = useDispatch()
    function handdleAddToCart(){
        //dispatch the reducer
        dispatch(addToCart(product))
        toast.success("Item added Successfully")
    }
  return (
    <button onClick={()=>handdleAddToCart()} className='bg-neutral-700 hover:bg-gradient-to-r hover:from-pink-400 hover:to-pink-700  text-white rounded-lg py-2'>
        <span>Add to cart</span>
    </button>
  )
}
