import type { Metadata } from "next";
import { FeaturePage } from "@/components/dashboard/FeaturePage";

export const metadata: Metadata = {
  title: "Settings",
};

export default function SettingsPage() {
  return (
    <FeaturePage
      title="Settings"
      description="Configure your account, team, and application preferences."
      emptyTitle="Settings panel coming soon"
      emptyDescription="Account settings, integrations, and team management will live here."
    />
  );
}
