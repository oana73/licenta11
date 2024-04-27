'use client'
import React from 'react'
import SearchForm from './SearchForm'
import Link from 'next/link'
import Image from 'next/image'
import logo from "../../public/logo.png"
import { IoBagOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { CarTaxiFront, ShoppingBag, User } from 'lucide-react'
import ThemeSwitcher from '../ThemeSwitcher'
import CartCount from './CartCount'
import { useSession } from 'next-auth/react'
import UserAvatar from '../backoffice/UserAvatar'

export default function Navbar() {
  const {data:session,status} = useSession()
  if(status==='loading'){
    return <p> Loadinh </p>
  }
  return (
    <div className='dark:bg-neutral-900'>
        <div className=" flex items-center justify-between py-1 mx-auto max-w-screen-2xl ">
        <Link className="flex items-center" href="/">
          <Image src={logo} alt="logo" className="w-8" />
          <span className='text-neutral-700 font-semibold'>PlayModeOn</span>
        </Link>
        <div className='flex items-center justify-between space-x-8'>
        <Link href="#" className='text-neutral-500 hover:text-cyan-600 text-sm'>
            Home
        </Link>
        <Link href="#" className='text-neutral-500 hover:text-cyan-600 text-sm'>
            Shop
        </Link>
        <Link href="#" className='text-neutral-500 hover:text-cyan-600 text-sm'>
            Sales
        </Link>
        <SearchForm />
      
        </div>
        <div className='flex gap-8'>
            <ThemeSwitcher/>
            {/* check if autentificated */}
            {
              status==='unauthenticated'?(
                <Link href="/login" className='flex items-center text-neutral-500 hover:text-cyan-600'>
                <FiUser />
                </Link>
              ):(
                <UserAvatar user={session?.user} />
              )
            }
            <CartCount/>
        </div>
        </div>
    </div>
  )
}
