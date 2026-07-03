"use client";

import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ChartTooltip } from "@/components/charts/ChartTooltip";
import type { IRevenueExpensePoint } from "@/types/analytics";

interface IRevenueVsExpensesChartProps {
  data: IRevenueExpensePoint[];
}

export function RevenueVsExpensesChart({ data }: IRevenueVsExpensesChartProps) {
  return (
    <div className="h-[280px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={data} margin={{ left: 0, right: 8 }}>
          <CartesianGrid stroke="var(--border)" strokeDasharray="4 4" vertical={false} />
          <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: "var(--muted-foreground)", fontSize: 12 }} />
          <YAxis axisLine={false} tickLine={false} tick={{ fill: "var(--muted-foreground)", fontSize: 12 }} tickFormatter={(value: number) => `$${value / 1000}k`} />
          <Tooltip content={<ChartTooltip valueLabel="Amount" valueType="currency" />} />
          <Bar dataKey="revenue" fill="var(--brand-500)" radius={[6, 6, 0, 0]} />
          <Bar dataKey="expenses" fill="var(--neutral-300)" radius={[6, 6, 0, 0]} />
          <Line type="monotone" dataKey="profit" stroke="var(--success)" strokeWidth={2} dot={false} />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
