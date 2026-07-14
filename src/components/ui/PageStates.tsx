import {
  CardSkeleton,
  ChartSkeleton,
  FormSkeleton,
  TableSkeleton,
} from "@/components/ui/LoadingStates";

export function DashboardPageLoadingState() {
  return (
    <div className="space-y-6" aria-label="Loading page">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <CardSkeleton key={index} />
        ))}
      </div>
      <section className="grid gap-4 xl:grid-cols-2">
        <ChartSkeleton />
        <ChartSkeleton />
      </section>
      <section className="grid gap-4 xl:grid-cols-[minmax(0,1.45fr)_minmax(320px,0.55fr)]">
        <TableSkeleton rows={5} />
        <CardSkeleton />
      </section>
    </div>
  );
}

export function AuthPageLoadingState() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <div className="w-full max-w-md">
        <FormSkeleton />
      </div>
    </div>
  );
}
