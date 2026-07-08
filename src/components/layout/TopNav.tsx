"use client";

import { Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { NotificationsCenter } from "@/components/layout/NotificationsCenter";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { UserMenu } from "@/components/layout/UserMenu";

interface ITopNavProps {
  onOpenMobileSidebar: () => void;
  onOpenCommandPalette: () => void;
}

export function TopNav({
  onOpenMobileSidebar,
  onOpenCommandPalette,
}: ITopNavProps) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b border-border bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/60 lg:px-6">
      <Button
        variant="ghost"
        size="icon"
        className="lg:hidden"
        aria-label="Open navigation menu"
        onClick={onOpenMobileSidebar}
      >
        <Menu className="h-5 w-5" />
      </Button>

      <button
        type="button"
        className="relative hidden h-10 max-w-md flex-1 rounded-lg border border-input bg-background text-left text-sm text-muted-foreground transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:block"
        aria-label="Open global search"
        onClick={onOpenCommandPalette}
      >
        <Search
          className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
          aria-hidden="true"
        />
        <span className="block truncate py-2 pl-9 pr-24">
          Search customers, subscriptions...
        </span>
        <kbd className="absolute right-3 top-1/2 hidden -translate-y-1/2 rounded border border-border bg-muted px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground md:inline-flex">
          Cmd K
        </kbd>
      </button>

      <Button
        variant="ghost"
        size="icon"
        className="sm:hidden"
        aria-label="Open global search"
        onClick={onOpenCommandPalette}
      >
        <Search className="h-4 w-4" aria-hidden="true" />
      </Button>

      <div className="ml-auto flex items-center gap-1 sm:gap-2">
        <ThemeToggle />
        <NotificationsCenter />
        <UserMenu />
      </div>
    </header>
  );
}
