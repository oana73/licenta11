import PageHeader from '@/components/backoffice/PageHeader'
import React from 'react'
import { columns } from './columns'
import { getData } from '@/lib/getData'
import DataTable from '@/components/data-table-components/DataTable'

export default async function page() {
  const trainings = await getData('trainings')
  return (
    <div>
      <PageHeader 
        heading="Trainings" 
        href="/dashboard/trainings/new"
        linkTitle="Add Training"
      />
      <div className='py-8'>
        <DataTable data={trainings} columns={columns}/>
      </div>
    </div>
  )
}
