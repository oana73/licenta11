import React from 'react';
import { ShoppingBasket, Store } from 'lucide-react';

export default function LargeCard({ data }) {
  return (
    <div className={`rounded-lg shadow-md text-neutral-100 p-8 flex items-center flex-col gap-2 ${data.color}`}>
      <Store />
      <h4>{data.period}</h4>
      <h2 className='lg:text-3xl text-2xl'>${data.sales}</h2>
    </div>
  );
}
