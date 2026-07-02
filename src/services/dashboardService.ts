import {
  CUSTOMER_GROWTH,
  DASHBOARD_METRICS,
  MONTHLY_REVENUE,
  RECENT_ACTIVITY,
  REVENUE_BY_PLAN,
} from "@/mock/dashboard";
import type { IDashboardOverview } from "@/types/dashboard";

export function getDashboardOverview(): IDashboardOverview {
  return {
    metrics: DASHBOARD_METRICS,
    revenue: MONTHLY_REVENUE,
    customerGrowth: CUSTOMER_GROWTH,
    revenueByPlan: REVENUE_BY_PLAN,
    activity: RECENT_ACTIVITY,
  };
}
