import { Slot } from "@radix-ui/react-slot";
import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";
import { buttonVariants, type TButtonVariants } from "@/lib/variants/button";

interface IButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    TButtonVariants {
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  function Button(
    {
      className,
      variant,
      size,
      asChild = false,
      type = "button",
      ...props
    },
    ref,
  ) {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        type={asChild ? undefined : type}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  },
);

export { buttonVariants };
