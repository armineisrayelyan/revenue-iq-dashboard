export enum ESubscriptionStatus {
  ACTIVE = "active",
  TRIAL = "trial",
  PAST_DUE = "past_due",
  CANCELLED = "cancelled",
}

export enum ESubscriptionPlan {
  STARTER = "Starter",
  PRO = "Pro",
  ENTERPRISE = "Enterprise",
}

export enum EBillingCycle {
  MONTHLY = "monthly",
  YEARLY = "yearly",
}

export interface ISubscription {
  id: string;
  customerId: string;
  customerName: string;
  plan: ESubscriptionPlan;
  status: ESubscriptionStatus;
  billingCycle: EBillingCycle;
  price: number;
  startDate: string;
  renewalDate: string;
  createdAt: string;
}

export interface ISubscriptionInvoice {
  id: string;
  subscriptionId: string;
  amount: number;
  status: "paid" | "open" | "void";
  issuedAt: string;
}

export interface IPricingPlan {
  id: ESubscriptionPlan;
  name: string;
  monthlyPrice: number;
  features: string[];
  activeSubscribers: number;
  revenueContribution: number;
}

export interface ISubscriptionFilters {
  search: string;
  plan: ESubscriptionPlan | "all";
  billingCycle: EBillingCycle | "all";
  status: ESubscriptionStatus | "all";
}
