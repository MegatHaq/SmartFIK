import { MainBoxContent } from "./components/mainboxcontent";
import { PersonIcon } from "@radix-ui/react-icons";
import { DollarSign, Group, Pencil } from "lucide-react";
import { pieData, tableItems } from "../components/table/mockData";

export default async function Admin() {
  const icons = [PersonIcon, Pencil, Group, DollarSign];

  const tableHeaders = ["Invoice", "Status", "Method", "Amount"];

  return (
    <>
      <MainBoxContent
        title={"Dashboard"}
        position={"Admin"}
        name={"John Doe"}
        data={pieData}
        icons={icons}
        tableHeaders={tableHeaders}
        tableItems={tableItems}
      />
    </>
  );
}
