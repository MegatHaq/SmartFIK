import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export function DateCards({ date, month }) {
  console.log(date);
  return (
    <Card className="">
      <CardHeader>
        <CardTitle className="flex justify-center text-2xl">{date}</CardTitle>
      </CardHeader>
      <CardFooter>{month}</CardFooter>
    </Card>
  );
}
