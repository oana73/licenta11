import { ArrowDownToLine, Search, Trash } from 'lucide-react'
import React from 'react'

export default function TableActions() {
  return (
    <div className="flex justify-between py-6 px-6 bg-white dark:bg-neutral-700 rounded-lg items-center gap-6 shadow-lg">
    <button className='inline-flex items-center text-cyan-600 hover:text-white border border-cyan-600 hover:bg-cyan-600 font-medium rounded-lg text-sm px-4 py-3 space-x-3 text-center dark:border-neutral-600 dark:text-neutral-400 dark:hover:text-white dark:hover:bg-neutral-600 dark:focus:ring-cyan-500 dark:focus:border-cyan-500 '>
      <ArrowDownToLine/>
      <span>Export</span>
    </button>
    <div className="flex-grow">
    <label htmlFor="table-search" className="sr-only">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
          <Search className='w-4 h-4 text-neutral-500 dark:text-neutral-400' />
        </div>
        <input type="text" id="table-search" className="block py-3 ps-10 text-sm text-neutral-900 border border-neutral-300 rounded-lg w-full bg-neutral-50 focus:ring-cyan-500 focus:border-cyan-500 dark:bg-neutral-600 dark:border-neutral-500 dark:placeholder-neutral-300 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500" placeholder="Search for items"/>
    </div>
    </div>
    <button className='flex items-center space-x-2 bg-red-700 hover:bg-red-500 text-white text-sm rounded-lg px-4 py-2.5'>
      <Trash className=''/>
      <span>Delete</span>
    </button>
  </div>
  )
}
