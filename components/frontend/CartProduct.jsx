import Image from 'next/image'
import React from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa6'
import { IoTrashOutline } from 'react-icons/io5'

export default function CartProduct({cartItem}) {
  return (
    <div className='flex items-center justify-between border-b border-slate-400 pb-3 font-semibold text-slate-300 text-sm mb-4'>
    <div className="flex items-center gap-3">
      <Image src='/photo1.jpg' width={249} height={249} alt='' className='rounded-xl w-20 h-20'/>
      <div className="flex flex-col">
        <h2>Apple Watch</h2>
        <small>Golden</small>
      </div>
    </div>
    <div className='rounded-xl border flex gap-3 items-center '>
      <button className='border-r py-3 px-4'>
        <FaMinus/>
      </button>
      <p className='flex-grow py-2 px-4'>1</p>
      <button className='border-l py-3 px-4'>
        <FaPlus/>
      </button>
   </div>
   <div className="flex items-center gap-2">
      <h4>$342</h4>
      <button>
        <IoTrashOutline className='text-slate-600 w-5 h-5'/>
      </button>
   </div>
  </div>
  )
}
