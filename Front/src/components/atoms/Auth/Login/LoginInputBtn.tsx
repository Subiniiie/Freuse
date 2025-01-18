import React from 'react'
import { Button } from '@rneui/themed'

type LoginInputBtnProps = {
  submitLoginForm: () => void;
}

export default function LoginInputBtn({ submitLoginForm }: LoginInputBtnProps) {
  return (
    <Button 
        title={'로그인'}
        containerStyle={{
            width: 200,
            marginHorizontal: 50,
            marginVertical: 10,
        }}
        onPress={submitLoginForm}
    />
  )
}
