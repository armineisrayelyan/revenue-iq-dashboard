"use client";

import dynamic from "next/dynamic";
import { ChartCard } from "@/components/dashboard/ChartCard";
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

export function AnalyticsCharts(props: IAnalyticsChartsProps) {
  return (
    <section className="grid gap-4 xl:grid-cols-2">
      <ChartCard title="Revenue Trend" description="Recurring revenue over time.">
        <RevenueTrend data={props.revenueTrend} />
      </ChartCard>
      <ChartCard title="Monthly Signups" description="New accounts created monthly.">
        <MonthlySignups data={props.monthlySignups} />
      </ChartCard>
      <ChartCard title="Revenue by Country" description="Top markets by revenue.">
        <RevenueByCountry data={props.revenueByCountry} />
      </ChartCard>
      <ChartCard title="Device Usage" description="Traffic mix by device type.">
        <DeviceUsage data={props.deviceUsage} />
      </ChartCard>
      <ChartCard title="Subscription Distribution" description="Subscriber mix by plan.">
        <SubscriptionDistribution data={props.subscriptionDistribution} />
      </ChartCard>
      <ChartCard title="Customer Retention" description="Retention trend by month.">
        <CustomerRetention data={props.customerRetention} />
      </ChartCard>
      <div className="xl:col-span-2">
        <ChartCard title="Revenue vs Expenses" description="Revenue, expenses, and profit.">
          <RevenueVsExpenses data={props.revenueVsExpenses} />
        </ChartCard>
      </div>
    </section>
  );
}
