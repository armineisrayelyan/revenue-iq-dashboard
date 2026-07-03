import type { Metadata } from "next";
import { AnalyticsOverview } from "@/components/analytics/AnalyticsOverview";
import { getAnalyticsOverview } from "@/services/analyticsService";

export const metadata: Metadata = {
  title: "Analytics",
};

export default function AnalyticsPage() {
  const overview = getAnalyticsOverview();

  return <AnalyticsOverview overview={overview} />;
}
