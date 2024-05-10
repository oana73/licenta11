import React from 'react'
import NewSupplierForm from '@/components/backoffice/NewSupplierForm';
import { getData } from '@/lib/getData';
import db from '@/lib/db';

export default async function page({params:{id}}) {
    const user = await getData(`users/${id}`)
    console.log(user)
  return(
    <div className='flex flex-col gap-6 p-10'>
        <div className='p-4 mx-auto'>
            Hello {user?.name}, tell us more about you 
        </div>
        {/* auto coplet the fields after registration */}
        <NewSupplierForm user={user}/> 
    </div>
  );
}

