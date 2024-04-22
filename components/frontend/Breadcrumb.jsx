import React from 'react'

export default function Breadcrumb() {
  return (
<nav className="flex mb-4" aria-label="Breadcrumb">
  <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
    <li className="inline-flex items-center">
      <a href="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
        Home
      </a>
    </li>
    <li>
      <div className="flex items-center">
        <a href="#" className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Projects</a>
      </div>
    </li>
    <li aria-current="page">
      <div className="flex items-center">
        <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Cart</span>
      </div>
    </li>
  </ol>
</nav>

  )
}
