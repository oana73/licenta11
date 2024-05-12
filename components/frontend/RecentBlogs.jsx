import { convertIsoToNormal } from '@/lib/convertIsoToNormal'
import Link from 'next/link'
import React from 'react'

export default function RecentBlogs({recentTrainings}) {
  return (
    <div className="lg:col-span-2">
    <p className="text-xl font-bold text-gray-900">
      Recent Blogs
    </p>

    <div className="mt-6 space-y-5">
      {
        recentTrainings.map((training,i)=>{
            const normalDate = convertIsoToNormal(training.createdAt)
            return(
                <div key={i} className="relative overflow-hidden transition-all duration-200 bg-white border border-gray-200 rounded-lg hover:shadow-lg hover:bg-gray-50 hover:-translate-y-1">
                    <div className="p-4">
                    <div className="flex items-start lg:items-center">
                        <img className="object-cover w-16 h-16 rounded-lg shrink-0"
                        src={training.imageUrl} alt={training.title}/>
                        <div className="ml-5">
                        <p className="text-sm font-medium text-gray-900">
                            {normalDate}
                        </p>
                        <p className="text-md leading-7 font-bold text-gray-900 mt-2.5">
                            <Link href={`/blogs/${training.slug}`} className='line-clamp-2'>
                                {training.title}
                            <span className="absolute inset-0" aria-hidden="true"></span>
                            </Link>
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
            )
        })
      }
    </div>
  </div>
  )
}
