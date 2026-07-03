import type {
  IAnalyticsKpi,
  IBusinessInsight,
  ICountryRevenuePoint,
  IDeviceUsagePoint,
  IRetentionPoint,
  IRevenueExpensePoint,
  IRevenueTrendPoint,
  ISignupPoint,
  ISubscriptionDistributionPoint,
  ITopCustomer,
} from "@/types/analytics";

export const ANALYTICS_KPIS: IAnalyticsKpi[] = [
  {
    id: "total-revenue",
    label: "Total Revenue",
    value: "$1.82M",
    comparison: "vs $1.59M last period",
    growthPercentage: 14.2,
    trend: "up",
    icon: "dollar-sign",
  },
  {
    id: "net-profit",
    label: "Net Profit",
    value: "$684K",
    comparison: "37.5% profit margin",
    growthPercentage: 9.8,
    trend: "up",
    icon: "dollar-sign",
  },
  {
    id: "customer-growth",
    label: "Customer Growth",
    value: "18.4%",
    comparison: "248 net-new customers",
    growthPercentage: 5.6,
    trend: "up",
    icon: "users",
  },
  {
    id: "churn-rate",
    label: "Churn Rate",
    value: "2.8%",
    comparison: "down from 4.0%",
    growthPercentage: 1.2,
    trend: "down",
    icon: "users",
  },
  {
    id: "conversion-rate",
    label: "Conversion Rate",
    value: "11.6%",
    comparison: "trial to paid conversion",
    growthPercentage: 2.1,
    trend: "up",
    icon: "calendar-range",
  },
  {
    id: "arpu",
    label: "ARPU",
    value: "$228",
    comparison: "average monthly revenue",
    growthPercentage: 6.7,
    trend: "up",
    icon: "credit-card",
  },
];

export const ANALYTICS_REVENUE_TREND: IRevenueTrendPoint[] = [
  { month: "Jan", revenue: 198000 },
  { month: "Feb", revenue: 212000 },
  { month: "Mar", revenue: 225000 },
  { month: "Apr", revenue: 238000 },
  { month: "May", revenue: 251000 },
  { month: "Jun", revenue: 268000 },
  { month: "Jul", revenue: 284500 },
  { month: "Aug", revenue: 311000 },
];

export const ANALYTICS_MONTHLY_SIGNUPS: ISignupPoint[] = [
  { month: "Jan", signups: 142 },
  { month: "Feb", signups: 168 },
  { month: "Mar", signups: 184 },
  { month: "Apr", signups: 205 },
  { month: "May", signups: 231 },
  { month: "Jun", signups: 248 },
  { month: "Jul", signups: 269 },
  { month: "Aug", signups: 304 },
];

export const ANALYTICS_REVENUE_BY_COUNTRY: ICountryRevenuePoint[] = [
  { country: "United States", revenue: 684000, customers: 482, growth: 16.2 },
  { country: "United Kingdom", revenue: 312000, customers: 184, growth: 11.8 },
  { country: "Germany", revenue: 246000, customers: 151, growth: 8.6 },
  { country: "Canada", revenue: 188000, customers: 126, growth: 9.4 },
  { country: "Australia", revenue: 142000, customers: 88, growth: 6.9 },
];

export const ANALYTICS_DEVICE_USAGE: IDeviceUsagePoint[] = [
  { device: "Desktop", value: 58 },
  { device: "Mobile", value: 34 },
  { device: "Tablet", value: 8 },
];

export const ANALYTICS_SUBSCRIPTION_DISTRIBUTION: ISubscriptionDistributionPoint[] = [
  { plan: "Starter", value: 36 },
  { plan: "Pro", value: 42 },
  { plan: "Enterprise", value: 22 },
];

export const ANALYTICS_CUSTOMER_RETENTION: IRetentionPoint[] = [
  { month: "Jan", retention: 92 },
  { month: "Feb", retention: 93 },
  { month: "Mar", retention: 94 },
  { month: "Apr", retention: 94 },
  { month: "May", retention: 95 },
  { month: "Jun", retention: 96 },
  { month: "Jul", retention: 96 },
  { month: "Aug", retention: 97 },
];

export const ANALYTICS_REVENUE_VS_EXPENSES: IRevenueExpensePoint[] = [
  { month: "Jan", revenue: 198000, expenses: 128000, profit: 70000 },
  { month: "Feb", revenue: 212000, expenses: 134000, profit: 78000 },
  { month: "Mar", revenue: 225000, expenses: 141000, profit: 84000 },
  { month: "Apr", revenue: 238000, expenses: 148000, profit: 90000 },
  { month: "May", revenue: 251000, expenses: 153000, profit: 98000 },
  { month: "Jun", revenue: 268000, expenses: 161000, profit: 107000 },
  { month: "Jul", revenue: 284500, expenses: 168000, profit: 116500 },
  { month: "Aug", revenue: 311000, expenses: 177000, profit: 134000 },
];

export const ANALYTICS_INSIGHTS: IBusinessInsight[] = [
  {
    id: "insight_001",
    title: "Revenue momentum is accelerating",
    description: "Revenue increased 14% compared to last month.",
    tone: "positive",
  },
  {
    id: "insight_002",
    title: "Enterprise remains the strongest segment",
    description: "Enterprise customers generate 62% of total revenue.",
    tone: "positive",
  },
  {
    id: "insight_003",
    title: "Churn risk is improving",
    description: "Churn decreased by 1.2% across paid subscriptions.",
    tone: "positive",
  },
  {
    id: "insight_004",
    title: "Mobile adoption is rising",
    description: "Mobile traffic increased 9%, which may affect onboarding.",
    tone: "neutral",
  },
  {
    id: "insight_005",
    title: "Starter upgrades need attention",
    description: "Starter to Pro expansion slowed for two consecutive months.",
    tone: "warning",
  },
];

export const ANALYTICS_TOP_CUSTOMERS: ITopCustomer[] = [
  { id: "top_001", customer: "FinPilot", plan: "Enterprise", revenue: 100800, growth: 21.4, lastPayment: "2026-06-25" },
  { id: "top_002", customer: "NovaTech", plan: "Enterprise", revenue: 74400, growth: 18.1, lastPayment: "2026-06-30" },
  { id: "top_003", customer: "SignalBay", plan: "Enterprise", revenue: 7600, growth: 12.7, lastPayment: "2026-06-24" },
  { id: "top_004", customer: "Acme Corp", plan: "Enterprise", revenue: 4500, growth: 9.8, lastPayment: "2026-07-02" },
  { id: "top_005", customer: "Bright Labs", plan: "Pro", revenue: 2800, growth: 6.3, lastPayment: "2026-07-01" },
];
