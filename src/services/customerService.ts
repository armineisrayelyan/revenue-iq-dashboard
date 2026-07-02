import { CUSTOMERS } from "@/mock/customers";
import type { ICustomer } from "@/types/customer";

export function getCustomers(): ICustomer[] {
  return CUSTOMERS;
}
