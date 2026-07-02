import { CUSTOMERS } from "@/mock/customers";
import type { ICustomer } from "@/types/customer";

export function getCustomers(): ICustomer[] {
  return CUSTOMERS;
}

export function getCustomerCountries(): string[] {
  return Array.from(new Set(CUSTOMERS.map((customer) => customer.country))).sort(
    (a, b) => a.localeCompare(b),
  );
}
