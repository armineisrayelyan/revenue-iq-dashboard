"use client";

import dynamic from "next/dynamic";
import type { ReactNode } from "react";
import { ChartCard } from "@/components/dashboard/ChartCard";
import { EmptyChartState } from "@/components/ui/EmptySections";
import { Skeleton } from "@/components/ui/Skeleton";
import type {
  ICountryRevenuePoint,
  IDeviceUsagePoint,
  IRetentionPoint,
  IRevenueExpensePoint,
  IRevenueTrendPoint,
  ISignupPoint,
  ISubscriptionDistributionPoint,
} from "@/types/analytics";

function ChartSkeleton() {
  return <Skeleton className="h-[280px] w-full" />;
}

function renderChart(hasData: boolean, chart: ReactNode) {
  return hasData ? chart : <EmptyChartState />;
}

const RevenueTrend = dynamic(() =>
  import("@/components/charts/AnalyticsRevenueTrendChart").then(
    (mod) => mod.AnalyticsRevenueTrendChart,
  ),
  { loading: ChartSkeleton },
);
const MonthlySignups = dynamic(() =>
  import("@/components/charts/MonthlySignupsChart").then(
    (mod) => mod.MonthlySignupsChart,
  ),
  { loading: ChartSkeleton },
);
const RevenueByCountry = dynamic(() =>
  import("@/components/charts/RevenueByCountryChart").then(
    (mod) => mod.RevenueByCountryChart,
  ),
  { loading: ChartSkeleton },
);
const DeviceUsage = dynamic(() =>
  import("@/components/charts/DeviceUsageChart").then(
    (mod) => mod.DeviceUsageChart,
  ),
  { loading: ChartSkeleton },
);
const SubscriptionDistribution = dynamic(() =>
  import("@/components/charts/SubscriptionDistributionChart").then(
    (mod) => mod.SubscriptionDistributionChart,
  ),
  { loading: ChartSkeleton },
);
const CustomerRetention = dynamic(() =>
  import("@/components/charts/CustomerRetentionChart").then(
    (mod) => mod.CustomerRetentionChart,
  ),
  { loading: ChartSkeleton },
);
const RevenueVsExpenses = dynamic(() =>
  import("@/components/charts/RevenueVsExpensesChart").then(
    (mod) => mod.RevenueVsExpensesChart,
  ),
  { loading: ChartSkeleton },
);

interface IAnalyticsChartsProps {
  revenueTrend: IRevenueTrendPoint[];
  monthlySignups: ISignupPoint[];
  revenueByCountry: ICountryRevenuePoint[];
  deviceUsage: IDeviceUsagePoint[];
  subscriptionDistribution: ISubscriptionDistributionPoint[];
  customerRetention: IRetentionPoint[];
  revenueVsExpenses: IRevenueExpensePoint[];
}

interface IChartSection {
  id: string;
  title: string;
  description: string;
  hasData: boolean;
  content: ReactNode;
  className?: string;
}

export function AnalyticsCharts(props: IAnalyticsChartsProps) {
  const chartSections: IChartSection[] = [
    {
      id: "revenue-trend",
      title: "Revenue Trend",
      description: "Recurring revenue over time.",
      hasData: props.revenueTrend.length > 0,
      content: <RevenueTrend data={props.revenueTrend} />,
    },
    {
      id: "monthly-signups",
      title: "Monthly Signups",
      description: "New accounts created monthly.",
      hasData: props.monthlySignups.length > 0,
      content: <MonthlySignups data={props.monthlySignups} />,
    },
    {
      id: "revenue-by-country",
      title: "Revenue by Country",
      description: "Top markets by revenue.",
      hasData: props.revenueByCountry.length > 0,
      content: <RevenueByCountry data={props.revenueByCountry} />,
    },
    {
      id: "device-usage",
      title: "Device Usage",
      description: "Traffic mix by device type.",
      hasData: props.deviceUsage.length > 0,
      content: <DeviceUsage data={props.deviceUsage} />,
    },
    {
      id: "subscription-distribution",
      title: "Subscription Distribution",
      description: "Subscriber mix by plan.",
      hasData: props.subscriptionDistribution.length > 0,
      content: (
        <SubscriptionDistribution data={props.subscriptionDistribution} />
      ),
    },
    {
      id: "customer-retention",
      title: "Customer Retention",
      description: "Retention trend by month.",
      hasData: props.customerRetention.length > 0,
      content: <CustomerRetention data={props.customerRetention} />,
    },
    {
      id: "revenue-vs-expenses",
      title: "Revenue vs Expenses",
      description: "Revenue, expenses, and profit.",
      hasData: props.revenueVsExpenses.length > 0,
      content: <RevenueVsExpenses data={props.revenueVsExpenses} />,
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
