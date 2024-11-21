import BarChart from "@/app/components/barchart/bars";
import { CardDetails } from "./carddetails";
import { Details } from "./details";
import User from "./user";
import { charBartConfig, chartDataBar } from "@/app/components/table/mockData";
import { Label } from "@/components/ui/label";
import { Code2Icon } from "lucide-react";

export function MainBoxContent({
  title,
  position,
  name,
  data,
  icons,
  tableHeaders,
  tableItems,
}) {
  return (
    <div className="flex flex-col w-full overflow-auto h-screen">
      <div className="flex flex-col-2 w-full px-4 py-4 mt-0 justify-between">
        <h1 className="text-2xl font-bold">{title}</h1>
        <User position={position} name={name} />
      </div>
      <div className="md:px-4 w-full place-content-center grid md:grid-cols-4 md:gap-4 md:mt-4">
        {data.map((data, key) => {
          const Icon = icons[key];
          return (
            <CardDetails
              Icon={Icon}
              background={data.background}
              data={data.data}
              title={data.title}
            />
          );
        })}
      </div>
      <div className="w-full px-4 mt-2">
        <Details tableHeaders={tableHeaders} tableItems={tableItems} />
      </div>
      <div className="w-full mb-4 flex">
        <div className="md:w-1/2 w-full rounded-md border shadow-md mx-4">
          <div className="my-2 text-gray-500">
            <Label className="mx-4 text-1xl">Monthly Attendance</Label>
          </div>
          <BarChart data={chartDataBar} config={charBartConfig} />
        </div>
        <div className="w-1/2 rounded-md border shadow-md mx-4 md:flex flex-col justify-center items-center hidden">
          <Code2Icon className="text-gray-300 w-[250px] h-[250px] border rounded-full p-8 bg-gray-400" />
          <Label className="text-2xl mt-8 text-gray-500">Coming Soon!</Label>
        </div>
      </div>
    </div>
  );
}
