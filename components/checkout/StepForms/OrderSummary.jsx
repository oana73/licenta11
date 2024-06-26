'use client'
import { setCurrentStep } from '@/redux/slices/checkoutSlice';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '@/redux/slices/cartSlice'

export default function OrderSummaryForm() {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const checkoutFormData = useSelector((store)=> store.checkout.checkoutFormData)
  const currentStep = useSelector((store)=>store.checkout.currentStep)
  const dispatch = useDispatch()
  function handdlePrevious(){
    dispatch(setCurrentStep(currentStep-1))
  }
  const cartItems = useSelector((store)=>store.cart)
  const subTotal = cartItems.reduce((acc,currentItem)=>{
    return acc + currentItem.discount * currentItem.qty
  },0).toFixed(2) ?? 0;

  async function submitData(){
    //orderItems= cartItems
    const data = {
      orderItems:cartItems,
      checkoutFormData,
    }
    console.log(data.orderItems)
    try {
      setLoading(true);
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
      const response = await fetch(`${baseUrl}/api/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const responseData = await response.json()
      if (response.ok) {
        setLoading(false);
        toast.success("New Order Created Successfully");
        console.log("About to clear cart");
        dispatch(clearCart());
        router.push(`/order-confirmation/${responseData.id}`)
        
      } else {
        setLoading(false);
        toast.error("Something Went wrong");
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }
  return (
    <div className='my-6'>
      <h3 className="mb-5 text-lg font-medium text-neutral-900 dark:text-white">Order summary</h3>
      {cartItems.map((cartItem, i) => {
        return (
          <div className='flex items-center justify-between border-b border-neutral-400 pb-3 font-semibold text-neutral-700 text-sm mb-4'>
            <div className="flex items-center gap-3">
              <Image src={cartItem.imageUrl} width={249} height={249} alt={cartItem.title} className='rounded-xl w-14 h-14'/>
              <div className="flex flex-col">
                <h2>{cartItem.title}</h2>
              </div>
            </div>
            <div className='rounded-xl border flex gap-3 items-center '>
              <p className='flex-grow py-2 px-4'>{cartItem.qty}</p>
            </div>
            <div className="flex items-center gap-2">
              <h4>${cartItem.discount}</h4>
            </div>
          </div>
        );
      })}
      <div className="mt-4 flex items-center justify-between">
        <button onClick={handdlePrevious}
          type="button"
          className="inline-flex items-center px-5 py-2 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-neutral-900 rounded-lg focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-900 hover:bg-neutral-800 dark:bg-pink-600 dark:hover:bg-pink-700"
        >
          <ChevronLeft className="w-5 h-5 mr-2" />
          <span>Previous</span>
        </button>
        {loading ? (
          <button disabled className='inline-flex items-center px-5 py-2 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-neutral-900 rounded-lg focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-900 hover:bg-neutral-800 dark:bg-pink-600 dark:hover:bg-pink-700'>Processing..</button>
        ) : (
          <button onClick={submitData}
            className="inline-flex items-center px-5 py-2 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-neutral-900 rounded-lg focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-900 hover:bg-neutral-800 dark:bg-pink-600 dark:hover:bg-pink-700"
          >
            <span>Proceed to Payment</span>
            <ChevronRight className="w-5 h-5 ml-2" />
          </button>
        )}
      </div>
    </div>
  );
  
}
