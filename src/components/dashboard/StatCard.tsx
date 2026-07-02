import { ArrowDownRight, ArrowRight, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent } from "@/components/ui/Card";
import { DashboardMetricIcon } from "@/components/dashboard/DashboardMetricIcon";
import type { IDashboardMetric } from "@/types/dashboard";

interface IStatCardProps {
  metric: IDashboardMetric;
}

export function StatCard({ metric }: IStatCardProps) {
  const TrendIcon =
    metric.trend === "up"
      ? ArrowUpRight
      : metric.trend === "down"
        ? ArrowDownRight
        : ArrowRight;
  const badgeVariant = metric.trend === "down" ? "error" : "success";

  return (
    <Card className="transition-shadow hover:shadow-md">
      <CardContent className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div className="rounded-xl bg-primary/10 p-2.5 text-primary">
            <DashboardMetricIcon icon={metric.icon} />
          </div>
          <Badge variant={badgeVariant}>
            <TrendIcon className="mr-1 h-3 w-3" aria-hidden="true" />
            {metric.growthPercentage}%
          </Badge>
        </div>
        <div className="mt-5">
          <p className="text-caption font-medium text-muted-foreground">
            {metric.label}
          </p>
          <p className="mt-2 text-3xl font-semibold tracking-tight text-foreground">
            {metric.value}
          </p>
          <p className="mt-1 text-caption text-muted-foreground">
            {metric.comparison}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
