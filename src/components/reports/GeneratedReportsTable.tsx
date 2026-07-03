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
import { ReportActionsMenu } from "@/components/reports/ReportActionsMenu";
import { formatDate } from "@/utils/formatDate";
import { EReportStatus } from "@/types/report";
import type { IGeneratedReport } from "@/types/report";

interface IGeneratedReportsTableProps {
  reports: IGeneratedReport[];
  onView: (report: IGeneratedReport) => void;
}

function getStatusVariant(status: EReportStatus) {
  switch (status) {
    case EReportStatus.READY:
      return "success";
    case EReportStatus.GENERATING:
      return "warning";
    case EReportStatus.FAILED:
      return "error";
    default:
      return "default";
  }
}

export function GeneratedReportsTable({
  reports,
  onView,
}: IGeneratedReportsTableProps) {
  const columns = useMemo<ColumnDef<IGeneratedReport>[]>(
    () => [
      {
        accessorKey: "name",
        header: "Report Name",
        cell: ({ row }) => (
          <span className="font-medium text-foreground">{row.original.name}</span>
        ),
      },
      { accessorKey: "type", header: "Type" },
      { accessorKey: "createdBy", header: "Created By" },
      {
        accessorKey: "createdAt",
        header: "Created Date",
        cell: ({ row }) => formatDate(row.original.createdAt),
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
      { accessorKey: "size", header: "Size" },
      {
        id: "actions",
        header: "",
        cell: ({ row }) => (
          <ReportActionsMenu report={row.original} onView={onView} />
        ),
      },
    ],
    [onView],
  );

  // TanStack Table intentionally returns function-heavy instances.
  // eslint-disable-next-line react-hooks/incompatible-library
  const table = useReactTable({
    data: reports,
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
