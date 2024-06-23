'use client'
import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

export default function Sorting({title, slug, isSearch}) {
  const searchParams = useSearchParams()
  const sortParam = searchParams.get("sort")
  const sortingLinks = [
    {
      title:'Relevance',
      href: `/category/${slug}`,
      sort:null
    },
    {
      title:'High to Low',
      href:`/category/${slug}?sort=desc`,
      sort:"desc"
    },
    {
      title:'Low to High',
      href:`/category/${slug}?sort=asc`,
      sort:"asc"
    },
  ]
  return (
    <div className='flex items-center justify-between '>
        <h2 className='text-xl font-medium capitalize'>{isSearch && "Search Results - "}{title}</h2>
        <div className='flex text-sm items-center gap-3'>
            <p>Sort by</p>
            <div className='flex items-center gap-2'>
              {
                sortingLinks.map((link,i)=>{
                  return(
                    <Link key={i} href={link.href} className={`${link.sort === sortParam? "border border-pink-600 text-pink-600 px-4 py-0.5 rounded-lg":"border border-neutral-500 px-4 py-0.5 rounded-lg text-neutral-700 dark:text-neutral-300"}`}>{link.title}</Link>
                  )
                })
              }
            </div>
        </div>
    </div>
  )
}
