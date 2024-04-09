"use client"
import ImageInput from '@/components/Form/ImageInput'
import SubmitButton from '@/components/Form/SubmitButon'
import TextArea from '@/components/Form/TextArea'
import TextInput from '@/components/Form/TextInput'
import HeaderForm from '@/components/backoffice/HeaderForm'
import { makePostRequest } from '@/lib/apiRequest'
import { generateSlug } from '@/lib/generateSlug'
import { isoDate } from '@/lib/isoDate'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function newCoupon() {
  const[loading, setLoading] = useState(false)
  const {register, reset, handleSubmit, formState:{errors}} = useForm();
  const router = useRouter()
  function redirect(){
    router.push("/dashboard/coupons")
  }
  async function onSubmit(data){
    const isoFormatDate = isoDate(data.valability)
    data.valability = isoFormatDate;
    console.log(data)
    makePostRequest(setLoading, "api/coupons", data, "Coupon", reset, redirect)
  }
  
  return (
    <div>
      <HeaderForm title="New Coupon" />
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-neutral-600 dark:border-gray-700 mx-auto my-3 mt-7">
          <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
            <TextInput
              label="Coupon Title"
              name="title"
              register={register}
              errors={errors}/>
            <TextInput
              label="Code"
              name="code"
              register={register}
              errors={errors}
              className='w-full'
            />
            <TextInput
              label="Expiration date"
              name="valability"
              type='date'
              register={register}
              errors={errors}
              className='w-full'
            />
          </div>
            <SubmitButton 
              isLoading = {loading} 
              buttonTitle="Create Coupon" 
              loadingButton="Creating..."
              /> 
      </form>
           
    </div>
  )
}
