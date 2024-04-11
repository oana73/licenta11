"use client"
import ImageInput from '@/components/Form/ImageInput'
import SubmitButton from '@/components/Form/SubmitButon'
import TextArea from '@/components/Form/TextArea'
import TextInput from '@/components/Form/TextInput'
import HeaderForm from '@/components/backoffice/HeaderForm'
import { makePostRequest } from '@/lib/apiRequest'
import { generateSlug } from '@/lib/generateSlug'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function NewSupplierForm({user}) {
  const [imageUrl, setImageUrl] = useState("")
  const[loading, setLoading] = useState(false)
  const {register, reset, handleSubmit, formState:{errors}
  } = useForm(({
    defaultValues:{
      ...user
    }
  }));
  const router = useRouter()
  function redirect(){
     router.push("/dashboard/suppliers")
   }
  async function onSubmit(data){
    data.imageUrl=imageUrl;
    data.userId = user.id
    console.log(data)
    makePostRequest(setLoading, "api/suppliers", data, "Supplier Profile", reset, redirect)
    setImageUrl("");
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-neutral-600 dark:border-gray-700 mx-auto my-3 mt-7">
          <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
            <TextInput
              label="Supplier Name"
              name="name"
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
              label="Email address"
              name="email"
              type='email'
              register={register}
              errors={errors}
              className='w-full'/>
            <TextInput
              label="Supplier address"
              name="address"
              register={register}
              errors={errors}
              className='w-full'/>
            <TextArea
              label="Payment Terms"
              name="paymentTerms"
              register={register}
              errors={errors}/>
            <TextArea
              label="Notes"
              name="notes"
              register={register}
              errors={errors}
              isRequired = {false}/>
          </div>
          <ImageInput
            label="Supplier Profile Image"
            imageUrl={imageUrl}
            setImageUrl={ setImageUrl}
            endpoint='supplierProfileUploader'/>
          <SubmitButton 
            isLoading = {loading} 
            buttonTitle="Create Suppliers" 
            loadingButton="Creating..."/> 
      </form>
           
    </div>
  )
}
