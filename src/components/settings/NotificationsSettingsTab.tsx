"use client";

import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Switch } from "@/components/ui/Switch";
import type { INotificationSettings } from "@/types/settings";

interface INotificationsSettingsTabProps {
  notifications: INotificationSettings;
  isSaving: boolean;
  onToggle: (key: keyof INotificationSettings) => void;
}

const NOTIFICATION_ITEMS: {
  key: keyof INotificationSettings;
  label: string;
  description: string;
}[] = [
  {
    key: "emailNotifications",
    label: "Email notifications",
    description: "Receive important account updates by email.",
  },
  {
    key: "paymentAlerts",
    label: "Payment alerts",
    description: "Notify when payments fail, succeed, or require review.",
  },
  {
    key: "weeklyReports",
    label: "Weekly reports",
    description: "Send weekly revenue summaries every Monday.",
  },
  {
    key: "securityAlerts",
    label: "Security alerts",
    description: "Get notified about sign-ins and security changes.",
  },
  {
    key: "productUpdates",
    label: "Product updates",
    description: "Receive updates about new RevenueIQ features.",
  },
];

export function NotificationsSettingsTab({
  notifications,
  isSaving,
  onToggle,
}: INotificationsSettingsTabProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <p className="text-caption text-muted-foreground">
          Configure which alerts and summaries RevenueIQ sends you.
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        {NOTIFICATION_ITEMS.map((item) => (
          <Switch
            key={item.key}
            checked={notifications[item.key]}
            label={item.label}
            description={item.description}
            onCheckedChange={() => onToggle(item.key)}
          />
        ))}
        <Button disabled={isSaving}>
          {isSaving ? "Saving..." : "Preferences Saved"}
        </Button>
      </CardContent>
    </Card>
  );
}
