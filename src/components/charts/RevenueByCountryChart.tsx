"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ChartTooltip } from "@/components/charts/ChartTooltip";
import type { ICountryRevenuePoint } from "@/types/analytics";

interface IRevenueByCountryChartProps {
  data: ICountryRevenuePoint[];
}

export function RevenueByCountryChart({ data }: IRevenueByCountryChartProps) {
  return (
    <div className="h-[280px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          layout="vertical"
          margin={{ left: 8, right: 16 }}
        >
          <CartesianGrid stroke="var(--border)" strokeDasharray="4 4" horizontal={false} />
          <XAxis type="number" axisLine={false} tickLine={false} tick={{ fill: "var(--muted-foreground)", fontSize: 12 }} tickFormatter={(value: number) => `$${value / 1000}k`} />
          <YAxis dataKey="country" type="category" width={96} axisLine={false} tickLine={false} tick={{ fill: "var(--muted-foreground)", fontSize: 12 }} />
          <Tooltip content={<ChartTooltip valueLabel="Revenue" valueType="currency" />} />
          <Bar dataKey="revenue" fill="var(--primary)" radius={[0, 6, 6, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
