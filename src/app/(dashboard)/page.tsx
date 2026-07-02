import type { Metadata } from "next";
import { DashboardOverview } from "@/components/dashboard/DashboardOverview";
import { getDashboardOverview } from "@/services/dashboardService";
import { getRecentPayments } from "@/services/paymentService";
import { formatLongDate } from "@/utils/formatDate";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function DashboardPage() {
  const overview = getDashboardOverview();
  const payments = getRecentPayments();
  const currentDate = formatLongDate(new Date());

  return (
    <DashboardOverview
      overview={overview}
      payments={payments}
      currentDate={currentDate}
    />
  );
}
