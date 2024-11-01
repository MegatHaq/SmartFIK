import { Separator } from "@/components/ui/separator";
import { Profile } from "../components/profile";

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default async function Page() {
  const d = new Date();
  let date = d.getDate();
  let month = d.getMonth();

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <div className="text-black grid grid-cols-4 w-screen h-[90%]">
      <section className="ml-12 col-span-3">
        <h1 className=" text-3xl">Welcome back, Fauzan!</h1>
        <h2 className="mt-4 text-gray-600">
          {date} {months[month]} {d.getFullYear()}
          <Separator className="mt-2" />
        </h2>
      </section>
      <Profile />
    </div>
  );
}
