'use client'
import TextInput from '@/components/Form/TextInput';
import React from 'react'
import { useForm } from 'react-hook-form';
import NavButtons from '../NavButtons';

export default function ShippingDetailsForm() {
  const {register, reset, handleSubmit, formState:{errors}} = useForm();
  async function processData(data){
    console.log(data)
  }
  return (
    <form onSubmit={handleSubmit(processData)} >
      <h2 className='text-xl  mb-4'>Shipping Details</h2>
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
      {/* Shipping cost */}
      <div className='flex'>
      <div className="flex items-center w-full ps-4 border border-gray-200 rounded dark:border-gray-700">
          <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
          <label for="bordered-radio-1" className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default radio</label>
      </div>
      <div className="flex items-center w-full ps-4 border border-gray-200 rounded dark:border-gray-700">
          <input checked id="bordered-radio-2" type="radio" value="" name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
          <label for="bordered-radio-2" className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Checked state</label>
      </div>
      </div>
      <NavButtons/>
    </form>
  )
}
