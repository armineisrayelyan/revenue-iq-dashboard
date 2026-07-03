export type TInsightTone = "positive" | "neutral" | "warning";

export interface IAnalyticsKpi {
  id: string;
  label: string;
  value: string;
  comparison: string;
  growthPercentage: number;
  trend: "up" | "down" | "neutral";
  icon: "dollar-sign" | "calendar-range" | "users" | "credit-card";
}

export interface IRevenueTrendPoint {
  month: string;
  revenue: number;
}

export interface ISignupPoint {
  month: string;
  signups: number;
}

export interface ICountryRevenuePoint {
  country: string;
  revenue: number;
  customers: number;
  growth: number;
}

export interface IDeviceUsagePoint {
  device: "Desktop" | "Mobile" | "Tablet";
  value: number;
}

export interface ISubscriptionDistributionPoint {
  plan: "Starter" | "Pro" | "Enterprise";
  value: number;
}

export interface IRetentionPoint {
  month: string;
  retention: number;
}

export interface IRevenueExpensePoint {
  month: string;
  revenue: number;
  expenses: number;
  profit: number;
}

export interface IBusinessInsight {
  id: string;
  title: string;
  description: string;
  tone: TInsightTone;
}

export interface ITopCustomer {
  id: string;
  customer: string;
  plan: "Starter" | "Pro" | "Enterprise";
  revenue: number;
  growth: number;
  lastPayment: string;
}

export interface IAnalyticsOverview {
  kpis: IAnalyticsKpi[];
  revenueTrend: IRevenueTrendPoint[];
  monthlySignups: ISignupPoint[];
  revenueByCountry: ICountryRevenuePoint[];
  deviceUsage: IDeviceUsagePoint[];
  subscriptionDistribution: ISubscriptionDistributionPoint[];
  customerRetention: IRetentionPoint[];
  revenueVsExpenses: IRevenueExpensePoint[];
  insights: IBusinessInsight[];
  topCustomers: ITopCustomer[];
}
