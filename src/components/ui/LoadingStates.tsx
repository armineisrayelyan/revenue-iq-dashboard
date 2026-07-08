import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { Skeleton } from "@/components/ui/Skeleton";

export function CardSkeleton() {
  return (
    <Card>
      <CardHeader className="space-y-3">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-7 w-36" />
      </CardHeader>
      <CardContent>
        <Skeleton className="h-4 w-28" />
      </CardContent>
    </Card>
  );
}

export function TableSkeleton({ rows = 5 }: { rows?: number }) {
  return (
    <Card>
      <CardContent className="space-y-3 p-4">
        <Skeleton className="h-5 w-40" />
        {Array.from({ length: rows }).map((_, index) => (
          <div
            key={index}
            className="grid grid-cols-4 gap-3 rounded-lg border border-border p-3"
          >
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-16" />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export function ChartSkeleton() {
  return (
    <Card>
      <CardHeader className="space-y-3">
        <Skeleton className="h-5 w-40" />
        <Skeleton className="h-4 w-56" />
      </CardHeader>
      <CardContent>
        <Skeleton className="h-72 w-full rounded-xl" />
      </CardContent>
    </Card>
  );
}

export function FormSkeleton() {
  return (
    <Card>
      <CardContent className="space-y-5 p-6">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="space-y-2">
            <Skeleton className="h-4 w-28" />
            <Skeleton className="h-10 w-full rounded-lg" />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
