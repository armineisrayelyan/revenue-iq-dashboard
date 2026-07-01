export type TNavigationIcon =
  | "layout-dashboard"
  | "users"
  | "credit-card"
  | "dollar-sign"
  | "file-text"
  | "settings";

export interface INavigationItem {
  id: string;
  label: string;
  href: string;
  icon: TNavigationIcon;
}
