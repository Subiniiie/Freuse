import React from 'react';
import { View } from 'react-native';
import LoginBtn from '../../atoms/Auth/Main/LoginBtn';
import SignUpBtn from '../../atoms/Auth/Main/SignUpBtn';

export default function AuthBtns() {
  return (
    <View>
      <LoginBtn />
      <SignUpBtn />
    </View>
  )
}
