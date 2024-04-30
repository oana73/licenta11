import FilterComponent from '@/components/frontend/Filter/FilterComponent'
import { getData } from '@/lib/getData'
import React from 'react'

export default async function page({params:{slug}}) {
    const categories = await getData(`categories/filter/${slug}`)
    const { products } = categories;
  return (
    <div>
        <h2>Slug:{slug}</h2>
        <h2>
        <FilterComponent products={products}/>
        </h2>
    </div>
  )
}
