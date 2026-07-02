import { cn } from "@/lib/cn";
import { skeletonVariants, type TSkeletonVariants } from "@/lib/variants/skeleton";

interface ISkeletonProps
  extends React.HTMLAttributes<HTMLDivElement>,
    TSkeletonVariants {}

export function Skeleton({
  className,
  variant,
  ...props
}: ISkeletonProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(skeletonVariants({ variant }), className)}
      {...props}
    />
  );
}

export { skeletonVariants };
