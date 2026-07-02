import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/cn";
import { inputVariants } from "@/lib/variants/input";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
  inputSize?: "sm" | "md" | "lg";
}

export const Input = forwardRef<HTMLInputElement, IInputProps>(function Input(
  {
    className,
    label,
    helperText,
    error,
    inputSize = "md",
    id,
    ...props
  },
  ref,
) {
  const inputId = id ?? props.name;
  const hasError = Boolean(error);

  return (
    <div className="w-full space-y-1.5">
      {label && inputId ? (
        <label htmlFor={inputId} className="text-label text-foreground">
          {label}
        </label>
      ) : null}

      <input
        ref={ref}
        id={inputId}
        aria-invalid={hasError}
        aria-describedby={
          error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined
        }
        className={cn(
          inputVariants({
            size: inputSize,
            state: hasError ? "error" : "default",
          }),
          className,
        )}
        {...props}
      />

      {error ? (
        <p id={`${inputId}-error`} className="text-caption text-destructive">
          {error}
        </p>
      ) : helperText ? (
        <p id={`${inputId}-helper`} className="text-caption text-muted-foreground">
          {helperText}
        </p>
      ) : null}
    </div>
  );
});

export { inputVariants };
