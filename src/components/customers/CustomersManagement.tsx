"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { CustomersEmptyState } from "@/components/ui/EmptyStates";
import { Pagination } from "@/components/ui/Pagination";
import { CustomerDetailsDrawer } from "@/components/customers/CustomerDetailsDrawer";
import { CustomerFilters } from "@/components/customers/CustomerFilters";
import { CustomerMobileCards } from "@/components/customers/CustomerMobileCards";
import { CustomersHeader } from "@/components/customers/CustomersHeader";
import { CustomersTable } from "@/components/customers/CustomersTable";
import { useCustomerManagement } from "@/hooks/useCustomerManagement";
import type { ICustomer } from "@/types/customer";
import type { IPayment } from "@/types/payment";

interface ICustomersManagementProps {
  customers: ICustomer[];
  countries: string[];
  payments: IPayment[];
}

export function CustomersManagement({
  customers,
  countries,
  payments,
}: ICustomersManagementProps) {
  const {
    filters,
    filteredCustomers,
    paginatedCustomers,
    selectedCustomer,
    selectedCustomerPayments,
    page,
    totalPages,
    plans,
    statuses,
    updateFilters,
    resetFilters,
    setPage,
    setSelectedCustomer,
  } = useCustomerManagement(customers, payments);

  const hasCustomers = paginatedCustomers.length > 0;

  return (
    <div className="space-y-6">
      <CustomersHeader />

      <CustomerFilters
        filters={filters}
        countries={countries}
        plans={plans}
        statuses={statuses}
        onChange={updateFilters}
        onReset={resetFilters}
      />

      <Card>
        <CardHeader className="flex-row items-center justify-between gap-3">
          <div>
            <CardTitle>Customer Directory</CardTitle>
            <p className="text-caption text-muted-foreground">
              Showing {filteredCustomers.length} of {customers.length} customers
            </p>
          </div>
        </CardHeader>
        <CardContent>
          {hasCustomers ? (
            <>
              <div className="hidden md:block">
                <CustomersTable
                  customers={paginatedCustomers}
                  onViewDetails={setSelectedCustomer}
                />
              </div>
              <CustomerMobileCards
                customers={paginatedCustomers}
                onViewDetails={setSelectedCustomer}
              />
              <Pagination
                page={page}
                totalPages={totalPages}
                className="mt-6"
                onPageChange={setPage}
              />
            </>
          ) : (
            <CustomersEmptyState />
          )}
        </CardContent>
      </Card>

      <CustomerDetailsDrawer
        customer={selectedCustomer}
        payments={selectedCustomerPayments}
        open={Boolean(selectedCustomer)}
        onOpenChange={(open) => {
          if (!open) {
            setSelectedCustomer(null);
          }
        }}
      />
    </div>
  );
}
