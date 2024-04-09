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
import MultipleChoiceMarkets from '@/components/Form/MultipleChoiceMarkets'

export default function newSlider() {
  const [imageUrl, setImageUrl] = useState("")
  const[loading, setLoading] = useState(false)
  const {register, reset, handleSubmit, formState:{errors}} = useForm();
  const categories = [
    {
      id:1,
      title: "Cat1",
    },
    {
      id:2,
      title: "Cat2",
    },
    {
      id:3,
      title: "Cat3",
    },
  ]
  async function onSubmit(data){
    const slug = generateSlug(data.title)
    data.slug = slug;
    data.imageUrl=imageUrl;
    console.log(data)
    makePostRequest(setLoading, 'api/markets', data, "Market", reset);
    setImageUrl("");
  }
  
  return (
    <div>
      <HeaderForm title="New Market" />
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-neutral-600 dark:border-gray-700 mx-auto my-3 mt-7">
          <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
            <TextInput
              label="Title"
              name="title"
              register={register}
              errors={errors}/>
            <MultipleChoiceMarkets
              label="Select Categories"
              name="categoryIds"
              options={categories}
              multiple={false}
              register={register}
              errors={errors}
              className='w-full'
            />
            <TextArea
              label="Market Description"
              name="description"
              register={register}
              errors={errors}
              isRequired = {false}
            />
             <ImageInput
              label="Market Logo"
              imageUrl={imageUrl}
              setImageUrl={ setImageUrl}
              endpoint='marketImageUploader'
            />
            </div>

            <SubmitButton 
              isLoading = {loading} 
              buttonTitle="Create Market" 
              loadingButton="Creating..."
              /> 
      </form>
           
    </div>
  )
}
