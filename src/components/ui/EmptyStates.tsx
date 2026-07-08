import { BarChart3, FileText, Search, TableProperties, Users } from "lucide-react";
import { EmptyState } from "@/components/ui/EmptyState";

interface IPresetEmptyStateProps {
  action?: React.ReactNode;
  className?: string;
}

export function CustomersEmptyState(props: IPresetEmptyStateProps) {
  return (
    <EmptyState
      title="No customers found"
      description="Try adjusting your search or filters to find the customer account you need."
      icon={<Users className="h-6 w-6" aria-hidden="true" />}
      {...props}
    />
  );
}

export function ReportsEmptyState(props: IPresetEmptyStateProps) {
  return (
    <EmptyState
      title="No reports yet"
      description="Generate a report to turn revenue, customers, and subscription data into shareable insight."
      icon={<FileText className="h-6 w-6" aria-hidden="true" />}
      {...props}
    />
  );
}

export function AnalyticsEmptyState(props: IPresetEmptyStateProps) {
  return (
    <EmptyState
      title="Analytics are warming up"
      description="Once RevenueIQ has enough activity, this view will show trends, insights, and retention signals."
      icon={<BarChart3 className="h-6 w-6" aria-hidden="true" />}
      {...props}
    />
  );
}

export function TableEmptyState(props: IPresetEmptyStateProps) {
  return (
    <EmptyState
      title="Nothing to show"
      description="There are no matching records for the current view. Clear filters or try a different search."
      icon={<TableProperties className="h-6 w-6" aria-hidden="true" />}
      {...props}
    />
  );
}

export function SearchEmptyState(props: IPresetEmptyStateProps) {
  return (
    <EmptyState
      title="No matching results"
      description="Search customers, reports, subscriptions, or pages by name, company, status, or module."
      icon={<Search className="h-6 w-6" aria-hidden="true" />}
      {...props}
    />
  );
}
