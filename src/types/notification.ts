export enum ENotificationType {
  INFO = "info",
  SUCCESS = "success",
  WARNING = "warning",
  ERROR = "error",
}

export interface INotification {
  id: string;
  title: string;
  message: string;
  type: ENotificationType;
  read: boolean;
  createdAt: string;
}
