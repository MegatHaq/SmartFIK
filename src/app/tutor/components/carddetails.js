import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PersonIcon } from "@radix-ui/react-icons";

export function CardDetails({ Icon, background, data, title }) {
  return (
    <Card className={` text-white bg-${background} my-auto`}>
      <CardContent className="flex gap-4 items-center">
        <Icon className="w-6 h-6" />
        <div className="border-l px-3 mt-2">
          <p>{title}</p>
          <p className="text-center text-sm text-gray-300">{data}</p>
        </div>
      </CardContent>
    </Card>
  );
}
