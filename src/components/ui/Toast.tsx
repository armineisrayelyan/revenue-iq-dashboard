import { CheckCircle2, XCircle } from "lucide-react";
import { cn } from "@/lib/cn";

interface IToastProps {
  message: string | null;
  variant?: "success" | "error";
}

export function Toast({ message, variant = "success" }: IToastProps) {
  if (!message) {
    return null;
  }

  const Icon = variant === "success" ? CheckCircle2 : XCircle;

  return (
    <div
      role="status"
      className={cn(
        "fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-xl",
        "border border-border bg-popover px-4 py-3 text-sm shadow-lg",
        variant === "error" ? "text-destructive" : "text-popover-foreground",
      )}
    >
      <Icon
        className={cn(
          "h-4 w-4",
          variant === "success" ? "text-success" : "text-destructive",
        )}
        aria-hidden="true"
      />
      {message}
    </div>
  );
}
