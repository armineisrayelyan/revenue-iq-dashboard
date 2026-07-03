"use client";

import { useEffect, useMemo, useState } from "react";
import { EExportFormat } from "@/types/report";
import type {
  IGeneratedReport,
  IReportFilters,
  TReportDateRange,
} from "@/types/report";

const INITIAL_FILTERS: IReportFilters = {
  dateRange: "all",
  plan: "all",
  country: "all",
  status: "all",
};

function matchesFilters(
  report: IGeneratedReport,
  filters: IReportFilters,
): boolean {
  return (
    (filters.dateRange === "all" || report.dateRange === filters.dateRange) &&
    (filters.plan === "all" || report.plan === filters.plan) &&
    (filters.country === "all" || report.country === filters.country) &&
    (filters.status === "all" || report.subscriptionStatus === filters.status)
  );
}

export function useReportsCenter(reports: IGeneratedReport[]) {
  const [filters, setFilters] = useState<IReportFilters>(INITIAL_FILTERS);
  const [selectedReport, setSelectedReport] = useState<IGeneratedReport | null>(
    null,
  );
  const [exportFormat, setExportFormat] = useState<EExportFormat | null>(null);
  const [exportProgress, setExportProgress] = useState(0);

  const filteredReports = useMemo(
    () => reports.filter((report) => matchesFilters(report, filters)),
    [filters, reports],
  );

  useEffect(() => {
    if (!exportFormat || exportProgress >= 100) {
      return;
    }

    const timer = window.setTimeout(() => {
      setExportProgress((progress) => Math.min(progress + 25, 100));
    }, 350);

    return () => window.clearTimeout(timer);
  }, [exportFormat, exportProgress]);

  function updateFilters(nextFilters: Partial<IReportFilters>) {
    setFilters((current) => ({ ...current, ...nextFilters }));
  }

  function resetFilters() {
    setFilters(INITIAL_FILTERS);
  }

  function startExport(format: EExportFormat) {
    setExportFormat(format);
    setExportProgress(10);
  }

  return {
    filters,
    filteredReports,
    selectedReport,
    exportFormat,
    exportProgress,
    dateRanges: ["last_7_days", "last_30_days", "last_90_days"] as TReportDateRange[],
    updateFilters,
    resetFilters,
    setSelectedReport,
    startExport,
  };
}
