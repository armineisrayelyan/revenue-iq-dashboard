import type { Metadata } from "next";
import { FeaturePage } from "@/components/dashboard/FeaturePage";

export const metadata: Metadata = {
  title: "Customers",
};

export default function CustomersPage() {
  return (
    <FeaturePage
      title="Customers"
      description="Manage and analyze your customer base."
      emptyTitle="No customer data yet"
      emptyDescription="Customer profiles, segments, and lifecycle data will appear here."
    />
  );
}
