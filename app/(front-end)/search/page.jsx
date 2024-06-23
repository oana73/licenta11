import React from 'react'
import { getData } from '@/lib/getData'
import FilterComponent from '@/components/frontend/Filter/FilterComponent'

export default async function Search({searchParams}) {
    const {sort, min, max, search} = searchParams
    //console.log(max)

    let products;
    if (search){
        products =await getData(`products?search=${search}`)
    }else if(max && min){
      products = await getData(`products?search=${category.id}&sort=asc&min=${min}&max=${max}`)
    }else if(min){
      products = await getData(`products?search=${category.id}&sort=asc&min=${min}`)
    }else if(max){
      products = await getData(`products?search=${category.id}&sort=asc&max=${max}`)
    }else if(sort){
      products = await getData(`products?search=${category.id}&sort=${sort}`)
    }else{
      products = await getData(`products?search=`)
    }
    const category={
      title:search,
      slug:"",
      products,
      isSearch:true
  }
    // const { products } = categories;
  return (
    <div>
        <h2>
        <FilterComponent category={category} products={products}/>
        </h2>
    </div>
  )
}
