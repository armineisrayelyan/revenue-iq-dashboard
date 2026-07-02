import { RECENT_PAYMENTS } from "@/mock/payments";
import type { IPayment } from "@/types/payment";

export function getRecentPayments(): IPayment[] {
  return RECENT_PAYMENTS;
}

export function getPaymentsByCustomerId(customerId: string): IPayment[] {
  return RECENT_PAYMENTS.filter((payment) => payment.customerId === customerId);
}
