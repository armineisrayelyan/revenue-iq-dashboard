"use client";

import {
  AlertTriangle,
  CheckCircle2,
  Info,
  X,
  XCircle,
} from "lucide-react";
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

type TToastVariant = "success" | "error" | "warning" | "info";

interface IToastProps {
  message: string | null;
  variant?: TToastVariant;
  onDismiss?: () => void;
  floating?: boolean;
}

interface IToastItem {
  id: string;
  message: string;
  variant: TToastVariant;
}

interface IToastContextValue {
  showToast: (message: string, variant?: TToastVariant) => void;
}

const ToastContext = createContext<IToastContextValue | null>(null);

const toastIconMap = {
  success: CheckCircle2,
  error: XCircle,
  warning: AlertTriangle,
  info: Info,
};

const toastToneMap = {
  success: "text-success",
  error: "text-destructive",
  warning: "text-warning-muted-foreground",
  info: "text-info-muted-foreground",
};

export function Toast({
  message,
  variant = "success",
  onDismiss,
  floating = true,
}: IToastProps) {
  if (!message) {
    return null;
  }

  const Icon = toastIconMap[variant];

  return (
    <div
      role="status"
      aria-live="polite"
      className={cn(
        "flex items-center gap-2 rounded-xl",
        "border border-border bg-popover px-4 py-3 text-sm shadow-lg",
        floating ? "fixed bottom-6 right-6 z-50" : "",
        variant === "error" ? "text-destructive" : "text-popover-foreground",
      )}
    >
      <Icon className={cn("h-4 w-4", toastToneMap[variant])} aria-hidden="true" />
      <span>{message}</span>
      {onDismiss ? (
        <Button
          variant="ghost"
          size="icon"
          className="-mr-2 h-7 w-7"
          aria-label="Dismiss notification"
          onClick={onDismiss}
        >
          <X className="h-3.5 w-3.5" aria-hidden="true" />
        </Button>
      ) : null}
    </div>
  );
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<IToastItem[]>([]);

  const dismissToast = useCallback((id: string) => {
    setToasts((current) => current.filter((toast) => toast.id !== id));
  }, []);

  const showToast = useCallback(
    (message: string, variant: TToastVariant = "info") => {
      const id = `toast_${Date.now()}_${Math.random().toString(36).slice(2)}`;
      setToasts((current) => [...current, { id, message, variant }]);
      window.setTimeout(() => dismissToast(id), 3200);
    },
    [dismissToast],
  );

  const value = useMemo(() => ({ showToast }), [showToast]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="fixed bottom-4 right-4 z-[60] flex w-[min(24rem,calc(100vw-2rem))] flex-col gap-2">
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            message={toast.message}
            variant={toast.variant}
            floating={false}
            onDismiss={() => dismissToast(toast.id)}
          />
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must be used within ToastProvider");
  }

  return context;
}
