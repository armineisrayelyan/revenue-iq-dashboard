import { cva, type VariantProps } from "class-variance-authority";

export const alertVariants = cva(
  "relative w-full rounded-lg border px-4 py-3 text-sm",
  {
    variants: {
      variant: {
        default: "border-border bg-card text-card-foreground",
        success:
          "border-success/20 bg-success-muted text-success-muted-foreground",
        warning:
          "border-warning/20 bg-warning-muted text-warning-muted-foreground",
        destructive:
          "border-destructive/20 bg-destructive/10 text-destructive",
        info: "border-info/20 bg-info-muted text-info-muted-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export type TAlertVariants = VariantProps<typeof alertVariants>;
