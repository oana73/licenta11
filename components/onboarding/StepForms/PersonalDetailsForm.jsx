'use client'
import TextInput from '@/components/Form/TextInput'
import React from 'react'
import { useForm } from 'react-hook-form';
import NavButtons from '../NavButtons';
import { useDispatch, useSelector } from 'react-redux';
import { useSession } from 'next-auth/react';
import { setCurrentStep, updateOnboardingFormData } from '@/redux/slices/onboardingSlice';
import ImageInput from '@/components/Form/ImageInput';

export default function PersonalDetailsForm() {
  const currentStep = useSelector((store)=> store.onboarding.currentStep)
  const existingFormData = useSelector((store)=> store.onboarding.onboardingFormData)
  const {register, reset, handleSubmit, formState:{errors}} = useForm({
    defaultValues:{
      ...existingFormData,
    }
  });
  const dispatch = useDispatch()
  async function processData(data){
      //update the checkout data
      dispatch(updateOnboardingFormData(data))
      //update the current step
      dispatch(setCurrentStep(currentStep + 1))
  }
  return (
    <form onSubmit={handleSubmit(processData)} >
      <h2 className='text-xl  mb-4'>Personal Details</h2>
      <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
      <TextInput
          label="First Name"
          name="firstName"
          register={register}
          errors={errors}
          className='w-full'/>
        <TextInput
          label="Last Name"
          name="lastName"
          register={register}
          errors={errors}
          className='w-full'/>
            <TextInput
              label="Phone number"
              name="phone"
              type='tel'
              register={register}
              errors={errors}
              className='w-full'
              />
            <TextInput
              label="Supplier address"
              name="address"
              register={register}
              errors={errors}
              className='w-full'/>
      </div>
      <NavButtons/>
    </form>
  )
}
