import type { INavigationItem } from "@/types/navigation";

export const NAVIGATION_ITEMS: INavigationItem[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    href: "/",
    icon: "layout-dashboard",
  },
  {
    id: "customers",
    label: "Customers",
    href: "/customers",
    icon: "users",
  },
  {
    id: "subscriptions",
    label: "Subscriptions",
    href: "/subscriptions",
    icon: "credit-card",
  },
  {
    id: "revenue",
    label: "Revenue",
    href: "/revenue",
    icon: "dollar-sign",
  },
  {
    id: "reports",
    label: "Reports",
    href: "/reports",
    icon: "file-text",
  },
  {
    id: "settings",
    label: "Settings",
    href: "/settings",
    icon: "settings",
  },
];

export const APP_NAME = "RevenueIQ";

export const SIDEBAR_WIDTH_EXPANDED = 256;
export const SIDEBAR_WIDTH_COLLAPSED = 72;
