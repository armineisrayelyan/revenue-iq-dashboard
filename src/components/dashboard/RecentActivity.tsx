import { cn } from "@/lib/cn";
import type { IDashboardActivity } from "@/types/dashboard";

interface IRecentActivityProps {
  activity: IDashboardActivity[];
}

const toneClasses: Record<IDashboardActivity["tone"], string> = {
  success: "bg-success",
  info: "bg-info",
  warning: "bg-warning",
  destructive: "bg-destructive",
};

export function RecentActivity({ activity }: IRecentActivityProps) {
  return (
    <div className="space-y-5">
      {activity.map((item, index) => (
        <div key={item.id} className="relative flex gap-3">
          {index < activity.length - 1 ? (
            <span className="absolute left-[7px] top-5 h-full w-px bg-border" />
          ) : null}
          <span
            className={cn(
              "mt-1 h-3.5 w-3.5 shrink-0 rounded-full ring-4 ring-card",
              toneClasses[item.tone],
            )}
          />
          <div>
            <p className="text-sm font-medium text-foreground">{item.title}</p>
            <p className="mt-1 text-caption text-muted-foreground">
              {item.description}
            </p>
            <p className="mt-1 text-caption text-muted-foreground">
              {item.createdAt}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
