import React from 'react'
import Breadcrumb from './Breadcrumb'
import Sorting from './Sorting'
import FilteredProducts from './FilteredProducts'
import Filter from './Filter'
import SidebarCategories from './SidebarCategories'

export default function FilterComponent({category,products}) {
  const { title, slug } = category
  return (
    <div className='mx-auto max-w-screen-2xl'>
        <div className="space-y-6 text-neutral-700 dark:text-neutral-300 py-8 text-xs ">
            <Breadcrumb title={title} />
            <Sorting title={title} slug={slug} isSearch={category?.isSearch}/>
        </div>
        <div className='grid grid-cols-12 gap-6'>
            <div className='col-span-3 mr-4'>
                <SidebarCategories/>
                <Filter slug={slug}/>
            </div>
            <div className='col-span-9'>
                <FilteredProducts products={products}/>
            </div>
        </div>
    </div>
  )
}
