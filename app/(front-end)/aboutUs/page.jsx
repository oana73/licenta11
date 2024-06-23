import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div className="relative">
      <img src="/page.jpg" width={3489} height={1664} alt="" className="opacity-80" />
      <div className='mx-auto max-w-screen-2xl text-white dark:text-neutral-900'>
        <div className="absolute top-1/2 transform -translate-y-1/2 w-1/2 text-justify">
          <h1 className='mb-3 lg:mb-8 text-xl md:text-3xl lg:text-8xl font-serif'>Spread Art!</h1>
          <span className='break-all text-xs md:text-sm lg:text-2xl font-medium'>
            Here creativity knows no bounds! Discover a treasure trove of handcrafted wonders, each piece telling a unique story. Whether you're a buyer seeking one-of-a-kind treasures or an artist looking to sell your art, join our community and indulge in the magic of handmade craftsmanship.
          </span>
          <div className='grid grid-flow-col justify-stretch gap-8 mt-3 lg:mt-8 text-xs md:text-sm lg:text-2xl text-center'>
            <Link href='/' className='border rounded-xl py-2 hover:bg-gray-100 hover:bg-opacity-25 transition-all duration-200'>BUY</Link>
            <Link href='/register-supplier' className='border rounded-xl py-2 hover:bg-gray-100 hover:bg-opacity-25 transition-all duration-200'>SELL</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
