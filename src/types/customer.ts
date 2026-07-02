export enum ECustomerStatus {
  ACTIVE = "active",
  TRIAL = "trial",
  CANCELLED = "cancelled",
}

export enum ECustomerPlan {
  STARTER = "Starter",
  PRO = "Pro",
  ENTERPRISE = "Enterprise",
}

export interface ICustomer {
  id: string;
  avatar: string;
  fullName: string;
  email: string;
  company: string;
  plan: ECustomerPlan;
  status: ECustomerStatus;
  country: string;
  joinedAt: string;
  monthlyRevenue: number;
}

export interface ICustomerFilters {
  search: string;
  plan: ECustomerPlan | "all";
  status: ECustomerStatus | "all";
  country: string;
}
