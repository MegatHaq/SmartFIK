import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PersonIcon } from "@radix-ui/react-icons";

export function CardDetails({ background, data, title }) {
  return (
    <Card className={`w-1/5 h-3/4 text-white bg-${background}`}>
      <CardContent className="flex gap-4 items-center">
        <PersonIcon className="w-6 h-6" />
        <div className="border-l px-3 my-2">
          <p>{title}</p>
          <p className="text-center text-sm text-gray-600">{data}</p>
        </div>
      </CardContent>
    </Card>
  );
}
