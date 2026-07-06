import type { EUserRole } from "@/types/auth";

export type TNavigationIcon =
  | "layout-dashboard"
  | "users"
  | "credit-card"
  | "dollar-sign"
  | "chart-no-axes-combined"
  | "file-text"
  | "settings";

export interface INavigationItem {
  id: string;
  label: string;
  href: string;
  icon: TNavigationIcon;
  allowedRoles: EUserRole[];
}
