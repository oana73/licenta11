"use client"
import Image from "next/image"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import DateColumn from "@/components/DataTableColumns/DateColumn"
import ImageColumn from "@/components/DataTableColumns/ImageColumn"
import SortColumn from "@/components/DataTableColumns/SortColumn"
import ActionColumn from "@/components/DataTableColumns/ActionColumn"

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
    header: ({ column }) =>(<SortColumn column={column} title = "Title" />)
  },
  {
    accessorKey: "name",
    header: ({ column }) =>(<SortColumn column={column} title = "Author" />)
  },
  {
    accessorKey: "imageUrl",
    header: "Category Image",
    cell: ({ row }) => (<ImageColumn row={row} accessorKey="imageUrl"/>)
  },
  {
    accessorKey: "createdAt",
    header: "Create Date",
    cell: ({ row }) => (<DateColumn row={row} accessorKey='createdAt'/>)

  },
  {
    id: "actions",
    cell: ({ row }) => {
      const training = row.original
      return (<ActionColumn row = {row} title="Training" endpoint={`trainings/${training.id}`}/> )
    }
},
] 