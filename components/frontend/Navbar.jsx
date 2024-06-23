'use client'
import React from 'react'
import SearchForm from './SearchForm'
import Link from 'next/link'
import Image from 'next/image'
import logo from "../../public/logo.png"
import { FiUser } from "react-icons/fi"
import ThemeSwitcher from '../ThemeSwitcher'
import CartCount from './CartCount'
import { useSession } from 'next-auth/react'
import UserAvatar from '../backoffice/UserAvatar'

export default function Navbar() {
  const {data:session,status} = useSession()
  if(status==='loading'){
    return <p> Loading </p>
  }
  return (
    <div className='sticky top-0 z-50 dark:bg-neutral-950 bg-neutral-50'>
      <div className="flex items-center justify-between py-1 mx-auto max-w-screen-2xl">
        <Link className="flex items-center" href="/aboutUs">
          <Image src={logo} alt="logo" className="w-8" />
          <span className='text-neutral-600 font-semibold font-serif'>CraftCorner</span>
        </Link>
        <div className='flex items-center justify-between space-x-8'>
          <Link href="/aboutUs" className='text-neutral-500 hover:text-pink-600 text-sm'>
            Home
          </Link>
          <Link href="/" className='text-neutral-500 hover:text-pink-600 text-sm'>
            Shop
          </Link>
          <p className='text-neutral-500 hover:text-pink-600 text-sm'>
            <SearchForm />
          </p>
        </div>
        <div className='flex gap-8'>
          <ThemeSwitcher />
          {/* check if authenticated */}
          {status === 'unauthenticated' ? (
            <Link href="/login" className='flex items-center text-neutral-500 hover:text-pink-600'>
              <FiUser />
            </Link>
          ) : (
            <UserAvatar user={session?.user} />
          )}
          <CartCount />
        </div>
      </div>
    </div>
  )
  
}
