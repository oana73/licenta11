'use client'
import TextInput from '@/components/Form/TextInput'
import React from 'react'
import { useForm } from 'react-hook-form';
import NavButtons from '../NavButtons';

export default function PersonaDetailsForm() {
  const {register, reset, handleSubmit, formState:{errors}} = useForm();
  async function processData(data){
    console.log(data)
  }
  return (
    <form onSubmit={handleSubmit(processData)} >
      <h2 className='text-xl  mb-4'>Personal Details</h2>
      <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
        <TextInput
          label="First Name"
          name="firstName"
          register={register}
          errors={errors}
          className='w-full'/>
        <TextInput
          label="Last Name"
          name="LastName"
          register={register}
          errors={errors}
          className='w-full'/>
        <TextInput
          label="Email"
          name="email"
          type="email"
          register={register}
          errors={errors}
          className='w-full'/>
        <TextInput
          label="Phone Number"
          name="phone"
          register={register}
          errors={errors}
          className='w-full'/>
      </div>
      <NavButtons/>
    </form>
  )
}
