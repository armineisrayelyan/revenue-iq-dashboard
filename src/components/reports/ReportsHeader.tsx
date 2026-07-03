import { Download, Plus } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function ReportsHeader() {
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
      <div>
        <h1 className="text-heading text-foreground">Reports</h1>
        <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
          Generate, preview, and export RevenueIQ business reports for revenue,
          customers, subscriptions, payments, and churn.
        </p>
      </div>
      <div className="flex flex-col gap-2 sm:flex-row">
        <Button aria-label="Generate report">
          <Plus className="h-4 w-4" aria-hidden="true" />
          Generate Report
        </Button>
        <Button variant="outline" aria-label="Export reports">
          <Download className="h-4 w-4" aria-hidden="true" />
          Export
        </Button>
      </div>
    </div>
  );
}
