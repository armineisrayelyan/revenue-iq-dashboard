export type TTrendDirection = "up" | "down" | "neutral";

export interface IDashboardMetric {
  id: string;
  label: string;
  value: string;
  comparison: string;
  growthPercentage: number;
  trend: TTrendDirection;
  icon: "dollar-sign" | "calendar-range" | "users" | "credit-card";
}

export interface IMonthlyRevenuePoint {
  month: string;
  revenue: number;
}

export interface ICustomerGrowthPoint {
  month: string;
  customers: number;
}

export interface IRevenueByPlan {
  plan: "Starter" | "Pro" | "Enterprise";
  revenue: number;
}

export interface IDashboardActivity {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  tone: "success" | "info" | "warning" | "destructive";
}

export interface IDashboardOverview {
  metrics: IDashboardMetric[];
  revenue: IMonthlyRevenuePoint[];
  customerGrowth: ICustomerGrowthPoint[];
  revenueByPlan: IRevenueByPlan[];
  activity: IDashboardActivity[];
}
