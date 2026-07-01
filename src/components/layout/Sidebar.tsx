"use client";

import { ChevronLeft, ChevronRight, TrendingUp, X } from "lucide-react";
import { NAVIGATION_ITEMS, APP_NAME } from "@/constants/navigation";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import { SidebarNavItem } from "@/components/layout/SidebarNavItem";

interface ISidebarProps {
  collapsed: boolean;
  mobileOpen: boolean;
  onToggleCollapse: () => void;
  onCloseMobile: () => void;
}

export function Sidebar({
  collapsed,
  mobileOpen,
  onToggleCollapse,
  onCloseMobile,
}: ISidebarProps) {
  return (
    <>
      {mobileOpen ? (
        <button
          type="button"
          aria-label="Close navigation menu"
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={onCloseMobile}
        />
      ) : null}

      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex flex-col border-r border-border bg-sidebar",
          "transition-all duration-300 ease-in-out",
          collapsed ? "w-[72px]" : "w-64",
          mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
        )}
      >
        <div
          className={cn(
            "flex h-16 items-center border-b border-border px-4",
            collapsed ? "justify-center" : "justify-between",
          )}
        >
          <div
            className={cn(
              "flex items-center gap-2 overflow-hidden",
              collapsed && "justify-center",
            )}
          >
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <TrendingUp className="h-4 w-4" aria-hidden="true" />
            </div>
            {!collapsed ? (
              <span className="truncate text-lg font-semibold text-foreground">
                {APP_NAME}
              </span>
            ) : null}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-label="Close sidebar"
            onClick={onCloseMobile}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        <nav
          aria-label="Main navigation"
          className="flex-1 space-y-1 overflow-y-auto p-3"
        >
          {NAVIGATION_ITEMS.map((item) => (
            <SidebarNavItem
              key={item.id}
              item={item}
              collapsed={collapsed}
              onNavigate={onCloseMobile}
            />
          ))}
        </nav>

        <div className="hidden border-t border-border p-3 lg:block">
          <Button
            variant="ghost"
            size={collapsed ? "icon" : "md"}
            className={cn("w-full", !collapsed && "justify-start")}
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            onClick={onToggleCollapse}
          >
            {collapsed ? (
              <ChevronRight className="h-4 w-4" />
            ) : (
              <>
                <ChevronLeft className="h-4 w-4" />
                <span>Collapse</span>
              </>
            )}
          </Button>
        </div>
      </aside>
    </>
  );
}
