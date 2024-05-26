'use client'
import TextInput from '@/components/Form/TextInput';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import NavButtons from '../NavButtons';
import { Circle, CreditCard, HandCoins, HeartHandshake, Truck } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentStep, updateCheckoutFormData } from '@/redux/slices/checkoutSlice';

export default function PaymentMethodForm() {
  const dispatch = useDispatch()
  const currentStep = useSelector((store)=> store.checkout.currentStep)
  const existingFormData = useSelector((store)=> store.checkout.checkoutFormData)
  const {register, reset, handleSubmit, formState:{errors}} = useForm({
    defaultValues:{
      ...existingFormData
    }
  });
  const initialPaymentMethod = existingFormData.paymentMethod||""
  const [paymentMethod, setPaymentMethod] = useState(initialPaymentMethod)
  console.log(paymentMethod)
  async function processData(data){
    data.paymentMethod = paymentMethod
    console.log(data)
    //update the checkout data
    dispatch(updateCheckoutFormData(data))
    //update the current step
    dispatch(setCurrentStep(currentStep + 1))
  }
  return (
    <form onSubmit={handleSubmit(processData)} >
      <h2 className='text-xl  mb-4'>Payment Method</h2>
      <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
      </div>
      {/* Payment cost */}
      <div className='col-span-full'>
        <ul class="grid w-full gap-6 md:grid-cols-2">
            <li>
                <input type="radio" id="hosting-small" name="hosting" value="cash" class="hidden peer" required onChange={(e)=>setPaymentMethod(e.target.value)}/>
                <label for="hosting-small" class="inline-flex items-center justify-between w-full p-5 text-neutral-500 bg-white border border-neutral-200 rounded-lg cursor-pointer dark:hover:text-neutral-300 dark:border-neutral-700 dark:peer-checked:text-pink-500 peer-checked:border-pink-600 peer-checked:text-pink-600 hover:text-neutral-600 hover:bg-neutral-100 dark:text-neutral-400 dark:bg-neutral-800 dark:hover:bg-neutral-700">                           
                  {/* Design */}
                  <div className="flex gap-2 items-center">
                    <HandCoins className='w-6 h-6 flex-shrink-0 ms-3'/>
                    <p>Cash</p>
                  </div>
                </label>
            </li>
            <li>
                <input type="radio" id="hosting-big" name="hosting" value="card" class="hidden peer" onChange={(e)=>setPaymentMethod(e.target.value)}/>
                <label for="hosting-big" class="inline-flex items-center justify-between w-full p-5 text-neutral-500 bg-white border border-neutral-200 rounded-lg cursor-pointer dark:hover:text-neutral-300 dark:border-neutral-700 dark:peer-checked:text-pink-500 peer-checked:border-pink-600 peer-checked:text-pink-600 hover:text-neutral-600 hover:bg-neutral-100 dark:text-neutral-400 dark:bg-neutral-800 dark:hover:bg-neutral-700">
                  <div className="flex gap-2 items-center">
                    <CreditCard className='w-6 h-6 flex-shrink-0 ms-3'/>
                    <p>Credit card</p>
                  </div>
                </label>
            </li>
        </ul>
      </div>
      <NavButtons/>
    </form>
  )
}
