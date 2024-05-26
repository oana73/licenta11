import CartBanner from '@/components/checkout/CartBanner';
import StepForm from '@/components/checkout/StepForm';
import Steps from '@/components/checkout/Steps';
import React from 'react'

export default function page() {
    const steps = [
        {
            number:1,
            title: "Personal Details",
        },
        {
            number:2,
            title: "Shipping Details",
        },
        {
            number:3,
            title: "Payment Method",
        },
        {
            number:4,
            title: "Order Summary"
        },
      ];
  return (
    <div className='mx-auto max-w-screen-2xl min-h-screen py-8'>
        <div className="max-w-3xl mx-auto  border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
            {/* Steps */}
            <Steps steps={steps}/>
            <div className='w-full p-4 border border-neutral-200 dark:border-neutral-700 rounded-lg shadow sm:p-6 md:p-8'>
                {/* Banner */}
                <CartBanner/>
                {/* Form */}
                <StepForm />
            </div>
        </div>
    </div>
  )
}
