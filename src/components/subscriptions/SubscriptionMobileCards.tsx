"use client";

import { Card, CardContent } from "@/components/ui/Card";
import { SubscriptionActionsMenu } from "@/components/subscriptions/SubscriptionActionsMenu";
import {
  SubscriptionPlanBadge,
  SubscriptionStatusBadge,
} from "@/components/subscriptions/SubscriptionBadges";
import { formatCurrency } from "@/utils/formatCurrency";
import { formatDate } from "@/utils/formatDate";
import type { ISubscription } from "@/types/subscription";

interface ISubscriptionMobileCardsProps {
  subscriptions: ISubscription[];
  onViewDetails: (subscription: ISubscription) => void;
}

export function SubscriptionMobileCards({
  subscriptions,
  onViewDetails,
}: ISubscriptionMobileCardsProps) {
  return (
    <div className="space-y-3 md:hidden">
      {subscriptions.map((subscription) => (
        <Card key={subscription.id}>
          <CardContent className="p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-medium text-foreground">
                  {subscription.customerName}
                </p>
                <p className="mt-1 text-caption text-muted-foreground">
                  Renews {formatDate(subscription.renewalDate)}
                </p>
              </div>
              <SubscriptionActionsMenu
                subscription={subscription}
                onViewDetails={onViewDetails}
              />
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 text-caption">
              <div>
                <p className="text-muted-foreground">Plan</p>
                <div className="mt-1">
                  <SubscriptionPlanBadge plan={subscription.plan} />
                </div>
              </div>
              <div>
                <p className="text-muted-foreground">Status</p>
                <div className="mt-1">
                  <SubscriptionStatusBadge status={subscription.status} />
                </div>
              </div>
              <div>
                <p className="text-muted-foreground">Billing</p>
                <p className="mt-1 font-medium text-foreground">
                  {subscription.billingCycle}
                </p>
              </div>
              <div>
                <p className="text-muted-foreground">Price</p>
                <p className="mt-1 font-medium text-foreground">
                  {formatCurrency(subscription.price)}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
