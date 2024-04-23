import Link from 'next/link'
import React from 'react'

export default function EmptyCart() {
  return (
    <div className='flex items-center justify-center min-h-screen'>
        <p className='md:text-2xl'>Your cart is empty!
            <Link href='/' >Go to shop!</Link>
        </p>
    </div>
  )
}
