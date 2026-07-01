import type { Metadata } from "next";
import { FeaturePage } from "@/components/dashboard/FeaturePage";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function DashboardPage() {
  return (
    <FeaturePage
      title="Dashboard"
      description="Overview of your revenue performance and key metrics."
      emptyTitle="Dashboard coming soon"
      emptyDescription="Revenue metrics, charts, and KPIs will be displayed here once data integrations are connected."
    />
  );
}
