import React, { useEffect } from 'react'
import { Avatar } from '@rneui/themed'
import useUserStore from '../../../store/Auth/UserStore'

export default function ProfileImage() {
  const { profileUrl } = useUserStore();

  useEffect(() => {
  }, [profileUrl]);

  return (
    <Avatar 
        size={48}
        rounded
        source={{ uri : profileUrl }}
    />
  )
}
