import React from 'react'
import CartProduct from './CartProduct'
import EmptyCart from './EmptyCart'

export default function CartItems({cartItems}) {
  return (
    <div className='sm:col-span-8 col-span-full'>
      {cartItems.length>0 && <>
        <div className="flex items-center justify-between border-b border-neutral-300  dark:border-neutral-700 font-semibold text-neutral-700 dark:text-neutral-300 text-sm px-6 py-2 mb-3">
          <h2 className='uppercase text-neutral-700 dark:text-neutral-300'>Products</h2>
          <h2 className='uppercase text-neutral-700 dark:text-neutral-300'>Quantity</h2>
          <h2 className='uppercase text-neutral-700 dark:text-neutral-300'>Price</h2>
        </div>
      </>}
      <div>
        {cartItems.length > 0 ? 
          cartItems.map((item, i) => {
            return <CartProduct cartItem={item} key={i} />
          }) : (
          <EmptyCart />
        )}
      </div>
    </div>
  )
}
