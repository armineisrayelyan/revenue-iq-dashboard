import {
  Activity,
  CreditCard,
  LineChart,
  Receipt,
  Users,
} from "lucide-react";
import type { IReportTemplate } from "@/types/report";

interface IReportIconProps {
  icon: IReportTemplate["icon"];
  className?: string;
}

export function ReportIcon({ icon, className }: IReportIconProps) {
  switch (icon) {
    case "line-chart":
      return <LineChart className={className} aria-hidden="true" />;
    case "users":
      return <Users className={className} aria-hidden="true" />;
    case "credit-card":
      return <CreditCard className={className} aria-hidden="true" />;
    case "receipt":
      return <Receipt className={className} aria-hidden="true" />;
    case "activity":
      return <Activity className={className} aria-hidden="true" />;
    default:
      return null;
  }
}
