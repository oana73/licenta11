'use client'
import {  AlignJustify} from 'lucide-react'
import {  FiShoppingCart } from "react-icons/fi";
import React from 'react'
import ThemeSwitcher from '../ThemeSwitcher'
import UserAvatar from './UserAvatar';
import { useSession } from 'next-auth/react';
import Link from 'next/link';


export default function Navbar({setSidebar,showSidebar}) {
  const {data: session, status } = useSession()
  if(status==='loading'){
    return <p>Loadig...</p>
  }
  return (
    <div className='flex items-center justify-between bg-neutral-100 dark:bg-neutral-900 text-slate-50 h-14 py-4 fixed top-0 w-full px-8 z-50 sm:pr-[16rem] shadow-sm' >
        {/* Icon */}
        <button onClick={()=>setSidebar(!showSidebar)}>
          <AlignJustify className='text-neutral-500 hover:text-pink-600'/>
        </button>

        {/* 3Icons*/}
        <div className="flex space-x-6 p-4">
            <ThemeSwitcher />
            {status==='authenticated'&&(
              <UserAvatar user= {session?.user} />
            )}
            <Link href='/'>
              <FiShoppingCart className='text-neutral-500 hover:text-pink-600'/>
            </Link>  
                      
        </div>
    </div>
  )
}
