import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { months } from "../student/page";

export function Calendar() {
  const d = new Date();

  return (
    <Carousel>
      <CarouselContent>
        {months.map((month) => (
          <CarouselItem className="flex justify-center">
            {month} {d.getFullYear()}
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
