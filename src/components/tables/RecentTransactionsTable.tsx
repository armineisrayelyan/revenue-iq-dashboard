"use client";

import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  type ColumnDef,
} from "@tanstack/react-table";
import { useMemo } from "react";
import { Avatar } from "@/components/ui/Avatar";
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
import { EPaymentStatus } from "@/types/payment";
import type { IPayment } from "@/types/payment";

interface IRecentTransactionsTableProps {
  payments: IPayment[];
}

function getStatusVariant(status: EPaymentStatus) {
  switch (status) {
    case EPaymentStatus.PAID:
      return "success";
    case EPaymentStatus.PENDING:
      return "warning";
    case EPaymentStatus.FAILED:
      return "error";
    case EPaymentStatus.REFUNDED:
      return "outline";
    default:
      return "default";
  }
}

export function RecentTransactionsTable({
  payments,
}: IRecentTransactionsTableProps) {
  const columns = useMemo<ColumnDef<IPayment>[]>(
    () => [
      {
        accessorKey: "customerName",
        header: "Customer",
        cell: ({ row }) => (
          <div className="flex items-center gap-3">
            <Avatar name={row.original.customerName} size="sm" />
            <div>
              <p className="text-sm font-medium text-foreground">
                {row.original.customerName}
              </p>
              <p className="text-caption text-muted-foreground">
                {row.original.customerEmail}
              </p>
            </div>
          </div>
        ),
      },
      {
        accessorKey: "plan",
        header: "Plan",
      },
      {
        accessorKey: "amount",
        header: "Amount",
        cell: ({ row }) => formatCurrency(row.original.amount),
      },
      {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => (
          <Badge variant={getStatusVariant(row.original.status)}>
            {row.original.status}
          </Badge>
        ),
      },
      {
        accessorKey: "paidAt",
        header: "Date",
        cell: ({ row }) => formatDate(row.original.paidAt),
      },
    ],
    [],
  );

  // TanStack Table intentionally returns function-heavy instances.
  // eslint-disable-next-line react-hooks/incompatible-library
  const table = useReactTable({
    data: payments,
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
