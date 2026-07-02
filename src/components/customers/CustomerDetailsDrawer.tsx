"use client";

import { Avatar } from "@/components/ui/Avatar";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/Drawer";
import { CustomerPlanBadge, CustomerStatusBadge } from "@/components/customers/CustomerBadges";
import { Badge } from "@/components/ui/Badge";
import { formatCurrency } from "@/utils/formatCurrency";
import { formatDate } from "@/utils/formatDate";
import { EPaymentStatus } from "@/types/payment";
import type { ICustomer } from "@/types/customer";
import type { IPayment } from "@/types/payment";

interface ICustomerDetailsDrawerProps {
  customer: ICustomer | null;
  payments: IPayment[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

function getPaymentVariant(status: EPaymentStatus) {
  switch (status) {
    case EPaymentStatus.PAID:
      return "success";
    case EPaymentStatus.PENDING:
      return "warning";
    case EPaymentStatus.FAILED:
      return "error";
    case EPaymentStatus.REFUNDED:
      return "outline";
    default:
      return "default";
  }
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

export function CustomerDetailsDrawer({
  customer,
  payments,
  open,
  onOpenChange,
}: ICustomerDetailsDrawerProps) {
  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent>
        {customer ? (
          <>
            <DrawerHeader>
              <div className="flex items-center gap-4">
                <Avatar
                  name={customer.fullName}
                  src={customer.avatar || undefined}
                  size="xl"
                />
                <div>
                  <DrawerTitle>{customer.fullName}</DrawerTitle>
                  <DrawerDescription>{customer.company}</DrawerDescription>
                </div>
              </div>
            </DrawerHeader>

            <DrawerBody>
              <section aria-label="Customer details">
                <DetailRow label="Email" value={customer.email} />
                <DetailRow label="Country" value={customer.country} />
                <DetailRow
                  label="Subscription Plan"
                  value={<CustomerPlanBadge plan={customer.plan} />}
                />
                <DetailRow
                  label="Monthly Revenue"
                  value={formatCurrency(customer.monthlyRevenue)}
                />
                <DetailRow
                  label="Joined Date"
                  value={formatDate(customer.joinedAt)}
                />
                <DetailRow
                  label="Subscription Status"
                  value={<CustomerStatusBadge status={customer.status} />}
                />
              </section>

              <section className="mt-8" aria-label="Recent payments">
                <h3 className="text-subheading text-foreground">
                  Recent Payments
                </h3>
                <div className="mt-4 space-y-3">
                  {payments.length > 0 ? (
                    payments.map((payment) => (
                      <div
                        key={payment.id}
                        className="rounded-lg border border-border p-3"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <p className="text-sm font-medium text-foreground">
                              {formatCurrency(payment.amount)}
                            </p>
                            <p className="text-caption text-muted-foreground">
                              {formatDate(payment.paidAt)}
                            </p>
                          </div>
                          <Badge variant={getPaymentVariant(payment.status)}>
                            {payment.status}
                          </Badge>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="rounded-lg border border-dashed border-border p-4 text-caption text-muted-foreground">
                      No recent payments found for this customer.
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
