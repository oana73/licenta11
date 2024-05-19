'use client'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React from 'react'

export default function Breadcrumb({title}) {
  return (
    <div className="space-y-6 text-neutral-700 dark:text-neutral-300 text-xs">
        <div className="flex items-center justify-between"> 
            <div className='flex items-center'>
                <Link href="#">Shop</Link>
                <ChevronRight className='w-4 h-4'/>
                <p>{title}</p>
            </div>
        </div>
    </div>
  )
}
