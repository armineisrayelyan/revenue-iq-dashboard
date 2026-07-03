import {
  PRICING_PLANS,
  SUBSCRIPTION_INVOICES,
  SUBSCRIPTIONS,
} from "@/mock/subscriptions";
import { ESubscriptionStatus } from "@/types/subscription";
import type { IDashboardMetric } from "@/types/dashboard";
import type {
  IPricingPlan,
  ISubscription,
  ISubscriptionInvoice,
} from "@/types/subscription";

const UPCOMING_RENEWAL_DAYS = 30;

function toMonthlyRevenue(subscription: ISubscription): number {
  return subscription.billingCycle === "yearly"
    ? subscription.price / 12
    : subscription.price;
}

export function getSubscriptions(): ISubscription[] {
  return SUBSCRIPTIONS;
}

export function getPricingPlans(): IPricingPlan[] {
  return PRICING_PLANS;
}

export function getSubscriptionInvoices(): ISubscriptionInvoice[] {
  return SUBSCRIPTION_INVOICES;
}

export function getInvoicesBySubscriptionId(
  subscriptionId: string,
): ISubscriptionInvoice[] {
  return SUBSCRIPTION_INVOICES.filter(
    (invoice) => invoice.subscriptionId === subscriptionId,
  );
}

export function getUpcomingRenewals(
  subscriptions: ISubscription[],
  currentDate = new Date(),
): ISubscription[] {
  const endDate = new Date(currentDate);
  endDate.setDate(endDate.getDate() + UPCOMING_RENEWAL_DAYS);

  return subscriptions
    .filter((subscription) => {
      const renewalDate = new Date(subscription.renewalDate);
      return renewalDate >= currentDate && renewalDate <= endDate;
    })
    .sort(
      (a, b) =>
        new Date(a.renewalDate).getTime() - new Date(b.renewalDate).getTime(),
    );
}

export function getSubscriptionMetrics(
  subscriptions: ISubscription[],
): IDashboardMetric[] {
  const activeSubscriptions = subscriptions.filter(
    (subscription) => subscription.status === ESubscriptionStatus.ACTIVE,
  );
  const trialUsers = subscriptions.filter(
    (subscription) => subscription.status === ESubscriptionStatus.TRIAL,
  );
  const monthlyRevenue = activeSubscriptions.reduce(
    (total, subscription) => total + toMonthlyRevenue(subscription),
    0,
  );
  const renewableSubscriptions = subscriptions.filter(
    (subscription) => subscription.status !== ESubscriptionStatus.CANCELLED,
  );
  const renewalRate =
    (activeSubscriptions.length / Math.max(renewableSubscriptions.length, 1)) *
    100;

  return [
    {
      id: "active-subscriptions",
      label: "Active Subscriptions",
      value: activeSubscriptions.length.toLocaleString(),
      comparison: "healthy active subscriber base",
      growthPercentage: 4.6,
      trend: "up",
      icon: "credit-card",
    },
    {
      id: "trial-users",
      label: "Trial Users",
      value: trialUsers.length.toLocaleString(),
      comparison: "trial accounts in current cycle",
      growthPercentage: 8.1,
      trend: "up",
      icon: "users",
    },
    {
      id: "monthly-revenue",
      label: "Monthly Revenue",
      value: `$${Math.round(monthlyRevenue).toLocaleString()}`,
      comparison: "normalized monthly billing",
      growthPercentage: 11.3,
      trend: "up",
      icon: "dollar-sign",
    },
    {
      id: "renewal-rate",
      label: "Renewal Rate",
      value: `${Math.round(renewalRate)}%`,
      comparison: "renewing subscriptions this period",
      growthPercentage: 2.4,
      trend: "up",
      icon: "calendar-range",
    },
  ];
}
