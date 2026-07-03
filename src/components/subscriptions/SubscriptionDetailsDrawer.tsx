"use client";

import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/Drawer";
import { Badge } from "@/components/ui/Badge";
import { RecentPaymentsTable } from "@/components/tables/RecentPaymentsTable";
import {
  SubscriptionPlanBadge,
  SubscriptionStatusBadge,
} from "@/components/subscriptions/SubscriptionBadges";
import { formatCurrency } from "@/utils/formatCurrency";
import { formatDate } from "@/utils/formatDate";
import type {
  ISubscription,
  ISubscriptionInvoice,
} from "@/types/subscription";
import type { IPayment } from "@/types/payment";

interface ISubscriptionDetailsDrawerProps {
  subscription: ISubscription | null;
  invoices: ISubscriptionInvoice[];
  payments: IPayment[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

function DetailRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-border py-3">
      <span className="text-caption text-muted-foreground">{label}</span>
      <span className="text-right text-sm font-medium text-foreground">
        {value}
      </span>
    </div>
  );
}

export function SubscriptionDetailsDrawer({
  subscription,
  invoices,
  payments,
  open,
  onOpenChange,
}: ISubscriptionDetailsDrawerProps) {
  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="max-w-xl">
        {subscription ? (
          <>
            <DrawerHeader>
              <DrawerTitle>{subscription.customerName}</DrawerTitle>
              <DrawerDescription>
                Billing and subscription details for this account.
              </DrawerDescription>
            </DrawerHeader>

            <DrawerBody>
              <section aria-label="Subscription details">
                <DetailRow label="Customer" value={subscription.customerName} />
                <DetailRow
                  label="Plan"
                  value={<SubscriptionPlanBadge plan={subscription.plan} />}
                />
                <DetailRow
                  label="Billing Cycle"
                  value={subscription.billingCycle}
                />
                <DetailRow
                  label="Start Date"
                  value={formatDate(subscription.startDate)}
                />
                <DetailRow
                  label="Renewal Date"
                  value={formatDate(subscription.renewalDate)}
                />
                <DetailRow
                  label="Price"
                  value={formatCurrency(subscription.price)}
                />
                <DetailRow
                  label="Current Status"
                  value={
                    <SubscriptionStatusBadge status={subscription.status} />
                  }
                />
              </section>

              <section className="mt-8" aria-label="Recent invoices">
                <h3 className="text-subheading text-foreground">
                  Recent Invoices
                </h3>
                <div className="mt-4 space-y-3">
                  {invoices.length > 0 ? (
                    invoices.map((invoice) => (
                      <div
                        key={invoice.id}
                        className="flex items-center justify-between gap-3 rounded-lg border border-border p-3"
                      >
                        <div>
                          <p className="text-sm font-medium text-foreground">
                            {formatCurrency(invoice.amount)}
                          </p>
                          <p className="text-caption text-muted-foreground">
                            {formatDate(invoice.issuedAt)}
                          </p>
                        </div>
                        <Badge variant={invoice.status === "paid" ? "success" : "warning"}>
                          {invoice.status}
                        </Badge>
                      </div>
                    ))
                  ) : (
                    <p className="rounded-lg border border-dashed border-border p-4 text-caption text-muted-foreground">
                      No recent invoices found.
                    </p>
                  )}
                </div>
              </section>

              <section className="mt-8" aria-label="Payment history">
                <h3 className="text-subheading text-foreground">
                  Payment History
                </h3>
                <div className="mt-4">
                  {payments.length > 0 ? (
                    <RecentPaymentsTable payments={payments} />
                  ) : (
                    <p className="rounded-lg border border-dashed border-border p-4 text-caption text-muted-foreground">
                      No payment history found.
                    </p>
                  )}
                </div>
              </section>
            </DrawerBody>
          </>
        ) : null}
      </DrawerContent>
    </Drawer>
  );
}
