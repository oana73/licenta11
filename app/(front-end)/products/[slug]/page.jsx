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
    <div className='mx-auto max-w-screen-2xl '>
        <Breadcrumb/>
        <div className="grid grid-cols-12 gap-6 border border-neutral-200 dark:border-neutral-800 rounded-2xl">
            <ProductImages productImages={product.productImages} thumbnail={product.imageUrl}/>
            <div className='col-span-8 px-12 py-16 '>
                <div className="items-center justify-between mb-20">
                    <div className='flex items-center justify-between'>
                        <h2 className='text-xl font-semibold lg:text-4xl text-neutral-700 dark:text-neutral-300 '>{product.title}</h2>
                        <div className="flex items-center">
                            <p className='text-2xl font-bold text-neutral-700 dark:text-neutral-300 cursor-auto' >${product.discount}</p>
                            <del className='text-neutral-500'>
                                <p class="text-sm text-neutral-500 cursor-auto ml-2">${product.price}</p>
                            </del>
                        </div>
                    </div>
                    <p className='text-sm text-neutral-500 font-normal uppercase'> {product.productStock>0 ? "Availble" : "Out Of Stock"}</p>
                    {/* <ProductShare urlToShare={urlToShare}/> */}
                </div>
                <div className='border-b mb-16'>
                    <p className='py-2 text-justify text-neutral-700 dark:text-neutral-300'>{product.description}</p>
                </div>
                <div className="flex flex-wrap items-center mt-36">
                {product.tags.map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-200 text-gray-700 rounded-full text-sm mr-2 mb-2">{tag}</span>
                ))}
                </div>
                <div className='grid grid-flow-col justify-stretch gap-8 mt-3 lg:mt-8 text-xs md:text-sm lg:text-xl text-center'>
                    <AddToCartButton product={product}/>
                    <button className='bg-neutral-700 hover:bg-gradient-to-r hover:from-pink-400 hover:to-pink-700  text-white rounded-lg py-2'>
                        <span>Go to Store</span>
                    </button>
                </div>
            </div>
        </div>
        <div className='py-8 mt-40'>
            <div className='flex justify-between items-center text-neutral-700 dark:text-neutral-300 py-3 px-6 rounded-t-lg border border-neutral-200 dark:border-neutral-800'>
                <h2 className='font-bold text-lg'>
                    Similar Products
                </h2>
            </div>
            <div className='rounded-b-lg border border-t-0 border-neutral-200 dark:border-neutral-800'>
                <CategoryCarousel products={products}/>
            </div>
        </div>
    </div>
  )
}
