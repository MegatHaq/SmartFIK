"use client";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { charBartConfig, chartDataBar } from "../table/mockData";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

export default function () {
  return (
    <ChartContainer config={charBartConfig} className="w-full">
      <BarChart accessibilityLayer data={chartDataBar}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey={"month"}
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="students" fill="var(--color-student)" radius={4} />
        <Bar dataKey="tutors" fill="var(--color-tutor)" radius={4} />
      </BarChart>
    </ChartContainer>
  );
}
