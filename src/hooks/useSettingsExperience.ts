"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useTheme } from "next-themes";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/Toast";
import {
  organizationSettingsSchema,
  profileSettingsSchema,
  type TOrganizationSettingsForm,
  type TProfileSettingsForm,
} from "@/lib/validations/settings";
import type {
  INotificationSettings,
  ISettingsData,
  TSettingsTab,
  TThemePreference,
} from "@/types/settings";

export function useSettingsExperience(settings: ISettingsData) {
  const { setTheme, theme } = useTheme();
  const { showToast } = useToast();
  const [activeTab, setActiveTab] = useState<TSettingsTab>("profile");
  const [savingSection, setSavingSection] = useState<string | null>(null);
  const [notifications, setNotifications] =
    useState<INotificationSettings>(settings.notifications);

  const profileForm = useForm<TProfileSettingsForm>({
    resolver: zodResolver(profileSettingsSchema),
    defaultValues: settings.profile,
  });

  const organizationForm = useForm<TOrganizationSettingsForm>({
    resolver: zodResolver(organizationSettingsSchema),
    defaultValues: settings.organization,
  });

  function simulateSave(section: string, message: string) {
    setSavingSection(section);
    window.setTimeout(() => {
      setSavingSection(null);
      showToast(message, "success");
    }, 600);
  }

  function saveProfile() {
    simulateSave("profile", "Profile settings saved.");
  }

  function saveOrganization() {
    simulateSave("organization", "Organization settings saved.");
  }

  function toggleNotification(key: keyof INotificationSettings) {
    setNotifications((current) => ({
      ...current,
      [key]: !current[key],
    }));
    simulateSave("notifications", "Notification preferences saved.");
  }

  function updateTheme(nextTheme: TThemePreference) {
    setTheme(nextTheme);
    simulateSave("appearance", "Appearance preferences saved.");
  }

  return {
    activeTab,
    savingSection,
    profileForm,
    organizationForm,
    notifications,
    theme: (theme ?? "system") as TThemePreference,
    setActiveTab,
    saveProfile,
    saveOrganization,
    toggleNotification,
    updateTheme,
    simulateSave,
  };
}
