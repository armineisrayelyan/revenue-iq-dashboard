import { cn } from "@/lib/cn";
import { badgeVariants, type TBadgeVariants } from "@/lib/variants/badge";

interface IBadgeProps extends TBadgeVariants {
  children: React.ReactNode;
  className?: string;
}

export function Badge({
  children,
  variant,
  size,
  className,
}: IBadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant, size }), className)}>
      {children}
    </span>
  );
}

export { badgeVariants };
