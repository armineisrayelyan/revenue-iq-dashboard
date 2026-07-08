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
  MobileDataCard,
  MobileDataGrid,
  MobileDataRow,
} from "@/components/ui/MobileDataCard";
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
    <>
      <div className="hidden md:block">
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
      </div>

      <div className="space-y-3 md:hidden">
        {table.getRowModel().rows.map((row) => {
          const customer = row.original;
          return (
            <MobileDataCard key={customer.customer}>
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-foreground">
                    {customer.customer}
                  </p>
                  <p className="mt-1 text-caption text-muted-foreground">
                    Last payment {formatDate(customer.lastPayment)}
                  </p>
                </div>
                <Badge variant="success">+{customer.growth}%</Badge>
              </div>

              <MobileDataGrid>
                <MobileDataRow
                  label="Plan"
                  value={<Badge variant="outline">{customer.plan}</Badge>}
                />
                <MobileDataRow
                  label="Revenue"
                  value={formatCurrency(customer.revenue)}
                />
              </MobileDataGrid>
            </MobileDataCard>
          );
        })}
      </div>
    </>
  );
}
