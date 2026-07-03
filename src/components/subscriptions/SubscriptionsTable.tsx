"use client";

import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnDef,
  type SortingState,
} from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { useMemo, useState } from "react";
import { Avatar } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/Table";
import { SubscriptionActionsMenu } from "@/components/subscriptions/SubscriptionActionsMenu";
import {
  SubscriptionPlanBadge,
  SubscriptionStatusBadge,
} from "@/components/subscriptions/SubscriptionBadges";
import { formatCurrency } from "@/utils/formatCurrency";
import { formatDate } from "@/utils/formatDate";
import type { ISubscription } from "@/types/subscription";

interface ISubscriptionsTableProps {
  subscriptions: ISubscription[];
  onViewDetails: (subscription: ISubscription) => void;
}

function getResponsiveClass(columnId: string): string {
  if (["billingCycle", "createdAt"].includes(columnId)) {
    return "hidden xl:table-cell";
  }

  if (["price", "renewalDate"].includes(columnId)) {
    return "hidden lg:table-cell";
  }

  return "";
}

function SortableHeader({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) {
  return (
    <Button variant="ghost" size="sm" className="-ml-3" onClick={onClick}>
      {label}
      <ArrowUpDown className="h-3.5 w-3.5" aria-hidden="true" />
    </Button>
  );
}

export function SubscriptionsTable({
  subscriptions,
  onViewDetails,
}: ISubscriptionsTableProps) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const columns = useMemo<ColumnDef<ISubscription>[]>(
    () => [
      {
        accessorKey: "customerName",
        header: ({ column }) => (
          <SortableHeader
            label="Customer"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          />
        ),
        cell: ({ row }) => (
          <div className="flex items-center gap-3">
            <Avatar name={row.original.customerName} size="sm" />
            <span className="font-medium text-foreground">
              {row.original.customerName}
            </span>
          </div>
        ),
      },
      {
        accessorKey: "plan",
        header: "Plan",
        cell: ({ row }) => <SubscriptionPlanBadge plan={row.original.plan} />,
      },
      { accessorKey: "billingCycle", header: "Billing Cycle" },
      {
        accessorKey: "price",
        header: ({ column }) => (
          <SortableHeader
            label="Price"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          />
        ),
        cell: ({ row }) => formatCurrency(row.original.price),
      },
      {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => (
          <SubscriptionStatusBadge status={row.original.status} />
        ),
      },
      {
        accessorKey: "renewalDate",
        header: ({ column }) => (
          <SortableHeader
            label="Renewal Date"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          />
        ),
        cell: ({ row }) => formatDate(row.original.renewalDate),
      },
      {
        accessorKey: "createdAt",
        header: "Created Date",
        cell: ({ row }) => formatDate(row.original.createdAt),
      },
      {
        id: "actions",
        header: "",
        cell: ({ row }) => (
          <SubscriptionActionsMenu
            subscription={row.original}
            onViewDetails={onViewDetails}
          />
        ),
      },
    ],
    [onViewDetails],
  );

  // TanStack Table intentionally returns function-heavy instances.
  // eslint-disable-next-line react-hooks/incompatible-library
  const table = useReactTable({
    data: subscriptions,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <Table>
      <TableHeader>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <TableHead
                key={header.id}
                className={getResponsiveClass(header.column.id)}
              >
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
              <TableCell
                key={cell.id}
                className={getResponsiveClass(cell.column.id)}
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
