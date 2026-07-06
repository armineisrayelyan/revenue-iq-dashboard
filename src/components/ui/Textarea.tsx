import { forwardRef, type TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

interface ITextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  helperText?: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, ITextareaProps>(
  function Textarea({ className, label, helperText, error, id, ...props }, ref) {
    const textareaId = id ?? props.name;
    const hasError = Boolean(error);

    return (
      <div className="w-full space-y-1.5">
        {label && textareaId ? (
          <label htmlFor={textareaId} className="text-label text-foreground">
            {label}
          </label>
        ) : null}
        <textarea
          ref={ref}
          id={textareaId}
          aria-invalid={hasError}
          aria-describedby={
            error
              ? `${textareaId}-error`
              : helperText
                ? `${textareaId}-helper`
                : undefined
          }
          className={cn(
            "min-h-28 w-full rounded-lg border border-input bg-background px-3 py-2",
            "text-sm text-foreground placeholder:text-muted-foreground",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
            "disabled:cursor-not-allowed disabled:opacity-50",
            hasError && "border-destructive focus-visible:ring-destructive",
            className,
          )}
          {...props}
        />
        {error ? (
          <p id={`${textareaId}-error`} className="text-caption text-destructive">
            {error}
          </p>
        ) : helperText ? (
          <p id={`${textareaId}-helper`} className="text-caption text-muted-foreground">
            {helperText}
          </p>
        ) : null}
      </div>
    );
  },
);
