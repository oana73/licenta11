import React from 'react'
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import DeleteBtn from '../Actions/DeleteBtn'

export default function ActionColumn({row, title, endpoint}) {
    const payment = row.original
    //const title = row.title
    return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
        </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem><DeleteBtn title={title} endpoint={endpoint} /></DropdownMenuItem>
        <DropdownMenuItem>Edit {title}</DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
    )
}