"use client";

import { useMemo } from "react";
import {
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { ChartTooltip } from "@/components/charts/ChartTooltip";
import type { IRevenueByPlan } from "@/types/dashboard";

interface IRevenueByPlanChartProps {
  data: IRevenueByPlan[];
}

const PLAN_COLORS: Record<IRevenueByPlan["plan"], string> = {
  Starter: "var(--brand-300)",
  Pro: "var(--brand-500)",
  Enterprise: "var(--brand-700)",
};

const PLAN_DOT_CLASSES: Record<IRevenueByPlan["plan"], string> = {
  Starter: "bg-[var(--brand-300)]",
  Pro: "bg-[var(--brand-500)]",
  Enterprise: "bg-[var(--brand-700)]",
};

export function RevenueByPlanChart({ data }: IRevenueByPlanChartProps) {
  const totalRevenue = useMemo(
    () => data.reduce((total, item) => total + item.revenue, 0),
    [data],
  );

  return (
    <div className="grid gap-4 sm:grid-cols-[1fr_160px] sm:items-center">
      <div className="h-[240px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="revenue"
              nameKey="plan"
              innerRadius={68}
              outerRadius={96}
              paddingAngle={3}
            >
              {data.map((entry) => (
                <Cell key={entry.plan} fill={PLAN_COLORS[entry.plan]} />
              ))}
            </Pie>
            <Tooltip
              content={
                <ChartTooltip valueLabel="Plan revenue" valueType="currency" />
              }
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="space-y-3">
        {data.map((item) => (
          <div key={item.plan} className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span
                className={`h-2.5 w-2.5 rounded-full ${PLAN_DOT_CLASSES[item.plan]}`}
              />
              <span className="text-sm text-foreground">{item.plan}</span>
            </div>
            <span className="text-sm font-medium text-foreground">
              {Math.round((item.revenue / totalRevenue) * 100)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
