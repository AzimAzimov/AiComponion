'use client'
import React, { FC } from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { useUser } from "@clerk/nextjs";

interface UserAvatarProps {
  src?: string;
}
const UserAvatar: FC<UserAvatarProps> = ({ src }) => {
  const { user } = useUser()

  return (
    <Avatar className="h-12 w-12">
      <AvatarImage src={user?.imageUrl} />
    </Avatar>
  );
};
export default UserAvatar;
