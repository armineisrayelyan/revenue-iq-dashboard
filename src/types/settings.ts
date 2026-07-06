export type TSettingsTab =
  | "profile"
  | "organization"
  | "appearance"
  | "notifications"
  | "security"
  | "billing";

export type TThemePreference = "light" | "dark" | "system";

export interface IProfileSettings {
  avatar: string;
  fullName: string;
  email: string;
  jobTitle: string;
  bio: string;
  timezone: string;
}

export interface IOrganizationSettings {
  companyName: string;
  website: string;
  industry: string;
  companySize: string;
  country: string;
}

export interface INotificationSettings {
  emailNotifications: boolean;
  paymentAlerts: boolean;
  weeklyReports: boolean;
  securityAlerts: boolean;
  productUpdates: boolean;
}

export interface ISecuritySession {
  id: string;
  device: string;
  location: string;
  lastActive: string;
  current: boolean;
}

export interface ISecuritySettings {
  twoFactorEnabled: boolean;
  sessions: ISecuritySession[];
}

export interface IBillingSettings {
  currentPlan: string;
  billingCycle: string;
  nextInvoiceDate: string;
  paymentMethod: string;
}

export interface ISettingsData {
  profile: IProfileSettings;
  organization: IOrganizationSettings;
  notifications: INotificationSettings;
  security: ISecuritySettings;
  billing: IBillingSettings;
}
