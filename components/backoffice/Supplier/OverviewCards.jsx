import React from 'react'

export default function OverviewCards({sales, products}) {
  //const productsCount = products.length.toString().padStart(2,"0")
    const productsCount = products.length
    const salesCount = sales.length
    const totalSales= sales.reduce((acc, item)=>acc+item.total, 0)
    const analytics = [ 
        {
            title:"Products",
            count: productsCount,
            unit:"",
            link: "/dashboard/products",
            icon:"", 
        },
        {
            title:"Sales",
            count: salesCount,
            unit:"",
            link: "/dashboard/sales",
            icon:"", 
        },
        {
            title:"Revenue",
            count: totalSales,
            unit:"",
            link: "/dashboard/sales",
            icon:"", 
        }
    ]
  return (

    <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6'>
        {
            analytics.map((item, i)=>{
                return(
                  <div className={`rounded-lg text-neutral-100 shadow-md p-8 flex items-center flex-col gap-2 bg-gray-400 bg-opacity-25`}>   
                    <h4>{item.title}</h4>
                    <h2 className='lg:text-3xl text-2xl'>{item.count}</h2>
                  </div>
                    // <div> {item.count} {item.title}</div>
                    
                )
            })
        }

    </div>
  )
}
