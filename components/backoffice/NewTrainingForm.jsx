"use client"
import ImageInput from '@/components/Form/ImageInput'
import SubmitButton from '@/components/Form/SubmitButon'
import TextArea from '@/components/Form/TextArea'
import TextInput from '@/components/Form/TextInput'
import MultipleChoiceMarkets from '@/components/Form/MultipleChoiceMarkets'
import HeaderForm from '@/components/backoffice/HeaderForm'
import { makePostRequest, makePutRequest } from '@/lib/apiRequest'
import { generateSlug } from '@/lib/generateSlug'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation'
const BlogInput = dynamic(
  () => import("@/components/Form/BlogInput"),
  {
    ssr: false,
  }
)


export default function NewTrainingForm({updateData={}}) {
  const initialContent = updateData?.content??""
  const initialImageUrl = updateData?.imageUrl??""
  const id = updateData?.id??""
  const [imageUrl, setImageUrl] = useState(initialImageUrl)
  const[loading, setLoading] = useState(false)
  const {register, reset, handleSubmit, formState:{errors}} = useForm({defaultValues: {...updateData}});
  const [content, setContent] = useState(initialContent)
  const router = useRouter()
  function redirect(){
    router.push("/dashboard/trainings")
  }
  async function onSubmit(data){
    const slug = generateSlug(data.title)
    data.slug = slug;
    data.content = content;
    data.imageUrl=imageUrl;
    console.log(data);
    if(id){
      data.id = id
      //make put request(update)
      makePutRequest(setLoading, `api/trainings/${id}`, data, "Training", redirect)
      console.log("update:", data)
  }else{
      //make post request(create)
      makePostRequest(setLoading, 'api/trainings', data, "Trainings", reset, redirect);
      setContent("");
      setImageUrl("")
  }

  }
//Custom Tool Bar
  return (
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-neutral-600 dark:border-gray-700 mx-auto my-3 mt-7">
          <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
            <TextInput
              label="Training Title"
              name="title"
              register={register}
              errors={errors}
            />
            <TextInput
              label="Author Name"
              name="name"
              register={register}
              errors={errors}
            />
            <ImageInput
              label="Produc Image"
              imageUrl={imageUrl}
              setImageUrl={setImageUrl} 
              endpoint="trainingImageUploader"
              />
            <BlogInput
              label='Content'
              value={content}
              onChange={setContent} 
            />
          </div>
          <SubmitButton 
            isLoading = {loading} 
            buttonTitle="Create Training" 
            loadingButton="Creating..."
          /> 
      </form>
  )
}
