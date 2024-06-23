'use client'
import { ChevronRight } from 'lucide-react'
import React from 'react'

export default function Breadcrumb({title}) {
  return (
    <div className="space-y-6">
        <div className="flex items-center justify-between"> 
            <div className='flex items-center text-sm font-medium text-neutral-700 dark:text-neutral-300'>
                <span>Shop</span>
                <ChevronRight className='w-3 h-3'/>
                <p>{title}</p>
            </div>
        </div>
    </div>
  )
}
