import Breadcrumb from '@/components/frontend/Breadcrumb'
import CategoryList from '@/components/frontend/CategoryList'
import { getData } from '@/lib/getData'
import Image from 'next/image'
import React from 'react'

export default async function page({params:{slug}}) {
  const market = await getData(`/markets/details/${slug}`)
  const marketCategoryIds = market.categoryIds
   
  const categoriesData = await getData('categories')
  const categories = categoriesData.filter((category)=>{
    return category.products.length >0 
  })
  const marketCategories = categories.filter((category)=> marketCategoryIds.includes(category.id))

  return (
    <>
      <Breadcrumb />
      <div className='mx-auto max-w-screen-2xl p-2 border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 flex items-center gap-6'>
        <div className=''>
          <Image width={300} height={300} src={market.imageUrl} alt={market.title} className='w-24 h-24 rounded-full object-cover' />
        </div>
        <div className=''>
          <h2 className='py-4 text-base lg:text-2xl'>{market.title}</h2>
          <p className='text-sm line-clamp-2 mb-4'>{market.description}</p>
        </div>
      </div>
      <div className='grid grid-cols-12 gap-6 mb-6 mx-auto max-w-screen-2xl'>
        <div className='col-span-full sm:col-span-12 rounded-md'>
          {
            marketCategories.map((category, i) => {
              return (
                <div className='space-y-6' key={i}>
                  <CategoryList category={category} />
                </div>
              );
            })
          }
        </div>
      </div>
    </>
  );

}
