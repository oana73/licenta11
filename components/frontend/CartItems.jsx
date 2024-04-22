import React from 'react'
import CartProduct from './CartProduct'

export default function CartItems({cartItems}) {
  return (
    <div className='col-span-8 sm:col-span-full'>
    <h2 className='py-2 mb-6 text-xl font-semibold'>Your cart</h2>
    <div className="flex items-center justify-between border-b border-slate-400 pb-3 font-semibold text-slate-300 text-sm mb-4">
      <h2 className='uppercase'>Products</h2>
      <h2 className='uppercase'>Quantity</h2>
      <h2 className='uppercase'>Price</h2>
    </div>
    <div>
      {cartItems.length>0? cartItems.map((item,i)=>{
        return <CartProduct cartItem={item}  key={i}/>
      }):( 
        <p>No Itmes </p>
      )}
    </div>
    {/* Coupon */}
    <div className="flex itmes-center gap-2 py-8">
        <input type="email" id="email" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter coupon"/>
        <button className='shrink-0 py-2.5 px-4 rounded-lg bg-slate-200'>Apply coupon</button>
    </div>
  </div>
  )
}
