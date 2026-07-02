import { Badge } from "@/components/ui/Badge";
import { ECustomerPlan, ECustomerStatus } from "@/types/customer";

interface ICustomerStatusBadgeProps {
  status: ECustomerStatus;
}

interface ICustomerPlanBadgeProps {
  plan: ECustomerPlan;
}

function getStatusVariant(status: ECustomerStatus) {
  switch (status) {
    case ECustomerStatus.ACTIVE:
      return "success";
    case ECustomerStatus.TRIAL:
      return "info";
    case ECustomerStatus.CANCELLED:
      return "error";
    default:
      return "default";
  }
}

function getPlanVariant(plan: ECustomerPlan) {
  switch (plan) {
    case ECustomerPlan.ENTERPRISE:
      return "primary";
    case ECustomerPlan.PRO:
      return "info";
    case ECustomerPlan.STARTER:
      return "outline";
    default:
      return "default";
  }
}

export function CustomerStatusBadge({ status }: ICustomerStatusBadgeProps) {
  return <Badge variant={getStatusVariant(status)}>{status}</Badge>;
}

export function CustomerPlanBadge({ plan }: ICustomerPlanBadgeProps) {
  return <Badge variant={getPlanVariant(plan)}>{plan}</Badge>;
}
