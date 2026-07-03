"use client";

import { useMemo, useState } from "react";
import {
  EBillingCycle,
  ESubscriptionPlan,
  ESubscriptionStatus,
} from "@/types/subscription";
import type {
  ISubscription,
  ISubscriptionFilters,
  ISubscriptionInvoice,
} from "@/types/subscription";
import type { IPayment } from "@/types/payment";

const SUBSCRIPTIONS_PER_PAGE = 6;

const INITIAL_FILTERS: ISubscriptionFilters = {
  search: "",
  plan: "all",
  billingCycle: "all",
  status: "all",
};

function matchesSearch(subscription: ISubscription, search: string): boolean {
  const query = search.trim().toLowerCase();

  if (!query) {
    return true;
  }

  return [subscription.customerName, subscription.plan].some((value) =>
    value.toLowerCase().includes(query),
  );
}

function matchesFilters(
  subscription: ISubscription,
  filters: ISubscriptionFilters,
): boolean {
  return (
    matchesSearch(subscription, filters.search) &&
    (filters.plan === "all" || subscription.plan === filters.plan) &&
    (filters.billingCycle === "all" ||
      subscription.billingCycle === filters.billingCycle) &&
    (filters.status === "all" || subscription.status === filters.status)
  );
}

export function useSubscriptionManagement(
  subscriptions: ISubscription[],
  invoices: ISubscriptionInvoice[],
  payments: IPayment[],
) {
  const [filters, setFilters] = useState<ISubscriptionFilters>(INITIAL_FILTERS);
  const [page, setPage] = useState(1);
  const [selectedSubscription, setSelectedSubscription] =
    useState<ISubscription | null>(null);

  const filteredSubscriptions = useMemo(
    () =>
      subscriptions.filter((subscription) =>
        matchesFilters(subscription, filters),
      ),
    [filters, subscriptions],
  );

  const totalPages = Math.max(
    1,
    Math.ceil(filteredSubscriptions.length / SUBSCRIPTIONS_PER_PAGE),
  );
  const currentPage = Math.min(page, totalPages);
  const paginatedSubscriptions = useMemo(() => {
    const start = (currentPage - 1) * SUBSCRIPTIONS_PER_PAGE;
    return filteredSubscriptions.slice(start, start + SUBSCRIPTIONS_PER_PAGE);
  }, [currentPage, filteredSubscriptions]);

  const selectedInvoices = useMemo(() => {
    if (!selectedSubscription) {
      return [];
    }

    return invoices.filter(
      (invoice) => invoice.subscriptionId === selectedSubscription.id,
    );
  }, [invoices, selectedSubscription]);

  const selectedPayments = useMemo(() => {
    if (!selectedSubscription) {
      return [];
    }

    return payments.filter(
      (payment) => payment.customerId === selectedSubscription.customerId,
    );
  }, [payments, selectedSubscription]);

  function updateFilters(nextFilters: Partial<ISubscriptionFilters>) {
    setFilters((current) => ({ ...current, ...nextFilters }));
    setPage(1);
  }

  function resetFilters() {
    setFilters(INITIAL_FILTERS);
    setPage(1);
  }

  return {
    filters,
    filteredSubscriptions,
    paginatedSubscriptions,
    selectedSubscription,
    selectedInvoices,
    selectedPayments,
    page: currentPage,
    totalPages,
    plans: Object.values(ESubscriptionPlan),
    billingCycles: Object.values(EBillingCycle),
    statuses: Object.values(ESubscriptionStatus),
    updateFilters,
    resetFilters,
    setPage,
    setSelectedSubscription,
  };
}
