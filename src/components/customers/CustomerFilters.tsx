import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { cn } from "@/lib/cn";
import { ECustomerPlan, ECustomerStatus } from "@/types/customer";
import type { ICustomerFilters } from "@/types/customer";

interface ICustomerFiltersProps {
  filters: ICustomerFilters;
  countries: string[];
  plans: ECustomerPlan[];
  statuses: ECustomerStatus[];
  onChange: (filters: Partial<ICustomerFilters>) => void;
  onReset: () => void;
}

interface IFilterSelectProps {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}

function formatStatus(status: string): string {
  return status.charAt(0).toUpperCase() + status.slice(1);
}

function FilterSelect({ label, value, options, onChange }: IFilterSelectProps) {
  return (
    <label className="space-y-1.5">
      <span className="text-label text-foreground">{label}</span>
      <select
        value={value}
        className={cn(
          "h-9 min-w-36 rounded-md border border-input bg-background px-3",
          "text-sm text-foreground focus-visible:outline-none",
          "focus-visible:ring-2 focus-visible:ring-ring",
        )}
        onChange={(event) => onChange(event.target.value)}
      >
        <option value="all">All</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {formatStatus(option)}
          </option>
        ))}
      </select>
    </label>
  );
}

export function CustomerFilters({
  filters,
  countries,
  plans,
  statuses,
  onChange,
  onReset,
}: ICustomerFiltersProps) {
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
            name="customer-search"
            placeholder="Search by name, email, or company"
            value={filters.search}
            className="pl-9"
            onChange={(event) => onChange({ search: event.target.value })}
          />
        </div>

        <div className="flex flex-wrap items-end gap-3">
          <FilterSelect
            label="Plan"
            value={filters.plan}
            options={plans}
            onChange={(plan) => onChange({ plan: plan as ECustomerPlan | "all" })}
          />
          <FilterSelect
            label="Status"
            value={filters.status}
            options={statuses}
            onChange={(status) =>
              onChange({ status: status as ECustomerStatus | "all" })
            }
          />
          <FilterSelect
            label="Country"
            value={filters.country}
            options={countries}
            onChange={(country) => onChange({ country })}
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
