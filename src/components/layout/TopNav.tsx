"use client";

import { Bell, ChevronDown, LogOut, Menu, Search, Settings, User } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { MOCK_NOTIFICATIONS } from "@/constants/mock-data";
import { cn } from "@/lib/cn";
import { Avatar } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { useAuth } from "@/hooks/useAuth";
import { ENotificationType } from "@/types/notification";

interface ITopNavProps {
  onOpenMobileSidebar: () => void;
}

const notificationVariantMap: Record<
  ENotificationType,
  "default" | "success" | "warning" | "error"
> = {
  [ENotificationType.INFO]: "default",
  [ENotificationType.SUCCESS]: "success",
  [ENotificationType.WARNING]: "warning",
  [ENotificationType.ERROR]: "error",
};

export function TopNav({ onOpenMobileSidebar }: ITopNavProps) {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const notificationsRef = useRef<HTMLDivElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);

  const unreadCount = MOCK_NOTIFICATIONS.filter((n) => !n.read).length;

  function handleLogout() {
    logout();
    router.replace("/login");
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        notificationsRef.current &&
        !notificationsRef.current.contains(event.target as Node)
      ) {
        setNotificationsOpen(false);
      }
      if (
        userMenuRef.current &&
        !userMenuRef.current.contains(event.target as Node)
      ) {
        setUserMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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

      <div className="relative hidden max-w-md flex-1 sm:block">
        <Search
          className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
          aria-hidden="true"
        />
        <Input
          type="search"
          name="global-search"
          placeholder="Search customers, subscriptions..."
          aria-label="Search customers and subscriptions"
          className="pl-9"
        />
      </div>

      <div className="ml-auto flex items-center gap-1 sm:gap-2">
        <ThemeToggle />

        <div ref={notificationsRef} className="relative">
          <Button
            variant="ghost"
            size="icon"
            aria-label={`Notifications${unreadCount > 0 ? `, ${unreadCount} unread` : ""}`}
            aria-expanded={notificationsOpen}
            onClick={() => {
              setNotificationsOpen((prev) => !prev);
              setUserMenuOpen(false);
            }}
          >
            <Bell className="h-4 w-4" />
            {unreadCount > 0 ? (
              <span className="absolute right-1.5 top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-destructive text-[10px] font-medium text-destructive-foreground">
                {unreadCount}
              </span>
            ) : null}
          </Button>

          {notificationsOpen ? (
            <div
              role="menu"
              aria-label="Notifications"
              className="absolute right-0 mt-2 w-80 rounded-xl border border-border bg-popover p-2 shadow-lg"
            >
              <p className="px-2 py-1.5 text-sm font-medium text-foreground">
                Notifications
              </p>
              <ul className="max-h-72 space-y-1 overflow-y-auto">
                {MOCK_NOTIFICATIONS.map((notification) => (
                  <li key={notification.id}>
                    <div className="rounded-lg px-2 py-2 hover:bg-accent">
                      <div className="flex items-start justify-between gap-2">
                        <p className="text-sm font-medium text-foreground">
                          {notification.title}
                        </p>
                        <Badge
                          variant={notificationVariantMap[notification.type]}
                        >
                          {notification.type}
                        </Badge>
                      </div>
                      <p className="mt-0.5 text-xs text-muted-foreground">
                        {notification.message}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>

        <div ref={userMenuRef} className="relative">
          <button
            type="button"
            aria-label="User menu"
            aria-expanded={userMenuOpen}
            className={cn(
              "flex items-center gap-2 rounded-lg px-2 py-1.5 transition-colors",
              "hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
            )}
            onClick={() => {
              setUserMenuOpen((prev) => !prev);
              setNotificationsOpen(false);
            }}
          >
            <Avatar name={user?.fullName ?? "User"} src={user?.avatar || undefined} size="sm" />
            <span className="hidden text-sm font-medium text-foreground md:block">
              {user?.fullName}
            </span>
            <ChevronDown className="hidden h-4 w-4 text-muted-foreground md:block" />
          </button>

          {userMenuOpen ? (
            <div
              role="menu"
              aria-label="User account menu"
              className="absolute right-0 mt-2 w-56 rounded-xl border border-border bg-popover p-1 shadow-lg"
            >
              <div className="border-b border-border px-3 py-2">
                <p className="text-sm font-medium text-foreground">
                  {user?.fullName}
                </p>
                <p className="text-xs text-muted-foreground">
                  {user?.email}
                </p>
                <p className="mt-1 text-xs font-medium text-primary">
                  {user?.role}
                </p>
              </div>
              <Link
                href="/settings"
                role="menuitem"
                className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-foreground hover:bg-accent"
              >
                <User className="h-4 w-4" />
                Profile
              </Link>
              <Link
                href="/settings"
                role="menuitem"
                className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-foreground hover:bg-accent"
              >
                <Settings className="h-4 w-4" />
                Settings
              </Link>
              <button
                type="button"
                role="menuitem"
                className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-destructive hover:bg-accent"
                onClick={handleLogout}
              >
                <LogOut className="h-4 w-4" />
                Sign out
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
