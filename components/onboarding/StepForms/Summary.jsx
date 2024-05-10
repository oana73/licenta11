'use client'
import { makePostRequest } from '@/lib/apiRequest';
import { setCurrentStep } from '@/redux/slices/onboardingSlice';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';

export default function Summary({supplierId}) {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const onboardingFormData = useSelector((store)=> store.onboarding.onboardingFormData)
  const currentStep = useSelector((store)=>store.onboarding.onboardingFormData)
  const dispatch = useDispatch()
  function handdlePrevious(){
    dispatch(setCurrentStep(currentStep-1))
  }

  async function submitData(){
    const data = {
      ...onboardingFormData
    }
    data.userId = supplierId
    console.log(data)
    makePostRequest(setLoading, "api/suppliers", data, "Supplier Profile")
  }
  return (
    <div className='my-6'>
      <h3 class="mb-5 text-lg font-medium text-gray-900 dark:text-white">Order summary</h3>
      <div className="flex">
        <h2>Here are your details</h2>
      </div>
      <div className="mt-4 flex items-center justify-between">
      <button onClick={handdlePrevious}
          type="button"
          className="inline-flex items-center px-5 py-2 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-slate-900 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-slate-800 dark:bg-blue-600 dark:hover:bg-blue-700"
        >
          <ChevronLeft className="w-5 h-5 mr-2" />
          <span>Previous</span>
        </button>
        {
          loading?(
            <button disabled className='inline-flex items-center px-5 py-2 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-slate-900 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-slate-800 dark:bg-blue-600 dark:hover:bg-blue-700'>Processing..</button>
          ):(
          <button onClick={submitData}
            className="inline-flex items-center px-5 py-2 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-slate-900 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-slate-800 dark:bg-blue-600 dark:hover:bg-blue-700"
          >
            <span>Proceed to Payment</span>
            <ChevronRight className="w-5 h-5 ml-2" />
          </button>
          )
        }
      </div>
    </div>
  )
}
