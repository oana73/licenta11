"use client"
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
    accessorKey: "imageUrl",
    header: "Market Image",
    cell: ({ row }) => (<ImageColumn row={row} accessorKey="imageUrl"/>)
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "createdAt",
    header: "Create Date",
    cell: ({ row }) => (<DateColumn row={row} accessorKey='createdAt'/>)
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const market = row.original
      return (<ActionColumn row = {row} title="Market" editEndpoint={`markets/update/${market.id}`} endpoint={`markets/${market.id}`}/> )
    }
},
] 