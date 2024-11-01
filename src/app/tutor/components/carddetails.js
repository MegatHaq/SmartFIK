import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function CardDetails({ Icon, background, data, title }) {
  return (
    <Card className={`text-white ${background} my-auto h-5/6`}>
      <CardContent className="flex gap-4 items-center">
        <Icon className="w-6 h-6" />
        <div className="border-l px-3 mt-2">
          <p>{title}</p>
          <p className="text-2xl text-white">{data}</p>
        </div>
      </CardContent>
    </Card>
  );
}
