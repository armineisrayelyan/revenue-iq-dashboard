import type { Metadata } from "next";
import { SettingsExperience } from "@/components/settings/SettingsExperience";
import { getSettingsData } from "@/services/settingsService";

export const metadata: Metadata = {
  title: "Settings",
};

export default function SettingsPage() {
  const settings = getSettingsData();

  return <SettingsExperience settings={settings} />;
}
