'use client'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Breadcrumb() {
  const pathname = usePathname()
  const pathArr = pathname.split("/")
  pathArr.shift()
  console.log(pathArr)
  return (
    <div className='mx-auto max-w-screen-2xl'>
      <nav className="flex mb-4" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse mt-4">
          <li className="inline-flex items-center">
            <Link href="/" className="inline-flex items-center text-sm font-medium text-neutral-700 dark:text-neutral-300">
              Shop
            </Link>
          </li>
          {
            pathArr.map((item, i) => {
              return (
                <li key={i}>
                  <div className="flex items-center capitalize">
                    <ChevronRight className='w-3 h-3 mx-1 text-neutral-300' />
                    <span className="ms-1 text-sm font-medium text-neutral-700 dark:text-neutral-300">{item}</span>
                  </div>
                </li>
              )
            })
          }
        </ol>
      </nav>
    </div>
  )
  
}
