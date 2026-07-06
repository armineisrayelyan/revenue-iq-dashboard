import { CheckCircle2 } from "lucide-react";

interface ISettingsToastProps {
  message: string | null;
}

export function SettingsToast({ message }: ISettingsToastProps) {
  if (!message) {
    return null;
  }

  return (
    <div
      role="status"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-xl border border-border bg-popover px-4 py-3 text-sm text-popover-foreground shadow-lg"
    >
      <CheckCircle2 className="h-4 w-4 text-success" aria-hidden="true" />
      {message}
    </div>
  );
}
