import PageHeader from '@/components/backoffice/PageHeader'
import DataTable from '@/components/data-table-components/DataTable'
import { getData } from '@/lib/getData'
import React from 'react'
import { columns } from './columns'

export default async function page() {
  const categories = await getData('categories')
  return (
    <div>
      <PageHeader 
        heading="Categories" 
        href="/dashboard/categories/new"  
        linkTitle="Add Category"/>
      
      <div className='py-8'>
        <DataTable data={categories} columns={columns}/>
      </div>
    </div>
  )
}
