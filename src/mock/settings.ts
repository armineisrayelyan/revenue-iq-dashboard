import type { ISettingsData } from "@/types/settings";

export const SETTINGS_DATA: ISettingsData = {
  profile: {
    avatar: "",
    fullName: "Armine Israyelyan",
    email: "armine@revenueiq.com",
    jobTitle: "Founder & Revenue Lead",
    bio: "Building RevenueIQ to help SaaS teams understand revenue, customer health, and billing performance.",
    timezone: "Asia/Yerevan",
  },
  organization: {
    companyName: "RevenueIQ",
    website: "https://revenueiq.com",
    industry: "SaaS Analytics",
    companySize: "11-50",
    country: "Armenia",
  },
  notifications: {
    emailNotifications: true,
    paymentAlerts: true,
    weeklyReports: true,
    securityAlerts: true,
    productUpdates: false,
  },
  security: {
    twoFactorEnabled: true,
    sessions: [
      {
        id: "session_001",
        device: "MacBook Pro",
        location: "Yerevan, Armenia",
        lastActive: "Current session",
        current: true,
      },
      {
        id: "session_002",
        device: "iPhone 15",
        location: "Yerevan, Armenia",
        lastActive: "2 hours ago",
        current: false,
      },
      {
        id: "session_003",
        device: "Chrome on Windows",
        location: "Berlin, Germany",
        lastActive: "3 days ago",
        current: false,
      },
    ],
  },
  billing: {
    currentPlan: "Enterprise",
    billingCycle: "Annual",
    nextInvoiceDate: "2026-08-01",
    paymentMethod: "Visa ending 4242",
  },
};
