import { Card, CardContent } from "@/components/ui/Card";
import { cn } from "@/lib/cn";

interface IEmptyStateProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
}

export function EmptyState({
  title,
  description,
  icon,
  action,
  className,
}: IEmptyStateProps) {
  return (
    <Card variant="outline" className={className}>
      <CardContent className="flex flex-col items-center justify-center py-16 text-center">
        {icon ? (
          <div
            className={cn(
              "mb-4 flex h-14 w-14 items-center justify-center rounded-2xl",
              "border border-border bg-muted text-muted-foreground",
            )}
          >
            {icon}
          </div>
        ) : null}
        <h2 className="text-subheading text-foreground">{title}</h2>
        <p className="mt-2 max-w-md text-caption text-muted-foreground">
          {description}
        </p>
        {action ? <div className="mt-6">{action}</div> : null}
      </CardContent>
    </Card>
  );
}
