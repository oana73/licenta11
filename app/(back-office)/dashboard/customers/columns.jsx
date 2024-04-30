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
    accessorKey: "name",
    header: ({ column }) =>(<SortColumn column={column} title = "Name" />)
  },
  // {
  //   accessorKey: "imageUrl",
  //   header: "Category Image",
  //   cell: ({ row }) => (<ImageColumn row={row} accessorKey="imageUrl"/>)
  // },
  {
    accessorKey: "email",
    header: ({ column }) =>(<SortColumn column={column} title = "Email" />)
  },
  {
    accessorKey: "createdAt",
    header: "Create Date",
    cell: ({ row }) => (<DateColumn row={row} accessorKey='createdAt'/>)

  },
  {
    id: "actions",
    cell: ({ row }) => {
      const customer = row.original
      return (<ActionColumn row = {row} title="Customer" editEndpoint={`customers/update/${customer.id}`} endpoint={`customers/${customer.id}`}/> )
    }
},
] 