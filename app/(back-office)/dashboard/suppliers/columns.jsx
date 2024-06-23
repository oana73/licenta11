"use client"
import { Checkbox } from "@/components/ui/checkbox"
import DateColumn from "@/components/DataTableColumns/DateColumn"
import SortColumn from "@/components/DataTableColumns/SortColumn"
import ActionColumn from "@/components/DataTableColumns/ActionColumn"
import Status from "@/components/DataTableColumns/Status"

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
    accessorKey:"role",
    header:"Role"
  },
  {
    accessorKey:"status",
    header:"Status",
    cell:({ row}) => <Status row={row} accessorKey="status"/>
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const supplier = row.original
      return (<ActionColumn row = {row} title="Supplier" endpoint={`suppliers/${supplier.id}`}/> )
    }
},
] 