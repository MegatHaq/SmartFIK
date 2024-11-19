"use client";

import { DataTable } from "@/app/components/table/dataTable";
import { Component } from "./chart";
import { columns } from "@/app/components/table/adminColumns";
import { chartData, chartConfig } from "@/app/components/table/mockData";
import { Label } from "@/components/ui/label";

export function Details({ tableItems }) {
  return (
    <div className="flex gap-4">
      <div className="w-3/6 h-[400px]">
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
      <div className="flex flex-col w-full rounded-md shadow-md h-[380px]">
        <div className="w-full h-[320px] overflow-auto">
          <DataTable columns={columns} data={tableItems} />
        </div>
        <div className="w-full flex justify-center my-auto text-sm text-gray-600">
          <Label>A list of your recent invoices.</Label>
        </div>
      </div>
    </div>
  );
}
