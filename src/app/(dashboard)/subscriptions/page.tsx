import type { Metadata } from "next";
import { SubscriptionsManagement } from "@/components/subscriptions/SubscriptionsManagement";
import { getRecentPayments } from "@/services/paymentService";
import {
  getPricingPlans,
  getSubscriptionInvoices,
  getSubscriptionMetrics,
  getSubscriptions,
  getUpcomingRenewals,
} from "@/services/subscriptionService";

export const metadata: Metadata = {
  title: "Subscriptions",
};

export default function SubscriptionsPage() {
  const subscriptions = getSubscriptions();
  const invoices = getSubscriptionInvoices();
  const payments = getRecentPayments();
  const pricingPlans = getPricingPlans();
  const metrics = getSubscriptionMetrics(subscriptions);
  const upcomingRenewals = getUpcomingRenewals(subscriptions);

  return (
    <SubscriptionsManagement
      subscriptions={subscriptions}
      invoices={invoices}
      payments={payments}
      metrics={metrics}
      pricingPlans={pricingPlans}
      upcomingRenewals={upcomingRenewals}
    />
  );
}
