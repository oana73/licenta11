import React from 'react'
import Heading from './Heading'
import Link from 'next/link'
import { Plus } from 'lucide-react'

export default function PageHeader({heading, linkTitle, href}) {
  return (
    <div className="flex justify-between py-4 mb-4" >
      <Heading title={heading}/>
      <Link className='text-white bg-[#24292F] hover:bg-[#24292F]/90 font-medium rounded-lg text-sm px-5 py-3 text-center inline-flex items-center dark:bg-[#050708]/30  dark:hover:bg-teal-700 me-2 space-x-3' 
        href={href}>
        <Plus/>
        <span>{linkTitle}</span>
        </Link>
    </div>
  )
}
