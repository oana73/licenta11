import Link from 'next/link'
import React from 'react'
import CategoryCarousel from './CategoryCarousel'

export default function CategoryList({category}) {
  return (
    <div className='mx-auto max-w-screen-2xl py-12 '>
      <div className=' flex justify-between items-center px-6 '>
        <h2>
          {category.title}
        </h2>
        <Link href='#' className=' hover:underline '>
          view More
        </Link> 
      </div>
      <div className='p-4 '>
        <CategoryCarousel products={category.products}/>
      </div>
  </div>
  )
}
