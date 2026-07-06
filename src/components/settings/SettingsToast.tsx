import { Toast } from "@/components/ui/Toast";

interface ISettingsToastProps {
  message: string | null;
}

export function SettingsToast({ message }: ISettingsToastProps) {
  return <Toast message={message} />;
}
