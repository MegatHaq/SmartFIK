import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Pencil1Icon } from "@radix-ui/react-icons";
import { Calendar } from "./carousel";
import { CarouselDays } from "./carouselDays";
import { Upcoming } from "./upcoming";

export async function Profile() {
  return (
    <div>
      <section>
        <div className="grid grid-cols-2">
          <h1>My Profile</h1>
          <h1 className="flex gap-2 justify-end mr-4">
            <Pencil1Icon className="mt-1" />
            Edit
          </h1>
        </div>
      </section>
      <figure className="">
        <AspectRatio ratio={16 / 9}></AspectRatio>
        <figcaption className="flex justify-center">Muhd Fauzan</figcaption>
        <p className="flex justify-center text-[12px] text-gray-400">@Fauzan</p>
      </figure>
      <div className="w-2/3 mx-auto mt-4">
        <Calendar />
      </div>
      <div className="mx-auto mt-4">
        <CarouselDays />
      </div>
      <div className="mt-2 mx-2">
        <Upcoming />
      </div>
    </div>
  );
}
