import NewSupplierForm from '@/components/backoffice/NewSupplierForm'
import React from 'react'

export default async function updateSupplier({params:{id}}) {
  const supplier = await getData(`suppliers/${id}`)
  return (
    <div>
      <HeaderForm title="Update Supplier" />
      <NewSupplierForm updateData={supplier}/>
    </div>
  )
}