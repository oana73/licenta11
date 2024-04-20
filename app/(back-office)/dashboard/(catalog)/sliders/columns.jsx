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
import SortColumn from "@/components/DataTableColumns/SortColumn"
import ImageColumn from "@/components/DataTableColumns/ImageColumn"
import DateColumn from "@/components/DataTableColumns/DateColumn"
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
      accessorKey: "imageUrl",
      header: "Slider Image",
      cell: ({ row }) => (<ImageColumn row={row} accessorKey="imageUrl"/>)
    },
  {
    accessorKey: "link",
    header: "Slider link",
  },
  {
    accessorKey: "createdAt",
    header: "Create Date",
    cell: ({ row }) => (<DateColumn row={row} accessorKey='createdAt' />)

  },
  {
    id: "actions",
    cell: ({ row }) => {
      const slider = row.original
      return (<ActionColumn row = {row} title="Slider" endpoint={`sliders/${slider.id}`}/> )
    }
},
] 