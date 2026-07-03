import { AlertTriangle, CheckCircle2, Info } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { cn } from "@/lib/cn";
import type { IBusinessInsight, TInsightTone } from "@/types/analytics";

interface IInsightsPanelProps {
  insights: IBusinessInsight[];
}

const toneStyles: Record<TInsightTone, string> = {
  positive: "bg-success-muted text-success-muted-foreground",
  neutral: "bg-info-muted text-info-muted-foreground",
  warning: "bg-warning-muted text-warning-muted-foreground",
};

function InsightIcon({ tone }: { tone: TInsightTone }) {
  if (tone === "positive") {
    return <CheckCircle2 className="h-4 w-4" aria-hidden="true" />;
  }

  if (tone === "warning") {
    return <AlertTriangle className="h-4 w-4" aria-hidden="true" />;
  }

  return <Info className="h-4 w-4" aria-hidden="true" />;
}

export function InsightsPanel({ insights }: IInsightsPanelProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>AI Insights</CardTitle>
        <p className="text-caption text-muted-foreground">
          Signal-rich highlights from revenue and customer trends.
        </p>
      </CardHeader>
      <CardContent className="space-y-3">
        {insights.map((insight) => (
          <div
            key={insight.id}
            className="rounded-xl border border-border p-4"
          >
            <div className="flex items-start gap-3">
              <span className={cn("rounded-lg p-2", toneStyles[insight.tone])}>
                <InsightIcon tone={insight.tone} />
              </span>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <p className="text-sm font-medium text-foreground">
                    {insight.title}
                  </p>
                  <Badge variant={insight.tone === "warning" ? "warning" : "outline"}>
                    {insight.tone}
                  </Badge>
                </div>
                <p className="mt-1 text-caption text-muted-foreground">
                  {insight.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
