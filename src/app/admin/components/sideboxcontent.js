import { Button } from "@/components/ui/button";
import {
  Book,
  Calendar,
  CalendarCheck,
  CreditCard,
  GraduationCap,
} from "lucide-react";

const icons = [Calendar, Book, CalendarCheck, CreditCard];

export const SideBoxContent = ({ items }) => {
  return (
    <div className="flex flex-col items-center px-4 py-4 bg-gray-900 h-screen text-yellow-50">
      <div className="mb-4 text-2xl flex flex-row gap-2 h-1/6">
        <GraduationCap className="w-8 h-8" />
        <h1>SmartFIK</h1>
      </div>
      <div className="flex flex-col items-start">
        {items.map((item, icon) => {
          const Icon = icons[icon];
          return (
            <Button variant="ghost">
              <Icon className="w-8 h-8" />
              {item}
            </Button>
          );
        })}
      </div>
    </div>
  );
};
