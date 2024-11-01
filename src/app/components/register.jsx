import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FormItem } from "@/components/ui/form";

export default function Register() {
  return (
    <form>
      <Card>
        <CardHeader>
          <CardTitle>Register</CardTitle>
          <CardDescription>Fill in the details to register.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1">
            <Label htmlFor="username">Username</Label>
            <Input id="username" defaultValue="@username" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="username">Full Name</Label>
            <Input id="fullname" defaultValue="@fullname" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="password">Password</Label>
            <Input id="password" defaultValue="@password" type="password" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="password">Confirm Password</Label>
            <Input id="password" defaultValue="@password" type="password" />
          </div>
          <FormItem className="space-y-3">
            <Label>What are you...</Label>
            <RadioGroup className="flex gap-4">
              <div className="flex items-center space-x-2 space-y-0">
                <RadioGroupItem value="tutor" id="tutor" />
                <Label htmlFor="tutor">Tutor</Label>
              </div>
              <div className="flex items-center space-x-2 space-y-0">
                <RadioGroupItem value="student" id="student" />
                <Label htmlFor="student">Student</Label>
              </div>
            </RadioGroup>
          </FormItem>
        </CardContent>
        <CardFooter>
          <Button type="submit">Submit</Button>
        </CardFooter>
      </Card>
    </form>
  );
}
