import CategoryList from '@/components/frontend/CategoryList'
import { getData } from '@/lib/getData'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default async function page() {
  const categoriesData = await getData('categories')
  const categories = categoriesData.filter((category)=>{
    return category.products.length >0 
  })
  return (
    <div className='grid grid-cols-12 gap-6 mb-6 mx-auto max-w-screen-2xl'>
      <div className="sm:col-span-2 hidden sm:block p-2 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
       <div className="">
        <div className='flex items-center justify-center'>
          <Image width={50} height={50} src='/logo.png ' alt="" className='w-18 h-18 rounded-full object-cover' />
        </div>
        <h2 className='py-4 text-sm'>Supplier Market</h2>
        <p className='text-sm line-clamp-2 mb-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum dolore aperiam deserunt corrupti accusantium fugit et incidunt distinctio dolor labore tempora blanditiis quae delectus asperiores nemo, voluptatem placeat suscipit voluptas?</p>
       </div>
       <div className='text-sm flex flex-col'>
        <Link className='py-2' href="#" >Category 1</Link>
        <Link className='py-2' href="#" >Category 1</Link>
        <Link className='py-2' href="#" >Category 1</Link>
        <Link className='py-2' href="#" >Category 1</Link>
        <Link className='py-2' href="#" >Category 1</Link>
       </div>
      </div>
      <div className="col-span-full sm:col-span-10 rounded-md">
      {
      categories.map((category,i)=>{
        return(
          <div key={i}>
            <CategoryList category={category}/>
          </div>
        )}
      )
    }
      </div>
    </div>
  )
}
