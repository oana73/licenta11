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

export default function newSlider() {
  const [imageUrl, setImageUrl] = useState("")
  const[loading, setLoading] = useState(false)
  const {register, reset, handleSubmit, formState:{errors}} = useForm();
  const router = useRouter()
  function redirect(){
     router.push("/dashboard/sliders")
   }
  async function onSubmit(data){
    data.imageUrl=imageUrl;
    console.log(data)
    makePostRequest(setLoading, 'api/sliders', data, "Slider", reset, redirect);
    setImageUrl("");
  }
  
  return (
    <div>
      <HeaderForm title="New Slider" />
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-neutral-600 dark:border-gray-700 mx-auto my-3 mt-7">
          <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
            <TextInput
              label="Title"
              name="title"
              register={register}
              errors={errors}
            />
            <TextInput
            label="Link"
            name="link"
            type='url'
            register={register}
            errors={errors}
            />
            <ImageInput
            label="Image"
            imageUrl={imageUrl}
            setImageUrl={ setImageUrl}
            endpoint='sliderImageUploader'
            />
          </div>
          <SubmitButton 
            isLoading = {loading} 
            buttonTitle="Create Slider" 
            loadingButton="Creating..."
          /> 
      </form>
           
    </div>
  )
}
