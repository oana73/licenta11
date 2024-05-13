import { getData } from '@/lib/getData'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default async function SidebarCategories() {
  const categoriesData = await getData('categories')
  //only categories with products
  const categories = categoriesData.filter((category)=>category.products.length>0)
  return (
    <div className="col-span-4 hidden sm:block bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <h2 className='bg-slate-100 py-2 px-6 border-b border-gray-200'>
        Shop by categorey 
      </h2>
      <div className='h-[300px] overflow-y-auto flex flex-col py-2 px-6'>
        {
          categories.map((category,i)=>{
            return(
              <div>
                <Link key={i} href={`/category/${category.slug}`} className='flex items-center hover:bg-slate-50 duration-500 transition-all'>
                  <Image width={556} height={556} src={category.imageUrl} alt='' className='w-10 h-10 rounded-full object-cover border border-gray-300' />
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
