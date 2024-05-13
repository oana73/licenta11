'use client'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React from 'react'

export default function Breadcrumb({title}) {
  return (
    <div className="bg-white space-y-6 text-slate-900 text-xs">
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
