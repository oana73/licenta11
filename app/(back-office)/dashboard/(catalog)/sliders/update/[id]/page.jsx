import NewSliderForm from '@/components/backoffice/Forms/NewSliderForm'
import HeaderForm from '@/components/backoffice/HeaderForm'
import { getData } from '@/lib/getData'
import React from 'react'

export default async function UpdateSlider({params:{id}}) {
  const slider = await getData(`sliders/${id}`)
  return (
    <div>
      <HeaderForm title="Update Slider" />
      <NewSliderForm updateData={slider} />   
    </div>
  )
}
