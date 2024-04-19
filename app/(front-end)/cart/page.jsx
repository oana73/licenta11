import Breadcrumb from '@/components/frontend/Breadcrumb'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa6'
import { IoTrashOutline } from 'react-icons/io5'

export default function Cart() {
  return (
    <div className='mx-auto max-w-screen-2xl'>
        <Breadcrumb/>
        <div className="grid grid-cols-12 gap-14">
          <div className='col-span-8'>
            <h2 className='py-2 mb-6 text-xl font-semibold'>Your cart</h2>
            <div className="flex items-center justify-between border-b border-slate-400 pb-3 font-semibold text-slate-300 text-sm mb-4">
              <h2 className='uppercase'>Products</h2>
              <h2 className='uppercase'>Quantity</h2>
              <h2 className='uppercase'>Price</h2>
            </div>
            {/* Cart1 */}
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
            {/* Cart2 */}
            <div className='flex items-center justify-between border-b border-slate-400 pb-3 font-semibold text-slate-300 text-sm'>
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
            {/* Coupon */}
            <div className="flex itmes-center gap-2 py-8">
                <input type="email" id="email" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter coupon"/>
                <button className='shrink-0 py-2.5 px-4 rounded-lg bg-slate-200'>Apply coupon</button>
            </div>
          </div>
          <div className='col-span-4 sm:bock bg-slate-50 border border-gray-400 text-slate-700 overflow-hidden rounded-xl p-5 font-semibold'>
            <h2 className='text-xl pb-3'>Cart Total</h2>
            <div className='flex items-center justify-between border-b pb-6'>
              <span>Subtotal</span>
              <span>$322</span>
            </div>
            <div className='flex items-center justify-between pb-4 mt-2'>
              <span>Tax</span>
              <span>0</span>
            </div>
            <div className='flex items-center justify-between pb-4'>
              <span>Shopping</span>
              <span>$2</span>
            </div>
            <p className='border-b pb-6 font-normal'>We only charge for ship</p>
            <div className='flex items-center justify-between py-4'>
              <span>Total</span>
              <span>$324</span>
            </div>
            <Link href='#' className='bg-slate-200 rounded-lg py-2 px-4 font-normal'>Continue to payment</Link>
          </div>
        </div>
    </div>
  )
}
