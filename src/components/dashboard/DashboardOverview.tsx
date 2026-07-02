import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { DashboardCharts } from "@/components/dashboard/DashboardCharts";
import { MetricGrid } from "@/components/dashboard/MetricGrid";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { WelcomeSection } from "@/components/dashboard/WelcomeSection";
import { RecentTransactionsTable } from "@/components/tables/RecentTransactionsTable";
import type { IDashboardOverview } from "@/types/dashboard";
import type { IPayment } from "@/types/payment";

interface IDashboardOverviewProps {
  overview: IDashboardOverview;
  payments: IPayment[];
  currentDate: string;
}

export function DashboardOverview({
  overview,
  payments,
  currentDate,
}: IDashboardOverviewProps) {
  return (
    <div className="space-y-6">
      <WelcomeSection
        name="Armine"
        currentDate={currentDate}
        message="You are tracking ahead of plan. Review plan mix and payment health to keep momentum strong."
      />

      <MetricGrid metrics={overview.metrics} />

      <DashboardCharts
        revenue={overview.revenue}
        customerGrowth={overview.customerGrowth}
        revenueByPlan={overview.revenueByPlan}
      />

      <section className="grid gap-4 xl:grid-cols-[minmax(0,1.45fr)_minmax(320px,0.55fr)]">
        <Card>
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
            <p className="text-caption text-muted-foreground">
              Latest customer payments and billing events.
            </p>
          </CardHeader>
          <CardContent>
            <RecentTransactionsTable payments={payments} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <p className="text-caption text-muted-foreground">
              High-signal changes across customers and subscriptions.
            </p>
          </CardHeader>
          <CardContent>
            <RecentActivity activity={overview.activity} />
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
