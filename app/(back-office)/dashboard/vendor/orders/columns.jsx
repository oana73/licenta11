"use client"
import DateColumn from "@/components/DataTableColumns/DateColumn"
import SortColumn from "@/components/DataTableColumns/SortColumn"
import { Checkbox } from "@radix-ui/react-checkbox"

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
    accessorKey: "code",
    header: "Coupon Code",
  },
  {
    accessorKey: "valability",
    header: "Expire Date",
    cell: ({ row }) => (<DateColumn row={row} accessorKey='valability'/>)
  },
  {
    accessorKey: "createdAt",
    header: "Create Date",
    cell: ({ row }) => (<DateColumn row={row} accessorKey='createdAt'/>)
  },
] 