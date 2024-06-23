import StepForm from '@/components/onboarding/StepForm';
import Steps from '@/components/onboarding/Steps';
import React from 'react'

export default function page({ params: { id } }) {
    const steps = [
      {
        number: 1,
        title: "Personal Details",
      },
      {
        number: 2,
        title: "Shop Details",
      },
      {
        number: 3,
        title: "Additional Information",
      },
      {
        number: 4,
        title: "Summary",
      },
    ];
  
    return (
      <div className='mx-auto max-w-screen-2xl min-h-screen'>
        <div className="max-w-3xl my-6 mx-auto border border-slate-200 rounded-lg p-6">
          {/* Steps */}
          <Steps steps={steps} />
          <div className='w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700'>
            {/* Form */}
            <StepForm supplierId={id} />
          </div>
        </div>
      </div>
    );
  }
  
