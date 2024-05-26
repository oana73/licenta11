'use client'
import { convertIsoToNormal } from "@/lib/convertIsoToNormal";
import Image from "next/image";
import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
export default function Invoice({order}) {
  const invoiceDate = convertIsoToNormal(order.createdAt)
  const subTotal = order.orderItems.reduce((acc,currentItem)=>{
    return acc + currentItem.price * currentItem.quantity
  },0).toFixed(2) ?? 0;
  const tax = 20

  const invoiceRef = useRef();

  const total = (parseFloat(subTotal) + parseFloat(tax)).toFixed(2)
  const handlePrint = useReactToPrint({
    content: () => invoiceRef.current,
  });
  return (
    <div className="flex flex-col max-w-4xl mx-auto ">
    {/* DownloadButton */}
    <div className="flex justify-end mb-4">
        <button onClick={handlePrint}
        type="button"
        className="px-4 py-3 text-xs font-bold text-neutral-700 dark:text-neutral-300 rounded-md border border-neutral-200 dark:border-neutral-700 "
        >
        Download Invoice
        </button>
    </div>
    {/* Invoice */}
      <div ref={invoiceRef}>
      <div className="border border-neutral-300 dark:border-neutral-700 p-8 rounded-sm text-neutral-700 dark:text-neutral-300">
      {/* Header */}
      <div className="flex justify-between pb-8">
      <div className="flex flex-col">
          <div className="flex justify-between">
            <p className="font-semibold">Invoice </p>
            <p>#{order.orderNumber}</p>
          </div>
          <div className="flex justify-between gap-4">
            <p className="font-semibold">Invoice Date</p>
            <p>{invoiceDate}</p>
          </div>
        </div>
        <Image src="/logo.png" width={200} height={200} alt="logo" className="w-16 h-16" />  
      </div>
      {/* Header End */}
      <div className="flex justify-between py-8">
        <div className="flex flex-col">
          <h2 className="font-semibold">Bill To:</h2>
          <p>{order.firstName} {order.lastName}</p>
          <p>{order.streetAddress} {order.city} {order.zipCode}</p>
          <p>{order.country}</p>
          <p>{order.email}</p>
        </div>
        <div className="flex flex-col">
          <h2 className="font-semibold">Bill From:</h2>
          <p>CraftCorner</p>
          <p>Romania</p>
          <p>CraftCorner@gmail.com</p>
        </div>
      </div>

      <div className="relative overflow-x-auto border">
        <table className="w-full text-sm text-left rtl:text-right text-neutral-500 dark:text-neutral-300">
          <thead className="text-xs text-neutral-700 uppercase bg-neutral-100 dark:bg-neutral-700 dark:text-neutral-300">
            <tr>
              <th scope="col" className="px-6 py-3">
                Item
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3">
                Cost
              </th>
              <th scope="col" className="px-6 py-3">
                Total
              </th>
            </tr>
          </thead>
          <tbody>
            {
              order.orderItems.map((item,i)=>{
                const itemSubtotal = (item.quantity*item.price).toFixed(2)
                return(
                  <tr key={i} className="bg-white border-t dark:bg-neutral-800 dark:border-neutral-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-neutral-700 whitespace-nowrap dark:text-neutral-300"
                  >
                    {item.title}
                  </th>
                  <td className="px-6 py-4">Silver</td>
                  <td className="px-6 py-4">{item.quantity}</td>
                  <td className="px-6 py-4">${item.price}</td>
                  <td className="px-6 py-4">${itemSubtotal}</td>
                </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
      <div className="flex justify-between py-8">
        <div className="flex flex-col">
          <div className="flex justify-between gap-4">
            <p>SubTotal</p>
            <p>${subTotal}</p>
          </div>
          <div className="flex justify-between">
            <p>Tax</p>
            <p>${tax}</p>
          </div>
          <div className="flex justify-between">
            <p>Total</p>
            <p>${total}</p>
          </div>
        </div>
      </div>
      </div>
      </div>
    </div>

  );
}