import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import Breadcrumb from './Breadcrumb'
import Sorting from './Sorting'
import FilteredProducts from './FilteredProducts'
import Filter from './Filter'

export default function FilterComponent({products}) {
  return (
    <div>
        <div className="bg-white space-y-6 text-slate-900 py-8 px-4 text-xs">
            <Breadcrumb/>
            <Sorting/>
        </div>
        <div className='grid grid-cols-12 py-8 gap-4'>
            <div className='col-span-3'>
                <Filter/>
            </div>
            <div className='col-span-9'>
                <FilteredProducts products={products}/>
            </div>
        </div>
    </div>
  )
}
