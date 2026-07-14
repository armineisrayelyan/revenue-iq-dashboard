import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import {
  AnalyticsEmptyState,
  TableEmptyState,
} from "@/components/ui/EmptyStates";

interface IEmptySectionProps {
  title: string;
  description: string;
}

interface IEmptyTableStateProps {
  inline?: boolean;
}

export function EmptyChartState() {
  return <AnalyticsEmptyState className="border-0 shadow-none" />;
}

export function EmptyTableState({ inline = false }: IEmptyTableStateProps) {
  return (
    <TableEmptyState className={inline ? "border-0 shadow-none" : undefined} />
  );
}

export function EmptyDashboardSection() {
  return <TableEmptyState />;
}

export function EmptyAnalyticsSection({
  title,
  description,
}: IEmptySectionProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <p className="text-caption text-muted-foreground">{description}</p>
      </CardHeader>
      <CardContent>
        <AnalyticsEmptyState className="border-0 shadow-none" />
      </CardContent>
    </Card>
  );
}
