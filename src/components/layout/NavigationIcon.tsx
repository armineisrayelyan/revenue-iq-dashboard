import {
  ChartNoAxesCombined,
  CreditCard,
  DollarSign,
  FileText,
  LayoutDashboard,
  Settings,
  Users,
} from "lucide-react";
import type { TNavigationIcon } from "@/types/navigation";

interface INavigationIconProps {
  icon: TNavigationIcon;
  className?: string;
}

export function NavigationIcon({ icon, className }: INavigationIconProps) {
  switch (icon) {
    case "layout-dashboard":
      return (
        <LayoutDashboard className={className} aria-hidden="true" />
      );
    case "users":
      return <Users className={className} aria-hidden="true" />;
    case "credit-card":
      return <CreditCard className={className} aria-hidden="true" />;
    case "dollar-sign":
      return <DollarSign className={className} aria-hidden="true" />;
    case "chart-no-axes-combined":
      return <ChartNoAxesCombined className={className} aria-hidden="true" />;
    case "file-text":
      return <FileText className={className} aria-hidden="true" />;
    case "settings":
      return <Settings className={className} aria-hidden="true" />;
    default:
      return null;
  }
}
