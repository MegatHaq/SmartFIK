import Login from "./components/login";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Register from "./components/register";

export default async function Page() {
  return (
    <div className="flex flex-col w-full h-screen justify-center items-center bg-gray-100">
      <main className="flex flex-row justify-center items-center">
        <Tabs defaultValue="login" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login" className="hover:bg-gray-200">
              Login
            </TabsTrigger>
            <TabsTrigger value="register" className="hover:bg-gray-200">
              Register
            </TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <Login />
          </TabsContent>
          <TabsContent value="register">
            <Register />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}

// This is the login/register
