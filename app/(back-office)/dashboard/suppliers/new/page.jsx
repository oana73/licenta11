"use client"
import ImageInput from '@/components/Form/ImageInput'
import SubmitButton from '@/components/Form/SubmitButon'
import TextArea from '@/components/Form/TextArea'
import TextInput from '@/components/Form/TextInput'
import HeaderForm from '@/components/backoffice/HeaderForm'
import NewSupplierForm from '@/components/backoffice/NewSupplierForm'
import { makePostRequest } from '@/lib/apiRequest'
import { generateSlug } from '@/lib/generateSlug'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function NewSupplier() {
  return (
    <div>
      <HeaderForm title="New Supplier" />
      <NewSupplierForm/>
           
    </div>
  )
}
