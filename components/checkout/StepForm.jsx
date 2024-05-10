'use client'
import React from 'react'
import PersonaDetailsForm from './StepForms/PersonaDetailsForm'
import ShippingDetailsForm from './StepForms/ShippingDetailsForm'
import OrderSummaryForm from './StepForms/OrderSummary'
import { useSelector } from 'react-redux'
import PaymentMethodForm from './StepForms/PaymentMethodForm'

export default function StepForm() {
    const currentStep = useSelector((store)=>store.checkout.currentStep)
    function renderFormByStep(step){
        if(step===1){
            return <PersonaDetailsForm/>
        }else if(step===2){
            return <ShippingDetailsForm/>
        }else if(step===3){
            return <PaymentMethodForm/>
        }else if(step===4){
            return <OrderSummaryForm/>
        }
    }
  return (
    <div>
        {renderFormByStep(currentStep)}
    </div>
  )
}
