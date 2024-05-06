'use client'
import { Circle } from 'lucide-react'
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
            display:"under 200",
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
        <div className>
            <div className="flex justify-between">
                <h2>Price</h2>
                <Link href={`/category/${slug}`}>
                    Reset
                </Link>
            </div>
            {/* Filters */}
        <div className="flex flex-col gap-3">
            {
                priceRanges.map((range,i)=>{
                    return(
                        <Link key={i} 
                        href={range.max && range.min 
                        ?`/category/${slug}?sort=asc&max=${range.max}&min=${range.min}` 
                        : range.max? `/category/${slug}?sort=asc&max=${range.max}`
                        :`/category/${slug}?sort=asc&min=${range.min}`}
                        className={`${
                            (range.min && range.min == minParam) ||
                            (range.max && range.max == maxParam) ||
                            (range.min && range.max && range.min == minParam && range.max==maxParam)
                            ? "flex gap-2 items-center text-cyan-500"
                            : "flex gap-2 items-center"

                        }`}
                        >
                            <Circle className='w-4 h-4 flex-shrink-0'/>
                            {range.display}
                        </Link>
                    )
                })
            }
        </div>
        <form onSubmit={handleSubmit(onSubmit)}
        className='grid grid-cols-3 gap-4 my-4' >
            <div className='col-span-1'>
                <input {...register("min")}
                type='number'
                id="input"
                className='bg-gray=50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 '
                placeholder='min'/>
            </div>
            <div className='col-span-1'>
                <input {...register("max")}
                type='number'
                id="input"
                className='bg-gray=50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 '
                placeholder='max'/>
            </div>
            <div className='col-span-1'>
                <button type="submit" className='text-white bg-cyan-500 hover:bg-cyan-600 focus:ring-3 focus:ring-cyan-400 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2'>
                    go
                </button>
            </div>
        </form>
        </div>
    </div>
  )
}
