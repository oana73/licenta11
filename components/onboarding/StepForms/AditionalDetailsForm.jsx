'use client'
import TextInput from '@/components/Form/TextInput'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import NavButtons from '../NavButtons';
import { useDispatch, useSelector } from 'react-redux';
import { useSession } from 'next-auth/react';
import { setCurrentStep, updateOnboardingFormData } from '@/redux/slices/onboardingSlice';
import TextArea from '@/components/Form/TextArea';
import ImageInput from '@/components/Form/ImageInput';

export default function AditionalDetailsForm() {
  const [imageUrl, setImageUrl] = useState("")
  const currentStep = useSelector((store)=> store.onboarding.currentStep)
  const existingFormData = useSelector((store)=> store.onboarding.onboardingFormData)
  const {register, reset, handleSubmit, formState:{errors}} = useForm({
    defaultValues:{
      ...existingFormData,
    }
  });
  const dispatch = useDispatch()
  async function processData(data){
      data.imageUrl=imageUrl;
      //update the checkout data
      dispatch(updateOnboardingFormData(data))
      //update the current step
      dispatch(setCurrentStep(currentStep + 1))
  }
  return (
    <form onSubmit={handleSubmit(processData)} >
      <h2 className='text-xl  mb-4'>Aditional Details</h2>
      <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
            <ImageInput
            label="Supplier Profile Image"
            imageUrl={imageUrl}
            setImageUrl={ setImageUrl}
            endpoint='supplierProfileUploader'/>
            <TextArea
              label="Notes"
              name="notes"
              register={register}
              errors={errors}
              isRequired = {false}/>

      </div>
      <NavButtons/>
    </form>
  )
}
