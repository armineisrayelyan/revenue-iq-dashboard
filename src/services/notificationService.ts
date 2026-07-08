import { MOCK_NOTIFICATIONS } from "@/constants/mock-data";
import type { INotification } from "@/types/notification";

export function getNotifications(): INotification[] {
  return MOCK_NOTIFICATIONS;
}

export function getUnreadNotificationCount(notifications: INotification[]): number {
  return notifications.filter((notification) => !notification.read).length;
}
