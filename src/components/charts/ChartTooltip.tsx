import { formatCurrency } from "@/utils/formatCurrency";

interface IChartTooltipPayload {
  name?: string;
  value?: number;
}

interface IChartTooltipProps {
  active?: boolean;
  label?: string;
  payload?: IChartTooltipPayload[];
  valueLabel?: string;
  valueType?: "currency" | "number";
}

function formatValue(value: number, valueType: "currency" | "number"): string {
  return valueType === "currency"
    ? formatCurrency(value)
    : value.toLocaleString();
}

export function ChartTooltip({
  active,
  label,
  payload,
  valueLabel,
  valueType = "number",
}: IChartTooltipProps) {
  const item = payload?.[0];

  if (!active || !item || typeof item.value !== "number") {
    return null;
  }

  return (
    <div className="rounded-lg border border-border bg-popover px-3 py-2 shadow-md">
      {label ? <p className="text-caption text-muted-foreground">{label}</p> : null}
      <p className="text-sm font-medium text-popover-foreground">
        {formatValue(item.value, valueType)}
      </p>
      <p className="text-caption text-muted-foreground">
        {valueLabel ?? item.name}
      </p>
    </div>
  );
}
