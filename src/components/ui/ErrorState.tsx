import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";

interface IErrorStateProps {
  title?: string;
  description?: string;
  retryLabel?: string;
  onRetry?: () => void;
  className?: string;
}

export function ErrorState({
  title = "Something went wrong",
  description = "We could not load this RevenueIQ view. Please try again in a moment.",
  retryLabel = "Retry",
  onRetry,
  className,
}: IErrorStateProps) {
  return (
    <Card variant="outline" className={className}>
      <CardContent className="flex flex-col items-center justify-center py-16 text-center">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-destructive/20 bg-destructive/10 text-destructive">
          <AlertTriangle className="h-6 w-6" aria-hidden="true" />
        </div>
        <h2 className="text-subheading text-foreground">{title}</h2>
        <p className="mt-2 max-w-md text-caption text-muted-foreground">
          {description}
        </p>
        {onRetry ? (
          <Button className="mt-6" onClick={onRetry}>
            {retryLabel}
          </Button>
        ) : null}
      </CardContent>
    </Card>
  );
}
