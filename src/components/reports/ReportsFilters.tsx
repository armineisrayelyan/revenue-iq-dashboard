import { X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SelectField } from "@/components/ui/SelectField";
import type { IReportFilters, TReportDateRange } from "@/types/report";
import type {
  ESubscriptionPlan,
  ESubscriptionStatus,
} from "@/types/subscription";

interface IReportsFiltersProps {
  filters: IReportFilters;
  dateRanges: TReportDateRange[];
  plans: ESubscriptionPlan[];
  countries: string[];
  statuses: ESubscriptionStatus[];
  onChange: (filters: Partial<IReportFilters>) => void;
  onReset: () => void;
}

function formatLabel(value: string): string {
  return value
    .split("_")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export function ReportsFilters({
  filters,
  dateRanges,
  plans,
  countries,
  statuses,
  onChange,
  onReset,
}: IReportsFiltersProps) {
  return (
    <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
      <div className="flex flex-wrap items-end gap-3">
        <SelectField
          label="Date Range"
          value={filters.dateRange}
          options={[
            { label: "All", value: "all" },
            ...dateRanges.map((dateRange) => ({
              label: formatLabel(dateRange),
              value: dateRange,
            })),
          ]}
          onChange={(dateRange) =>
            onChange({ dateRange: dateRange as TReportDateRange | "all" })
          }
        />
        <SelectField
          label="Plan"
          value={filters.plan}
          options={[
            { label: "All", value: "all" },
            ...plans.map((plan) => ({ label: plan, value: plan })),
          ]}
          onChange={(plan) => onChange({ plan: plan as IReportFilters["plan"] })}
        />
        <SelectField
          label="Country"
          value={filters.country}
          options={[
            { label: "All", value: "all" },
            ...countries.map((country) => ({ label: country, value: country })),
          ]}
          onChange={(country) => onChange({ country })}
        />
        <SelectField
          label="Subscription Status"
          value={filters.status}
          options={[
            { label: "All", value: "all" },
            ...statuses.map((status) => ({
              label: formatLabel(status),
              value: status,
            })),
          ]}
          onChange={(status) =>
            onChange({ status: status as ESubscriptionStatus | "all" })
          }
        />
        <Button variant="outline" onClick={onReset}>
          <X className="h-4 w-4" aria-hidden="true" />
          Reset
        </Button>
      </div>
    </div>
  );
}
