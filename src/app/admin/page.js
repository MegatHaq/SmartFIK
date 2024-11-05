import { MainBoxContent } from "./components/mainboxcontent";
import { PersonIcon } from "@radix-ui/react-icons";
import { DollarSign, Group, Pencil } from "lucide-react";

export default async function Admin() {
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
    <>
      <MainBoxContent
        title={"Dashboard"}
        position={"Admin"}
        name={"John Doe"}
        data={data}
        icons={icons}
        tableHeaders={tableHeaders}
        tableItems={tableItems}
      />
    </>
  );
}
