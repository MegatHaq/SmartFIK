import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { CardDetails } from "./carddetails";
import { PersonIcon } from "@radix-ui/react-icons";
import { DollarSign, Group, Pencil } from "lucide-react";

export function MainBoxContent({ title, position, name }) {
  const data = [
    { background: "black", data: "425", title: "Number of students" },
    { background: "black", data: "245", title: "Number of employee" },
    { background: "black", data: "508", title: "Number of tutors" },
    { background: "black", data: "232,468", title: "Total revenue" },
  ];

  const icons = [PersonIcon, Pencil, Group, DollarSign];

  return (
    <div className="flex flex-col w-full h-screen">
      <div className="flex flex-col-2 w-full px-4 py-4 mt-0 justify-between">
        <h1 className="text-2xl font-bold">{title}</h1>
        <div className="flex gap-3">
          <Avatar className="w-12 h-12">
            <AvatarImage src="https://github.com/shadcn.png" />
          </Avatar>
          <div className="">
            <div className="text-1xl">{name}</div>
            <div className="text-sm text-gray-500">{position}</div>
          </div>
        </div>
      </div>
      <div className="px-4 w-full flex justify-around mt-4">
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
    </div>
  );
}
