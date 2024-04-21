import HeaderForm from '@/components/backoffice/HeaderForm'
import NewTrainingForm from '@/components/backoffice/NewTrainingForm'
import { getData } from '@/lib/getData'
import React from 'react'

export default async function updateTraining({params:{id}}) {
  const training = await getData(`trainings/${id}`)
  return (
    <div>
      <HeaderForm title="Update Training" />
      <NewTrainingForm updateData={training}/>
    </div>
  )
}
