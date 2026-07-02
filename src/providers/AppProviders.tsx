"use client";

import type { ReactNode } from "react";
import { TooltipProvider } from "@/components/ui/Tooltip";
import { ThemeProvider } from "@/providers/ThemeProvider";

interface IAppProvidersProps {
  children: ReactNode;
}

export function AppProviders({ children }: IAppProvidersProps) {
  return (
    <ThemeProvider>
      <TooltipProvider delayDuration={300}>{children}</TooltipProvider>
    </ThemeProvider>
  );
}
