"use client"
import React from 'react'
import Image from 'next/image'
import { Airplay, Blocks, Book, ChevronDown, ChevronRight, FileBadge, Headset, Layers, Layout, LayoutGrid, ShoppingBag, Users, Verified } from 'lucide-react'
import { usePathname } from 'next/navigation'
import {
   Collapsible,
   CollapsibleContent,
   CollapsibleTrigger,
 } from "@/components/ui/collapsible"
import Link from 'next/link'
import { useSession } from 'next-auth/react'
 
export default function Sidebar({showSidebar,setSidebar}) {
  const{data:session, state} = useSession()
  const  status = session?.user.status;
  if (state==='loading'){
    return <p>loading</p>
  }

  const role = session?.user?.role;
  let catalogLinks=[
   {
      title:"Products",
      href: "/dashboard/products"
   },
   {
      title:"Categories",
      href: "/dashboard/categories"
   },
   ];
  let sidebarLinks=[
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
      title:"Sales",
      icon: ShoppingBag ,
      href: "/dashboard/sales"
   },
   {
      title:"Suppliers",
      icon: FileBadge,
      href: "/dashboard/suppliers"
   },
   {
      title:"Trainings",
      icon: Book,
      href: "/dashboard/trainings"
   },
   {
      title:"Store",
      icon: Airplay,
      href: "/aboutUs"
   },
  ];
  const pathName = usePathname()
  if (role === 'SUPPLIER' && !status) {
   return (
     <div className={showSidebar ? "lg:block mt-14 lg:mt-0 font-medium bg-neutral-50 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300 space-y-6 w-52 h-screen fixed left-0 top-0 shadow-md" : "mt-20 hidden lg:block lg:mt-0 font-medium bg-neutral-50 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300 space-y-6 w-52 h-screen fixed left-0 top-0 shadow-md"}>
       <Link className='mb-6' href="/dashboard">
         <Image
           src="/logo.png"
           alt="logo"
           width={50}
           height={50}
           className='mt-3'
         />
       </Link>
       <div className='space-y-6 flex flex-col'>
         <div className='flex items-center space-x-3 px-6 py-0.5 hover-pink-500'>
           <Verified className='w-5 h-5' />
           <span>Verification</span>
         </div>
       </div>
     </div>
   );
 }
 
 if(role==='SUPPLIER'){
   sidebarLinks = [
     {
       title:"Sales",
       icon: ShoppingBag ,
       href: "/dashboard/sales"
     },
     {
       title:"Store",
       icon: Airplay,
       href: "/"
     },
   ];
   catalogLinks=[
     {
       title:"Products",
       href: "/dashboard/products"
     },
   ];
 }
 
  if(role==='USER'){
   sidebarLinks=[
   {
      title:"My Orders",
      icon: ShoppingBag ,
      href: "/dashboard/orders"
   },
   {
      title:"Store",
      icon: Airplay,
      href: "/aboutUs"
   },
  ]
   catalogLinks=[]
}
   return (
      <div className={showSidebar ? "lg:block mt-14 lg:mt-0 font-medium bg-neutral-50 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300 space-y-6 w-52 h-screen fixed left-0 top-0 shadow-md" : "mt-20 hidden lg:block lg:mt-0 font-medium bg-neutral-50 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300 space-y-6 w-52 h-screen fixed left-0 top-0 shadow-md"}>
      <Link className='flex items-center mb-6 mt-2 text-neutral-950 font-semibold font-serif' href="/dashboard">
         <Image
            src="/logo.png"
            alt="logo"
            width={50}
            height={50}
            className='ml-2'
         />
         <span className='text-lg'>
            CraftCorner
         </span>
      </Link>
      <div className='space-y-6 flex flex-col'>
         <Link
            onClick={() => setSidebar(false)}
            href="/dashboard"
            className={pathName === '/dashboard' ? "flex items-center space-x-3 px-6 py-0.5 border-l-2 border-pink-500 text-pink-500" : "flex items-center space-x-3 px-6 py-0.5 hover-pink-500 hover:text-black dark:hover:text-white"}>
            <LayoutGrid className='w-5 h-5' />
            <span>Dashboard</span>
         </Link>
         {catalogLinks.length > 0 && (
            <Collapsible className='px-6'>
            <CollapsibleTrigger className=''>
               <div className='flex items-center space-x-3 py-0.5 hover:text-black dark:hover:text-white'>
                  <div className='flex items-center space-x-3'>
                  <Layers className='w-5 h-5' />
                  <span>Catalog</span>
                  </div>
               </div>
            </CollapsibleTrigger>
            <CollapsibleContent className='pl-8 py-3 text-neutral-600 dark:bg-neutral-900 dark:text-neutral-300 rounded-xl'>
               {catalogLinks.map((item, i) => {
                  return (
                  <Link
                     href={item.href}
                     className={pathName === item.href ? "flex items-center space-x-3 py-1 text-pink-500 text-sm" : "flex items-center space-x-3 py-1 text-sm hover:text-black dark:hover:text-white"}>
                     <span>{item.title}</span>
                  </Link>
                  );
               })}
            </CollapsibleContent>
            </Collapsible>
         )}
         {sidebarLinks.map((item, i) => {
            const Icon = item.icon;
            return (
            <Link
               onClick={() => setSidebar(false)}
               key={i}
               href={item.href}
               className={item.href === pathName ? "flex items-center space-x-3 px-6 py-0.5 border-l-2 border-pink-500 text-pink-500" : "flex items-center space-x-3 px-6 py-0.5 hover:text-black dark:hover:text-white "}>
               <Icon className='w-5 h-5' />
               <span>{item.title}</span>
            </Link>
            );
         })}
      </div>
      </div>
   );
   
}
