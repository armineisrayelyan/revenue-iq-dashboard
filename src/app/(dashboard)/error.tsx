"use client";

import { ErrorState } from "@/components/ui/ErrorState";

export default function DashboardError({ reset }: { reset: () => void }) {
  return (
    <ErrorState
      title="This workspace view did not load"
      description="RevenueIQ could not render this dashboard page. Retry to reload the latest mock data."
      onRetry={reset}
    />
  );
}
