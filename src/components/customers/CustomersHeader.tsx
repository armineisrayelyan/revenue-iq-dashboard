import { Plus } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function CustomersHeader() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <h1 className="text-heading text-foreground">Customers</h1>
        <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
          Search, filter, and manage every customer relationship across plans,
          revenue, and subscription status.
        </p>
      </div>
      <Button aria-label="Add customer">
        <Plus className="h-4 w-4" aria-hidden="true" />
        Add Customer
      </Button>
    </div>
  );
}
