import type { Metadata } from "next";
import { ReportsCenter } from "@/components/reports/ReportsCenter";
import {
  getReportCountries,
  getReportPlans,
  getReportStatuses,
  getReportsCenter,
} from "@/services/reportService";

export const metadata: Metadata = {
  title: "Reports",
};

export default function ReportsPage() {
  const center = getReportsCenter();
  const countries = getReportCountries();
  const plans = getReportPlans();
  const statuses = getReportStatuses();

  return (
    <ReportsCenter
      center={center}
      countries={countries}
      plans={plans}
      statuses={statuses}
    />
  );
}
