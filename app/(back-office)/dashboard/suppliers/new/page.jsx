"use client"
import HeaderForm from '@/components/backoffice/HeaderForm'
import NewSupplierForm from '@/components/backoffice/NewSupplierForm'
import React from 'react'

export default function NewSupplier() {
  return (
    <div>
      <HeaderForm title="New Supplier" />
      <NewSupplierForm/>
    </div>
  )
}