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
          const report = row.original;
          return (
            <MobileDataCard key={report.id}>
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-foreground">
                    {report.name}
                  </p>
                  <p className="mt-1 text-caption text-muted-foreground">
                    {report.type} report
                  </p>
                </div>
                <ReportActionsMenu report={report} onView={onView} />
              </div>

              <MobileDataGrid>
                <MobileDataRow label="Created By" value={report.createdBy} />
                <MobileDataRow
                  label="Created"
                  value={formatDate(report.createdAt)}
                />
                <MobileDataRow
                  label="Status"
                  value={
                    <Badge variant={getStatusVariant(report.status)}>
                      {report.status}
                    </Badge>
                  }
                />
                <MobileDataRow label="Size" value={report.size} />
              </MobileDataGrid>
            </MobileDataCard>
          );
        })}
      </div>
    </>
  );
}
