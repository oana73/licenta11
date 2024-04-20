"use client"
import Image from "next/image"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export const columns = [
{
    id: "select",
    header: ({ table }) => (
        <Checkbox
        checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        />
    ),
    cell: ({ row }) => (
        <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        />
    ),
    enableSorting: false,
    enableHiding: false,
    },
  {
    accessorKey: "title",
    header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Title
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
  },
  {
    accessorKey: "imageUrl",
    header: "Category Image",
    cell: ({ row }) => {
        const imageUrl = row.getValue("imageUrl")
        return <Image src={imageUrl} width={500} height={500} className="w-10 h-10 rounded-full object-cover"/>
      },
  },
//   {
//     accessorKey: "description",
//     header: "Description",
//     cell: ({ row }) => {
//         const description = row.getValue("description")
//         return (
//             <div className=" line-clamp-1">
//                 {description}
//             </div>
//         )
//       },
//   },
  {
    accessorKey: "createdAt",
    header: "Create Date",
    cell: ({ row }) => {
        const createdAt = row.getValue("createdAt")
        const original = new Date(createdAt)
        const mounth = original.toLocaleString('default', {mounth: 'short' })
        const formatted =`${mounth}`
        return (
            <div className=''>
                {formatted}
            </div>
        )
      },
  },
  {
    id: "actions",
    cell: ({ row }) => {
        const title = row.title
    
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
            <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(title)}
            >
                Copy status
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Delete Category</DropdownMenuItem>
            <DropdownMenuItem>Edit Category</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
        )
    },
},
] 