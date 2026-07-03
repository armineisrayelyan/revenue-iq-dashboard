"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ChartTooltip } from "@/components/charts/ChartTooltip";
import type { IRevenueTrendPoint } from "@/types/analytics";

interface IAnalyticsRevenueTrendChartProps {
  data: IRevenueTrendPoint[];
}

export function AnalyticsRevenueTrendChart({
  data,
}: IAnalyticsRevenueTrendChartProps) {
  return (
    <div className="h-[280px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ left: 0, right: 8 }}>
          <defs>
            <linearGradient id="analyticsRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.25} />
              <stop offset="95%" stopColor="var(--primary)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="var(--border)" strokeDasharray="4 4" vertical={false} />
          <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: "var(--muted-foreground)", fontSize: 12 }} />
          <YAxis axisLine={false} tickLine={false} tick={{ fill: "var(--muted-foreground)", fontSize: 12 }} tickFormatter={(value: number) => `$${value / 1000}k`} />
          <Tooltip content={<ChartTooltip valueLabel="Revenue" valueType="currency" />} />
          <Area type="monotone" dataKey="revenue" stroke="var(--primary)" strokeWidth={2} fill="url(#analyticsRevenue)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
