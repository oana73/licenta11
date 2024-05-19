"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { LuSearch } from "react-icons/lu";

export default function SearchForm() {
  const {register, handleSubmit, reset} = useForm()
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false);

  const toggleSearch = () => {
    setIsOpen(!isOpen);
  };
  function handleSearch(data){
    const {searchTerm} = data
    console.log(searchTerm)
    reset()
    router.push(`/search?search=${searchTerm}`)
  }
  return (
    <form onSubmit={handleSubmit(handleSearch)} className="flex items-center">   
        <label htmlFor="voice-search" className="sr-only">Search</label>
        <button type="button" onClick={toggleSearch} className="mr-2 text-neutral-500 hover:text-cyan-600">
            Search
        </button>
        {isOpen && (
          <>
          <div className="bg-neutral-50 dark:bg-neutral-700 border border-neutral-300  rounded-lg  p-2">
              <button type='submit'>
                <LuSearch className='mr-2'/>
              </button>
              <input {...register("searchTerm")} type="text" id="voice-search" className=" bg-neutral-50 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 focus:ring-cyan-500 focus:border-cyan-500 dark:border-neutral-600 dark:focus:ring-cyan-500 dark:focus:border-cyan-500" placeholder="Find product"  required />
          </div>
          </>
        )}
    </form>
  );
}

