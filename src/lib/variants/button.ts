import { cva, type VariantProps } from "class-variance-authority";
import { disabledStyles, focusRing } from "@/lib/variants/shared";

export const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium",
    "transition-colors duration-[var(--duration-fast)] ease-[var(--ease-default)]",
    focusRing,
    disabledStyles,
  ],
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground shadow-xs hover:bg-[var(--primary-hover)]",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        outline:
          "border border-border bg-transparent hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        destructive:
          "bg-destructive text-destructive-foreground shadow-xs hover:bg-destructive/90",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-8 rounded-md px-3 text-xs",
        md: "h-9 rounded-md px-4 text-sm",
        lg: "h-10 rounded-lg px-6 text-sm",
        icon: "h-9 w-9 rounded-md p-0",
        "icon-sm": "h-8 w-8 rounded-md p-0",
        "icon-lg": "h-10 w-10 rounded-lg p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export type TButtonVariants = VariantProps<typeof buttonVariants>;
