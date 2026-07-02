import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

interface IChartCardProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export function ChartCard({ title, description, children }: IChartCardProps) {
  return (
    <Card className="min-h-[360px]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <p className="text-caption text-muted-foreground">{description}</p>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}
