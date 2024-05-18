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

export default async function Sales() {
  const session = await getServerSession(authOptions)
  const id = session?.user?.id
  const role = session?.user?.role
  const allSales = await getData('sales')

  //fetch all the sales
  //filter by vendorId to get sales for this vendor
  //fetch order by id
  //customer name, email, phone, orderNumber
  const supplierSales = await allSales.filter((sale)=>sale.vendorId===id)
  return (
    <div>
      <span className=' text-2xl font-semibold text-neutral-700 dark:text-neutral-300'>
        Sales
      </span>
      <div className='py-8'>
        {
          role==="ADMIN"?(<DataTable data={allSales} columns={columns}/>):(
            <DataTable data={supplierSales} columns={columns}/>
          )
        }
      </div>
    </div>
  )
}
