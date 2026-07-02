import { ECustomerStatus } from "@/types/customer";
import type { ICustomer } from "@/types/customer";

export const CUSTOMERS: ICustomer[] = [
  {
    id: "cust_001",
    name: "Sarah Chen",
    email: "sarah@acmecorp.com",
    company: "Acme Corp",
    status: ECustomerStatus.ACTIVE,
    mrr: 4500,
    joinedAt: "2024-03-15",
  },
  {
    id: "cust_002",
    name: "James Wilson",
    email: "james@brightlabs.io",
    company: "Bright Labs",
    status: ECustomerStatus.ACTIVE,
    mrr: 2800,
    joinedAt: "2024-06-22",
  },
  {
    id: "cust_003",
    name: "Emily Rodriguez",
    email: "emily@novatech.com",
    company: "NovaTech",
    status: ECustomerStatus.ACTIVE,
    mrr: 6200,
    joinedAt: "2023-11-08",
  },
  {
    id: "cust_004",
    name: "Michael Park",
    email: "michael@dataflow.co",
    company: "DataFlow",
    status: ECustomerStatus.INACTIVE,
    mrr: 0,
    joinedAt: "2024-01-30",
  },
];
