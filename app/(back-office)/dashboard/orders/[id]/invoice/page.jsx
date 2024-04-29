import InvoiceDownloadButton from "@/components/Order/InvoiceDownloadButton";
import SalesInvoice from "@/components/Order/SalesInvoice";
import { getData } from "@/lib/getData";
import React from "react";

export default async function page({params:{id}}) {
  const orderId = "662fead995f60d11c11d8f92"
  const order = await getData(`/orders/${orderId}`)
  console.log(order)
  return (
    <div className="flex flex-col">
      <SalesInvoice order={order} />
    </div>
  );
}