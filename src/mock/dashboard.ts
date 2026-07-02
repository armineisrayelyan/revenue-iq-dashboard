import type {
  ICustomerGrowthPoint,
  IDashboardActivity,
  IDashboardMetric,
  IMonthlyRevenuePoint,
  IRevenueByPlan,
} from "@/types/dashboard";

export const DASHBOARD_METRICS: IDashboardMetric[] = [
  {
    id: "mrr",
    label: "Monthly Recurring Revenue",
    value: "$284,500",
    comparison: "vs $253,200 last month",
    growthPercentage: 12.4,
    trend: "up",
    icon: "dollar-sign",
  },
  {
    id: "arr",
    label: "Annual Recurring Revenue",
    value: "$3.41M",
    comparison: "vs $3.05M last month",
    growthPercentage: 11.8,
    trend: "up",
    icon: "calendar-range",
  },
  {
    id: "customers",
    label: "Active Customers",
    value: "1,248",
    comparison: "vs 1,186 last month",
    growthPercentage: 5.2,
    trend: "up",
    icon: "users",
  },
  {
    id: "subscriptions",
    label: "Active Subscriptions",
    value: "1,392",
    comparison: "vs 1,331 last month",
    growthPercentage: 4.6,
    trend: "up",
    icon: "credit-card",
  },
];

export const MONTHLY_REVENUE: IMonthlyRevenuePoint[] = [
  { month: "Jan", revenue: 198000 },
  { month: "Feb", revenue: 212000 },
  { month: "Mar", revenue: 225000 },
  { month: "Apr", revenue: 238000 },
  { month: "May", revenue: 251000 },
  { month: "Jun", revenue: 268000 },
  { month: "Jul", revenue: 284500 },
];

export const CUSTOMER_GROWTH: ICustomerGrowthPoint[] = [
  { month: "Jan", customers: 982 },
  { month: "Feb", customers: 1018 },
  { month: "Mar", customers: 1064 },
  { month: "Apr", customers: 1112 },
  { month: "May", customers: 1168 },
  { month: "Jun", customers: 1209 },
  { month: "Jul", customers: 1248 },
];

export const REVENUE_BY_PLAN: IRevenueByPlan[] = [
  { plan: "Starter", revenue: 46500 },
  { plan: "Pro", revenue: 108000 },
  { plan: "Enterprise", revenue: 130000 },
];

export const RECENT_ACTIVITY: IDashboardActivity[] = [
  {
    id: "activity_001",
    title: "Customer upgraded plan",
    description: "Acme Corp moved from Pro to Enterprise.",
    createdAt: "Today, 9:42 AM",
    tone: "success",
  },
  {
    id: "activity_002",
    title: "Invoice paid",
    description: "Bright Labs paid invoice #1048 for $2,800.",
    createdAt: "Today, 8:15 AM",
    tone: "info",
  },
  {
    id: "activity_003",
    title: "Subscription cancelled",
    description: "CloudNine cancelled their Pro subscription.",
    createdAt: "Yesterday, 4:20 PM",
    tone: "destructive",
  },
  {
    id: "activity_004",
    title: "Renewal risk detected",
    description: "DataFlow has a payment issue before renewal.",
    createdAt: "Yesterday, 1:05 PM",
    tone: "warning",
  },
];
