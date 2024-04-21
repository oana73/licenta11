import NewCategoryForm from '@/components/backoffice/Forms/NewCategoryForm'
import HeaderForm from '@/components/backoffice/HeaderForm'
import { getData } from '@/lib/getData'
import React from 'react'

export default async function UpdateCategory({params:{id}}) {
  const category = await getData(`categories/${id}`)
  return (
    <div>
      <HeaderForm title="Update Category" />
      <NewCategoryForm updateData={category} />
    </div>
  )
}
