"use client";

import { ChevronDown, LogOut, Settings, User } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Avatar } from "@/components/ui/Avatar";
import { cn } from "@/lib/cn";
import { useAuth } from "@/hooks/useAuth";

export function UserMenu() {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  function handleLogout() {
    logout();
    router.replace("/login");
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        aria-label="User menu"
        aria-expanded={open}
        className={cn(
          "flex items-center gap-2 rounded-lg px-2 py-1.5 transition-colors",
          "hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        )}
        onClick={() => setOpen((prev) => !prev)}
      >
        <Avatar name={user?.fullName ?? "User"} src={user?.avatar || undefined} size="sm" />
        <span className="hidden text-sm font-medium text-foreground md:block">
          {user?.fullName}
        </span>
        <ChevronDown className="hidden h-4 w-4 text-muted-foreground md:block" />
      </button>

      {open ? (
        <div
          role="menu"
          aria-label="User account menu"
          className="absolute right-0 mt-2 w-56 rounded-xl border border-border bg-popover p-1 shadow-lg"
        >
          <div className="border-b border-border px-3 py-2">
            <p className="text-sm font-medium text-foreground">{user?.fullName}</p>
            <p className="text-xs text-muted-foreground">{user?.email}</p>
            <p className="mt-1 text-xs font-medium text-primary">{user?.role}</p>
          </div>
          <Link
            href="/settings"
            role="menuitem"
            className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-foreground hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            onClick={() => setOpen(false)}
          >
            <User className="h-4 w-4" aria-hidden="true" />
            Profile
          </Link>
          <Link
            href="/settings"
            role="menuitem"
            className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-foreground hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            onClick={() => setOpen(false)}
          >
            <Settings className="h-4 w-4" aria-hidden="true" />
            Settings
          </Link>
          <button
            type="button"
            role="menuitem"
            className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-destructive hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            onClick={handleLogout}
          >
            <LogOut className="h-4 w-4" aria-hidden="true" />
            Sign out
          </button>
        </div>
      ) : null}
    </div>
  );
}
