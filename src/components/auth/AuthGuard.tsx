"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { Spinner } from "@/components/ui/Spinner";
import { useAuth } from "@/hooks/useAuth";
import { canAccessDashboardPath } from "@/services/authService";

interface IAuthGuardProps {
  children: React.ReactNode;
}

export function AuthGuard({ children }: IAuthGuardProps) {
  const { user, loading } = useAuth();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (loading) {
      return;
    }

    if (!user) {
      router.replace("/login");
      return;
    }

    if (!canAccessDashboardPath(user.role, pathname)) {
      router.replace("/");
    }
  }, [loading, pathname, router, user]);

  if (loading || !user || !canAccessDashboardPath(user.role, pathname)) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <Spinner label="Checking authentication" />
      </div>
    );
  }

  return <>{children}</>;
}
