import { Card, CardContent } from "@/components/ui/Card";

interface IEmptyStateProps {
  title: string;
  description: string;
  className?: string;
}

export function EmptyState({ title, description, className }: IEmptyStateProps) {
  return (
    <Card variant="outline" className={className}>
      <CardContent className="flex flex-col items-center justify-center py-16 text-center">
        <h2 className="text-subheading text-foreground">{title}</h2>
        <p className="mt-2 max-w-md text-caption text-muted-foreground">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}
