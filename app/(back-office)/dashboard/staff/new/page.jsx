"use client"
import ImageInput from '@/components/Form/ImageInput'
import SubmitButton from '@/components/Form/SubmitButon'
import TextArea from '@/components/Form/TextArea'
import TextInput from '@/components/Form/TextInput'
import HeaderForm from '@/components/backoffice/HeaderForm'
import { makePostRequest } from '@/lib/apiRequest'
import { generateSlug } from '@/lib/generateSlug'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function newStaff() {
  const[loading, setLoading] = useState(false)
  const {register, reset, handleSubmit, formState:{errors}} = useForm();
  async function onSubmit(data){
    console.log(data)
    makePostRequest(setLoading, "api/staff", data, "Staff", reset)
  }
  
  return (
    <div>
      <HeaderForm title="New Staff" />
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-neutral-600 dark:border-gray-700 mx-auto my-3 mt-7">
          <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
            <TextInput
              label="Full Name"
              name="name"
              register={register}
              errors={errors}/>
            <TextInput
              label="Phone number"
              name="phone"
              type='tel'
              register={register}
              errors={errors}
              className='w-full'
            />
            <TextInput
              label="Email address"
              name="email"
              type='email'
              register={register}
              errors={errors}
              className='w-full'
            />
            <TextInput
              label="Password"
              name='password'
              type='password'
              register={register}
              errors={errors}
              className='w-full'
            />
            <TextInput
              label="ID number"
              name='nin'
              register={register}
              errors={errors}
              className='w-full'
            />
            <TextInput
              label="Date of Birth"
              name='dob'
              type='date'
              register={register}
              errors={errors}
              className='w-full'
            />
            <TextInput
              label="Staff address"
              name="address"
              register={register}
              errors={errors}
              className='w-full'
            />
            <TextArea
              label="Notes"
              name="notes"
              register={register}
              errors={errors}
              isRequired = {false}/>
          </div>
          <SubmitButton 
            isLoading = {loading} 
            buttonTitle="Create Staff" 
            loadingButton="Creating..."/> 
      </form>
           
    </div>
  )
}
