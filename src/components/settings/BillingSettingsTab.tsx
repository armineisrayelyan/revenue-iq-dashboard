import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { formatDate } from "@/utils/formatDate";
import type { IBillingSettings } from "@/types/settings";

interface IBillingSettingsTabProps {
  billing: IBillingSettings;
}

function BillingRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-border py-4">
      <span className="text-sm text-muted-foreground">{label}</span>
      <span className="text-right text-sm font-medium text-foreground">
        {value}
      </span>
    </div>
  );
}

export function BillingSettingsTab({ billing }: IBillingSettingsTabProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Billing</CardTitle>
        <p className="text-caption text-muted-foreground">
          Review your current plan, billing cycle, and payment method.
        </p>
      </CardHeader>
      <CardContent>
        <BillingRow
          label="Current Plan"
          value={<Badge variant="primary">{billing.currentPlan}</Badge>}
        />
        <BillingRow label="Billing Cycle" value={billing.billingCycle} />
        <BillingRow
          label="Next Invoice Date"
          value={formatDate(billing.nextInvoiceDate)}
        />
        <BillingRow label="Payment Method" value={billing.paymentMethod} />
        <div className="mt-6">
          <Button>Upgrade Plan</Button>
        </div>
      </CardContent>
    </Card>
  );
}
