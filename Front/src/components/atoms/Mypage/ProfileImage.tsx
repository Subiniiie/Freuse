import React from 'react'
import { Avatar } from '@rneui/themed'

export default function ProfileImage() {
  return (
    <Avatar 
        size={48}
        rounded
        source={require("../../../public/images/Mypage/profile.jpg")}
    />
  )
}
