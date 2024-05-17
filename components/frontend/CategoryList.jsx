import Link from 'next/link'
import React from 'react'
import CategoryCarousel from './CategoryCarousel'

export default function CategoryList({category}) {
  return (
    <div className='mx-auto max-w-screen-2xl py-8 '>
      <div className=' flex justify-between items-center py-3 px-6  bg-gray-200 bg-opacity-25 rounded-lg'>
        <h2>
          {category.title}
        </h2>
        <Link href={`/category/${category.slug}`} className=' hover:underline py-2 dutation:300'>
        View More
        </Link> 
      </div>
      <div className=' bg-gray-300 '>
        <CategoryCarousel products={category.products}/>
      </div>
  </div>
  )
}
