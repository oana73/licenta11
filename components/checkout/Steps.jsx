'use client'
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react'
import { useSelector } from 'react-redux';

export default function Steps({steps}) {
const cartItems = useSelector((store)=>store.cart)
  const currentStep = useSelector((store)=>store.checkout.currentStep)
  return (      
    <nav className="flex text-sm md:text-xl mb-8">
    <ol
        role="list"
        className="flex flex-wrap gap-y-5 md:gap-y-0 items-center gap-x-1.5"
    >
        <li>
        <div className="-m-1">
            <Link
            href="/cart"
            title=""
            className="inline-flex items-center p-1 text-sm md:text-base font-medium text-neutral-500 rounded-md focus:outline-none focus:ring-2 focus:text-neutral-900 focus:ring-neutral-900 hover:text-neutral-700"
            >
            Cart
            <span className="inline-flex items-center justify-center w-5 h-5 ml-2 text-xs font-bold bg-pink-400 rounded-full text-neutral-50">
                {" "}
                {cartItems.length}{" "}
            </span>
            </Link>
        </div>
        </li>

        {steps.map((step, i) => {
        return (
            <li key={i}>
            <div className="flex items-center">
                <ChevronRight className="flex-shrink-0 w-4 h-4 text-neutral-400" />
                <div className="-m-1">
                <p className={`p-1 ml-1.5 text-sm md:text-base font-medium text-neutral-500 rounded-md focus:outline-none focus:ring-2 focus:text-neutral-900 focus:ring-neutral-900 ${step.number===currentStep?"text-pink-400":""}`}  >
                    {" "}
                    {step.title}
                </p>
                </div>
            </div>
            </li>
        );
        })}
    </ol>
    </nav>
  )
}
