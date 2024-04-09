import { X } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function HeaderForm({title}) {
  const router = useRouter()
  return (
    <div className="flex items-center justify-between py-6 px-12 dark:bg-neutral-700 rounded-lg bg-cyan-600 shadow-xl">
    <h2 className='text-xl font-semibold'>{title}</h2>
    <button onClick={()=> router.back()} className=''>
      <X />
    </button>
  </div>
  )
}
