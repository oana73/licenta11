import React from 'react';
import { ShoppingBasket, Store } from 'lucide-react';

export default function LargeCard({ data }) {
  return (
    <div className={`rounded-lg text-neutral-100 shadow-md p-8 flex items-center flex-col gap-2 ${data.color}`}>
      <Store />
      <h4>{data.period}</h4>
      <h2 className='lg:text-3xl text-2xl'>UGX.{data.sales}</h2>
    </div>
  );
}
