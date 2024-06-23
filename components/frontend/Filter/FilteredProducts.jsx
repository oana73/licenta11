import React from 'react'
import Product from '../Product'

export default async function FilteredProducts({products=[]}) {
  return (
    <div>
        <div className='ml-20 gap-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
            {
                products.map((product,i)=>{
                    return <Product key={i} product={product}/>
                })
            }
        </div>
    </div>
  )
}
