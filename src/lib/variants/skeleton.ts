import { cva, type VariantProps } from "class-variance-authority";

export const skeletonVariants = cva("animate-pulse bg-muted", {
  variants: {
    variant: {
      default: "rounded-md",
      circular: "rounded-full",
      text: "h-4 rounded-md",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export type TSkeletonVariants = VariantProps<typeof skeletonVariants>;
