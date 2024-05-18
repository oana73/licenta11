import Heading from '@/components/backoffice/Heading'
import PageHeader from '@/components/backoffice/PageHeader'
import TableActions from '@/components/backoffice/TableActions'
import DataTable from '@/components/data-table-components/DataTable'
import { getData } from '@/lib/getData'
import { ArrowDownToLine, Plus, Search, Trash } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { columns } from './columns'

export default async function Customers() {
  const customers = await getData('customers')
  return (
    <div>
      <span className=' text-2xl font-semibold text-neutral-700 dark:text-neutral-300'>
        Customers
      </span>
      <div className='py-8'>
        <DataTable data={customers} columns={columns}/>
      </div>
    </div>
  )
}
