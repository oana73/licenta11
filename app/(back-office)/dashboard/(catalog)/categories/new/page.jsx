"use client"
import ImageInput from '@/components/Form/ImageInput'
import SubmitButton from '@/components/Form/SubmitButon'
import TextArea from '@/components/Form/TextArea'
import TextInput from '@/components/Form/TextInput'
import MultipleChoiceMarkets from '@/components/Form/MultipleChoiceMarkets'
import HeaderForm from '@/components/backoffice/HeaderForm'
import { makePostRequest } from '@/lib/apiRequest'
import { generateSlug } from '@/lib/generateSlug'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'

export default function newCategory() {
  //const markets[]
  // const markets=[
  //   { 
  //     id:1,
  //     title:"Magazin1"
  //   },
  //   { 
  //     id:2,
  //     title:"Magazin2"
  //   },
  //   { 
  //     id:3,
  //     title:"Magazin3"
  //   },
  //   { 
  //     id:4,
  //     title:"Magazin4"
  //   },
  // ]
  const [imageUrl, setImageUrl] = useState("")
  const[loading, setLoading] = useState(false)
  const {register, reset, handleSubmit, formState:{errors}} = useForm();
  const router = useRouter()
  function redirect(){
     router.push("/dashboard/categories")
   }
  async function onSubmit(data){
    const slug = generateSlug(data.title)
    data.slug = slug;
    data.imageUrl=imageUrl;
    console.log(data);
    makePostRequest(setLoading, 'api/categories', data, "Category", reset, redirect);
    setImageUrl("")
  }
  return (
    <div>
      <HeaderForm title="New Category" />
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-neutral-600 dark:border-gray-700 mx-auto my-3 mt-7">
          <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
            <TextInput
              label="Category Title"
              name="title"
              register={register}
              errors={errors}
            />
            {/* <MultipleChoiceMarkets
              label="Select markets"
              name="marketID"
              options={markets}
              multiple={false}
              register={register}
              errors={errors}
              className='w-full'/> */}
            <TextArea
              label="Category Description"
              name="description"
              register={register}
              errors={errors}
            />
            <ImageInput
              label="Image"
              imageUrl={imageUrl}
              setImageUrl={setImageUrl} 
              endpoint="categoryImageUploader"
            />
          </div>
          <SubmitButton 
            isLoading = {loading} 
            buttonTitle="Create Category" 
            loadingButton="Creating..."
          /> 
      </form>
    </div>
  )
}
