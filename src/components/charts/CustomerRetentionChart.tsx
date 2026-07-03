"use client";

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ChartTooltip } from "@/components/charts/ChartTooltip";
import type { IRetentionPoint } from "@/types/analytics";

interface ICustomerRetentionChartProps {
  data: IRetentionPoint[];
}

export function CustomerRetentionChart({ data }: ICustomerRetentionChartProps) {
  return (
    <div className="h-[280px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ left: 0, right: 8 }}>
          <CartesianGrid stroke="var(--border)" strokeDasharray="4 4" vertical={false} />
          <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: "var(--muted-foreground)", fontSize: 12 }} />
          <YAxis axisLine={false} tickLine={false} tick={{ fill: "var(--muted-foreground)", fontSize: 12 }} tickFormatter={(value: number) => `${value}%`} />
          <Tooltip content={<ChartTooltip valueLabel="Retention" valueType="percent" />} />
          <Line type="monotone" dataKey="retention" stroke="var(--primary)" strokeWidth={2} dot={false} activeDot={{ r: 5, fill: "var(--primary)" }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
