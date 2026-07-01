export enum ECustomerStatus {
  ACTIVE = "active",
  INACTIVE = "inactive",
  CHURNED = "churned",
}

export interface ICustomer {
  id: string;
  name: string;
  email: string;
  company: string;
  status: ECustomerStatus;
  mrr: number;
  joinedAt: string;
}
