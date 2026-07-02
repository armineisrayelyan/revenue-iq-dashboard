"use client";

import { useMemo } from "react";
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
import type { ICustomerGrowthPoint } from "@/types/dashboard";

interface ICustomerGrowthChartProps {
  data: ICustomerGrowthPoint[];
}

export function CustomerGrowthChart({ data }: ICustomerGrowthChartProps) {
  const chartData = useMemo(
    () =>
      data.map((point) => ({
        ...point,
        label: `${point.customers.toLocaleString()} customers`,
      })),
    [data],
  );

  return (
    <div className="h-[280px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData} margin={{ left: 0, right: 8 }}>
          <CartesianGrid
            stroke="var(--border)"
            strokeDasharray="4 4"
            vertical={false}
          />
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "var(--muted-foreground)", fontSize: 12 }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "var(--muted-foreground)", fontSize: 12 }}
          />
          <Tooltip content={<ChartTooltip valueLabel="Customers" />} />
          <Line
            type="monotone"
            dataKey="customers"
            stroke="var(--primary)"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 5, fill: "var(--primary)" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
