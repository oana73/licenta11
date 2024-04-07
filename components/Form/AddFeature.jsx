"use client"
import { ArrowLeft, Plus, X } from 'lucide-react';
import React, { useState } from 'react'

export default function AddFeature({setFeatures, features}) {
    const [feature, setFeature] = useState("");
    const [showTagForm, setShowTagForm] = useState(false);
    function addFeature(){
        if(!feature)
        return;
        setFeatures([...features,feature]);
        setFeature("");
    }
    function deleteFeature(index){
        const newFeatures = [...features];
        newFeatures.splice(index,1);
        setFeatures(newFeatures)
    }
  
  return (
    <div className="sm:col-span-2">  
    {
      showTagForm?(                
      <div class="flex items-center mx-auto">   
      <label for="voice-search" class="sr-only">Search</label>
      <div class="relative w-full">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.15 5.6h.01m3.337 1.913h.01m-6.979 0h.01M5.541 11h.01M15 15h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 2.043 11.89 9.1 9.1 0 0 0 7.2 19.1a8.62 8.62 0 0 0 3.769.9A2.013 2.013 0 0 0 13 18v-.857A2.034 2.034 0 0 1 15 15Z"/>
              </svg>
          </div>
          <input value={feature} onChange={e=>setFeature(e.target.value)} type="text" id="voice-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Create Tag..." />
      </div>
      <button onClick={addFeature} type="button" class="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <Plus className='w-4 h-4 me-2'/>
        <span>Add</span>
      </button>
      <button onClick={()=>setShowTagForm(false)} type="button" class="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <ArrowLeft className='w-4 h-4 me-2'/>
        <span>Back</span>
      </button>
      </div>
    ):(                
      <button 
        onClick={()=>setShowTagForm(true)}
        type="button" 
        className='flex items-center space-x-2 text-sm py-2 px-4'>
        <Plus/>
        <span> Add Feature</span>
      </button> )
    }
  <div className="flex flex-wrap gap-4 mt-4">
    {
      features.map((item,i)=>{
        return(
          <div onClick={()=>deleteFeature(i)} key={i} className="flex space-x-2 items-center bg-neutral-300 text-neutral-600 dark:bg-neutral-700 dark:text-neutral-200 px-4 py-2 rounded-sm cursor-pointer">
            <p>{item}</p>
            <X className='w-4 h-4'/>
          </div>
        )
    })
    }

  </div>
  </div>
  )
}
