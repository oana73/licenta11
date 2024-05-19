'use client'
import { addToCart } from '@/redux/slices/cartSlice'
import { BaggageClaim } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import toast from 'react-hot-toast'
import { IoBagAddOutline } from 'react-icons/io5'
import { useDispatch } from 'react-redux'

export default function Product({product}) {
    const dispatch = useDispatch()
    function handdleAddToCart(){
        //dispatch the reducer
        dispatch(addToCart(product))
        toast.success("Item added Successfully")
    }
  return (
    <div className='mr-3 border border-neutral-400 overflow-hidden w-72 h-50 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl'>
    <Link href={`/products/${product.slug}`}>
      <Image src={product.imageUrl} alt={product.title} width={500} height={500} className='h-45 w-72 object-cover rounded-t-xl'/>
    </Link>
    <div className='px-4 py-3 w-72 ' >
    <span class="text-neutral-400 mr-3 uppercase text-xs">Brand</span>
      <h3 className='font-bold text-neutral-700 truncate block capitalize'>{product.title}</h3>
        <div className=" my-2 flex items-center">
          <p className='text-lg font-semibold text-neutral-700 cursor-auto my-3' >${product.discount}</p>
          <del className='text-neutral-700'>
              <p class="text-sm text-neutral-600 cursor-auto ml-2">${product.price}</p>
          </del>
          <button onClick={()=>handdleAddToCart()} className='bg-slate-50 ml-auto'>
          <IoBagAddOutline className='w-6 h-6 text-neutral-700'/>
          </button>
        </div>
    </div>
  </div>
  )
}