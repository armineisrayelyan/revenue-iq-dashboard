import {
  GENERATED_REPORTS,
  REPORT_PREVIEW,
  REPORT_TEMPLATES,
} from "@/mock/reports";
import { getCustomerCountries } from "@/services/customerService";
import type { IReportsCenter } from "@/types/report";
import { ESubscriptionPlan, ESubscriptionStatus } from "@/types/subscription";

export function getReportsCenter(): IReportsCenter {
  return {
    templates: REPORT_TEMPLATES,
    reports: GENERATED_REPORTS,
    preview: REPORT_PREVIEW,
  };
}

export function getReportCountries(): string[] {
  return getCustomerCountries();
}

export function getReportPlans(): ESubscriptionPlan[] {
  return Object.values(ESubscriptionPlan);
}

export function getReportStatuses(): ESubscriptionStatus[] {
  return Object.values(ESubscriptionStatus);
}
