import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export async function Upcoming() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Classes</CardTitle>
      </CardHeader>
      <CardContent className="flex ">
        <p>8:00</p>
        <p>Chemistry class</p>
      </CardContent>
    </Card>
  );
}
