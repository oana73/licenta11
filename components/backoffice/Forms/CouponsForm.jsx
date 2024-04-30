"use client"
import ImageInput from '@/components/Form/ImageInput'
import SubmitButton from '@/components/Form/SubmitButon'
import TextArea from '@/components/Form/TextArea'
import TextInput from '@/components/Form/TextInput'
import HeaderForm from '@/components/backoffice/HeaderForm'
import { makePostRequest, makePutRequest } from '@/lib/apiRequest'
import { convertIsoToNormal } from '@/lib/convertIsoToNormal'
import { generateSlug } from '@/lib/generateSlug'
import { isoDate } from '@/lib/isoDate'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function CouponForm({updateData={}}) {
  const {data: session,status} = useSession() 
  const vendorId = session?.user?.id
  const expiryDateNormal = convertIsoToNormal(updateData.valability)
  const id = updateData?.id??""
  updateData.valability = expiryDateNormal
  const[loading, setLoading] = useState(false)
  const {register, reset, handleSubmit, formState:{errors}} = useForm({defaultValues:{...updateData}});
  const router = useRouter()
  function redirect(){
    router.push("/dashboard/coupons")
  }
  async function onSubmit(data){
    data.vendorId = vendorId
    const isoFormatDate = isoDate(data.valability)
    data.valability = isoFormatDate;
    console.log(data)
    if(id){
        //make put request
        makePutRequest(setLoading, `api/coupons/${id}`, data, "Coupon", redirect)
        console.log("update:", data)
    }else{
        //Make post request
        makePostRequest(setLoading, "api/coupons", data, "Coupon", reset, redirect)
    }
    
  }
  
  return (
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
              buttonTitle={id?"Update":"Create" }
              loadingButton={id?"Updating...":"Creating..."}
              /> 
      </form>
  )
}
