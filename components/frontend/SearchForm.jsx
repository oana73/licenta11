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
          <div className="">
              
              <input {...register("searchTerm")} type="text" id="voice-search" className=" bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-cyan-500 focus:border-cyan-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500" placeholder="Search..." required />
          </div>
          <button type='submit'>
          <LuSearch />
          </button>
          </>
        )}
    </form>
  );
}

