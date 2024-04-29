'use client'
import React from 'react'

export default function InvoiceDownloadButton() {
    function handlePrint(){
        console.log("click")
    }
  return (
    <div className="flex items-end justify-end mb-8">
        <button onClick={handlePrint}
        type="button"
        className="inline-flex items-center justify-center px-4 py-3 text-xs font-bold text-gray-900 transition-all duration-200 bg-gray-100 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 hover:bg-gray-200"
        >
        Download Invoice
        </button>
    </div>
  )
}
