import type { Metadata } from "next";
import { FeaturePage } from "@/components/dashboard/FeaturePage";

export const metadata: Metadata = {
  title: "Reports",
};

export default function ReportsPage() {
  return (
    <FeaturePage
      title="Reports"
      description="Generate and export revenue and customer reports."
      emptyTitle="Reports not yet available"
      emptyDescription="Custom report builder and scheduled exports will be added here."
    />
  );
}
