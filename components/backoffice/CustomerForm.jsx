"use client"
import ImageInput from '@/components/Form/ImageInput'
import SubmitButton from '@/components/Form/SubmitButon'
import TextArea from '@/components/Form/TextArea'
import TextInput from '@/components/Form/TextInput'
import HeaderForm from '@/components/backoffice/HeaderForm'
import { makePostRequest, makePutRequest } from '@/lib/apiRequest'
import { generateSlug } from '@/lib/generateSlug'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function CustomerForm({user}) {
  console.log(user)
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
     router.push("/dashboard/customers")
   }
  async function onSubmit(data){
    data.profileImage=imageUrl;
    data.userId = user.id
    console.log(data)
    makePutRequest(setLoading, `api/customers/${user.id}`, data, "Customer Profile", redirect, reset)
    setImageUrl("");
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="'w-full max-w-3xl mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mt-7">
      <h2 className='text-xl  mb-4'>Personal Details</h2>
      <div className='grid gap-4 sm:grid-cols-2 sm:gap-6 border-b border-gray-600 pb-10'>
        <TextInput
          label="Full Name"
          name="name"
          register={register}
          errors={errors}
          className='w-full'/>
        <TextInput
          label="Username"
          name="username"
          register={register}
          errors={errors}
          className='w-full'/>
        <TextInput
          label="Date Of birth"
          name="dateOfBirth"
          type="date"
          register={register}
          errors={errors}
          className='w-full'/>
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
          label="Email"
          name="email"
          type="email"
          register={register}
          errors={errors}
          className='w-full'/>
        <TextInput
          label="Phone Number"
          name="phone"
          register={register}
          errors={errors}
          className='w-full'/>
        <ImageInput
        label="Supplier Profile Image"
        imageUrl={imageUrl}
        setImageUrl={ setImageUrl}
        endpoint='customerProfileUploader'/>
      </div>
      <h2 className='text-xl  mb-4 pt-10'>Shipping Details</h2>
      <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
        <TextInput
          label="Street Address"
          name="streetAddress"
          register={register}
          errors={errors}
          className='w-full'/>
        <TextInput
          label="City"
          name="city"
          register={register}
          errors={errors}
          className='w-full'/>
        <TextInput
          label="Country"
          name="country"
          register={register}
          errors={errors}
          className='w-full'/>
        <TextInput
          label="Zip Code"
          name="zipCode"
          register={register}
          errors={errors}
          className='w-full'/>
      </div>
          <SubmitButton 
            isLoading = {loading} 
            buttonTitle="Create Suppliers" 
            loadingButton="Creating..."/> 
      </form>
           
    </div>
  )
}