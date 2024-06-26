'use client'
import { Circle, RotateCcw } from 'lucide-react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'

export default function PriceFilter({slug}) {
    const searchParams = useSearchParams()
    const minParam = searchParams.get("min")
    const maxParam = searchParams.get("max")
    const priceRanges = [
        {
            display:"Under 200",
            max:200
        },
        {
            display:"Between 200 and 400",
            max:400,
            min:200
        },
        {
            display:"Above 700",
            min:700
        },
    ]
    const router = useRouter()
    const {handleSubmit, reset, register} = useForm()
    function onSubmit(data){
        const{min,max}=data
        console.log(min, max)
        if(min && max){
            router.push(`/category/${slug}?sort=asc&min=${min}&max=${max}`)
            reset()
        }else if(min){
            router.push(`/category/${slug}?sort=asc&min=${min}`)
            reset()
        }else if(max){
            router.push(`/category/${slug}?sort=asc&max=${max}`)
            reset()
        }
    }
    return (
        <div>
            <div className="hidden sm:block dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700 rounded-lg shadow-sm mb-6">
                <div className="flex justify-between items-center border-b border-gray-200">
                    <h2 className='px-6 py-4 text-xl font-medium'>Price</h2>
                    <Link href={`/category/${slug}`} className='me-6 mb-0'>
                        <RotateCcw className='w-5 h-5 text-neutral-700 dark:text-neutral-300 hover:text-pink-500 duration-500 transition-all' />
                    </Link>
                </div>
                {/* Filters */}
                <div className="flex flex-col gap-3 overflow-y-auto py-2 px-6">
                    {
                        priceRanges.map((range, i) => {
                            return (
                                <Link key={i}
                                    href={range.max && range.min
                                        ? `/category/${slug}?sort=asc&max=${range.max}&min=${range.min}`
                                        : range.max
                                            ? `/category/${slug}?sort=asc&max=${range.max}`
                                            : `/category/${slug}?sort=asc&min=${range.min}`}
                                    className={`${
                                        (range.min && range.min == minParam) ||
                                            (range.max && range.max == maxParam) ||
                                            (range.min && range.max && range.min == minParam && range.max == maxParam)
                                            ? "flex gap-2 items-center text-pink-500 hover:text-pink-900 duration-500 transition-all"
                                            : "flex gap-2 items-center text-neutral-700 dark:text-neutral-300 hover:text-pink-900 duration-500 transition-all"
                                        }`}
                                >
                                    <Circle className='w-4 h-4 flex-shrink-0' />
                                    {range.display}
                                </Link>
                            )
                        })
                    }
                </div>
                <div className='flex flex-col overflow-y-auto py-2 px-6'>
                    <h2 className='font-medium mt-3 text-neutral-700 dark:text-neutral-300'>Custom Range</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className='my-2'>
                        <div className='flex space-x-4'>
                            <div className='w-full'>
                                <label htmlFor="input-min" className='block text-sm font-medium text-neutral-700 dark:text-neutral-300 px-0.5'>From:</label>
                                <input
                                    {...register("min")}
                                    type='number'
                                    id="input-min"
                                    className='bg-gray-50 dark:bg-neutral-700 border border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-300 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full p-2.5'
                                    placeholder='min'
                                />
                            </div>
                            <div className='w-full'>
                                <label htmlFor="input-max" className='block text-sm font-medium text-neutral-700 dark:text-neutral-300 px-0.5'>To:</label>
                                <input
                                    {...register("max")}
                                    type='number'
                                    id="input-max"
                                    className='bg-gray-50 dark:bg-neutral-700 border border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-300 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full p-2.5'
                                    placeholder='max'
                                />
                            </div>
                        </div>
                        <div className='mt-4 w-full'>
                            <button
                                type="submit"
                                className='text-white bg-pink-500 hover:bg-pink-600 focus:ring-3 focus:ring-pink-400 font-medium rounded-lg text-sm px-5 py-2.5 w-full'>
                                Apply
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
    
}
