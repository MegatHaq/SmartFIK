import { Avatar, AvatarImage } from "@/components/ui/avatar";

export function MainBoxContent({ title, position, name }) {
  return (
    <div className="flex flex-col-1 w-full h-screen">
      <div className="flex flex-col-2 w-full px-4 py-4 mt-0 justify-between">
        <h1 className="text-2xl font-bold">{title}</h1>
        <div className="flex gap-3">
          <Avatar className="w-12 h-12">
            <AvatarImage src="https://github.com/shadcn.png" />
          </Avatar>
          <div className="">
            <div className="text-1xl">{name}</div>
            <div className="text-sm text-gray-500">{position}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
