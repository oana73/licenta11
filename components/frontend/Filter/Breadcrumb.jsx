'use client'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React from 'react'

export default function Breadcrumb({title, resultCount}) {
  
  const searchParams = useSearchParams()
  const currentPage = searchParams.get("page")||1
  const pageSize = 3
  const startRange = (currentPage - 1)*pageSize + 1 
  const endRange = Math.min(currentPage*pageSize, resultCount)
  // take: parseInt(pageSize),
  //Page 1: 1-3
  //Page 2: 4-6
  //Page 3: 7-9
  return (
    <div className="bg-white space-y-6 text-slate-900 text-xs">
        <div className="flex items-center justify-between"> 
            <div className='flex items-center'>
                <Link href="#">home</Link>
                <ChevronRight className='w-4 h-4'/>
                <p>{title}</p>
            </div>
            <p>{startRange}-{endRange} of {resultCount} results</p>
        </div>
    </div>
  )
}
