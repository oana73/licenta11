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
import { ArrowLeft, Plus, X } from 'lucide-react'
import AddFeature from '@/components/Form/AddFeature'
import { useRouter } from 'next/navigation'

export default function NewProductForm({categories, suppliers, updateData = {}}) {
console.log(suppliers)
  const initialTags = updateData?.tags??[]
  const initialImageUrl = updateData?.imageUrl??""
  const id = updateData?.id??""
  const [imageUrl, setImageUrl] = useState(initialImageUrl)
  const [tags, setTags] = useState(initialTags);
  const [loading, setLoading] = useState(false)
  const {register, reset, watch, handleSubmit, formState:{errors}} = useForm({defaultValues: {isActive: true, ...updateData}});
  const isActive = watch("isActive")
  const router = useRouter()
  function redirect(){
    router.push("/dashboard/products")
  }
  async function onSubmit(data){
    const slug = generateSlug(data.title)
    data.slug = slug;
    data.imageUrl=imageUrl;
    data.tags = tags;
    data.qty = 1;
    console.log(data);
    if(id){
      data.id = id
      //make put request(update)
      makePutRequest(setLoading, `api/products/${id}`, data, "Product", redirect)
      console.log("update:", data)
  }else{
      //make post request(create)
      makePostRequest(setLoading, 'api/products', data, "Product", reset, redirect);
      setImageUrl("")
      setTags([])
  }

  }
  return (
      <form onSubmit={handleSubmit(onSubmit)} className="w-ful p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-neutral-600 dark:border-gray-700 mx-auto my-3 mt-7">
          <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
            <TextInput
              label="Product Title"
              name="title"
              register={register}
              errors={errors}/>
            <TextInput
              label="Product Codebar"
              name="codebar"
              register={register}
              errors={errors}
            />
            <TextInput
              label="Product SKU"
              name="sku"
              register={register}
              errors={errors}
              className='w-full'/>
            <TextInput
              label="Product Stock"
              name="productStock"
              type='number'
              register={register}
              errors={errors}
              className='w-full'/>
            <TextInput
              label="Product Price"
              name="price"
              type='number'
              register={register}
              errors={errors}
              className='w-full'/>
            <TextInput
              label="Product Discount"
              name="discount"
              type='number'
              register={register}
              errors={errors}
              className='w-full'/>
            <MultipleChoiceMarkets
              label="Select Category"
              name="categoryId"
              options={categories}
              multiple={false}
              register={register}
              errors={errors}
              className='w-full '/>
            <MultipleChoiceMarkets
              label="Select Supplier"
              name="supplierId"
              options={suppliers}
              multiple={false}
              register={register}
              errors={errors}
              className='w-full'/>
            <AddFeature 
              setFeatures={setTags}
              features={tags}/>
            <TextArea
              label="Product Description"
              name="description"
              register={register}
              errors={errors}
            />
            <ImageInput
              label="Product Image"
              imageUrl={imageUrl}
              setImageUrl={setImageUrl} 
              endpoint="productImageUploader"
              />
            <div className="w-full ">
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  {...register("isActive")}
                  type="checkbox"
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200  rounded-full peer dark:bg-neutral-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 peer-checked:bg-cyan-600"></div>
                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                  {isActive ? "Publish" : "Draft"}
                </span>
              </label>
            </div>
          </div>
          <SubmitButton 
            isLoading = {loading} 
            buttonTitle="Create Category" 
            loadingButton="Creating..."/> 
      </form>

  )
}
