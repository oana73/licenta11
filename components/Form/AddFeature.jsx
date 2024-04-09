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
      <div class=" w-full">
          <input value={feature} onChange={e=>setFeature(e.target.value)} type="text" id="voice-search" class="bg-transparent border border-neutral-400 text-neutral-600 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full ps-10 p-2.5 dark:border-neutral-300 dark:placeholder-gray-400 dark:text-neutral-300 " placeholder="Create Tag..." />
      </div>
      <button onClick={addFeature} type="button" class="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-cyan-700 rounded-lg border border-cyan-700 hover:bg-cyan-800 dark:bg-cyan-600 dark:hover:bg-cyan-700">
        <Plus className='w-4 h-4 me-2'/>
        <span>Add</span>
      </button>
      <button onClick={()=>setShowTagForm(false)} type="button" class="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-cyan-700 rounded-lg border border-cyan-700 hover:bg-cyan-800  dark:bg-cyan-600 dark:hover:bg-cyan-700">
        <ArrowLeft className='w-4 h-4 me-2'/>
        <span>Back</span>
      </button>
      </div>
    ):(                
      <button 
        onClick={()=>setShowTagForm(true)}
        type="button" 
        className='flex items-center border text-neutral-600 dark:text-neutral-300 border-gray-400 rounded-lg space-x-2 text-sm py-2 px-4'>
        <Plus/>
        <span> Add Feature</span>
      </button> )
    }
  <div className="flex flex-wrap gap-4 mt-4">
    {
      features.map((item,i)=>{
        return(
          <div onClick={()=>deleteFeature(i)} key={i} className="flex space-x-2 items-center bg-neutral-100 text-neutral-600 dark:bg-neutral-700 dark:text-neutral-200 px-4 py-2 rounded-sm cursor-pointer">
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
