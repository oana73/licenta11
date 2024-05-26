import Link from 'next/link'
import React from 'react'

export default function EmptyCart() {
  return (
    <div className='flex items-center justify-center min-h-screen md:text-2xl'>
        <p>Your cart is empty!</p>
        <Link href='/'>Go to shop!</Link>
    </div>
  )
}
