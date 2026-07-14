"use client";

import { ErrorState } from "@/components/ui/ErrorState";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background p-4">
      <ErrorState
        title="We could not load RevenueIQ"
        description="Something interrupted this page. Retry the request to continue."
        onRetry={reset}
      />
    </main>
  );
}
