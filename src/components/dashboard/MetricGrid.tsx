import { StatCard } from "@/components/dashboard/StatCard";
import type { IDashboardMetric } from "@/types/dashboard";

interface IMetricGridProps {
  metrics: IDashboardMetric[];
}

export function MetricGrid({ metrics }: IMetricGridProps) {
  return (
    <section
      aria-label="Key performance indicators"
      className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
    >
      {metrics.map((metric) => (
        <StatCard key={metric.id} metric={metric} />
      ))}
    </section>
  );
}
