import { Bell, SunDim, User , ChevronLeft,Airplay, UserCog, LogOut, X} from 'lucide-react'
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


export default function Navbar({setSidebar,showSidebar}) {
  return (
    <div className='flex items-center justify-between bg-white dark:bg-neutral-900 text-slate-50 h-18 py-4 fixed top-0 w-full px-8 z-50 sm:pr-[20rem] shadow-sm' >
        {/* Icon */}
        <button onClick={()=>setSidebar(!showSidebar)}>
          <ChevronLeft className='text-neutral-600'/>
        </button>
        {/* 3Icons*/}
        <div className="flex space-x-3 ">
            <ThemeSwitcher />
            <DropdownMenu>
              <DropdownMenuTrigger>
              <div className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white rounded-lg ">
                  <Bell className='text-neutral-600'/>
                  <span className="sr-only">Notifications</span>
                  <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full -top-1 end-0 dark:border-gray-900">20</div>
              </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className='py-2 px-4 pr-8'>
                <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                <DropdownMenuSeparator />
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
                <DropdownMenuSeparator />
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
                <DropdownMenuSeparator />
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <User className='text-neutral-600'/>
              </DropdownMenuTrigger>
              <DropdownMenuContent className='py-2 px-4 pr-8'>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <button className='flex items-center space-x-2'>
                    <Airplay className="mr-2 h-4 w-4" />
                    <span>Dashboard</span>
                  </button>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <button className='flex items-center space-x-2'>
                    <UserCog className="mr-2 h-4 w-4" />
                    <span>Edit Profile</span>
                  </button>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <button className='flex items-center space-x-2'>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Logout</span>
                  </button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            
        </div>
    </div>
  )
}
