import { cva, type VariantProps } from "class-variance-authority";

export const avatarVariants = cva(
  "inline-flex shrink-0 items-center justify-center rounded-full bg-primary font-medium text-primary-foreground ring-2 ring-border",
  {
    variants: {
      size: {
        xs: "h-6 w-6 text-[10px]",
        sm: "h-8 w-8 text-xs",
        md: "h-9 w-9 text-sm",
        lg: "h-10 w-10 text-base",
        xl: "h-12 w-12 text-lg",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export type TAvatarVariants = VariantProps<typeof avatarVariants>;
