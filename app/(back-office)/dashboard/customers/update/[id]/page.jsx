import CustomerForm from '@/components/backoffice/CustomerForm'
import HeaderForm from '@/components/backoffice/HeaderForm'
import { getData } from '@/lib/getData'
import React from 'react'

export default async function updateCustomer({params:{id}}) {
  const user = await getData(`users/${id}`)
  return (
    <div>
      <HeaderForm title="Update Customer" />
      <CustomerForm user={user}/>
    </div>
  )
}