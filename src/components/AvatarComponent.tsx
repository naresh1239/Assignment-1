import React from 'react'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

type Props = {
  username: string
}

const AvatarComponent = ({ username }: Props) => {
  const avatarUrl = `https://avatars.dicebear.com/v2/avataaars/${username}.svg`

  return (
    <Avatar>
      <AvatarImage src={avatarUrl} alt={username} />
      <AvatarFallback>
        {username
          .split(" ")
          .map((word) => word[0])
          .join("")
          .toUpperCase()
          .slice(0, 2)}
      </AvatarFallback>
    </Avatar>
  )
}

export default AvatarComponent
