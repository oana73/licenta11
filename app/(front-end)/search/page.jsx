import FilterComponent from '@/components/frontend/Filter/FilterComponent'
import { getData } from '@/lib/getData'
import React from 'react'

export default async function Search({searchParams}) {
  const {sort, min, max, search} = searchParams
  //console.log(max)
  const page = searchParams.page || 1

  let products;
  if(search){
    products = await getData(`products?search=${search}`)
  }else{
    products = await getData(`products?search=`)
  }
  const category = {
    title:search,
    slug:"",
    products,
    isSearch:true
  }


  // const { products } = categories;
return (
  <div>

      <FilterComponent category={category} products={products}/>

  </div>
)
}
