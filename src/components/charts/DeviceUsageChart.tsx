"use client";

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { ChartTooltip } from "@/components/charts/ChartTooltip";
import type { IDeviceUsagePoint } from "@/types/analytics";

interface IDeviceUsageChartProps {
  data: IDeviceUsagePoint[];
}

const DEVICE_COLORS: Record<IDeviceUsagePoint["device"], string> = {
  Desktop: "var(--brand-700)",
  Mobile: "var(--brand-500)",
  Tablet: "var(--brand-300)",
};

export function DeviceUsageChart({ data }: IDeviceUsageChartProps) {
  return (
    <div className="h-[280px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="device"
            outerRadius={94}
            paddingAngle={3}
          >
            {data.map((entry) => (
              <Cell key={entry.device} fill={DEVICE_COLORS[entry.device]} />
            ))}
          </Pie>
          <Tooltip content={<ChartTooltip valueLabel="Usage" valueType="percent" />} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
