import Breadcrumb from '@/components/frontend/Breadcrumb'
import CategoryList from '@/components/frontend/CategoryList'
import { getData } from '@/lib/getData'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default async function page({params:{slug}}) {
   const market = await getData(`/markets/details/${slug}`)
   const marketCategoryIds = market.categoryIds
    console.log(marketCategoryIds)
   
  const categoriesData = await getData('categories')
  const categories = categoriesData.filter((category)=>{
    return category.products.length >0 
  })
  const marketCategories = categories.filter((category)=> marketCategoryIds.includes(category.id))
  console.log(marketCategories)
  return (
  <>
  <Breadcrumb/>
  <div className=' p-2 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 flex items-center gap-6'>
      <div className=''>
        <Image width={50} height={50} src={market.imageUrl} alt={market.title} className='w-18 h-18 rounded-full object-cover' />
      </div>
      <div className="">
      <h2 className='py-4 text-base lg:text-2xl'>{market.title}</h2>
      <p className='text-sm line-clamp-2 mb-4'>{market.description}</p>
      </div>
  </div>
    <div className='grid grid-cols-12 gap-6 mb-6 mx-auto max-w-screen-2xl'>
    <div className="col-span-full sm:col-span-12 rounded-md">
    {
    marketCategories.map((category,i)=>{
      return(
        <div className='space-y-6' key={i}>
          <CategoryList isMarketPage={false} category={category}/>
        </div>
      )}
    )
  }
    </div>
  </div>
  </>
  )
}
