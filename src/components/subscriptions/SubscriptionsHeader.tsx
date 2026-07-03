import { Button } from "@/components/ui/Button";

export function SubscriptionsHeader() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <h1 className="text-heading text-foreground">Subscriptions</h1>
        <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
          Manage active plans, renewal risk, billing cycles, invoices, and
          payment activity across your subscriber base.
        </p>
      </div>
      <Button aria-label="Create subscription">Create Subscription</Button>
    </div>
  );
}
