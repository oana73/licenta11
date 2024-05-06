import { getData } from '@/lib/getData'
import React from 'react'
import Product from '../Product'
import Paginate from './Paginate'

export default async function FilteredProducts({products, productCount}) {
  const pageSize = 3
  const totalPages = Math.ceil(productCount/pageSize)
  
  return (

    <div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                products.map((product,i)=>{
                    return <Product key={i} product={product}/>
                })
            }
        </div>
        <div className="flex items-center p-8 mx-auto w-full">
        <Paginate totalPages={totalPages} />
        </div>
    </div>
  )
}
