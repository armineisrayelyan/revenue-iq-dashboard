import { ReportTemplateCard } from "@/components/reports/ReportTemplateCard";
import type { IReportTemplate } from "@/types/report";

interface IReportTemplatesGridProps {
  templates: IReportTemplate[];
}

export function ReportTemplatesGrid({ templates }: IReportTemplatesGridProps) {
  return (
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
      {templates.map((template) => (
        <ReportTemplateCard key={template.id} template={template} />
      ))}
    </section>
  );
}
