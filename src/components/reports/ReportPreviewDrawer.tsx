"use client";

import { AnalyticsRevenueTrendChart } from "@/components/charts/AnalyticsRevenueTrendChart";
import { StatCard } from "@/components/dashboard/StatCard";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/Drawer";
import { ReportsEmptyState } from "@/components/ui/EmptyStates";
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
import type {
  IGeneratedReport,
  IReportPreview,
} from "@/types/report";

interface IReportPreviewDrawerProps {
  report: IGeneratedReport | null;
  preview: IReportPreview;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ReportPreviewDrawer({
  report,
  preview,
  open,
  onOpenChange,
}: IReportPreviewDrawerProps) {
  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="max-w-3xl">
        {report ? (
          <>
            <DrawerHeader>
              <DrawerTitle>{report.name}</DrawerTitle>
              <DrawerDescription>
                {report.type} report preview generated for business review.
              </DrawerDescription>
            </DrawerHeader>
            <DrawerBody className="space-y-6">
              <section>
                <h3 className="text-subheading text-foreground">Summary</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {preview.summary}
                </p>
              </section>

              <section className="grid gap-3 sm:grid-cols-2">
                {preview.metrics.map((metric) => (
                  <StatCard key={metric.id} metric={metric} />
                ))}
              </section>

              <section className="rounded-xl border border-border p-4">
                <h3 className="text-subheading text-foreground">
                  Revenue Snapshot
                </h3>
                <AnalyticsRevenueTrendChart data={preview.revenueTrend} />
              </section>

              <section>
                <h3 className="mb-3 text-subheading text-foreground">
                  Table Preview
                </h3>
                {preview.rows.length > 0 ? (
                  <>
                    <div className="hidden md:block">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Metric</TableHead>
                            <TableHead>Value</TableHead>
                            <TableHead>Change</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {preview.rows.map((row) => (
                            <TableRow key={row.label}>
                              <TableCell>{row.label}</TableCell>
                              <TableCell>{row.value}</TableCell>
                              <TableCell>{row.change}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>

                    <div className="space-y-3 md:hidden">
                      {preview.rows.map((row) => (
                        <MobileDataCard key={row.label}>
                          <p className="text-sm font-medium text-foreground">
                            {row.label}
                          </p>
                          <MobileDataGrid>
                            <MobileDataRow label="Value" value={row.value} />
                            <MobileDataRow label="Change" value={row.change} />
                          </MobileDataGrid>
                        </MobileDataCard>
                      ))}
                    </div>
                  </>
                ) : (
                  <ReportsEmptyState className="border-0 shadow-none" />
                )}
              </section>
            </DrawerBody>
          </>
        ) : null}
      </DrawerContent>
    </Drawer>
  );
}
