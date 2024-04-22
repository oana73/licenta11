import HeaderForm from '@/components/backoffice/HeaderForm'
import NewMarketForm from '@/components/backoffice/NewMarketForm'
import { getData } from '@/lib/getData'
import React from 'react'

export default async function updateMarket({params:{id}}) {
  const market = await getData(`markets/${id}`)
  const categoriesData = await getData("categories")
  const categories = categoriesData.map((category)=>{
    return{
      id: category.id,
      title: category.title,
    }
  })
  return (
    <div>
      <HeaderForm title="Update Market" />
      <NewMarketForm updateData={market} categories={categories}  />
    </div>
  )
}
