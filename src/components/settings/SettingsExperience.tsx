"use client";

import { AppearanceSettingsTab } from "@/components/settings/AppearanceSettingsTab";
import { BillingSettingsTab } from "@/components/settings/BillingSettingsTab";
import { NotificationsSettingsTab } from "@/components/settings/NotificationsSettingsTab";
import { OrganizationSettingsTab } from "@/components/settings/OrganizationSettingsTab";
import { ProfileSettingsTab } from "@/components/settings/ProfileSettingsTab";
import { SecuritySettingsTab } from "@/components/settings/SecuritySettingsTab";
import { SettingsHeader } from "@/components/settings/SettingsHeader";
import { SettingsTabs } from "@/components/settings/SettingsTabs";
import { SettingsToast } from "@/components/settings/SettingsToast";
import { useAuth } from "@/hooks/useAuth";
import { useSettingsExperience } from "@/hooks/useSettingsExperience";
import { canAccessBilling } from "@/services/authService";
import type { ISettingsData } from "@/types/settings";

interface ISettingsExperienceProps {
  settings: ISettingsData;
}

export function SettingsExperience({ settings }: ISettingsExperienceProps) {
  const { user } = useAuth();
  const state = useSettingsExperience(settings);
  const showBilling = user ? canAccessBilling(user.role) : false;

  return (
    <div className="space-y-6">
      <SettingsHeader />
      <SettingsTabs
        activeTab={state.activeTab}
        showBilling={showBilling}
        onTabChange={state.setActiveTab}
      />

      {state.activeTab === "profile" ? (
        <ProfileSettingsTab
          form={state.profileForm}
          isSaving={state.savingSection === "profile"}
          onSubmit={state.saveProfile}
        />
      ) : null}

      {state.activeTab === "organization" ? (
        <OrganizationSettingsTab
          form={state.organizationForm}
          isSaving={state.savingSection === "organization"}
          onSubmit={state.saveOrganization}
        />
      ) : null}

      {state.activeTab === "appearance" ? (
        <AppearanceSettingsTab
          theme={state.theme}
          isSaving={state.savingSection === "appearance"}
          onThemeChange={state.updateTheme}
        />
      ) : null}

      {state.activeTab === "notifications" ? (
        <NotificationsSettingsTab
          notifications={state.notifications}
          isSaving={state.savingSection === "notifications"}
          onToggle={state.toggleNotification}
        />
      ) : null}

      {state.activeTab === "security" ? (
        <SecuritySettingsTab
          security={settings.security}
          isSaving={state.savingSection === "security"}
          onMockSave={state.simulateSave}
        />
      ) : null}

      {state.activeTab === "billing" && showBilling ? (
        <BillingSettingsTab billing={settings.billing} />
      ) : null}

      <SettingsToast message={state.successMessage} />
    </div>
  );
}
