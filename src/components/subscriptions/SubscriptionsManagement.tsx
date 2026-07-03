"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { EmptyState } from "@/components/ui/EmptyState";
import { Pagination } from "@/components/ui/Pagination";
import { StatCard } from "@/components/dashboard/StatCard";
import { RecentPaymentsTable } from "@/components/tables/RecentPaymentsTable";
import { PricingPlansGrid } from "@/components/subscriptions/PricingPlansGrid";
import { SubscriptionDetailsDrawer } from "@/components/subscriptions/SubscriptionDetailsDrawer";
import { SubscriptionFilters } from "@/components/subscriptions/SubscriptionFilters";
import { SubscriptionMobileCards } from "@/components/subscriptions/SubscriptionMobileCards";
import { SubscriptionsHeader } from "@/components/subscriptions/SubscriptionsHeader";
import { SubscriptionsTable } from "@/components/subscriptions/SubscriptionsTable";
import { UpcomingRenewals } from "@/components/subscriptions/UpcomingRenewals";
import { useSubscriptionManagement } from "@/hooks/useSubscriptionManagement";
import type { IDashboardMetric } from "@/types/dashboard";
import type { IPayment } from "@/types/payment";
import type {
  IPricingPlan,
  ISubscription,
  ISubscriptionInvoice,
} from "@/types/subscription";

interface ISubscriptionsManagementProps {
  subscriptions: ISubscription[];
  invoices: ISubscriptionInvoice[];
  payments: IPayment[];
  metrics: IDashboardMetric[];
  pricingPlans: IPricingPlan[];
  upcomingRenewals: ISubscription[];
}

export function SubscriptionsManagement({
  subscriptions,
  invoices,
  payments,
  metrics,
  pricingPlans,
  upcomingRenewals,
}: ISubscriptionsManagementProps) {
  const {
    filters,
    filteredSubscriptions,
    paginatedSubscriptions,
    selectedSubscription,
    selectedInvoices,
    selectedPayments,
    page,
    totalPages,
    plans,
    billingCycles,
    statuses,
    updateFilters,
    resetFilters,
    setPage,
    setSelectedSubscription,
  } = useSubscriptionManagement(subscriptions, invoices, payments);

  const hasSubscriptions = paginatedSubscriptions.length > 0;

  return (
    <div className="space-y-6">
      <SubscriptionsHeader />

      <section
        aria-label="Subscription metrics"
        className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
      >
        {metrics.map((metric) => (
          <StatCard key={metric.id} metric={metric} />
        ))}
      </section>

      <SubscriptionFilters
        filters={filters}
        plans={plans}
        billingCycles={billingCycles}
        statuses={statuses}
        onChange={updateFilters}
        onReset={resetFilters}
      />

      <Card>
        <CardHeader>
          <CardTitle>Subscription Directory</CardTitle>
          <p className="text-caption text-muted-foreground">
            Showing {filteredSubscriptions.length} of {subscriptions.length} subscriptions
          </p>
        </CardHeader>
        <CardContent>
          {hasSubscriptions ? (
            <>
              <div className="hidden md:block">
                <SubscriptionsTable
                  subscriptions={paginatedSubscriptions}
                  onViewDetails={setSelectedSubscription}
                />
              </div>
              <SubscriptionMobileCards
                subscriptions={paginatedSubscriptions}
                onViewDetails={setSelectedSubscription}
              />
              <Pagination
                page={page}
                totalPages={totalPages}
                className="mt-6"
                onPageChange={setPage}
              />
            </>
          ) : (
            <EmptyState
              title="No subscriptions found"
              description="Try adjusting search or filters to find matching subscriptions."
            />
          )}
        </CardContent>
      </Card>

      <PricingPlansGrid plans={pricingPlans} />

      <section className="grid gap-4 xl:grid-cols-[minmax(320px,0.75fr)_minmax(0,1.25fr)]">
        <UpcomingRenewals subscriptions={upcomingRenewals} />
        <Card>
          <CardHeader>
            <CardTitle>Recent Payments</CardTitle>
            <p className="text-caption text-muted-foreground">
              Latest payments collected across active subscriptions.
            </p>
          </CardHeader>
          <CardContent>
            <RecentPaymentsTable payments={payments.slice(0, 6)} />
          </CardContent>
        </Card>
      </section>

      <SubscriptionDetailsDrawer
        subscription={selectedSubscription}
        invoices={selectedInvoices}
        payments={selectedPayments}
        open={Boolean(selectedSubscription)}
        onOpenChange={(open) => {
          if (!open) {
            setSelectedSubscription(null);
          }
        }}
      />
    </div>
  );
}
