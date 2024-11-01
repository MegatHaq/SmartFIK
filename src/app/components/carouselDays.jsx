"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { DateCards } from "./CalendarCard";

const testing = [1, 2, 3, 4, 5, 6, 7, 8];

export function CarouselDays() {
  return (
    <Carousel>
      <CarouselContent>
        {testing.map((date) => (
          <CarouselItem className="flex justify-center basis-1/3">
            <DateCards date={date} month="October" />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
