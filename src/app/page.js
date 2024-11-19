import Login from "./components/login";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Register from "./components/register";
import { MainBoxContent } from "./admin/components/mainboxcontent";
import { PersonIcon } from "@radix-ui/react-icons";
import { DollarSign, Group, Pencil } from "lucide-react";
import { pieData, tableItems } from "./components/table/mockData";
import { Overview } from "./admin/components/overview";
import { SideBoxContent } from "./admin/components/sideboxcontent";

export default async function Page() {
  const icons = [PersonIcon, Pencil, Group, DollarSign];

  const tableHeaders = ["Invoice", "Status", "Method", "Amount"];

  const options = ["Presence", "Communication", "Event", "Payment"];

  return (
    <div className="overflow-hidden">
      <Overview
        sideBoxChildren={<SideBoxContent items={options} />}
        mainBoxChildren={
          <MainBoxContent
            title={"Dashboard"}
            position={"Admin"}
            name={"John Doe"}
            data={pieData}
            icons={icons}
            tableHeaders={tableHeaders}
            tableItems={tableItems}
          />
        }
      />
    </div>
  );
  // return (
  //   <div className="flex flex-col w-full h-screen justify-center items-center bg-gray-100">
  //     <main className="flex flex-row justify-center items-center">
  //       <Tabs defaultValue="login" className="w-[400px]">
  //         <TabsList className="grid w-full grid-cols-2">
  //           <TabsTrigger value="login" className="hover:bg-gray-200">
  //             Login
  //           </TabsTrigger>
  //           <TabsTrigger value="register" className="hover:bg-gray-200">
  //             Register
  //           </TabsTrigger>
  //         </TabsList>
  //         <TabsContent value="login">
  //           <Login />
  //         </TabsContent>
  //         <TabsContent value="register">
  //           <Register />
  //         </TabsContent>
  //       </Tabs>
  //     </main>
  //   </div>
  // );
}

// This is the login/register
