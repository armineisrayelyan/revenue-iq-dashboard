export enum EPaymentStatus {
  PAID = "paid",
  PENDING = "pending",
  FAILED = "failed",
  REFUNDED = "refunded",
}

export interface IPayment {
  id: string;
  customerId: string;
  customerName: string;
  customerEmail: string;
  plan: "Starter" | "Pro" | "Enterprise";
  amount: number;
  currency: "USD";
  status: EPaymentStatus;
  paymentMethod: string;
  paidAt: string;
}
