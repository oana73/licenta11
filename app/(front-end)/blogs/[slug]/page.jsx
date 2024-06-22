import BlogContent from '@/components/BlogContent'
import RecentBlogs from '@/components/frontend/RecentBlogs'
import { convertIsoToNormal } from '@/lib/convertIsoToNormal'
import { getData } from '@/lib/getData'
import React from 'react'

export default async function page({ params: { slug } }) {
  const training = await getData(`trainings/training/${slug}`)
  const trainingId = training.id
  const normalDate = convertIsoToNormal(training.createdAt)
  const allTrainings = await getData("trainings")
  const recentTrainings = allTrainings.filter((training) => training.id !== trainingId)
  
  return (
    <section className="py-12 sm:py-16 lg:py-20 mx-auto max-w-screen-2xl">
      <div>
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-7 lg:gap-x-12">
          <div className="bg-neutral-100 dark:bg-neutral-800 lg:col-span-5 rounded-xl">
            <div className="">
              <img className="object-cover w-full h-96 rounded-t-xl" src={training.imageUrl} alt={training.title} />
            </div>
            <div className="px-4 py-5 sm:p-6">
              <section>
                <div>
                  <div>
                    <div>

                      <p className="text-base font-medium text-neutral-500">
                        {normalDate}
                      </p>
                      <h1 className="mt-6 text-4xl font-bold text-neutral-700 dark:text-neutral-300 ">
                        {training.title}
                      </h1>
                    </div>
                    <div className="py-8">
                      <hr/>
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
