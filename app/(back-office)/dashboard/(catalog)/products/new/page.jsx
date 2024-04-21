import HeaderForm from '@/components/backoffice/HeaderForm'
import NewProductForm from '@/components/backoffice/NewProductForm'
import { getData } from '@/lib/getData'
import React from 'react'

export default async function NewProduct() {
  //categories and suppliers
  const categoriesData = await getData("categories")
  const usersData = await getData("users")
  //console.log(categoriesData)
  //console.log(usersData)
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
  console.log(categories)
  console.log(suppliers)
  return (
    <div>
      <HeaderForm title="New Product" />
      <NewProductForm categories={categories} suppliers={suppliers}/>
    </div>

  )
}
