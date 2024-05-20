import Link from 'next/link'
import React from 'react'
import CategoryCarousel from './CategoryCarousel'
import { MoveRight } from 'lucide-react'

export default function CategoryList({category}) {
  return (
    <div className='mx-auto max-w-screen-2xl py-8 mt-4'>
      <div className='flex justify-between items-center text-neutral-700 dark:text-neutral-300 py-3 px-6 rounded-t-lg border border-neutral-200 dark:border-neutral-800'>
        <h2 className='font-bold text-lg'>
          {category.title}
        </h2>
        <Link href={`/category/${category.slug}`} className="inline-flex items-center text-xs font-bold tracking-widest text-neutral-700 dark:text-neutral-300 uppercase group">
        view more
        <MoveRight className='w-4 h-4 ml-2 transition-all duration-200 transform group-hover:translate-x-1'/>
        </Link> 
      </div>
      <div className='rounded-b-lg border border-t-0 border-neutral-200 dark:border-neutral-800'>
        <CategoryCarousel products={category.products}/>
      </div>
    </div>
  )
}
