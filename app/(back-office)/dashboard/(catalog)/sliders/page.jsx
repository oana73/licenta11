import Heading from '@/components/backoffice/Heading'
import PageHeader from '@/components/backoffice/PageHeader'
import DataTable from '@/components/data-table-components/DataTable'
import { getData } from '@/lib/getData'
import { ArrowDownToLine, Plus, Search, Trash } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { columns } from './columns'

export default async function page() {
  const sliders = await getData('sliders')
  return (
    <div>
      <PageHeader 
        heading="Sliders" 
        href="/dashboard/sliders/new"
        linkTitle="Add Slider"
      />
      {/* Table Actions */}
      {/* Export Search Delete */}
      <div className='py-8'>
        <DataTable data={sliders} columns={columns}/>
      </div>
    </div>
  )
}
