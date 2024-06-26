import PageHeader from '@/components/backoffice/PageHeader'
import { getData } from '@/lib/getData'
import React from 'react'
import { columns } from './columns'
import DataTable from '@/components/data-table-components/DataTable'

export default async function page() {
  const suppliers = await getData('suppliers')
  return (
    <div>
      <PageHeader 
        heading="Suppliers" 
        href="/dashboard/suppliers/new"
        linkTitle="Add Supplier"
      />
      {/* Table Actions */}
      {/* Export Search Delete */}
      <div className='py-8'>
        <DataTable data={suppliers} columns={columns} filterKeys = {['name']}/>
      </div>
    </div>
  )
}
