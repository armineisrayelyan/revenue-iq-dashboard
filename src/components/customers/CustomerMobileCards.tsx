"use client";

import { Avatar } from "@/components/ui/Avatar";
import { Card, CardContent } from "@/components/ui/Card";
import { CustomerActionsMenu } from "@/components/customers/CustomerActionsMenu";
import {
  CustomerPlanBadge,
  CustomerStatusBadge,
} from "@/components/customers/CustomerBadges";
import { formatCurrency } from "@/utils/formatCurrency";
import { formatDate } from "@/utils/formatDate";
import type { ICustomer } from "@/types/customer";

interface ICustomerMobileCardsProps {
  customers: ICustomer[];
  onViewDetails: (customer: ICustomer) => void;
}

export function CustomerMobileCards({
  customers,
  onViewDetails,
}: ICustomerMobileCardsProps) {
  return (
    <div className="space-y-3 md:hidden">
      {customers.map((customer) => (
        <Card key={customer.id}>
          <CardContent className="p-4">
            <div className="flex items-start justify-between gap-3">
              <div className="flex min-w-0 items-center gap-3">
                <Avatar
                  name={customer.fullName}
                  src={customer.avatar || undefined}
                  size="md"
                />
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-foreground">
                    {customer.fullName}
                  </p>
                  <p className="truncate text-caption text-muted-foreground">
                    {customer.company}
                  </p>
                </div>
              </div>
              <CustomerActionsMenu
                customer={customer}
                onViewDetails={onViewDetails}
              />
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 text-caption">
              <div>
                <p className="text-muted-foreground">Plan</p>
                <div className="mt-1">
                  <CustomerPlanBadge plan={customer.plan} />
                </div>
              </div>
              <div>
                <p className="text-muted-foreground">Status</p>
                <div className="mt-1">
                  <CustomerStatusBadge status={customer.status} />
                </div>
              </div>
              <div>
                <p className="text-muted-foreground">MRR</p>
                <p className="mt-1 font-medium text-foreground">
                  {formatCurrency(customer.monthlyRevenue)}
                </p>
              </div>
              <div>
                <p className="text-muted-foreground">Joined</p>
                <p className="mt-1 font-medium text-foreground">
                  {formatDate(customer.joinedAt)}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
