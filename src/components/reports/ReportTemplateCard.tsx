import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { ReportIcon } from "@/components/reports/ReportIcon";
import { formatDate } from "@/utils/formatDate";
import type { IReportTemplate } from "@/types/report";

interface IReportTemplateCardProps {
  template: IReportTemplate;
}

export function ReportTemplateCard({ template }: IReportTemplateCardProps) {
  return (
    <Card className="transition-shadow hover:shadow-md">
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <div className="rounded-xl bg-primary/10 p-2.5 text-primary">
            <ReportIcon icon={template.icon} className="h-5 w-5" />
          </div>
          <Button size="sm" variant="outline">
            Generate
          </Button>
        </div>
        <CardTitle>{template.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{template.description}</p>
        <p className="mt-4 text-caption text-muted-foreground">
          Last generated {formatDate(template.lastGeneratedAt)}
        </p>
      </CardContent>
    </Card>
  );
}
