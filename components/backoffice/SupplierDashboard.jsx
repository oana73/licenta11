import { authOptions } from '@/lib/authOptions'
import { getData } from '@/lib/getData'
import { getServerSession } from 'next-auth'
import React from 'react'
import OverviewCards from './Supplier/OverviewCards'

export default async function SupplierDashboard() {
  const session = await getServerSession(authOptions)
  const user = session?.user
  const{name, email, id, role, emailVerified, status=false} = user
  const sales = await getData("sales")
  const salesById = sales.filter((sale)=> sale.vendorId === id)
  const products = await getData("products")
  const productsById = products.filter((product)=>product.userId === id)
  if(!status){
    return(
      <div className='max-w-2xl mx-auto min-h-screen mt-8'>
      <div id="alert-additional-content-5" className="p-4 border border-gray-300 rounded-lg bg-gray-50 dark:border-gray-600 dark:bg-gray-800" role="alert">
      <div className="flex items-center">
          <svg className="flex-shrink-0 w-4 h-4 me-2 dark:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
          </svg>
          <span className="sr-only">Awaiting request</span>
          <h3 className="text-lg font-medium text-gray-800 dark:text-gray-300">Verify your email</h3>
      </div>
      <div className="mt-2 mb-4 text-sm text-gray-800 dark:text-gray-300">
          Thank you for creating an account with us, we have sent you an email, check your inbox
      </div>
      </div>
  </div>
    )
  } 
  return (
    <div className='max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto'> 
      <OverviewCards sales={salesById} products={productsById}/>
    </div>
  )
}
