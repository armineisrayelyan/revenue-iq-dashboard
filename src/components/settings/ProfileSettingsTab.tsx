"use client";

import type { UseFormReturn } from "react-hook-form";
import { Avatar } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import type { TProfileSettingsForm } from "@/lib/validations/settings";

interface IProfileSettingsTabProps {
  form: UseFormReturn<TProfileSettingsForm>;
  isSaving: boolean;
  onSubmit: () => void;
}

export function ProfileSettingsTab({
  form,
  isSaving,
  onSubmit,
}: IProfileSettingsTabProps) {
  const values = form.watch();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Profile</CardTitle>
        <p className="text-caption text-muted-foreground">
          Update how your identity appears across RevenueIQ.
        </p>
      </CardHeader>
      <CardContent>
        <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex items-center gap-4">
            <Avatar name={values.fullName} src={values.avatar || undefined} size="xl" />
            <div>
              <Button variant="outline" size="sm">Upload Avatar</Button>
              <p className="mt-1 text-caption text-muted-foreground">
                PNG or JPG up to 2MB. UI only.
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Input
              label="Full Name"
              error={form.formState.errors.fullName?.message}
              {...form.register("fullName")}
            />
            <Input
              label="Email"
              type="email"
              error={form.formState.errors.email?.message}
              {...form.register("email")}
            />
            <Input
              label="Job Title"
              error={form.formState.errors.jobTitle?.message}
              {...form.register("jobTitle")}
            />
            <Input
              label="Timezone"
              error={form.formState.errors.timezone?.message}
              {...form.register("timezone")}
            />
          </div>

          <Textarea
            label="Bio"
            error={form.formState.errors.bio?.message}
            {...form.register("bio")}
          />

          <Button type="submit" disabled={isSaving}>
            {isSaving ? "Saving..." : "Save Profile"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
