'use client'
import { Airplay, LogOut, UserCog } from 'lucide-react'
import React from 'react'
import { FiUser } from 'react-icons/fi'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { useRouter } from 'next/navigation'
import { signOut } from 'next-auth/react'
import Link from 'next/link'

export default function UserAvatar({user={}}) {
  const {name} = user
  const role = user?.role
  const router = useRouter()
  async function handdleLogout(){
    await signOut()
    router.push('/aboutUs')
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <FiUser className='text-neutral-500 hover:text-pink-600'/>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='py-2 px-4 pr-8 text-neutral-700 dark:text-neutral-300 dark:bg-neutral-900'>
        <DropdownMenuLabel>{name}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href='/dashboard' className='flex items-center space-x-2'>
            <Airplay className="mr-2 h-4 w-4" />
            <span>Dashboard</span>
          </Link>
        </DropdownMenuItem>
        {
          role==='USER' &&
          <DropdownMenuItem>
            <Link href='/dashboard/orders' className='flex items-center space-x-2'>
              <UserCog className="mr-2 h-4 w-4" />
              <span>My orders</span>
            </Link>
          </DropdownMenuItem>
        }
        <DropdownMenuItem>
          <button onClick={handdleLogout} className='flex items-center space-x-2'>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Logout</span>
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
  
}
