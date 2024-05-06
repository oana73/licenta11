import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import Breadcrumb from './Breadcrumb'
import Sorting from './Sorting'
import FilteredProducts from './FilteredProducts'
import Filter from './Filter'

export default function FilterComponent({category,products}) {
  const { title,slug} = category
  const productCount = category.products.length
  return (
    <div>
        <div className="bg-white space-y-6 text-slate-900 py-8 px-4 text-xs">
            <Breadcrumb title={title} resultCount={productCount} />
            <Sorting title={title} slug={slug} isSearch={category?.isSearch}/>
        </div>
        <div className='grid grid-cols-12 py-8 gap-4'>
            <div className='col-span-3'>
                <Filter slug={slug}/>
            </div>
            <div className='col-span-9'>
                <FilteredProducts productCount={productCount} products={products}/>
            </div>
        </div>
    </div>
  )
}
