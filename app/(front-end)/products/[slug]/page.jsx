import Breadcrumb from '@/components/frontend/Breadcrumb'
import { IoShareSocialOutline } from "react-icons/io5";
import { CiShoppingTag } from "react-icons/ci";
import { FaMinus,FaPlus } from "react-icons/fa6";
import Image from 'next/image'
import React from 'react'
import { Minus, Plus, ShoppingBag } from 'lucide-react';
import CategoryCarousel from '@/components/frontend/CategoryCarousel';
import { getData } from '@/lib/getData';
import Link from 'next/link';
import { IoSendOutline } from "react-icons/io5";

export default async function ProductDetailPage({params:{slug}}) {
    const product = await getData(`/products/product/${slug}`)
  return (
    <div className='mx-auto max-w-screen-2xl mt-10'>
        <Breadcrumb/>
        <div className="grid grid-cols-12 gap-12">
            <div className='col-span-3'>
                <Image src={product.imageUrl} alt={product.title} width={110} height={110} className='w-full' />
            </div>
            <div className='col-span-6'>
                <div className="flex items-center justify-between mb-4">
                    <h2 className='text-xl lg:text-2xl'>{product.title}</h2>
                    <button><IoShareSocialOutline/></button>
                </div>
                <div className='border-b'>
                    <p className='py-2'>{product.description}</p>
                    <div className='flex items-center gap-8 mb-4'>
                        <p>SKU: {product.sku}</p>
                        <p className='py-1.5 px-4 border border-neutral-200 rounded-full'>Stock: {product.qty}</p>
                    </div>
                </div>
                <div className="flex items-center justify-between border-b gap-4 pt-4 pb-4">
                    <div className="flex items-center gap-4">
                        <h4>UGX {product.discount}</h4>
                        <del className='text-neutral-400 text-sm'>UGX {product.price}</del>
                    </div>
                    <p className='flex items-center'>
                        <CiShoppingTag className='text-neutral-600 me-2'/>
                        <span> Save 50% now!</span>
                    </p>
                </div>
                <div className='flex justify-between items-center py-6'>
                    <div className='rounded-xl border flex gap-3 items-center '>
                        <button className='border-r py-3 px-4'>
                            <FaMinus/>
                        </button>
                        <p className='flex-grow py-2 px-4'>1</p>
                        <button className='border-l py-3 px-4'>
                            <FaPlus/>
                        </button>
                    </div>
                    <button className='flex items-center space-x-2 px-4 py-2 rounded-md bg-cyan-300'>
                        <ShoppingBag/>
                    </button>
                </div>
            </div>
            <div className='col-span-3 hidden sm:block bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700'>
                <h2 className='bg-slate-100 py-2 px-6 border-b border-gray-200'>
                    Delivery 
                </h2>
                <div className='p-4'>
                    <div className="flex rounded-lg py-2 px-4 bg-slate-100 items-center gap-3">
                        <span>Express</span>
                        < IoSendOutline />
                    </div>
                    <div className='py-3 border-b'>
                        For free delivery 
                        <Link href='#'> </Link>
                    </div>
                    <h2 className='py-2'> Choose location </h2>
                    <div className='pb-3'>
                        <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Choose a country</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </div>
                    <div className='pb-3'>
                        <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Choose a country</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </div>
                    <div className='pb-3'>
                        <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Choose a country</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </div>
                </div>

            </div>
        </div>
        <div className='my-8 rounded-xl bg-slate-100 p-4'>
            <h2 className='mb-4 font-semibold ml-2'>Similar Products</h2>
            {/* <CategoryCarousel products={category.products}/> */}
        </div>
    </div>
  )
}
