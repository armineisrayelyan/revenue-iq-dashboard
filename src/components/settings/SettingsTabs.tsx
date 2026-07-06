"use client";

import { cn } from "@/lib/cn";
import type { TSettingsTab } from "@/types/settings";

interface ISettingsTabsProps {
  activeTab: TSettingsTab;
  onTabChange: (tab: TSettingsTab) => void;
}

const SETTINGS_TABS: { id: TSettingsTab; label: string }[] = [
  { id: "profile", label: "Profile" },
  { id: "organization", label: "Organization" },
  { id: "appearance", label: "Appearance" },
  { id: "notifications", label: "Notifications" },
  { id: "security", label: "Security" },
  { id: "billing", label: "Billing" },
];

export function SettingsTabs({ activeTab, onTabChange }: ISettingsTabsProps) {
  return (
    <nav
      aria-label="Settings sections"
      className="flex gap-1 overflow-x-auto rounded-xl border border-border bg-card p-1"
    >
      {SETTINGS_TABS.map((tab) => (
        <button
          key={tab.id}
          type="button"
          aria-current={activeTab === tab.id ? "page" : undefined}
          className={cn(
            "whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium transition-colors",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
            activeTab === tab.id
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:bg-accent hover:text-foreground",
          )}
          onClick={() => onTabChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  );
}
