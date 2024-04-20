import Heading from '@/components/backoffice/Heading'
import PageHeader from '@/components/backoffice/PageHeader'
import DataTable from '@/components/data-table-components/DataTable'
import { DataTableToolbar } from '@/components/data-table-components/DataTableToolbar'
import { getData } from '@/lib/getData'
import { ArrowDownToLine, Plus, Search, Trash } from 'lucide-react'
import Link from 'next/link'
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
      {/* Table Actions */}
      {/* Export Search Delete */}
      
      <div className='py-8'>
        <DataTable data={categories} columns={columns}/>
      </div>
    </div>
  )
}
