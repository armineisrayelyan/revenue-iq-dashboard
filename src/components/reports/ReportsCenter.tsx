"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { ReportsEmptyState } from "@/components/ui/EmptyStates";
import { ExportOptions } from "@/components/reports/ExportOptions";
import { GeneratedReportsTable } from "@/components/reports/GeneratedReportsTable";
import { ReportPreviewDrawer } from "@/components/reports/ReportPreviewDrawer";
import { ReportTemplatesGrid } from "@/components/reports/ReportTemplatesGrid";
import { ReportsFilters } from "@/components/reports/ReportsFilters";
import { ReportsHeader } from "@/components/reports/ReportsHeader";
import { useReportsCenter } from "@/hooks/useReportsCenter";
import type { IReportsCenter } from "@/types/report";
import type {
  ESubscriptionPlan,
  ESubscriptionStatus,
} from "@/types/subscription";

interface IReportsCenterProps {
  center: IReportsCenter;
  countries: string[];
  plans: ESubscriptionPlan[];
  statuses: ESubscriptionStatus[];
}

export function ReportsCenter({
  center,
  countries,
  plans,
  statuses,
}: IReportsCenterProps) {
  const {
    filters,
    filteredReports,
    selectedReport,
    exportFormat,
    exportProgress,
    dateRanges,
    updateFilters,
    resetFilters,
    setSelectedReport,
    startExport,
  } = useReportsCenter(center.reports);
  const hasTemplates = center.templates.length > 0;
  const hasFilteredReports = filteredReports.length > 0;

  return (
    <div className="space-y-6">
      <ReportsHeader />

      {hasTemplates ? (
        <ReportTemplatesGrid templates={center.templates} />
      ) : (
        <ReportsEmptyState />
      )}

      <ReportsFilters
        filters={filters}
        dateRanges={dateRanges}
        plans={plans}
        countries={countries}
        statuses={statuses}
        onChange={updateFilters}
        onReset={resetFilters}
      />

      <section className="grid gap-4 xl:grid-cols-[minmax(0,1.35fr)_minmax(320px,0.65fr)]">
        <Card>
          <CardHeader>
            <CardTitle>Generated Reports</CardTitle>
            <p className="text-caption text-muted-foreground">
              Showing {filteredReports.length} of {center.reports.length} reports
            </p>
          </CardHeader>
          <CardContent>
            {hasFilteredReports ? (
              <GeneratedReportsTable
                reports={filteredReports}
                onView={setSelectedReport}
              />
            ) : (
              <ReportsEmptyState />
            )}
          </CardContent>
        </Card>

        <ExportOptions
          activeFormat={exportFormat}
          progress={exportProgress}
          onExport={startExport}
        />
      </section>

      <ReportPreviewDrawer
        report={selectedReport}
        preview={center.preview}
        open={Boolean(selectedReport)}
        onOpenChange={(open) => {
          if (!open) {
            setSelectedReport(null);
          }
        }}
      />
    </div>
  );
}
