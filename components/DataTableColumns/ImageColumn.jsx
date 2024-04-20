import Image from 'next/image'
import React from 'react'

export default function ImageColumn({row, accessorKey}) {
    const imageUrl = row.getValue(`${accessorKey}`)
    return <Image src={imageUrl} width={500} height={500} alt=' ' className="w-10 h-10 rounded-full object-cover"/>
}
