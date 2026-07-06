"use client";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Switch } from "@/components/ui/Switch";
import type { ISecuritySettings } from "@/types/settings";

interface ISecuritySettingsTabProps {
  security: ISecuritySettings;
  isSaving: boolean;
  onMockSave: (section: string, message: string) => void;
}

export function SecuritySettingsTab({
  security,
  isSaving,
  onMockSave,
}: ISecuritySettingsTabProps) {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Change Password</CardTitle>
          <p className="text-caption text-muted-foreground">
            Update your password using a strong, unique credential.
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Input label="Current Password" type="password" name="current-password" />
            <Input label="New Password" type="password" name="new-password" />
          </div>
          <Button
            disabled={isSaving}
            onClick={() => onMockSave("security", "Password updated.")}
          >
            {isSaving ? "Saving..." : "Update Password"}
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Two-Factor Authentication</CardTitle>
        </CardHeader>
        <CardContent>
          <Switch
            checked={security.twoFactorEnabled}
            label="Two-factor authentication"
            description="Require a second verification step when signing in."
            onCheckedChange={() =>
              onMockSave("security", "Two-factor preference saved.")
            }
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Active Sessions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {security.sessions.map((session) => (
            <div
              key={session.id}
              className="flex items-center justify-between gap-4 rounded-lg border border-border p-4"
            >
              <div>
                <p className="text-sm font-medium text-foreground">
                  {session.device}
                </p>
                <p className="text-caption text-muted-foreground">
                  {session.location} · {session.lastActive}
                </p>
              </div>
              {session.current ? <Badge variant="success">Current</Badge> : null}
            </div>
          ))}
          <Button
            variant="destructive"
            onClick={() => onMockSave("security", "All other devices signed out.")}
          >
            Sign Out of All Devices
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
