"use client"
import React, { useState } from 'react';
import { LuSearch } from "react-icons/lu";

export default function SearchForm() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSearch = () => {
    setIsOpen(!isOpen);
  };

  return (
    <form className="flex items-center">   
        <label htmlFor="voice-search" className="sr-only">Search</label>
        <button type="button" onClick={toggleSearch} className="mr-2 text-neutral-500 hover:text-cyan-600">
            <LuSearch />
        </button>
        {isOpen && (
          <div className="w-full">
              <input type="text" id="voice-search" className="absolute bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-cyan-500 focus:border-cyan-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500" placeholder="Search..." required />
          </div>
        )}
    </form>
  );
}

