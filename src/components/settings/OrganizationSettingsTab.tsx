"use client";

import type { UseFormReturn } from "react-hook-form";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import type { TOrganizationSettingsForm } from "@/lib/validations/settings";

interface IOrganizationSettingsTabProps {
  form: UseFormReturn<TOrganizationSettingsForm>;
  isSaving: boolean;
  onSubmit: () => void;
}

export function OrganizationSettingsTab({
  form,
  isSaving,
  onSubmit,
}: IOrganizationSettingsTabProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Organization</CardTitle>
        <p className="text-caption text-muted-foreground">
          Manage workspace profile and company information.
        </p>
      </CardHeader>
      <CardContent>
        <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid gap-4 md:grid-cols-2">
            <Input
              label="Company Name"
              error={form.formState.errors.companyName?.message}
              {...form.register("companyName")}
            />
            <Input
              label="Website"
              error={form.formState.errors.website?.message}
              {...form.register("website")}
            />
            <Input
              label="Industry"
              error={form.formState.errors.industry?.message}
              {...form.register("industry")}
            />
            <Input
              label="Company Size"
              error={form.formState.errors.companySize?.message}
              {...form.register("companySize")}
            />
            <Input
              label="Country"
              error={form.formState.errors.country?.message}
              {...form.register("country")}
            />
          </div>
          <Button type="submit" disabled={isSaving}>
            {isSaving ? "Saving..." : "Save Organization"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
