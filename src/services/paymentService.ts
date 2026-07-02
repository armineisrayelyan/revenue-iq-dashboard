import { RECENT_PAYMENTS } from "@/mock/payments";
import type { IPayment } from "@/types/payment";

export function getRecentPayments(): IPayment[] {
  return RECENT_PAYMENTS;
}
