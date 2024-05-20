import { convertIsoToNormal } from '@/lib/convertIsoToNormal'
import { MoveRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function BlogCart({training}) {
    const normalDate = convertIsoToNormal(training.createdAt)
  return (
    <div className="group">
    <div className="relative">
      <div className="block overflow-hidden aspect-w-16 aspect-h-9 rounded-xl">
        <img className="object-cover w-full h-48 transition-all duration-200 transform group-hover:scale-110"
          src={training.imageUrl} alt={training.title}/>
      </div>
      <span
        className="absolute px-3 py-2 text-xs font-bold tracking-widest text-neutral-700 uppercase bg-white rounded left-3 top-3">
        Read
      </span>
    </div>
    <p className="mt-6 text-sm font-medium text-neutral-500">
      {normalDate}
    </p>
    <p className="mt-4 text-xl font-bold leading-tight text-neutral-700 dark:text-neutral-300 xl:pr-8">
      <Link href={`blogs/${training.slug}`} className="line-clamp-3">
        {training.title}
      </Link>
    </p>
    <div className="mt-6">
      <Link href={`blogs/${training.slug}`} 
        className="inline-flex items-center pb-2 text-xs font-bold tracking-widest text-neutral-700 dark:text-neutral-300 uppercase border-b border-neutral-900 group">
        Continue Reading
        <MoveRight className='w-4 h-4 ml-2 transition-all duration-200 transform group-hover:translate-x-1'/>
      </Link>
    </div>
  </div>
  )
}
