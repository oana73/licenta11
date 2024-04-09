import React from 'react'
export default function SmallCard({data}) {
    const { title,number,iconColor,icon: Icon}=data 
  return (
    <div className='rounded-lg shadow-lg dark:bg-neutral-600 bg-slate-50 dark:text-neutral-100 text-neutral-700 p-4'>
        <div className="flex space-x-4">
            <div className={`w-12 h-12 ${iconColor} rounded-full items-center flex justify-center`}>
              <Icon className='text-neutral-100' />
            </div>
            <div className="div">
                <p>{title}</p>
                <h3 className='text-2xl font-bold'>{number}</h3>
            </div>
        </div>
    </div>
  )
}
