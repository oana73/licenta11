'use client'
import TextInput from '@/components/Form/TextInput';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import NavButtons from '../NavButtons';
import { Circle, Truck } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentStep, updateCheckoutFormData } from '@/redux/slices/checkoutSlice';

export default function ShippingDetailsForm() {
  const dispatch = useDispatch()
  const currentStep = useSelector((store)=> store.checkout.currentStep)
  const existingFormData = useSelector((store)=> store.checkout.checkoutFormData)
  const {register, reset, handleSubmit, formState:{errors}} = useForm({
    defaultValues:{
      ...existingFormData
    }
  });
  const initialShippingCost = existingFormData.shippingCost||""
  const [shippingCost, setShippingCost] = useState(initialShippingCost)
  console.log(shippingCost)
  async function processData(data){
    data.shippingCost = shippingCost
    console.log(data)
    //update the checkout data
    dispatch(updateCheckoutFormData(data))
    //update the current step
    dispatch(setCurrentStep(currentStep + 1))
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
      <div className='col-span-full'>
        <h3 class="mb-5 text-lg font-medium text-gray-900 dark:text-white">Shipping?</h3>
        <ul class="grid w-full gap-6 md:grid-cols-2">
            <li>
                <input type="radio" id="hosting-small" name="hosting" value="8" class="hidden peer" required onChange={(e)=>setShippingCost(e.target.value)}/>
                <label for="hosting-small" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                  {/* Design */}
                  <div className="flex gap-2 items-center">
                    <Truck className='w-6 h-6 flex-shrink-0 ms-3'/>
                    <div className=''>
                      <p>ups</p>
                      <p>Delivery Cost: $8</p>
                    </div>
                  </div>
                  <Circle className='w-5 h-5 flex-shrink-0  ms-3'/>
                </label>
            </li>
            <li>
                <input type="radio" id="hosting-big" name="hosting" value="10" class="hidden peer" onChange={(e)=>setShippingCost(e.target.value)}/>
                <label for="hosting-big" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                  <div className="flex gap-2 items-center">
                    <Truck className='w-6 h-6 flex-shrink-0 ms-3'/>
                    <div className=''>
                      <p>ups</p>
                      <p>Delivery Cost: $10</p>
                    </div>
                  </div>
                  <Circle className='w-5 h-5 flex-shrink-0  ms-3'/>
                </label>
            </li>
        </ul>
      </div>
      <NavButtons/>
    </form>
  )
}
