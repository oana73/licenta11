import PageHeader from '@/components/backoffice/PageHeader'
import React from 'react'
import { columns } from './columns'
import { getData } from '@/lib/getData'
import DataTable from '@/components/data-table-components/DataTable'

export default async function page() {
  const markets = await getData('markets')
  return (
    <div>
      <PageHeader
        heading="Markets" 
        href="/dashboard/markets/new"
        linkTitle="Add Market"
      />
      <div className='py-8'>
        <DataTable data={markets} columns={columns}/>
      </div>
    </div>
  )
}
