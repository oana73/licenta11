"use client"
import ImageInput from '@/components/Form/ImageInput'
import SubmitButton from '@/components/Form/SubmitButon'
import TextArea from '@/components/Form/TextArea'
import TextInput from '@/components/Form/TextInput'
import HeaderForm from '@/components/backoffice/HeaderForm'
import { makePostRequest, makePutRequest } from '@/lib/apiRequest'
import { generateSlug } from '@/lib/generateSlug'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import MultipleChoiceMarkets from '@/components/Form/MultipleChoiceMarkets'
import { useRouter } from 'next/navigation'

export default function NewMarketForm({categories, updateData={}}) {
  const initialImageUrl = updateData?.imageUrl??""
  const id = updateData?.id??""
  const [imageUrl, setImageUrl] = useState(initialImageUrl)
  const[loading, setLoading] = useState(false)
  const {register, reset, handleSubmit, formState:{errors}} =  useForm({defaultValues: {...updateData}});
  const router = useRouter()
  function redirect(){
    router.push("/dashboard/markets")
  }
  async function onSubmit(data){
    const slug = generateSlug(data.title)
    data.slug = slug;
    data.imageUrl=imageUrl;
    console.log(data)
    if(id){
      data.id = id
      //make put request(update)
      makePutRequest(setLoading, `api/markets/${id}`, data, "Market", redirect)
      console.log("update:", data)
  }else{
      //make post request(create)
      makePostRequest(setLoading, 'api/markets', data, "Market", reset, redirect);
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
              errors={errors}/>
            <MultipleChoiceMarkets
              label="Select Categories"
              name="categoryIds"
              options={categories}
              multiple={true}
              register={register}
              errors={errors}
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
              setImageUrl={setImageUrl}
              endpoint='marketImageUploader'
            />
            </div>

            <SubmitButton 
              isLoading = {loading} 
              buttonTitle="Create Market" 
              loadingButton="Creating..."
              /> 
      </form>
  )
}
