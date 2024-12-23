import React from 'react'
import { View } from 'react-native'
import IdInput from '../../atoms/Auth/IdInput'
import PasswordInput from '../../atoms/Auth/PasswordInput'

export default function LoginInputs() {
  return (
    <View>
        <IdInput />
        <PasswordInput />
    </View>
  )
}
