import { userAvatar } from "@/types";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function UserAvatar({imgSrc="https://github.com/shadcn.png"}:userAvatar) {
  return (
    <Avatar className="mx-auto">
      <AvatarImage   src={imgSrc} />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
