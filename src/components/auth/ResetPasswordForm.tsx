"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Toast } from "@/components/ui/Toast";
import {
  resetPasswordSchema,
  type TResetPasswordForm,
} from "@/lib/validations/auth";

export function ResetPasswordForm() {
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const form = useForm<TResetPasswordForm>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit() {
    setLoading(true);
    window.setTimeout(() => {
      setLoading(false);
      setSuccessMessage("Password updated. You can now sign in.");
    }, 600);
  }

  return (
    <>
      <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
        <Input
          label="New Password"
          type="password"
          error={form.formState.errors.password?.message}
          {...form.register("password")}
        />
        <Input
          label="Confirm Password"
          type="password"
          error={form.formState.errors.confirmPassword?.message}
          {...form.register("confirmPassword")}
        />
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Updating..." : "Reset Password"}
        </Button>
        <Link href="/login" className="block text-center text-caption text-primary">
          Back to login
        </Link>
      </form>
      <Toast message={successMessage} />
    </>
  );
}
