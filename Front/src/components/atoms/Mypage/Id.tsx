import React, { useEffect } from 'react'
import { Text } from '@rneui/themed'
import useUserStore from '../../../store/Auth/UserStore'

export default function Id() {
  const { email } = useUserStore();

  useEffect(() => {
  }, [email])

  return (
    <Text>{email}</Text>
  )
}