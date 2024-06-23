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
    return (
      <div className='max-w-2xl mx-auto min-h-screen mt-8'>
        <div id="alert-additional-content-5" className="p-4 border border-gray-300 rounded-lg bg-gray-50 dark:border-gray-600 dark:bg-gray-800" role="alert">
          <div className="flex items-center">
            <span className="sr-only">Awaiting request</span>
            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-300">Verify your email</h3>
          </div>
          <div className="mt-2 mb-4 text-sm text-gray-800 dark:text-gray-300">
            Thank you for creating an account with us, we have sent you an email, check your inbox
          </div>
        </div>
      </div>
    );    
  } 
  return (
    <div className='max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto'> 
      <OverviewCards sales={salesById} products={productsById}/>
    </div>
  )
}
