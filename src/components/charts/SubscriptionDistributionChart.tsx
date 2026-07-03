"use client";

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { ChartTooltip } from "@/components/charts/ChartTooltip";
import type { ISubscriptionDistributionPoint } from "@/types/analytics";

interface ISubscriptionDistributionChartProps {
  data: ISubscriptionDistributionPoint[];
}

const PLAN_COLORS: Record<ISubscriptionDistributionPoint["plan"], string> = {
  Starter: "var(--brand-300)",
  Pro: "var(--brand-500)",
  Enterprise: "var(--brand-700)",
};

export function SubscriptionDistributionChart({
  data,
}: ISubscriptionDistributionChartProps) {
  return (
    <div className="h-[280px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="plan"
            innerRadius={68}
            outerRadius={96}
            paddingAngle={3}
          >
            {data.map((entry) => (
              <Cell key={entry.plan} fill={PLAN_COLORS[entry.plan]} />
            ))}
          </Pie>
          <Tooltip content={<ChartTooltip valueLabel="Share" valueType="percent" />} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
