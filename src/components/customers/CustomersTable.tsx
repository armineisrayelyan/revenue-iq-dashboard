"use client";

import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  type ColumnDef,
} from "@tanstack/react-table";
import { useMemo } from "react";
import { Avatar } from "@/components/ui/Avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/Table";
import { CustomerActionsMenu } from "@/components/customers/CustomerActionsMenu";
import {
  CustomerPlanBadge,
  CustomerStatusBadge,
} from "@/components/customers/CustomerBadges";
import { formatCurrency } from "@/utils/formatCurrency";
import { formatDate } from "@/utils/formatDate";
import type { ICustomer } from "@/types/customer";

interface ICustomersTableProps {
  customers: ICustomer[];
  onViewDetails: (customer: ICustomer) => void;
}

function getResponsiveClass(columnId: string): string {
  if (["email", "country", "joinedAt"].includes(columnId)) {
    return "hidden xl:table-cell";
  }

  if (["monthlyRevenue"].includes(columnId)) {
    return "hidden lg:table-cell";
  }

  return "";
}

export function CustomersTable({
  customers,
  onViewDetails,
}: ICustomersTableProps) {
  const columns = useMemo<ColumnDef<ICustomer>[]>(
    () => [
      {
        id: "avatar",
        header: "",
        cell: ({ row }) => (
          <Avatar
            name={row.original.fullName}
            src={row.original.avatar || undefined}
            size="sm"
          />
        ),
      },
      {
        accessorKey: "fullName",
        header: "Name",
        cell: ({ row }) => (
          <div>
            <p className="text-sm font-medium text-foreground">
              {row.original.fullName}
            </p>
            <p className="text-caption text-muted-foreground lg:hidden">
              {row.original.email}
            </p>
          </div>
        ),
      },
      { accessorKey: "company", header: "Company" },
      { accessorKey: "email", header: "Email" },
      {
        accessorKey: "plan",
        header: "Plan",
        cell: ({ row }) => <CustomerPlanBadge plan={row.original.plan} />,
      },
      {
        accessorKey: "monthlyRevenue",
        header: "Monthly Revenue",
        cell: ({ row }) => formatCurrency(row.original.monthlyRevenue),
      },
      { accessorKey: "country", header: "Country" },
      {
        accessorKey: "joinedAt",
        header: "Joined Date",
        cell: ({ row }) => formatDate(row.original.joinedAt),
      },
      {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => <CustomerStatusBadge status={row.original.status} />,
      },
      {
        id: "actions",
        header: "",
        cell: ({ row }) => (
          <CustomerActionsMenu
            customer={row.original}
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
