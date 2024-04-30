import { getData } from '@/lib/getData'
import Link from 'next/link'
import React from 'react'

export default async function SidebarCategories() {
  const categoriesData = await getData('categories')
  //only categories with products
  const categories = categoriesData.filter((category)=>category.products.length>0)
  return (
    <div className="w-1/3 hidden sm:block bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <h2 className='bg-slate-100 py-2 px-6 border-b border-gray-200'>
        Shop by categorey 
      </h2>
      <div className='py-2 px-6 h-[300px] overflow-y-auto flex flex-col gap-2'>
        {
          categories.map((category,i)=>{
            return(
              <Link key={i} href={`/category/${category.slug}`} className='flex items-center hover:bg-slate-50 duration-500 transition-all'>
                <span className=''>{category.title}</span>
              </Link>
            )
          })
        }
        
      </div>
    </div>
  )
}
