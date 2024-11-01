import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { CardDetails } from "./carddetails";
import { PersonIcon } from "@radix-ui/react-icons";
import { DollarSign, Group, Pencil } from "lucide-react";
import { Details } from "./details";

export function MainBoxContent({ title, position, name }) {
  const data = [
    { background: "bg-gray-900", data: "425", title: "Number of students" },
    { background: "bg-gray-900", data: "245", title: "Number of employee" },
    { background: "bg-gray-900", data: "508", title: "Number of tutors" },
    { background: "bg-gray-900", data: "232,468", title: "Total revenue" },
  ];

  const icons = [PersonIcon, Pencil, Group, DollarSign];

  const tableHeaders = ["Invoice", "Status", "Method", "Amount"];

  const tableItems = [
    { invoice: "INV001", status: "Paid", method: "Credit Card", amount: 250 },
    { invoice: "INV002", status: "Paid", method: "PayPal", amount: 150 },
    {
      invoice: "INV003",
      status: "Pending",
      method: "Bank Transfer",
      amount: 450,
    },
    { invoice: "INV004", status: "Unpaid", method: "PayPal", amount: 225 },
    { invoice: "INV005", status: "Paid", method: "Credit Card", amount: 175 },
    { invoice: "INV006", status: "Paid", method: "Bank Transfer", amount: 110 },
    {
      invoice: "INV007",
      status: "Pending",
      method: "Bank Transfer",
      amount: 900,
    },
    {
      invoice: "INV008",
      status: "Pending",
      method: "Bank Transfer",
      amount: 120,
    },
    // {
    //   invoice: "INV009",
    //   status: "Paid",
    //   method: "Credit Card",
    //   amount: 240,
    // },
    // {
    //   invoice: "INV010",
    //   status: "Unpaid",
    //   method: "Bank Transfer",
    //   amount: 330,
    // },

    //TBA paginations
  ];

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
      <div className="px-4 w-full grid grid-cols-4 gap-4 mt-4">
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
    </div>
  );
}
