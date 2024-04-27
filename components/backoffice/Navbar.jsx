import { Bell, SunDim, User , ChevronLeft,Airplay, UserCog, LogOut, X, AlignJustify} from 'lucide-react'
import { FiUser } from "react-icons/fi";
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


export default function Navbar({setSidebar,showSidebar}) {
  const user = {}
  return (
    <div className='flex items-center justify-between bg-white dark:bg-neutral-900 text-slate-50 h-14 py-4 fixed top-0 w-full px-8 z-50 sm:pr-[16rem] shadow-sm' >
        {/* Icon */}
        <button onClick={()=>setSidebar(!showSidebar)}>
          <AlignJustify className='text-neutral-500 hover:text-cyan-600'/>
        </button>
        {/* 3Icons*/}
        <div className="flex space-x-3 ">
            <ThemeSwitcher />
            <DropdownMenu >
              <DropdownMenuTrigger>
              <div className="relative inline-flex items-center p-3 text-sm text-center text-neutral-100 rounded-lg ">
                  <IoIosNotificationsOutline className='text-neutral-500 w-6 h-5 hover:text-cyan-600' />
                  <span className="sr-only">Notifications</span>
                  <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs text-neutral-300 bg-red-500 rounded-full top-0 end-1 dark:border-gray-900">2</div>
              </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className='py-2 px-4 pr-8'>
                <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                <div className='flex items-center space-x-2 '>
                    <Image
                      src="/profile.jpg"
                      alt="pic"
                      width={200}
                      height={200}
                      className="w-8 h-8 rounded-full"
                    />
                    <div className="flex flex-col space-y-1">
                      <p>
                        Yellow Sweet Out</p>
                      <div className="flex items-center space-x-2">
                        <p className='px-3 py-0.5 bg-red-700 text-white text-xs rounded-full '>Out Of Stock</p>
                        <p>Dec 12 2021 - 14:00PM</p>
                      </div>
                    </div>
                    <button>
                      <X/>
                    </button>
                </div>
                </DropdownMenuItem>
                <DropdownMenuItem>
                <div className='flex items-center space-x-2'>
                    <Image
                      src="/profile.jpg"
                      alt="pic"
                      width={200}
                      height={200}
                      className="w-8 h-8 rounded-full"
                    />
                    <div className="flex flex-col space-y-1">
                      <p>
                        Yellow Sweet Out</p>
                      <div className="flex items-center space-x-2">
                        <p className='px-3 py-0.5 bg-red-700 text-white text-xs rounded-full '>Out Of Stock</p>
                        <p>Dec 12 2021 - 14:00PM</p>
                      </div>
                    </div>
                    <button>
                      <X/>
                    </button>
                </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <UserAvatar user= {user} />

            
        </div>
    </div>
  )
}
