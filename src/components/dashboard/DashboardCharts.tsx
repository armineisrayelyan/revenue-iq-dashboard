"use client";

import dynamic from "next/dynamic";
import { ChartCard } from "@/components/dashboard/ChartCard";
import { Skeleton } from "@/components/ui/Skeleton";
import type {
  ICustomerGrowthPoint,
  IMonthlyRevenuePoint,
  IRevenueByPlan,
} from "@/types/dashboard";

const RevenueChart = dynamic(
  () => import("@/components/charts/RevenueChart").then((mod) => mod.RevenueChart),
  { loading: () => <ChartSkeleton /> },
);

const CustomerGrowthChart = dynamic(
  () =>
    import("@/components/charts/CustomerGrowthChart").then(
      (mod) => mod.CustomerGrowthChart,
    ),
  { loading: () => <ChartSkeleton /> },
);

const RevenueByPlanChart = dynamic(
  () =>
    import("@/components/charts/RevenueByPlanChart").then(
      (mod) => mod.RevenueByPlanChart,
    ),
  { loading: () => <ChartSkeleton /> },
);

interface IDashboardChartsProps {
  revenue: IMonthlyRevenuePoint[];
  customerGrowth: ICustomerGrowthPoint[];
  revenueByPlan: IRevenueByPlan[];
}

function ChartSkeleton() {
  return <Skeleton className="h-[280px] w-full" />;
}

export function DashboardCharts({
  revenue,
  customerGrowth,
  revenueByPlan,
}: IDashboardChartsProps) {
  return (
    <section className="grid gap-4 xl:grid-cols-2">
      <ChartCard
        title="Revenue"
        description="Monthly recurring revenue performance."
      >
        <RevenueChart data={revenue} />
      </ChartCard>
      <ChartCard
        title="Customer Growth"
        description="Active customer growth over time."
      >
        <CustomerGrowthChart data={customerGrowth} />
      </ChartCard>
      <div className="xl:col-span-2">
        <ChartCard
          title="Revenue by Plan"
          description="MRR distribution across plan tiers."
        >
          <RevenueByPlanChart data={revenueByPlan} />
        </ChartCard>
      </div>
    </section>
  );
}
