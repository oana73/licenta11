import Heading from '@/components/backoffice/Heading'
import PageHeader from '@/components/backoffice/PageHeader'
import TableActions from '@/components/backoffice/TableActions'
import { ArrowDownToLine, Plus, Search, Trash } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div>
      <PageHeader 
        heading="Trainings" 
        href="/dashboard/trainings/new"
        linkTitle="Add Training"
      />
      {/* Table Actions */}
      {/* Export Search Delete */}
      <TableActions/>
      <div className='py-8'>
        <h2>Table</h2>
      </div>
    </div>
  )
}
