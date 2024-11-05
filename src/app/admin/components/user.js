import { Avatar, AvatarImage } from "@/components/ui/avatar";

export default function User({ name, position }) {
  return (
    <div className="flex gap-3">
      <Avatar className="w-12 h-12">
        <AvatarImage src="https://github.com/shadcn.png" />
      </Avatar>
      <div className="">
        <div className="text-1xl">{name}</div>
        <div className="text-sm text-gray-500">{position}</div>
      </div>
    </div>
  );
}
