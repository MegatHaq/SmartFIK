import { Component } from "./chart";
import { Tables } from "./table";

export function Details({ tableHeaders, tableItems }) {
  const chartData = [
    { student: "malays", students: 275, fill: "var(--color-malays)" },
    { student: "chinese", students: 200, fill: "var(--color-chinese)" },
    { student: "indians", students: 287, fill: "var(--color-indians)" },
    { student: "ibans", students: 173, fill: "var(--color-ibans)" },
    { student: "others", students: 190, fill: "var(--color-others)" },
  ];

  const chartConfig = {
    students: {
      label: "Students",
    },
    malays: {
      label: "Malays",
      color: "hsl(var(--chart-1))",
    },
    chinese: {
      label: "Chinese",
      color: "hsl(var(--chart-2))",
    },
    indians: {
      label: "Indians",
      color: "hsl(var(--chart-3))",
    },
    ibans: {
      label: "Ibans",
      color: "hsl(var(--chart-4))",
    },
    others: {
      label: "Others",
      color: "hsl(var(--chart-5))",
    },
  };

  return (
    <div className="flex gap-4">
      <div className="w-3/6">
        <Component
          chartData={chartData}
          chartConfig={chartConfig}
          chartTitle={"New Students"}
          chartDescription={"January - June 2024"}
          chartCaption1={"Trending up by 5.2% this month"}
          chartCaption2={"Showing total students for the last 6 months"}
          dataKey={"students"}
          nameKey={"students"}
        />
      </div>
      <div className="w-full rounded-md shadow-md">
        <Tables tableHeaders={tableHeaders} tableItems={tableItems} />
      </div>
    </div>
  );
}
