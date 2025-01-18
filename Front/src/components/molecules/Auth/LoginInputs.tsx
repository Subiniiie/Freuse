import React from 'react'
import { View } from 'react-native'
import IdInput from '../../atoms/Auth/Login/IdInput'
import PasswordInput from '../../atoms/Auth/Login/PasswordInput'

export default function LoginInputs() {
  return (
    <View>
        <IdInput />
        <PasswordInput />
    </View>
  )
}
