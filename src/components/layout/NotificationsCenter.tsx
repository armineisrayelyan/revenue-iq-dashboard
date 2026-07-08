"use client";

import {
  AlertCircle,
  Bell,
  CheckCircle2,
  Info,
  TriangleAlert,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  getNotifications,
  getUnreadNotificationCount,
} from "@/services/notificationService";
import { ENotificationType } from "@/types/notification";

const notificationIconMap = {
  [ENotificationType.INFO]: Info,
  [ENotificationType.SUCCESS]: CheckCircle2,
  [ENotificationType.WARNING]: TriangleAlert,
  [ENotificationType.ERROR]: AlertCircle,
};

const notificationVariantMap: Record<
  ENotificationType,
  "default" | "success" | "warning" | "error"
> = {
  [ENotificationType.INFO]: "default",
  [ENotificationType.SUCCESS]: "success",
  [ENotificationType.WARNING]: "warning",
  [ENotificationType.ERROR]: "error",
};

function formatTimestamp(value: string): string {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(value));
}

export function NotificationsCenter() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const notifications = getNotifications();
  const unreadCount = getUnreadNotificationCount(notifications);

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
      <Button
        variant="ghost"
        size="icon"
        aria-label={`Notifications${unreadCount ? `, ${unreadCount} unread` : ""}`}
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
      >
        <Bell className="h-4 w-4" aria-hidden="true" />
        {unreadCount ? (
          <span className="absolute right-1.5 top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-destructive text-[10px] font-medium text-destructive-foreground">
            {unreadCount}
          </span>
        ) : null}
      </Button>

      {open ? (
        <div
          role="menu"
          aria-label="Notifications"
          className="absolute right-0 mt-2 w-[min(20rem,calc(100vw-2rem))] rounded-xl border border-border bg-popover p-2 shadow-lg"
        >
          <div className="flex items-center justify-between px-2 py-1.5">
            <p className="text-sm font-medium text-foreground">Notifications</p>
            <span className="text-xs text-muted-foreground">{unreadCount} unread</span>
          </div>
          <ul className="max-h-80 space-y-1 overflow-y-auto">
            {notifications.map((notification) => {
              const Icon = notificationIconMap[notification.type];
              return (
                <li key={notification.id}>
                  <button
                    type="button"
                    role="menuitem"
                    className="w-full rounded-lg px-2 py-2 text-left transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    onClick={() => setOpen(false)}
                  >
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 rounded-lg bg-muted p-1.5 text-muted-foreground">
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="flex items-start justify-between gap-2">
                          <span className="text-sm font-medium text-foreground">
                            {notification.title}
                          </span>
                          <Badge variant={notificationVariantMap[notification.type]}>
                            {notification.type}
                          </Badge>
                        </span>
                        <span className="mt-0.5 block text-xs text-muted-foreground">
                          {notification.message}
                        </span>
                        <span className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                          {!notification.read ? (
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                          ) : null}
                          {formatTimestamp(notification.createdAt)}
                        </span>
                      </span>
                    </div>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
