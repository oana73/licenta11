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
import AddToCartButton from '@/components/frontend/AddToCartButton';
import { ProductShare } from '@/components/frontend/ProductShareButton';
import ProductImages from '@/components/frontend/ProductImages';

export default async function ProductDetailPage({params:{slug}}) {
    const product = await getData(`/products/product/${slug}`)
    const {id} = product
    const catId = product.categoryId
    const category = await getData(`/categories/${catId}`)
    const categoryProducts = category.products
    const products = categoryProducts.filter((product)=> product.id !== id)
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
    const urlToShare = `${baseUrl}/products/${slug}`
  return (
    <div className='mx-auto max-w-screen-2xl mt-4'>
        <Breadcrumb/>
        <div className="grid grid-cols-12 gap-12">
            <ProductImages productImages={product.productImages} thumbnail={product.imageUrl}/>
            <div className='col-span-8 border border-gray-300 px-8 py-6'>
                <div className="items-center justify-between mb-4 ">
                    <div className='flex items-center justify-between'>
                        <h2 className='text-xl text-semibold lg:text-3xl'>{product.title}</h2>
                        <div className="flex items-center">
                            <p className='text-2xl font-bold text-black cursor-auto' >${product.discount}</p>
                            <del>
                                <p class="text-sm text-gray-600 cursor-auto ml-2">${product.price}</p>
                            </del>
                        </div>
                    </div>
                    <p className='text-sm text-gray-500'> {product.productStock>0 ? "Availble" : "Out Of Stock"}</p>
                    {/* <ProductShare urlToShare={urlToShare}/> */}
                </div>
                <div className='border-b'>
                    <p className='py-2 text-justify'>{product.description}</p>
                </div>
                {/* <div className="flex items-center justify-between border-b gap-4 pt-4 pb-4">
                    <p className='flex items-center'>
                        <CiShoppingTag className='text-neutral-600 me-2'/>
                        <span> Save 50% now!</span>
                    </p>
                </div> */}
                <div className='flex justify-between items-center py-6 gap-6'>
                    <AddToCartButton product={product}/>
                    <button className='items-center w-1/2 space-x-2 px-4 py-2 rounded-md bg-black text-white '>
                        <span>Go to Store</span>
                    </button>
                </div>
            </div>
            {/* <div className='col-span-2 hidden sm:block bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700'>
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

            </div> */}
        </div>
        <div className='my-8 rounded-xl bg-slate-100 mt-40'>
            <h2 className='flex justify-between items-center py-3 px-6  bg-gray-200 bg-opacity-25 rounded-lg '>Similar Products</h2>
            <CategoryCarousel products={products}/>
        </div>
    </div>
  )
}
