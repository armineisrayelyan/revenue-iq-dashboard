"use client";

import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  type ColumnDef,
} from "@tanstack/react-table";
import { useMemo } from "react";
import { Badge } from "@/components/ui/Badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/Table";
import { formatCurrency } from "@/utils/formatCurrency";
import { formatDate } from "@/utils/formatDate";
import type { ITopCustomer } from "@/types/analytics";

interface ITopCustomersTableProps {
  customers: ITopCustomer[];
}

export function TopCustomersTable({ customers }: ITopCustomersTableProps) {
  const columns = useMemo<ColumnDef<ITopCustomer>[]>(
    () => [
      {
        accessorKey: "customer",
        header: "Customer",
        cell: ({ row }) => (
          <span className="font-medium text-foreground">
            {row.original.customer}
          </span>
        ),
      },
      {
        accessorKey: "plan",
        header: "Plan",
        cell: ({ row }) => <Badge variant="outline">{row.original.plan}</Badge>,
      },
      {
        accessorKey: "revenue",
        header: "Revenue",
        cell: ({ row }) => formatCurrency(row.original.revenue),
      },
      {
        accessorKey: "growth",
        header: "Growth",
        cell: ({ row }) => (
          <Badge variant="success">+{row.original.growth}%</Badge>
        ),
      },
      {
        accessorKey: "lastPayment",
        header: "Last Payment",
        cell: ({ row }) => formatDate(row.original.lastPayment),
      },
    ],
    [],
  );

  // TanStack Table intentionally returns function-heavy instances.
  // eslint-disable-next-line react-hooks/incompatible-library
  const table = useReactTable({
    data: customers,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Table>
      <TableHeader>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <TableHead key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
              </TableHead>
            ))}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {table.getRowModel().rows.map((row) => (
          <TableRow key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <TableCell key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
