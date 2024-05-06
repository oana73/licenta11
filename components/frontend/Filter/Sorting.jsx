'use client'
import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

export default function Sorting({title, slug, isSearch}) {
  const searchParams = useSearchParams()
  const sortParam = searchParams.get("sort")
  const pathname = usePathname()
  console.log(sortParam)
  //console.log(pathname)
  const sortingLinks = [
    {
      title:'Relevance',
      href: `/category/${slug}`,
      sort: null
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
        {/* <h2 className='text-xl'>Search result</h2> */}
        <h2 className='text-xl font-medium'>{isSearch && "Search Results - " }{title}</h2>
        <div className='flex text-sm items-center gap-3'>
            <p>Sort by</p>
            <div className='flex items-center'>
              {
                sortingLinks.map((link,i)=>{
                  //console.log(actualPathName, link.href)
                  return(
                    <Link key={i} href={link.href} className={`${link.sort === sortParam? "border border-cyan-500 text-cyan-500 px-2 py-1":"border border-slate-500 px-2 py-1"}`}>{link.title}</Link>
                  )
                })
              }
            </div>
        </div>
    </div>
  )
}
