import React from 'react'
import Heading from "@/components/backoffice/Heading"
import LargeCards from '@/components/backoffice/LargeCards'
import SmallCards from '@/components/backoffice/SmallCards'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/authOptions'
import UserDashboard from '@/components/backoffice/UserDashboard'
import SupplierDashboard from '@/components/backoffice/SupplierDashboard'
import { getData } from '@/lib/getData'

export default async function page() {
  const session = await getServerSession(authOptions)
  const role = session?.user?.role
  const sales = await getData("sales")
  const orders = await getData("orders")

  if(role==='USER'){
    return <UserDashboard/>
  }
  if(role==='SUPPLIER'){
    return <SupplierDashboard/>
  }
  return (
    <div>
      <Heading className='py-4' title="Dashboard Overview"/>
      {/* Large Cards */}
      <LargeCards sales={sales}/>
      {/* Smal Cards */}
      <SmallCards orders={orders} />
    </div>
  )
}
