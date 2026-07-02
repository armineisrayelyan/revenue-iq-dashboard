"use client";

import { useMemo, useState } from "react";
import { ECustomerPlan, ECustomerStatus } from "@/types/customer";
import type { ICustomer, ICustomerFilters } from "@/types/customer";
import type { IPayment } from "@/types/payment";

const CUSTOMERS_PER_PAGE = 6;

const INITIAL_FILTERS: ICustomerFilters = {
  search: "",
  plan: "all",
  status: "all",
  country: "all",
};

function matchesSearch(customer: ICustomer, search: string): boolean {
  const query = search.trim().toLowerCase();

  if (!query) {
    return true;
  }

  return [customer.fullName, customer.email, customer.company].some((value) =>
    value.toLowerCase().includes(query),
  );
}

function matchesFilters(
  customer: ICustomer,
  filters: ICustomerFilters,
): boolean {
  const planMatches =
    filters.plan === "all" || customer.plan === filters.plan;
  const statusMatches =
    filters.status === "all" || customer.status === filters.status;
  const countryMatches =
    filters.country === "all" || customer.country === filters.country;

  return (
    matchesSearch(customer, filters.search) &&
    planMatches &&
    statusMatches &&
    countryMatches
  );
}

export function useCustomerManagement(customers: ICustomer[], payments: IPayment[]) {
  const [filters, setFilters] = useState<ICustomerFilters>(INITIAL_FILTERS);
  const [page, setPage] = useState(1);
  const [selectedCustomer, setSelectedCustomer] = useState<ICustomer | null>(
    null,
  );

  const filteredCustomers = useMemo(
    () => customers.filter((customer) => matchesFilters(customer, filters)),
    [customers, filters],
  );

  const totalPages = Math.max(1, Math.ceil(filteredCustomers.length / CUSTOMERS_PER_PAGE));
  const currentPage = Math.min(page, totalPages);
  const paginatedCustomers = useMemo(() => {
    const start = (currentPage - 1) * CUSTOMERS_PER_PAGE;
    return filteredCustomers.slice(start, start + CUSTOMERS_PER_PAGE);
  }, [currentPage, filteredCustomers]);

  const selectedCustomerPayments = useMemo(() => {
    if (!selectedCustomer) {
      return [];
    }

    return payments.filter(
      (payment) => payment.customerId === selectedCustomer.id,
    );
  }, [payments, selectedCustomer]);

  function updateFilters(nextFilters: Partial<ICustomerFilters>) {
    setFilters((current) => ({ ...current, ...nextFilters }));
    setPage(1);
  }

  function resetFilters() {
    setFilters(INITIAL_FILTERS);
    setPage(1);
  }

  return {
    filters,
    filteredCustomers,
    paginatedCustomers,
    selectedCustomer,
    selectedCustomerPayments,
    page: currentPage,
    totalPages,
    pageSize: CUSTOMERS_PER_PAGE,
    plans: Object.values(ECustomerPlan),
    statuses: Object.values(ECustomerStatus),
    updateFilters,
    resetFilters,
    setPage,
    setSelectedCustomer,
  };
}
