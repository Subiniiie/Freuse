import React from 'react';
import { View } from 'react-native';
import LoginBtn from '../../atoms/Auth/LoginBtn';
import SignUpBtn from '../../atoms/Auth/SignUpBtn';

export default function AuthBtns() {
  return (
    <View>
      <LoginBtn />
      <SignUpBtn />
    </View>
  )
}
