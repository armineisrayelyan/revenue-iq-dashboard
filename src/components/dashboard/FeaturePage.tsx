import { EmptyState, PageHeader } from "@/components/ui";

interface IFeaturePageProps {
  title: string;
  description: string;
  emptyTitle: string;
  emptyDescription: string;
}

export function FeaturePage({
  title,
  description,
  emptyTitle,
  emptyDescription,
}: IFeaturePageProps) {
  return (
    <div>
      <PageHeader title={title} description={description} />
      <EmptyState title={emptyTitle} description={emptyDescription} />
    </div>
  );
}
