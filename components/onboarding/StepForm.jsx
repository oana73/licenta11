'use client'
import React from 'react'

import { useSelector } from 'react-redux'
import PersonalDetailsForm from './StepForms/PersonalDetailsForm'
import ShopDetailsForm from './StepForms/ShopDetailsForm'
import AditionalDetailsForm from './StepForms/AditionalDetailsForm'
import Summary from './StepForms/Summary'

export default function StepForm({supplierId}) {
    const currentStep = useSelector((store)=>store.onboarding.currentStep)
    function renderFormByStep(step){
        if(step===1){
            return <PersonalDetailsForm/>
        }else if(step===2){
            return <ShopDetailsForm/>
        }else if(step===3){
            return <AditionalDetailsForm/>
        }else if(step===4) {
            return <Summary supplierId={supplierId}/>
        }
    }
  return (
    <div>
        {renderFormByStep(currentStep)}
    </div>
  )
}
