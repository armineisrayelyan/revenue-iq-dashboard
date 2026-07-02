import { cn } from "@/lib/cn";
import { alertVariants, type TAlertVariants } from "@/lib/variants/alert";
import {
  AlertCircle,
  CheckCircle2,
  Info,
  TriangleAlert,
  XCircle,
} from "lucide-react";

interface IAlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    TAlertVariants {}

const iconMap = {
  default: Info,
  success: CheckCircle2,
  warning: TriangleAlert,
  destructive: XCircle,
  info: AlertCircle,
};

export function Alert({
  className,
  variant = "default",
  children,
  ...props
}: IAlertProps) {
  const Icon = iconMap[variant ?? "default"];

  return (
    <div
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    >
      <div className="flex gap-3">
        <Icon className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
        <div className="flex-1 space-y-1">{children}</div>
      </div>
    </div>
  );
}

export function AlertTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h5
      className={cn("text-label text-foreground", className)}
      {...props}
    />
  );
}

export function AlertDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("text-caption [&_p]:leading-relaxed", className)}
      {...props}
    />
  );
}

export { alertVariants };
