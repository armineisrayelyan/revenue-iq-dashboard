import type { Metadata } from "next";
import { FeaturePage } from "@/components/dashboard/FeaturePage";

export const metadata: Metadata = {
  title: "Revenue",
};

export default function RevenuePage() {
  return (
    <FeaturePage
      title="Revenue"
      description="Monitor MRR, ARR, and revenue trends over time."
      emptyTitle="Revenue analytics coming soon"
      emptyDescription="Revenue charts and financial breakdowns will be rendered here."
    />
  );
}
