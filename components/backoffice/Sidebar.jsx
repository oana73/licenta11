"use client"
import React from 'react'
import Image from 'next/image'
import { Airplay, Blocks, Book, ChevronDown, ChevronRight, FileBadge, Headset, Layers, Layout, LayoutGrid, Settings, ShoppingBag, Users } from 'lucide-react'
import { usePathname } from 'next/navigation'
import {
   Collapsible,
   CollapsibleContent,
   CollapsibleTrigger,
 } from "@/components/ui/collapsible"
import Link from 'next/link'
 
export default function Sidebar({showSidebar,setSidebar}) {
   const catalogLinks=[
      {
         title:"Products",
         href: "/dashboard/products"
      },
      {
         title:"Categories",
         href: "/dashboard/categories"
      },
      {
         title:"Coupons",
         href: "/dashboard/coupons"
      },
      {
         title:"Sliders",
         href: "/dashboard/sliders"
      },
     ];
  const sidebarLinks=[
   {
      title:"Customers",
      icon:Users ,
      href: "/dashboard/customers"
   },
   {
      title:"Markets",
      icon: Blocks,
      href: "/dashboard/markets"
   },
   {
      title:"Orders",
      icon: ShoppingBag ,
      href: "/dashboard/orders"
   },
   {
      title:"Suppliers",
      icon: FileBadge,
      href: "/dashboard/suppliers"
   },
   {
      title:"Staff",
      icon: Headset,
      href: "/dashboard/staff"
   },
   {
      title:"Trainings",
      icon: Book,
      href: "/dashboard/trainings"
   },
   {
      title:"Settings",
      icon: Settings,
      href: "/dashboard/settings"
   },
   {
      title:"Store",
      icon: Airplay,
      href: "/"
   },
  ];
  const pathName = usePathname()
  return (
    <div className= {showSidebar?"sm:block mt-14 sm:mt-0 font-medium bg-slate-50 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300 space-y-6 w-52 h-screen fixed left-0 top-0 shadow-md"
   :" mt-20 hidden sm:block sm:mt-0 font-medium bg-slate-50 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300 space-y-6 w-52 h-screen fixed left-0 top-0 shadow-md"} >
        <a className='mb-6 ' href="/dashboard">
          <Image src="/logo.png"
          alt="logo"
          width={50}
          height={50}
          className='mt-3'
          />
        </a>
        <div className='space-y-6 flex flex-col  '>
            <Link onClick={() => setSidebar(false)}
            href="/dashboard" 
            className={pathName==='/dashboard'
               ?"flex items-center space-x-3 px-6 py-0.5 border-l-2 border-cyan-500  text-cyan-500"
               :"flex items-center space-x-3 px-6 py-0.5 hover-cyan-500 hover:text-black dark:hover:text-white"}>
              <LayoutGrid className='w-5 h-5'/>
              <span>Dashboard</span>
            </Link>
            <Collapsible className='px-6'>
            <CollapsibleTrigger className='' >
               <div className='flex items-center space-x-3 py-0.5 hover:text-black dark:hover:text-white'>
                     <div className='flex items-center space-x-3'>
                        <Layers className='w-5 h-5'/>
                        <span>Catalog</span>
                     </div>
               </div>
            </CollapsibleTrigger>
            <CollapsibleContent className='pl-8 py-3 text-neutral-600 dark:bg-neutral-900 dark:text-neutral-300 rounded-xl'>
               {
                  catalogLinks.map((item,i)=>{
                     return(
                        <Link href={item.href} 
                        className={pathName===item.href
                        ?"flex items-center space-x-3 py-1 text-cyan-500 text-sm"
                        :"flex items-center space-x-3 py-1 text-sm hover:text-black dark:hover:text-white"}>
                        <span>{item.title}</span>
                     </Link>
                     );
                  }
                  )
               }
            </CollapsibleContent>
            </Collapsible>
            {
               sidebarLinks.map((item,i)=>{
                  const Icon = item.icon
                  return(
                     <Link 
                     onClick={() => setSidebar(false)}
                     key={i}
                     href={item.href}
                     className={item.href==pathName
                        ?"flex items-center space-x-3 px-6 py-0.5 border-l-2 border-cyan-500 text-cyan-500"
                        :"flex items-center space-x-3 px-6 py-0.5 hover:text-black dark:hover:text-white "}>
                        <Icon className='w-5 h-5'/>   
                        <span>{item.title}</span>                 
                     </Link>
                  );
               })
            }
        </div>
    </div>
  )
}
