import { cn } from "@/lib/cn";

interface IEmptyStateProps {
  title: string;
  description: string;
  className?: string;
}

export function EmptyState({ title, description, className }: IEmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded-xl border border-dashed border-border",
        "bg-card px-6 py-16 text-center",
        className,
      )}
    >
      <h2 className="text-lg font-medium text-foreground">{title}</h2>
      <p className="mt-2 max-w-md text-sm text-muted-foreground">
        {description}
      </p>
    </div>
  );
}
