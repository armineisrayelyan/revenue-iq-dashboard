import type { Metadata } from "next";
import { CustomersManagement } from "@/components/customers/CustomersManagement";
import { getCustomerCountries, getCustomers } from "@/services/customerService";
import { getRecentPayments } from "@/services/paymentService";

export const metadata: Metadata = {
  title: "Customers",
};

export default function CustomersPage() {
  const customers = getCustomers();
  const countries = getCustomerCountries();
  const payments = getRecentPayments();

  return (
    <CustomersManagement
      customers={customers}
      countries={countries}
      payments={payments}
    />
  );
}
