export enum ESubscriptionStatus {
  ACTIVE = "active",
  TRIALING = "trialing",
  PAST_DUE = "past_due",
  CANCELED = "canceled",
}

export enum ESubscriptionPlan {
  STARTER = "starter",
  PROFESSIONAL = "professional",
  ENTERPRISE = "enterprise",
}

export interface ISubscription {
  id: string;
  customerId: string;
  customerName: string;
  plan: ESubscriptionPlan;
  status: ESubscriptionStatus;
  amount: number;
  billingCycle: string;
  startDate: string;
  renewalDate: string;
}
