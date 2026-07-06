"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { cn } from "@/lib/cn";
import type { TThemePreference } from "@/types/settings";

interface IAppearanceSettingsTabProps {
  theme: TThemePreference;
  isSaving: boolean;
  onThemeChange: (theme: TThemePreference) => void;
}

const THEME_OPTIONS = [
  { value: "light", label: "Light", icon: Sun },
  { value: "dark", label: "Dark", icon: Moon },
  { value: "system", label: "System", icon: Monitor },
] as const;

export function AppearanceSettingsTab({
  theme,
  isSaving,
  onThemeChange,
}: IAppearanceSettingsTabProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Appearance</CardTitle>
        <p className="text-caption text-muted-foreground">
          Choose how RevenueIQ should look on this device.
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-3 md:grid-cols-3">
          {THEME_OPTIONS.map(({ value, label, icon: Icon }) => (
            <button
              key={value}
              type="button"
              className={cn(
                "rounded-xl border border-border p-4 text-left transition-colors",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                theme === value
                  ? "border-primary bg-primary/10"
                  : "hover:bg-accent",
              )}
              onClick={() => onThemeChange(value)}
            >
              <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
              <p className="mt-3 text-sm font-medium text-foreground">{label}</p>
              <p className="mt-1 text-caption text-muted-foreground">
                {value === "system" ? "Follow OS setting" : `Use ${label.toLowerCase()} mode`}
              </p>
            </button>
          ))}
        </div>
        <Button disabled={isSaving}>{isSaving ? "Saving..." : "Saved"}</Button>
      </CardContent>
    </Card>
  );
}
