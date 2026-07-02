import { cva, type VariantProps } from "class-variance-authority";

export const cardVariants = cva(
  "rounded-xl border border-border bg-card text-card-foreground",
  {
    variants: {
      variant: {
        default: "shadow-sm",
        elevated: "shadow-md",
        outline: "shadow-none",
        ghost: "border-transparent bg-transparent shadow-none",
      },
      padding: {
        none: "",
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
      },
    },
    defaultVariants: {
      variant: "default",
      padding: "none",
    },
  },
);

export type TCardVariants = VariantProps<typeof cardVariants>;
