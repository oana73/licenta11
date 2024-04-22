'use client'
import { addToCart } from '@/redux/slices/cartSlice'
import { BaggageClaim } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'

export default function Product({product}) {
    const dispatch = useDispatch()
    function handdleAddToCart(){
        //dispatch the reducer
        dispatch(addToCart(product))
        toast.success("Item added Successfully")
    }
  return (
    <div className='mr-3 border border-gray-400 overflow-hidden'>
    <Link href={`/products/${product.slug}`}>
      <Image src={product.imageUrl} alt={product.title} width={375} height={480} className='w-full h-56 object-cover'/>
    </Link>
    <Link href={`/products/${product.slug}`}>
      <h2 className='text-center'>{product.title}</h2>
    </Link>
    <div className=" my-2 text-center">
      <p >ugx {product.discount}</p>
      <button onClick={()=>handdleAddToCart()} className='bg-slate-50'>
      <BaggageClaim/>
      </button>
    </div>
  </div>
  )
}
