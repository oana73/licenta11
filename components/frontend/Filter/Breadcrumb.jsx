import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Breadcrumb({title, slug}) {
  return (
    <div className="bg-white space-y-6 text-slate-900 text-xs">
        <div className="flex items-center justify-between"> 
            <div className='flex items-center'>
                <Link href="#">home</Link>
                <ChevronRight className='w-4 h-4'/>
                <p>{title}</p>
            </div>
            <p>1-40</p>
        </div>
    </div>
  )
}
