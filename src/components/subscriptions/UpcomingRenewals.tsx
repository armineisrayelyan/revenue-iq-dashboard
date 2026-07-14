import { CalendarClock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { SubscriptionPlanBadge } from "@/components/subscriptions/SubscriptionBadges";
import { formatCurrency } from "@/utils/formatCurrency";
import { formatDate } from "@/utils/formatDate";
import type { ISubscription } from "@/types/subscription";

interface IUpcomingRenewalsProps {
  subscriptions: ISubscription[];
}

export function UpcomingRenewals({ subscriptions }: IUpcomingRenewalsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Renewals</CardTitle>
        <p className="text-caption text-muted-foreground">
          Subscriptions renewing in the next 30 days.
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {subscriptions.map((subscription) => (
            <div
              key={subscription.id}
              className="flex items-center justify-between gap-3 rounded-lg border border-border p-3"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-primary/10 p-2 text-primary">
                  <CalendarClock className="h-4 w-4" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {subscription.customerName}
                  </p>
                  <p className="text-caption text-muted-foreground">
                    {formatDate(subscription.renewalDate)}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <SubscriptionPlanBadge plan={subscription.plan} />
                <p className="mt-1 text-caption text-muted-foreground">
                  {formatCurrency(subscription.price)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
