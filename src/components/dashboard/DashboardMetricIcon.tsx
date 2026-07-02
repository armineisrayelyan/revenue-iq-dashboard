import {
  CalendarRange,
  CreditCard,
  DollarSign,
  Users,
} from "lucide-react";
import type { IDashboardMetric } from "@/types/dashboard";

interface IDashboardMetricIconProps {
  icon: IDashboardMetric["icon"];
}

export function DashboardMetricIcon({ icon }: IDashboardMetricIconProps) {
  switch (icon) {
    case "dollar-sign":
      return <DollarSign className="h-5 w-5" aria-hidden="true" />;
    case "calendar-range":
      return <CalendarRange className="h-5 w-5" aria-hidden="true" />;
    case "users":
      return <Users className="h-5 w-5" aria-hidden="true" />;
    case "credit-card":
      return <CreditCard className="h-5 w-5" aria-hidden="true" />;
    default:
      return null;
  }
}
