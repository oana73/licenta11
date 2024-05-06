import FilterComponent from '@/components/frontend/Filter/FilterComponent'
import { getData } from '@/lib/getData'
import React from 'react'

export default async function page({params:{slug}, searchParams }) {
    const {sort, min, max} = searchParams
    //console.log(max)
    const page =searchParams.page || 1
    const category = await getData(`categories/filter/${slug}`)
    let products;
    if(page){
      products = await getData(`products?catId=${category.id}&page=${page}`)
    }else if(max && min){
      products = await getData(`products?catId=${category.id}&sort=asc&min=${min}&max=${max}`)
    }else if(min){
      products = await getData(`products?catId=${category.id}&sort=asc&min=${min}`)
    }else if(max){
      products = await getData(`products?catId=${category.id}&sort=asc&max=${max}`)
    }else if(sort){
      products = await getData(`products?catId=${category.id}&sort=${sort}`)
    }else{
      products = await getData(`products?catId=${category.id}`)
    }


    // const { products } = categories;
  return (
    <div>
        <h2>Slug:{slug}</h2>
        <h2>
        <FilterComponent category={category} products={products}/>
        </h2>
    </div>
  )
}
