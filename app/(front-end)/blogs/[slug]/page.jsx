import BlogContent from '@/components/BlogContent'
import RecentBlogs from '@/components/frontend/RecentBlogs'
import { convertIsoToNormal } from '@/lib/convertIsoToNormal'
import { getData } from '@/lib/getData'
import React from 'react'

export default async function page({params:{slug}}) {
    const training = await getData(`trainings/training/${slug}`)
    const trainingId = training.id
    const normalDate = convertIsoToNormal(training.createdAt)
    const allTrainings = await getData("trainings")
    const recentTrainings = allTrainings.filter((training)=>training.id!==trainingId)
  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-7 lg:gap-x-12">
          <div className="bg-gray-100 lg:col-span-5 rounded-xl">
            <div className="px-4 py-5 sm:p-6">
            <section className="">
      <div className="">
        <div className="">
          <div className="max-w-3xl mx-auto">
            <p className="text-base font-medium text-gray-500">
              {normalDate}
            </p>
            <h1 className="mt-6 text-4xl font-bold text-gray-900 ">
              {training.title}
            </h1>
          </div>

          <div className="mt-12 sm:mt-16 aspect-w-16 aspect-h-9 lg:aspect-h-6">
            <img className="object-cover w-full h-full" src={training.imageUrl} alt={training.title}/>
          </div>

          <div className="py-8">
              {/* <p className="text-lg font-bold text-gray-900 lg:text-xl">
                {training.description}
              </p> */}

          <hr className='mt-3'/>
          <BlogContent content={training.content} />
          </div>
        </div>
      </div>
    </section>
            </div>
          </div>
          <RecentBlogs recentTrainings={recentTrainings}/>
        </div>
      </div>
    </section>
  )
}
