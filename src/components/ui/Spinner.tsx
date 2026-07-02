import { cn } from "@/lib/cn";
import { spinnerVariants, type TSpinnerVariants } from "@/lib/variants/spinner";

interface ISpinnerProps extends TSpinnerVariants {
  className?: string;
  label?: string;
}

export function Spinner({
  size,
  className,
  label = "Loading",
}: ISpinnerProps) {
  return (
    <div
      role="status"
      aria-label={label}
      className={cn("inline-flex items-center justify-center", className)}
    >
      <span
        className={cn(spinnerVariants({ size }), "text-primary")}
        aria-hidden="true"
      />
      <span className="sr-only">{label}</span>
    </div>
  );
}

export { spinnerVariants };
