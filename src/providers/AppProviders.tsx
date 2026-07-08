"use client";

import type { ReactNode } from "react";
import { ToastProvider } from "@/components/ui/Toast";
import { TooltipProvider } from "@/components/ui/Tooltip";
import { AuthProvider } from "@/providers/AuthProvider";
import { ThemeProvider } from "@/providers/ThemeProvider";

interface IAppProvidersProps {
  children: ReactNode;
}

export function AppProviders({ children }: IAppProvidersProps) {
  return (
    <ThemeProvider>
      <AuthProvider>
        <TooltipProvider delayDuration={300}>
          <ToastProvider>{children}</ToastProvider>
        </TooltipProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
