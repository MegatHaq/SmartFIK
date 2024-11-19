"use client";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

export default function ({ data, config }) {
  return (
    <ChartContainer config={config} className="w-full">
      <BarChart accessibilityLayer data={data}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey={"month"} tickLine={false} axisLine={false} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="students" fill="var(--color-student)" radius={4} />
        <Bar dataKey="tutors" fill="var(--color-tutor)" radius={4} />
      </BarChart>
    </ChartContainer>
  );
}
