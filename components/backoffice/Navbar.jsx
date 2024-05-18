'use client'
import { Bell, SunDim, User , ChevronLeft,Airplay, UserCog, LogOut, X, AlignJustify} from 'lucide-react'
import { FiShoppingBag, FiShoppingCart, FiUser } from "react-icons/fi";
import { IoIosNotificationsOutline } from "react-icons/io";
import React from 'react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from 'next/image'
import ThemeSwitcher from '../ThemeSwitcher'
import UserAvatar from './UserAvatar';
import { getServerSession } from 'next-auth';
import { useSession } from 'next-auth/react';
import { CiShop } from 'react-icons/ci';
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
          <AlignJustify className='text-neutral-500 hover:text-cyan-600'/>
        </button>
        {/* 3Icons*/}
        <div className="flex space-x-6 p-4">
            <ThemeSwitcher />
            <Link href='/'>
              <FiShoppingCart className='text-neutral-500 hover:text-cyan-600'/>
            </Link>
            {status==='authenticated'&&(
              <UserAvatar user= {session?.user} />
            )}

            
        </div>
    </div>
  )
}
