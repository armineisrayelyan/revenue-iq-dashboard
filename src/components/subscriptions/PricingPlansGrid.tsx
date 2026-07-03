import { PricingPlanCard } from "@/components/subscriptions/PricingPlanCard";
import type { IPricingPlan } from "@/types/subscription";

interface IPricingPlansGridProps {
  plans: IPricingPlan[];
}

export function PricingPlansGrid({ plans }: IPricingPlansGridProps) {
  return (
    <section className="grid gap-4 lg:grid-cols-3">
      {plans.map((plan) => (
        <PricingPlanCard key={plan.id} plan={plan} />
      ))}
    </section>
  );
}
