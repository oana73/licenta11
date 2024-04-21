import HeaderForm from '@/components/backoffice/HeaderForm'
import NewProductForm from '@/components/backoffice/NewProductForm'
import { getData } from '@/lib/getData'
import React from 'react'

export default async function updateProduct({params:{id}}) {
  const product = await getData(`products/${id}`)
  const categoriesData = await getData("categories")
  const usersData = await getData("users")
  const suppliersData = usersData.filter((user)=>user.role==="SUPPLIER")
  const suppliers = suppliersData.map((supplier)=>{
    return{
      id: supplier.id,
      title: supplier.name,
    }
  })
  const categories = categoriesData.map((category)=>{
    return{
      id: category.id,
      title: category.title,
    }
  })
  return (
    <div>
      <HeaderForm title="Update Product" />
      <NewProductForm updateData={product} categories={categories} suppliers={suppliers}/>
    </div>
  )
}
