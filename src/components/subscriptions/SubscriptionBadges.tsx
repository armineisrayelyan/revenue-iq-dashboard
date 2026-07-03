import { Badge } from "@/components/ui/Badge";
import { ESubscriptionPlan, ESubscriptionStatus } from "@/types/subscription";

interface ISubscriptionStatusBadgeProps {
  status: ESubscriptionStatus;
}

interface ISubscriptionPlanBadgeProps {
  plan: ESubscriptionPlan;
}

function getStatusVariant(status: ESubscriptionStatus) {
  switch (status) {
    case ESubscriptionStatus.ACTIVE:
      return "success";
    case ESubscriptionStatus.TRIAL:
      return "info";
    case ESubscriptionStatus.PAST_DUE:
      return "warning";
    case ESubscriptionStatus.CANCELLED:
      return "error";
    default:
      return "default";
  }
}

function getPlanVariant(plan: ESubscriptionPlan) {
  switch (plan) {
    case ESubscriptionPlan.ENTERPRISE:
      return "primary";
    case ESubscriptionPlan.PRO:
      return "info";
    case ESubscriptionPlan.STARTER:
      return "outline";
    default:
      return "default";
  }
}

export function SubscriptionStatusBadge({
  status,
}: ISubscriptionStatusBadgeProps) {
  return <Badge variant={getStatusVariant(status)}>{status}</Badge>;
}

export function SubscriptionPlanBadge({ plan }: ISubscriptionPlanBadgeProps) {
  return <Badge variant={getPlanVariant(plan)}>{plan}</Badge>;
}
