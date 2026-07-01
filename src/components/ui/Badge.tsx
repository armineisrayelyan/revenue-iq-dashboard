import { cn } from "@/lib/cn";

type TBadgeVariant = "default" | "success" | "warning" | "error" | "outline";

interface IBadgeProps {
  children: React.ReactNode;
  variant?: TBadgeVariant;
  className?: string;
}

const variantStyles: Record<TBadgeVariant, string> = {
  default: "bg-secondary text-secondary-foreground",
  success: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400",
  warning: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
  error: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
  outline: "border border-border bg-transparent text-foreground",
};

export function Badge({
  children,
  variant = "default",
  className,
}: IBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        variantStyles[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
