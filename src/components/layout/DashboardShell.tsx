"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CommandPalette } from "@/components/layout/CommandPalette";
import { Sidebar } from "@/components/layout/Sidebar";
import { TopNav } from "@/components/layout/TopNav";

interface IDashboardShellProps {
  children: React.ReactNode;
}

export function DashboardShell({ children }: IDashboardShellProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  useEffect(() => {
    function handleShortcut(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setCommandPaletteOpen(true);
      }
    }

    document.addEventListener("keydown", handleShortcut);
    return () => document.removeEventListener("keydown", handleShortcut);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Sidebar
        collapsed={sidebarCollapsed}
        mobileOpen={mobileSidebarOpen}
        onToggleCollapse={() => setSidebarCollapsed((prev) => !prev)}
        onCloseMobile={() => setMobileSidebarOpen(false)}
      />

      <div
        className={cn(
          "flex min-h-screen flex-col transition-all duration-300",
          sidebarCollapsed ? "lg:pl-[72px]" : "lg:pl-64",
        )}
      >
        <TopNav
          onOpenMobileSidebar={() => setMobileSidebarOpen(true)}
          onOpenCommandPalette={() => setCommandPaletteOpen(true)}
        />

        <main className="flex-1 overflow-x-hidden p-4 lg:p-6">
          <Breadcrumbs />
          {children}
        </main>
      </div>
      <CommandPalette
        open={commandPaletteOpen}
        onOpenChange={setCommandPaletteOpen}
      />
    </div>
  );
}
