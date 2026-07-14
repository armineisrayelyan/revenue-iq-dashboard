import { AnalyticsCharts } from "@/components/analytics/AnalyticsCharts";
import { AnalyticsHeader } from "@/components/analytics/AnalyticsHeader";
import { GeographicOverview } from "@/components/analytics/GeographicOverview";
import { InsightsPanel } from "@/components/analytics/InsightsPanel";
import { TopCustomersTable } from "@/components/analytics/TopCustomersTable";
import { StatCard } from "@/components/dashboard/StatCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { AnalyticsEmptyState } from "@/components/ui/EmptyStates";
import {
  EmptyAnalyticsSection,
  EmptyDashboardSection,
} from "@/components/ui/EmptySections";
import type { IAnalyticsOverview } from "@/types/analytics";

interface IAnalyticsOverviewProps {
  overview: IAnalyticsOverview;
}

export function AnalyticsOverview({ overview }: IAnalyticsOverviewProps) {
  const hasKpis = overview.kpis.length > 0;
  const hasTopCustomers = overview.topCustomers.length > 0;
  const hasInsights = overview.insights.length > 0;
  const hasGeographicData = overview.revenueByCountry.length > 0;

  return (
    <div className="space-y-6">
      <AnalyticsHeader />

      {hasKpis ? (
        <section
          aria-label="Analytics KPIs"
          className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
        >
          {overview.kpis.map((metric) => (
            <StatCard key={metric.id} metric={metric} />
          ))}
        </section>
      ) : (
        <EmptyDashboardSection />
      )}

      <AnalyticsCharts
        revenueTrend={overview.revenueTrend}
        monthlySignups={overview.monthlySignups}
        revenueByCountry={overview.revenueByCountry}
        deviceUsage={overview.deviceUsage}
        subscriptionDistribution={overview.subscriptionDistribution}
        customerRetention={overview.customerRetention}
        revenueVsExpenses={overview.revenueVsExpenses}
      />

      <section className="grid gap-4 xl:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)]">
        <Card>
          <CardHeader>
            <CardTitle>Top Performing Customers</CardTitle>
            <p className="text-caption text-muted-foreground">
              Highest revenue accounts by growth and recent payment activity.
            </p>
          </CardHeader>
          <CardContent>
            {hasTopCustomers ? (
              <TopCustomersTable customers={overview.topCustomers} />
            ) : (
              <AnalyticsEmptyState />
            )}
          </CardContent>
        </Card>

        {hasInsights ? (
          <InsightsPanel insights={overview.insights} />
        ) : (
          <EmptyAnalyticsSection
            title="AI Insights"
            description="Signal-rich highlights from revenue and customer trends."
          />
        )}
      </section>

      {hasGeographicData ? (
        <GeographicOverview countries={overview.revenueByCountry} />
      ) : (
        <EmptyAnalyticsSection
          title="Geographic Overview"
          description="Revenue, customer count, and growth by country."
        />
      )}
    </div>
  );
}
