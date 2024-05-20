import { getData } from '@/lib/getData'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default async function SidebarCategories() {
  const categoriesData = await getData('categories')
  //only categories with products
  const categories = categoriesData.filter((category)=>category.products.length>0)
  return (
    <div className="hidden sm:block dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700 rounded-lg shadow-sm mb-6 ">
      <h2 className='px-6 py-4 border-b border-neutral-200 dark:border-neutral-700 text-xl font-medium'>
        Category
      </h2>
      <div className='overflow-y-auto flex flex-col py-2 px-6'>
        {
          categories.map((category,i)=>{
            return(
              <div>
                <Link key={i} href={`/category/${category.slug}`} className='flex items-center hover:text-pink-700 duration-500 transition-all text-neutral-700 dark:text-neutral-300 '>
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
