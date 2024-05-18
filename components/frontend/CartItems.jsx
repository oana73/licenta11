import React from 'react'
import CartProduct from './CartProduct'
import EmptyCart from './EmptyCart'

export default function CartItems({cartItems}) {
  return (
    <div className='sm:col-span-8 col-span-full'>
      {cartItems.length>0 && <>
        <h2 className='py-2 mb-6 text-xl font-semibold'>Your cart</h2>
        <div className="flex items-center justify-between border-b border-slate-400 pb-3 font-semibold text-slate-300 text-sm mb-4">
          <h2 className='uppercase'>Products</h2>
          <h2 className='uppercase'>Quantity</h2>
          <h2 className='uppercase'>Price</h2>
        </div>
    </>}
    <div>
      {cartItems.length>0? cartItems.map((item,i)=>{
        return <CartProduct cartItem={item}  key={i}/>
      }):( 
        <EmptyCart/>
      )}
    </div>
    {/* Coupon */}
  </div>
  )
}
