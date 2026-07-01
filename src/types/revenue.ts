export interface IRevenueMetric {
  id: string;
  label: string;
  value: number;
  change: number;
  changeType: "increase" | "decrease" | "neutral";
}

export interface IRevenueDataPoint {
  month: string;
  revenue: number;
  mrr: number;
  arr: number;
}
