import React from 'react'
import { Input } from '@rneui/themed'

export default function PasswordInput() {
  return (
    <Input 
        placeholder='비밀번호'
        secureTextEntry={true}
    />
  )
}
