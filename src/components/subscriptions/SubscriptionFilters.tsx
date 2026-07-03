import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { SelectField } from "@/components/ui/SelectField";
import {
  EBillingCycle,
  ESubscriptionPlan,
  ESubscriptionStatus,
} from "@/types/subscription";
import type { ISubscriptionFilters } from "@/types/subscription";

interface ISubscriptionFiltersProps {
  filters: ISubscriptionFilters;
  plans: ESubscriptionPlan[];
  billingCycles: EBillingCycle[];
  statuses: ESubscriptionStatus[];
  onChange: (filters: Partial<ISubscriptionFilters>) => void;
  onReset: () => void;
}

function formatLabel(value: string): string {
  return value
    .split("_")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export function SubscriptionFilters({
  filters,
  plans,
  billingCycles,
  statuses,
  onChange,
  onReset,
}: ISubscriptionFiltersProps) {
  return (
    <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
      <div className="grid gap-3 lg:grid-cols-[minmax(240px,1fr)_auto] lg:items-end">
        <div className="relative">
          <Search
            className="pointer-events-none absolute left-3 top-[34px] h-4 w-4 text-muted-foreground"
            aria-hidden="true"
          />
          <Input
            label="Search"
            name="subscription-search"
            placeholder="Search by customer or plan"
            value={filters.search}
            className="pl-9"
            onChange={(event) => onChange({ search: event.target.value })}
          />
        </div>

        <div className="flex flex-wrap items-end gap-3">
          <SelectField
            label="Plan"
            value={filters.plan}
            options={[
              { label: "All", value: "all" },
              ...plans.map((plan) => ({ label: plan, value: plan })),
            ]}
            onChange={(plan) =>
              onChange({ plan: plan as ESubscriptionPlan | "all" })
            }
          />
          <SelectField
            label="Billing"
            value={filters.billingCycle}
            options={[
              { label: "All", value: "all" },
              ...billingCycles.map((cycle) => ({
                label: formatLabel(cycle),
                value: cycle,
              })),
            ]}
            onChange={(billingCycle) =>
              onChange({ billingCycle: billingCycle as EBillingCycle | "all" })
            }
          />
          <SelectField
            label="Status"
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
          <Button variant="outline" size="md" onClick={onReset}>
            <X className="h-4 w-4" aria-hidden="true" />
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
}
