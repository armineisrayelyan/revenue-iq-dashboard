import { CalendarDays, Download } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function AnalyticsHeader() {
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
      <div>
        <h1 className="text-heading text-foreground">Analytics</h1>
        <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
          Advanced revenue, growth, retention, and customer intelligence for
          subscription teams.
        </p>
      </div>
      <div className="flex flex-col gap-2 sm:flex-row">
        <Button variant="outline" aria-label="Select date range">
          <CalendarDays className="h-4 w-4" aria-hidden="true" />
          Last 90 days
        </Button>
        <Button aria-label="Export analytics report">
          <Download className="h-4 w-4" aria-hidden="true" />
          Export
        </Button>
      </div>
    </div>
  );
}
