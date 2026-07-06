"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Toast } from "@/components/ui/Toast";
import {
  forgotPasswordSchema,
  type TForgotPasswordForm,
} from "@/lib/validations/auth";

export function ForgotPasswordForm() {
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const form = useForm<TForgotPasswordForm>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: { email: "" },
  });

  function onSubmit() {
    setLoading(true);
    window.setTimeout(() => {
      setLoading(false);
      setSuccessMessage("Password reset instructions sent.");
    }, 600);
  }

  return (
    <>
      <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
        <Input
          label="Email"
          type="email"
          placeholder="you@company.com"
          error={form.formState.errors.email?.message}
          {...form.register("email")}
        />
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Sending..." : "Send Reset Link"}
        </Button>
        <Link href="/login" className="block text-center text-caption text-primary">
          Back to login
        </Link>
      </form>
      <Toast message={successMessage} />
    </>
  );
}
