import CommunityList from '@/components/frontend/CommunityList'
import { getData } from '@/lib/getData'
import React from 'react'

export default async function page() {
  const trainings =  await getData("trainings")
  return (
    <div>
        <CommunityList trainings={trainings}/>
    </div>
  )
}
