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

export default function NewSliderForm({updateData={}}) {
const initialImageUrl = updateData?.imageUrl??""
  const id = updateData?.id??""
  const [imageUrl, setImageUrl] = useState(initialImageUrl)
  const[loading, setLoading] = useState(false)
  const {register, reset, handleSubmit, formState:{errors}} = useForm({defaultValues:{...updateData}});
  const router = useRouter()
  function redirect(){
     router.push("/dashboard/sliders")
   }
  async function onSubmit(data){
    data.imageUrl=imageUrl;
    console.log(data)
    if(id){
        //make put request
        makePutRequest(setLoading, `api/sliders/${id}`, data, "Slider", redirect)
        console.log("update:", data)
    }else{
        //Make post request
        makePostRequest(setLoading, 'api/sliders', data, "Slider", reset, redirect);
        setImageUrl("");
    }
  }
  
  return (

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
            buttonTitle={id?"Update":"Create" }
            loadingButton={id?"Updating...":"Creating..."}
          /> 
      </form>
  )
}
