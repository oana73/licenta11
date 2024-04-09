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
import { ArrowLeft, Plus, X } from 'lucide-react'
import AddFeature from '@/components/Form/AddFeature'

export default function newProduct() {
  const categories=[
    { 
      id:1,
      title:"categor1"
    },
    { 
      id:2,
      title:"categor2"
    },
    { 
      id:3,
      title:"categor3"
    },
    { 
      id:4,
      title:"categor4"
    },
  ]
  const suppliers=[
    { 
      id:1,
      title:"supplier1"
    },
    { 
      id:2,
      title:"supplier2"
    },
    { 
      id:3,
      title:"supplier3"
    },
    { 
      id:4,
      title:"categor4"
    },
  ]
  
  const [tags, setTags] = useState([]);
  const [imageUrl, setImageUrl] = useState("")
  const [loading, setLoading] = useState(false)
  const {register, reset, watch, handleSubmit, formState:{errors}} = useForm({defaultValues: {isActive: true,},});
  const isActive = watch("isActive")
  async function onSubmit(data){
    const slug = generateSlug(data.title)
    data.slug = slug;
    data.imageUrl=imageUrl;
    data.tags = tags;
    console.log(data);
    makePostRequest(setLoading, 'api/products', data, "Product", reset);
    setImageUrl("")
  }
  return (
    <div>
      <HeaderForm title="New Product" />
      <form onSubmit={handleSubmit(onSubmit)} className="w-ful p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-neutral-600 dark:border-gray-700 mx-auto my-3 mt-7">
          <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
            <TextInput
              label="Product Title"
              name="title"
              register={register}
              errors={errors}/>
            <TextInput
              label="Product SKU"
              name="sku"
              register={register}
              errors={errors}
              className='w-full'/>
            <TextInput
              label="Product Codebar"
              name="codebar"
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
              className='w-full'/>
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
              label="Produc Image"
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
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                  {isActive ? "Published" : "Draft"}
                </span>
              </label>
            </div>
          </div>
          <SubmitButton 
            isLoading = {loading} 
            buttonTitle="Create Category" 
            loadingButton="Creating..."/> 
      </form>
           
    </div>
  )
}
