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
    <button onClick={()=>handdleAddToCart()} className='items-center w-1/2 space-x-2 px-4 py-2 rounded-md bg-black text-white '>
        <span>Add to cart</span>
    </button>
  )
}
