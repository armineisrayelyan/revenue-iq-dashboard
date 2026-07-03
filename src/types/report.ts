import type { IDashboardMetric } from "@/types/dashboard";
import type { IRevenueTrendPoint } from "@/types/analytics";
import type {
  ESubscriptionPlan,
  ESubscriptionStatus,
} from "@/types/subscription";

export enum EReportType {
  REVENUE = "Revenue",
  CUSTOMER = "Customer",
  SUBSCRIPTION = "Subscription",
  PAYMENTS = "Payments",
  CHURN = "Churn",
}

export enum EReportStatus {
  READY = "ready",
  GENERATING = "generating",
  FAILED = "failed",
}

export enum EExportFormat {
  CSV = "CSV",
  PDF = "PDF",
  EXCEL = "Excel",
}

export type TReportDateRange = "last_7_days" | "last_30_days" | "last_90_days";

export interface IReportFilters {
  dateRange: TReportDateRange | "all";
  plan: ESubscriptionPlan | "all";
  country: string;
  status: ESubscriptionStatus | "all";
}

export interface IReportTemplate {
  id: string;
  type: EReportType;
  title: string;
  description: string;
  lastGeneratedAt: string;
  icon: "line-chart" | "users" | "credit-card" | "receipt" | "activity";
}

export interface IGeneratedReport {
  id: string;
  name: string;
  type: EReportType;
  createdBy: string;
  createdAt: string;
  status: EReportStatus;
  size: string;
  dateRange: TReportDateRange;
  plan: ESubscriptionPlan;
  country: string;
  subscriptionStatus: ESubscriptionStatus;
}

export interface IReportPreviewRow {
  label: string;
  value: string;
  change: string;
}

export interface IReportPreview {
  summary: string;
  metrics: IDashboardMetric[];
  revenueTrend: IRevenueTrendPoint[];
  rows: IReportPreviewRow[];
}

export interface IReportsCenter {
  templates: IReportTemplate[];
  reports: IGeneratedReport[];
  preview: IReportPreview;
}
