'use client'
import TextInput from '@/components/Form/TextInput';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import NavButtons from '../NavButtons';
import { Circle, Package, Truck } from 'lucide-react';
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
        <h3 class=" mt-5 py-2 font-medium text-neutral-900 dark:text-neutral-50">Shipping type</h3>
        <ul class="grid w-full gap-6 md:grid-cols-2">
            <li>
                <input type="radio" id="hosting-small" name="hosting" value="8" class="hidden peer" required onChange={(e)=>setShippingCost(e.target.value)}/>
                <label for="hosting-small" class="inline-flex items-center justify-between w-full p-5 text-neutral-500 bg-white border border-neutral-200 rounded-lg cursor-pointer dark:hover:text-neutral-300 dark:border-neutral-700 dark:peer-checked:text-pink-500 peer-checked:border-pink-600 peer-checked:text-pink-600 hover:text-neutral-600 hover:bg-neutral-100 dark:text-neutral-400 dark:bg-neutral-800 dark:hover:bg-neutral-700">                           
                  {/* Design */}
                  <div className="flex gap-3 items-center">
                    <Truck className='w-6 h-6 flex-shrink-0 ms-3'/>
                    <p>Delivery</p>
                  </div>
                </label>
            </li>
            <li>
                <input type="radio" id="hosting-big" name="hosting" value="10" class="hidden peer" onChange={(e)=>setShippingCost(e.target.value)}/>
                <label for="hosting-big" class="inline-flex items-center justify-between w-full p-5 text-neutral-500 bg-white border border-neutral-200 rounded-lg cursor-pointer dark:hover:text-neutral-300 dark:border-neutral-700 dark:peer-checked:text-pink-500 peer-checked:border-pink-600 peer-checked:text-pink-600 hover:text-neutral-600 hover:bg-neutral-100 dark:text-neutral-400 dark:bg-neutral-800 dark:hover:bg-neutral-700">
                  <div className="flex gap-3 items-center">
                    <Package className='w-6 h-6 flex-shrink-0 ms-3'/>
                    <p>Post Office</p>
                  </div>
                </label>
            </li>
        </ul>
      </div>
      <NavButtons/>
    </form>
  )
}
