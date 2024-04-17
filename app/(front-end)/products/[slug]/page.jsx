import Breadcrumb from '@/components/frontend/Breadcrumb'
import { IoShareSocialOutline } from "react-icons/io5";
import Image from 'next/image'
import React from 'react'

export default function ProductDetailPage({params:{slug}}) {
  return (
    <div className='mx-auto max-w-screen-2xl'>
        <Breadcrumb/>
        <div className="grid grid-cols-12 gap-4">
            <div className='col-span-3'>
                <Image src='/photo1.jpg' alt='' width={110} height={110} className='w-full' />
            </div>
            <div className='col-span-6'>
                <div className="flex items-center justify-between">
                    <h2 className='text-xil lg:text-2xl'>Ceva nume</h2>
                    <button><IoShareSocialOutline/></button>
                </div>
                <div className='border-b'>
                    <p className='py-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, dLorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, dLorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, d</p>
                    <div className='flex items-center gap-8 mb-4'>
                        <p>SKU: 54132446</p>
                        <p className='py-1.5 px-4 border border-neutral-200 rounded-full'>Stock: 256</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 pt-4">
                    <h4>UGX 44</h4>
                    <del className='text-neutral-400 text-sm'>UGX 55</del>
                </div>
            </div>
            <div className='col-span-3 hidden sm:block bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700'>
                <h2 className='bg-slate-100 py-2 px-6 border-b border-gray-200'>
                    Shop by categorey 
                </h2>
            </div>
        </div>
    </div>
  )
}
