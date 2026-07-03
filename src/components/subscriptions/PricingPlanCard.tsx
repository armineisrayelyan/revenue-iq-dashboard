import { Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { formatCurrency } from "@/utils/formatCurrency";
import type { IPricingPlan } from "@/types/subscription";

interface IPricingPlanCardProps {
  plan: IPricingPlan;
}

export function PricingPlanCard({ plan }: IPricingPlanCardProps) {
  return (
    <Card className="transition-shadow hover:shadow-md">
      <CardHeader>
        <CardTitle>{plan.name}</CardTitle>
        <p className="text-3xl font-semibold tracking-tight text-foreground">
          {formatCurrency(plan.monthlyPrice)}
          <span className="text-sm font-normal text-muted-foreground">/mo</span>
        </p>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-sm">
              <Check className="h-4 w-4 text-success" aria-hidden="true" />
              {feature}
            </li>
          ))}
        </ul>
        <div className="mt-5 grid grid-cols-2 gap-3 rounded-lg bg-muted p-3">
          <div>
            <p className="text-caption text-muted-foreground">Subscribers</p>
            <p className="font-medium text-foreground">
              {plan.activeSubscribers}
            </p>
          </div>
          <div>
            <p className="text-caption text-muted-foreground">Revenue</p>
            <p className="font-medium text-foreground">
              {formatCurrency(plan.revenueContribution)}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
