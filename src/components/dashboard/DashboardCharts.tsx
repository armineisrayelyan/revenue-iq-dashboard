"use client";

import dynamic from "next/dynamic";
import type { ReactNode } from "react";
import { ChartCard } from "@/components/dashboard/ChartCard";
import { EmptyChartState } from "@/components/ui/EmptySections";
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

function renderChart(hasData: boolean, chart: ReactNode) {
  return hasData ? chart : <EmptyChartState />;
}

interface IChartSection {
  id: string;
  title: string;
  description: string;
  hasData: boolean;
  content: ReactNode;
  className?: string;
}

export function DashboardCharts({
  revenue,
  customerGrowth,
  revenueByPlan,
}: IDashboardChartsProps) {
  const chartSections: IChartSection[] = [
    {
      id: "revenue",
      title: "Revenue",
      description: "Monthly recurring revenue performance.",
      hasData: revenue.length > 0,
      content: <RevenueChart data={revenue} />,
    },
    {
      id: "customer-growth",
      title: "Customer Growth",
      description: "Active customer growth over time.",
      hasData: customerGrowth.length > 0,
      content: <CustomerGrowthChart data={customerGrowth} />,
    },
    {
      id: "revenue-by-plan",
      title: "Revenue by Plan",
      description: "MRR distribution across plan tiers.",
      hasData: revenueByPlan.length > 0,
      content: <RevenueByPlanChart data={revenueByPlan} />,
      className: "xl:col-span-2",
    },
  ];

  return (
    <section className="grid gap-4 xl:grid-cols-2">
      {chartSections.map((section) => (
        <div key={section.id} className={section.className}>
          <ChartCard title={section.title} description={section.description}>
            {renderChart(section.hasData, section.content)}
          </ChartCard>
        </div>
      ))}
    </section>
  );
}
