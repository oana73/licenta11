import Link from 'next/link'
import React from 'react'

export default function PriceFilter({slug}) {
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
  return (
    <div>
        <div className>
            <div className="flex justify-between">
                <h2>Price</h2>
                <Link href={`/category/${slug}?sort=asc`}>
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
                        :`/category/${slug}?sort=asc&min=${range.min}`}>
                            {range.display}
                        </Link>
                    )
                })
            }
        </div>
        </div>
    </div>
  )
}
