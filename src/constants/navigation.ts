import { EUserRole } from "@/types/auth";
import type { INavigationItem } from "@/types/navigation";

const ALL_ROLES = [EUserRole.ADMIN, EUserRole.MANAGER, EUserRole.VIEWER];
const EDITOR_ROLES = [EUserRole.ADMIN, EUserRole.MANAGER];

export const NAVIGATION_ITEMS: INavigationItem[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    href: "/",
    icon: "layout-dashboard",
    allowedRoles: ALL_ROLES,
  },
  {
    id: "customers",
    label: "Customers",
    href: "/customers",
    icon: "users",
    allowedRoles: EDITOR_ROLES,
  },
  {
    id: "subscriptions",
    label: "Subscriptions",
    href: "/subscriptions",
    icon: "credit-card",
    allowedRoles: EDITOR_ROLES,
  },
  {
    id: "analytics",
    label: "Analytics",
    href: "/analytics",
    icon: "chart-no-axes-combined",
    allowedRoles: EDITOR_ROLES,
  },
  {
    id: "reports",
    label: "Reports",
    href: "/reports",
    icon: "file-text",
    allowedRoles: EDITOR_ROLES,
  },
  {
    id: "settings",
    label: "Settings",
    href: "/settings",
    icon: "settings",
    allowedRoles: EDITOR_ROLES,
  },
];

export const APP_NAME = "RevenueIQ";

export const SIDEBAR_WIDTH_EXPANDED = 256;
export const SIDEBAR_WIDTH_COLLAPSED = 72;
