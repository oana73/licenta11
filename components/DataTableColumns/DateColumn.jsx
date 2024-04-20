import React from 'react'

export default function DateColumn({row, accessorKey}) {
    const createdAt = row.getValue(`${accessorKey}`)
    const original = new Date(createdAt)
    const mounth = original.toLocaleString('default', {mounth: 'short' })
    const formatted =`${mounth}`
    return (
        <div className=''>
            {formatted}
        </div>
    )
}
