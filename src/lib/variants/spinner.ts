import { cva, type VariantProps } from "class-variance-authority";

export const spinnerVariants = cva(
  "animate-spin rounded-full border-2 border-current border-t-transparent",
  {
    variants: {
      size: {
        sm: "h-4 w-4",
        md: "h-6 w-6",
        lg: "h-8 w-8",
        xl: "h-10 w-10",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export type TSpinnerVariants = VariantProps<typeof spinnerVariants>;
