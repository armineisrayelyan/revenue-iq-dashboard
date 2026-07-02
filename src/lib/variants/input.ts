import { cva, type VariantProps } from "class-variance-authority";
import { disabledStyles, focusRing } from "@/lib/variants/shared";

export const inputVariants = cva(
  [
    "flex w-full border bg-background text-foreground",
    "placeholder:text-muted-foreground",
    "transition-colors duration-[var(--duration-fast)]",
    focusRing,
    disabledStyles,
  ],
  {
    variants: {
      size: {
        sm: "h-8 rounded-md px-2.5 text-xs",
        md: "h-9 rounded-md px-3 text-sm",
        lg: "h-10 rounded-lg px-3.5 text-sm",
      },
      state: {
        default: "border-input",
        error: "border-destructive focus-visible:ring-destructive",
      },
    },
    defaultVariants: {
      size: "md",
      state: "default",
    },
  },
);

export type TInputVariants = VariantProps<typeof inputVariants>;
