import type { Metadata } from "next";
import { FeaturePage } from "@/components/dashboard/FeaturePage";

export const metadata: Metadata = {
  title: "Subscriptions",
};

export default function SubscriptionsPage() {
  return (
    <FeaturePage
      title="Subscriptions"
      description="Track active subscriptions, plans, and billing cycles."
      emptyTitle="No subscriptions to display"
      emptyDescription="Subscription management and billing details will be available here."
    />
  );
}
