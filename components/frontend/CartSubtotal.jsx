import Link from 'next/link'
import React from 'react'

export default function CartSubtotal({subTotal}) {
  const shipping = 10.00
  const tax = 0.00
  const totalPrice = (Number(subTotal) + Number(shipping)+ Number(tax)).toFixed(2)
  return (
    <div className='sm:col-span-4 col-span-full sm:bock bg-slate-50 border border-gray-400 text-slate-700 overflow-hidden rounded-xl p-5 font-semibold'>
    <h2 className='text-xl pb-3'>Cart Total</h2>
    <div className='flex items-center justify-between border-b pb-6'>
      <span>Subtotal</span>
      <span>${subTotal}</span>
    </div>
    <div className='flex items-center justify-between pb-4 mt-2'>
      <span>Tax</span>
      <span>${tax}</span>
    </div>
    <div className='flex items-center justify-between pb-4'>
      <span>Shipping</span>
      <span>${shipping}</span>
    </div>
    <p className='border-b pb-6 font-normal'>We only charge for ship</p>
    <div className='flex items-center justify-between py-4'>
      <span>Total</span>
      <span>${totalPrice}</span>
    </div>
    <Link href='/checkout' className='bg-slate-200 rounded-lg py-2 px-4 font-normal'>Continue to payment</Link>
  </div>
  )
}
