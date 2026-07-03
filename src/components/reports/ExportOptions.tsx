import { FileSpreadsheet, FileText, TableProperties } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { cn } from "@/lib/cn";
import { EExportFormat } from "@/types/report";

interface IExportOptionsProps {
  activeFormat: EExportFormat | null;
  progress: number;
  onExport: (format: EExportFormat) => void;
}

const PROGRESS_WIDTHS: Record<number, string> = {
  0: "w-0",
  10: "w-1/12",
  25: "w-1/4",
  35: "w-1/3",
  50: "w-1/2",
  60: "w-7/12",
  75: "w-3/4",
  85: "w-10/12",
  100: "w-full",
};

const EXPORT_OPTIONS = [
  { format: EExportFormat.CSV, label: "CSV", icon: TableProperties },
  { format: EExportFormat.PDF, label: "PDF", icon: FileText },
  { format: EExportFormat.EXCEL, label: "Excel", icon: FileSpreadsheet },
];

export function ExportOptions({
  activeFormat,
  progress,
  onExport,
}: IExportOptionsProps) {
  const widthClass = PROGRESS_WIDTHS[progress] ?? "w-full";

  return (
    <Card>
      <CardHeader>
        <CardTitle>Export Options</CardTitle>
        <p className="text-caption text-muted-foreground">
          Export generated reports in common business formats.
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-2 sm:grid-cols-3">
          {EXPORT_OPTIONS.map(({ format, label, icon: Icon }) => (
            <Button
              key={format}
              variant={activeFormat === format ? "primary" : "outline"}
              onClick={() => onExport(format)}
            >
              <Icon className="h-4 w-4" aria-hidden="true" />
              {label}
            </Button>
          ))}
        </div>

        {activeFormat ? (
          <div>
            <div className="mb-2 flex items-center justify-between text-caption">
              <span className="text-muted-foreground">
                Exporting {activeFormat}
              </span>
              <span className="font-medium text-foreground">{progress}%</span>
            </div>
            <div className="h-2 rounded-full bg-muted">
              <div className={cn("h-2 rounded-full bg-primary", widthClass)} />
            </div>
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}
