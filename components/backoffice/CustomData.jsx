"use client"
import React, { useState } from 'react'
import data from '../../data.json'
export default function CustomData() {
 const PAGE_SIZE = 10;
 const [currentPage, setCurrentPage] = useState(1);
 const startIndex = (currentPage-1)*PAGE_SIZE;
 const endIndex = startIndex + PAGE_SIZE
 const currentDisplayedData = data.slice(startIndex, endIndex);
 const numberOfPages = Math.ceil(data.length/PAGE_SIZE);
 //console.log(data);
 const itemStartIndex = startIndex + 1; 
 const itemEndIndex = startIndex + PAGE_SIZE; 

  return (
    <div className='mt-8'>
        <h2 className='text-xl font-bold mb-4 text-neutral-600 dark:text-slate-50 px-4'>Recent Orders</h2>
        {/* Table */}            
        <div className="p-8">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-neutral-500 dark:text-neutral-400">
                <thead className="text-xs text-neutral-700 uppercase bg-neutral-50 dark:bg-neutral-700 dark:text-neutral-400">
                    <tr>
                        
                        <th scope="col" className="p-4">
                            <div className="flex items-center">
                                <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-neutral-100 border-neutral-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-neutral-800 dark:focus:ring-offset-neutral-800 focus:ring-2 dark:bg-neutral-700 dark:border-neutral-600"/>
                                <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                            </div>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            ID
                        </th>
                        <th scope="col" className="px-6 py-3">
                            First Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Last Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Email
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Gender
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        currentDisplayedData.map((item,i)=>{
                          return(
                            <tr key={i} className="bg-white border-b dark:bg-neutral-800 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-600">
                                <td className="w-4 p-4">
                                    <div className="flex items-center">
                                        <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-neutral-100 border-neutral-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-neutral-800 dark:focus:ring-offset-neutral-800 focus:ring-2 dark:bg-neutral-700 dark:border-neutral-600"/>
                                        <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                                    </div>
                                </td>
                                <th scope="row" className="px-6 py-4 font-medium text-neutral-900 whitespace-nowrap dark:text-white">
                                    {item.id}
                                </th>
                                <th scope="row" className="px-6 py-4 font-medium text-neutral-900 whitespace-nowrap dark:text-white">
                                    {item.first_name}
                                </th>
                                <td className="px-6 py-4">
                                    {item.last_name}
                                </td>
                                <td className="px-6 py-4">
                                    {item.email}
                                </td>
                                <td className="px-6 py-4">
                                    {item.gender}
                                </td>
                                <td className="px-6 py-4">
                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                </td>
                            </tr>
                          )  
                        })
                    }
                </tbody>
            </table>
            <nav className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4" aria-label="Table navigation">
                <span className="text-sm font-normal text-neutral-500 dark:text-neutral-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">Showing <span className="font-semibold text-neutral-400 dark:text-white">{itemStartIndex}-{itemEndIndex}</span> of <span className="font-semibold text-neutral-400 dark:text-white">{data.length}</span></span>
                <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-14">
                    <li>
                        <button  
                        onClick={()=> setCurrentPage(currentPage - 1)} 
                        disabled={currentPage == 1}
                        className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-neutral-500 bg-white border border-neutral-300 rounded-s-lg hover:bg-neutral-100 hover:text-neutral-700 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-white">Previous</button>
                    </li>
                    {
                        Array.from({length:numberOfPages}, (_, index)=>{
                            return(
                                <li key={index}>
                                  <button
                                   onClick={()=>setCurrentPage(index+1)}
                                   disabled={currentPage == index+1}
                                   className={currentPage == index+1
                                   ? "flex items-center justify-center px-3 h-8 leading-tight text-neutral-100 bg-pink-500 border border-pink-100 dark:bg-pink-600 dark:border-pink-700 dark:text-neutral-200 "
                                   :"flex items-center justify-center px-3 h-8 leading-tight text-neutral-500 bg-white border border-neutral-300 hover:bg-neutral-100 hover:text-neutral-700 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-white"}>{index+1}</button>
                                </li>
                            )
                        })
                    }
                    
                    <li>
                        <button 
                        onClick={()=> setCurrentPage(currentPage + 1)} 
                        disabled={currentPage == numberOfPages}
                        className="flex items-center justify-center px-3 h-8 leading-tight text-neutral-500 bg-white border border-neutral-300 rounded-e-lg hover:bg-neutral-100 hover:text-neutral-700 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-white">Next</button>
                    </li>
                </ul>
            </nav>
          </div>
        </div>
    </div>
)
}
