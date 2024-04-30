import Heading from '@/components/backoffice/Heading'
import PageHeader from '@/components/backoffice/PageHeader'
import TableActions from '@/components/backoffice/TableActions'
import DataTable from '@/components/data-table-components/DataTable'
import { getData } from '@/lib/getData'
import { ArrowDownToLine, Plus, Search, Trash } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { columns } from './columns'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/authOptions'

export default async function Coupons() {
  const session = await getServerSession(authOptions)
  const id = session?.user?.id
  const role = session?.user?.role
  const allCoupons = await getData('coupons')
  const supplierCoupons = await allCoupons.filter((coupon)=>coupon.vendorId===id)
  return (
    <div>
      <PageHeader 
        heading="Coupons" 
        href="/dashboard/coupons/new"
       linkTitle="Add Coupon"
      />
      <div className='py-8'>
        {
          role==="ADMIN"?(<DataTable data={allCoupons} columns={columns}/>):(
            <DataTable data={supplierCoupons} columns={columns}/>
          )
        }
      </div>
    </div>
  )
}
