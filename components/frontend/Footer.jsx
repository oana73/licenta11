import React from 'react'
import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6'

export default function Footer() {
  return (
    <section className="py-10 sm:pt-16 lg:pt-24 dark:bg-neutral-900">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 mt-12">
            <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
                <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
                    <div className='flex items-center'>
                    <img className="w-16 h-16" src="logo.png" alt="" />
                    <h1 className='font-serif ml-2 text-xl'> CraftCorner</h1>
                    </div>
                    <p className="text-base leading-relaxed text-neutral-600 mt-7">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>

                    <div className="flex items-center space-x-3 mt-9">
                            <FaXTwitter className='flex items-center justify-center text-white transition-all duration-200 bg-neutral-950 rounded-full w-7 h-7 p-1 hover:bg-pink-600 focus:bg-pink-600' />
                            <FaFacebookF className='flex items-center justify-center text-white transition-all duration-200 bg-neutral-950 rounded-full w-7 h-7 p-1 hover:bg-pink-600 focus:bg-pink-600' />
                            <FaInstagram className='flex items-center justify-center text-white transition-all duration-200 bg-neutral-950 rounded-full w-7 h-7 p-1 hover:bg-pink-600 focus:bg-pink-600' />     
                    </div>
                </div>

                <div>
                    <p className="text-sm font-semibold tracking-widest text-neutral-400 uppercase">More About Us</p>
                    <div className="mt-6 space-y-4">                    
                            <p className="flex text-base text-neutral-700 dark:text-neutral-300 transition-all duration-200 hover:text-pink-600 focus:text-pink-600"> About </p>
                            <p className="flex text-base text-neutral-700 dark:text-neutral-300 transition-all duration-200 hover:text-pink-600 focus:text-pink-600"> Features </p>
                            <p className="flex text-base text-neutral-700 dark:text-neutral-300 transition-all duration-200 hover:text-pink-600 focus:text-pink-600"> Works </p>
                            <p className="flex text-base text-neutral-700 dark:text-neutral-300 transition-all duration-200 hover:text-pink-600 focus:text-pink-600"> Career </p>
                    </div>
                </div>

                <div>
                    <p className="text-sm font-semibold tracking-widest text-neutral-400 uppercase">Help</p>
                    <div className="mt-6 space-y-4">
                            <p className="flex text-base text-neutral-700 dark:text-neutral-300 transition-all duration-200 hover:text-pink-600 focus:text-pink-600"> Customer Support </p>             
                            <p className="flex text-base text-neutral-700 dark:text-neutral-300 transition-all duration-200 hover:text-pink-600 focus:text-pink-600"> Delivery Details </p>
                            <p className="flex text-base text-neutrpl-700 dark:text-neutral-300 transition-all duration-200 hover:text-pink-600 focus:text-pink-600"> Terms & Conditions </p>
                            <p className="flex text-base text-neutral-700 dark:text-neutral-300 transition-all duration-200 hover:text-pink-600 focus:text-pink-600"> Privacy Policy </p>
                    </div>
                </div>

                <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
                    <p className="text-sm font-semibold tracking-widest text-neutral-400 uppercase">Subscribe to newsletter</p>
                    <p className='mb-6 mt-6 text-xs text-neutral-700 dark:text-neutral-300'>By clicking the SUBSCRIBE button, you agree to the Privacy Policy and Cookie Policy. If you wish to unsubscribe from marketing emails, access the Privacy Center.</p>
                    <form>
                        <div className='flex'>
                            <input type="email" name="email" id="email" placeholder="Enter your email" className="block w-full px-2 py-2 text-neutral-700 dark:text-neutral-300 bg-white dark:bg-black placeholder-neutral-500 transition-all duration-200 border border-neutral-200 dark:border-neutral-900 rounded-l-xl focus:outline-none focus:border-pink-600" />
                            <button type="submit" className="inline-flex items-center justify-center px-6 py-4 bg-black dark:bg-white font-semibold text-neutral-300 dark:text-neutral-700 transition-all duration-200  rounded-r-xl border border-neutral-900 hover:bg-pink-600 hover:border-pink-600">Subscribe</button>
                        </div>
                        
                    </form>
                </div>
            </div>

            <hr className="mt-16 mb-10 border-neutral-200" />
            <p className="text-sm text-center text-neutral-600">© Copyright 2024, All Rights Reserved by CraftCorner</p>
        </div>
    </section>
  )
}
