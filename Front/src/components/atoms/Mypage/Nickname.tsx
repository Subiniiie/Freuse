import React, { useEffect} from 'react'
import { Text } from '@rneui/themed'
import useUserStore from '../../../store/Auth/UserStore'

export default function Nickname() {
  const { username } = useUserStore();

  useEffect(() => {
  }, [username])

  return (
    <Text>{username}</Text>
  )
}
