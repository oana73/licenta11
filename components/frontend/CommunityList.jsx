import Link from 'next/link'
import React from 'react'
import BlogCart from './BlogCart'

export default async function CommunityList({trainings}) {
  return (
    <section className="py-12 bg-neutral-50 dark:bg-neutral-950 sm:py-16 rounded-md px-4">
      <div className="md:px-2 mx-auto max-w-screen-2xl">
        <div className="mx-auto md:mx-0">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold text-neutral-700 dark:text-neutral-300 sm:text-4xl">
              Read latest collection
            </h2>
            <Link href='/blogs' className='py-2 px-7 rounded border border-neutral-700 dark:border-neutral-300 text-neutral-700 dark:text-neutral-300'>
              More
            </Link>
          </div>
          <p className="mt-5 text-base font-normal leading-7 text-neutral-500">
            Learn about art with us!
          </p>
        </div>
  
        <div className="grid max-w-md grid-cols-1 mx-auto mt-12 sm:mt-16 md:grid-cols-3 gap-y-12 md:gap-x-8 lg:gap-x-16 md:max-w-none">
          {trainings.map((training, i) => {
            return <BlogCart key={i} training={training} />
          })}
        </div>
      </div>
    </section>
  )
  
}
