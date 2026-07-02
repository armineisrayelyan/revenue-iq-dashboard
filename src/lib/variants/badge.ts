import { cva, type VariantProps } from "class-variance-authority";

export const badgeVariants = cva(
  "inline-flex items-center rounded-full border font-medium transition-colors",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-secondary text-secondary-foreground",
        primary:
          "border-transparent bg-primary/10 text-primary",
        success:
          "border-transparent bg-success-muted text-success-muted-foreground",
        warning:
          "border-transparent bg-warning-muted text-warning-muted-foreground",
        error:
          "border-transparent bg-destructive/10 text-destructive",
        info: "border-transparent bg-info-muted text-info-muted-foreground",
        outline: "border-border bg-transparent text-foreground",
      },
      size: {
        sm: "px-2 py-0.5 text-[10px]",
        md: "px-2.5 py-0.5 text-xs",
        lg: "px-3 py-1 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);

export type TBadgeVariants = VariantProps<typeof badgeVariants>;
