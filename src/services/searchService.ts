import { NAVIGATION_ITEMS } from "@/constants/navigation";
import { CUSTOMERS } from "@/mock/customers";
import { GENERATED_REPORTS, REPORT_TEMPLATES } from "@/mock/reports";
import { SUBSCRIPTIONS } from "@/mock/subscriptions";
import type { ISearchResult } from "@/types/search";

function normalize(value: string): string {
  return value.trim().toLowerCase();
}

export function getGlobalSearchResults(query: string): ISearchResult[] {
  const searchQuery = normalize(query);
  const results: ISearchResult[] = [
    ...NAVIGATION_ITEMS.map((item) => ({
      id: `page-${item.id}`,
      title: item.label,
      description: "RevenueIQ page",
      href: item.href,
      type: "page" as const,
    })),
    ...CUSTOMERS.map((customer) => ({
      id: customer.id,
      title: customer.fullName,
      description: `${customer.company} · ${customer.email}`,
      href: "/customers",
      type: "customer" as const,
    })),
    ...SUBSCRIPTIONS.map((subscription) => ({
      id: subscription.id,
      title: subscription.customerName,
      description: `${subscription.plan} · ${subscription.status}`,
      href: "/subscriptions",
      type: "subscription" as const,
    })),
    ...REPORT_TEMPLATES.map((report) => ({
      id: report.id,
      title: report.title,
      description: report.description,
      href: "/reports",
      type: "report" as const,
    })),
    ...GENERATED_REPORTS.map((report) => ({
      id: report.id,
      title: report.name,
      description: `${report.type} · ${report.status}`,
      href: "/reports",
      type: "report" as const,
    })),
  ];

  if (!searchQuery) {
    return results.slice(0, 8);
  }

  return results
    .filter((result) =>
      normalize(`${result.title} ${result.description} ${result.type}`).includes(
        searchQuery,
      ),
    )
    .slice(0, 12);
}
