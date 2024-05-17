import { getData } from '@/lib/getData'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default async function SidebarCategories() {
  const categoriesData = await getData('categories')
  //only categories with products
  const categories = categoriesData.filter((category)=>category.products.length>0)
  return (
    <div className="hidden sm:block bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700  mb-6 ">
      <h2 className='px-6 py-4 border-b border-gray-200 text-xl font-medium '>
        Category
      </h2>
      <div className='overflow-y-auto flex flex-col py-2 px-6'>
        {
          categories.map((category,i)=>{
            return(
              <div>
                <Link key={i} href={`/category/${category.slug}`} className='flex items-center hover:text-gray-900 duration-500 transition-all text-gray-500 '>
                  <span className=''>{category.title}</span>
                </Link>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
